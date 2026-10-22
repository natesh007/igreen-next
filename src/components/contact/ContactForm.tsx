'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      setErrorMsg('Please complete the captcha.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, captchaToken }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setStatus('idle');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('idle');
    }
    recaptchaRef.current?.reset();
    setCaptchaToken(null);
  };

  if (!SITE_KEY) {
    return (
      <div className="v-form">
        <h2 className="v-disp" style={{ fontSize: '1.4rem' }}>
          Email us your requirements
        </h2>
        <p>
          The contact form is temporarily unavailable. Please write to{' '}
          <a href="mailto:contact@igreensystems.com" style={{ textDecoration: 'underline', fontWeight: 800 }}>
            contact@igreensystems.com
          </a>{' '}
          and we will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="v-form" onSubmit={handleSubmit} onFocus={() => setShowCaptcha(true)} aria-label="Contact form">
      <div className="row2">
        <label>
          Full name *
          <input type="text" required autoComplete="name" placeholder="John Smith" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email address *
          <input type="email" required autoComplete="email" placeholder="john@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>

      <label>
        Subject
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select a topic...</option>
          <option>IoT Solutions</option>
          <option>Digital Transformation</option>
          <option>Web / Mobile Development</option>
          <option>Cloud Solutions</option>
          <option>General Inquiry</option>
        </select>
      </label>

      <label>
        Message *
        <textarea required rows={6} placeholder="Tell us about your project, goals, and timeline..." value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>

      {showCaptcha && (
        <ReCAPTCHA ref={recaptchaRef} sitekey={SITE_KEY} onChange={(token) => setCaptchaToken(token)} onExpired={() => setCaptchaToken(null)} />
      )}

      {errorMsg && (
        <p className="err" role="alert">
          {errorMsg}
        </p>
      )}

      {status === 'success' && (
        <p className="ok" role="status">
          Message sent! We&apos;ll get back to you within 1 business day.
        </p>
      )}

      <button type="submit" disabled={status === 'loading'} className="v-btn dk">
        {status === 'loading' ? 'Sending…' : 'Send message →'}
      </button>
    </form>
  );
}
