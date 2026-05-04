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

  useEffect(() => {
    setCoverLetter('');
    setResume(null);
    setCaptchaToken(null);
    setStatus('idle');
    setErrorMsg('');
    recaptchaRef.current?.reset();
  }, [job?.title]);

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

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        style={{
          backgroundColor: '#111827',
          border: '1px solid #1DBCD640',
          boxShadow: '0 0 40px #1DBCD615',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#5CB85C20' }}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#5CB85C" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold text-white mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Application Sent!
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              We&apos;ve received your application for{' '}
              <span style={{ color: '#1DBCD6' }}>{job.title}</span>. We&apos;ll be in touch soon.
            </p>
            <button onClick={onClose} className="btn-primary px-8 py-2.5 rounded-xl text-sm">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Header */}
            <div className="mb-6 pr-6">
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ color: '#1DBCD6' }}
              >
                Applying for a Position
              </p>
              <h2
                className="text-xl font-bold text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {job.title}
              </h2>
            </div>

            {/* Cover Letter */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Cover Letter <span style={{ color: '#1DBCD6' }}>*</span>
              </label>
              <textarea
                rows={5}
                required
                placeholder="Tell us why you're a great fit for this role..."
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border text-white placeholder-gray-600 outline-none focus:border-[#1DBCD650] transition-colors resize-none"
                style={{ backgroundColor: '#0A0F1C', borderColor: '#1F2937', color: '#F9FAFB' }}
              />
            </div>

            {/* Resume Upload */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Resume{' '}
                <span className="text-gray-500 font-normal">(PDF, DOC, DOCX — max 5MB)</span>
              </label>
              <label
                className="flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-colors hover:border-[#1DBCD650]"
                style={{ backgroundColor: '#0A0F1C', borderColor: '#1F2937' }}
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  style={{ color: '#1DBCD6' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                  />
                </svg>
                <span className="text-sm truncate" style={{ color: resume ? '#F9FAFB' : '#6B7280' }}>
                  {resume ? resume.name : 'Click to upload your resume…'}
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="sr-only"
                />
              </label>
            </div>

            {/* reCAPTCHA */}
            <div className="mb-5">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(token) => setCaptchaToken(token)}
                onExpired={() => setCaptchaToken(null)}
                theme="dark"
              />
            </div>

            {/* Error */}
            {errorMsg && (
              <p className="text-sm mb-4" style={{ color: '#F87171' }}>
                {errorMsg}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full py-3 rounded-xl text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending…' : 'Submit Application'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
