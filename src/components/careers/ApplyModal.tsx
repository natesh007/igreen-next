'use client';

import { useRef, useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface Job {
  title: string;
}

interface ApplyModalProps {
  job: Job | null;
  onClose: () => void;
}

export default function ApplyModal({ job, onClose }: ApplyModalProps) {
  const [coverLetter, setCoverLetter] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!job) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('Resume must be under 5MB.');
      e.target.value = '';
      return;
    }
    setErrorMsg('');
    setResume(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!coverLetter.trim()) {
      setErrorMsg('Please write a cover letter.');
      return;
    }
    if (!captchaToken) {
      setErrorMsg('Please complete the captcha.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const formData = new FormData();
    formData.append('jobTitle', job.title);
    formData.append('coverLetter', coverLetter);
    formData.append('captchaToken', captchaToken);
    if (resume) formData.append('resume', resume);

    try {
      const res = await fetch('/api/apply', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('idle');
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('idle');
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    }
  };

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <div
      ref={overlayRef}
      className="v-modal"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="box v-brut" role="dialog" aria-modal="true" aria-labelledby="apply-h">
        <button type="button" onClick={onClose} className="x" aria-label="Close">
          ×
        </button>

        {status === 'success' ? (
          <div className="done" role="status">
            <h3 className="v-disp" id="apply-h">
              Application sent!
            </h3>
            <p>
              We&apos;ve received your application for <strong>{job.title}</strong>. We&apos;ll be in touch soon.
            </p>
            <button type="button" onClick={onClose} className="v-btn">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <span className="v-chip" style={{ background: 'var(--v-sky)' }}>
              Applying for a position
            </span>
            <h2 className="v-disp" id="apply-h">
              {job.title}
            </h2>

            <label className="fld" htmlFor="apply-cover">
              Cover letter <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="apply-cover"
              rows={5}
              required
              placeholder="Tell us why you're a great fit for this role..."
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            />

            <label className="fld" htmlFor="apply-resume">
              Resume <small>(PDF, DOC, DOCX — max 5MB)</small>
            </label>
            <label className="file" htmlFor="apply-resume">
              <span>{resume ? resume.name : 'Click to upload your resume…'}</span>
              <input id="apply-resume" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="sr-only" />
            </label>

            <div className="captcha">
              {siteKey ? (
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={siteKey}
                  onChange={(token) => setCaptchaToken(token)}
                  onExpired={() => setCaptchaToken(null)}
                />
              ) : (
                <p className="v-note">
                  The application form is temporarily unavailable. Please email your resume to{' '}
                  <a href="mailto:hr@igreensystems.com">hr@igreensystems.com</a>.
                </p>
              )}
            </div>

            {errorMsg && (
              <p className="err" role="alert">
                {errorMsg}
              </p>
            )}

            <button type="submit" disabled={status === 'loading' || !siteKey} className="v-btn" style={{ width: '100%' }}>
              {status === 'loading' ? 'Sending…' : 'Submit application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
