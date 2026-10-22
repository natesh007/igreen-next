'use client';

import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

/**
 * Short project enquiry: name, company, business email, requirements. Posts to /api/contact.
 * reCAPTCHA is only loaded once the visitor starts typing (keeps the homepage light on phones),
 * and a missing site key degrades to an email link instead of crashing the page.
 */
export default function EnquiryForm() {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const captcha = useRef<ReCAPTCHA>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) {
      setError('Please tick “I’m not a robot”.');
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          company: data.get('company'),
          email: data.get('email'),
          subject: 'Project enquiry',
          message: data.get('message'),
          captchaToken: token,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setError(json.error || 'Something went wrong. Please try again.');
        setStatus('idle');
      }
    } catch {
      setError('Network error. Please try again.');
      setStatus('idle');
    }
    captcha.current?.reset();
    setToken(null);
  };

  if (!SITE_KEY) {
    return (
      <div className="v-form">
        <h3 className="v-disp" style={{ fontSize: '1.4rem' }}>
          Email us your requirements
        </h3>
        <p>
          The enquiry form is temporarily unavailable. Please write to{' '}
          <a href="mailto:contact@igreensystems.com" style={{ textDecoration: 'underline', fontWeight: 800 }}>
            contact@igreensystems.com
          </a>{' '}
          and we will reply within one business day.
        </p>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="v-form" role="status">
        <h3 className="v-disp" style={{ fontSize: '1.6rem' }}>
          Thank you — we have your enquiry.
        </h3>
        <p className="ok">Our engineers will reply within 1 business day.</p>
      </div>
    );
  }

  return (
    <form className="v-form" onSubmit={submit} onFocus={() => setShowCaptcha(true)} aria-label="Project enquiry">
      <div className="row2">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Company
          <input name="company" type="text" autoComplete="organization" required />
        </label>
      </div>
      <label>
        Business email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Project requirements
        <textarea name="message" required placeholder="What do you want to monitor, build or improve?" />
      </label>
      {showCaptcha && (
        <ReCAPTCHA ref={captcha} sitekey={SITE_KEY} onChange={(t) => setToken(t)} onExpired={() => setToken(null)} />
      )}
      {error && (
        <p className="err" role="alert">
          {error}
        </p>
      )}
      <button className="v-btn dk" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send enquiry →'}
      </button>
    </form>
  );
}
