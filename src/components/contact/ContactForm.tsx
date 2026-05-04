'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
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
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name <span style={{ color: '#1DBCD6' }}>*</span>
          </label>
          <input
            type="text"
            required
            placeholder="John Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border text-white placeholder-gray-600 outline-none focus:border-[#1DBCD650] transition-colors"
            style={{ backgroundColor: '#111827', borderColor: '#1F2937', color: '#F9FAFB' }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address <span style={{ color: '#1DBCD6' }}>*</span>
          </label>
          <input
            type="email"
            required
            placeholder="john@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border text-white placeholder-gray-600 outline-none focus:border-[#1DBCD650] transition-colors"
            style={{ backgroundColor: '#111827', borderColor: '#1F2937', color: '#F9FAFB' }}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border outline-none transition-colors"
          style={{ backgroundColor: '#111827', borderColor: '#1F2937', color: '#F9FAFB' }}
        >
          <option value="">Select a topic...</option>
          <option>IoT Solutions</option>
          <option>Digital Transformation</option>
          <option>Web / Mobile Development</option>
          <option>Cloud Solutions</option>
          <option>General Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Message <span style={{ color: '#1DBCD6' }}>*</span>
        </label>
        <textarea
          required
          rows={6}
          placeholder="Tell us about your project, goals, and timeline..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border text-white placeholder-gray-600 outline-none focus:border-[#1DBCD650] transition-colors resize-none"
          style={{ backgroundColor: '#111827', borderColor: '#1F2937', color: '#F9FAFB' }}
        />
      </div>

      {/* reCAPTCHA */}
      <div>
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
        <p className="text-sm" style={{ color: '#F87171' }}>
          {errorMsg}
        </p>
      )}

      {/* Success */}
      {status === 'success' && (
        <p className="text-sm font-medium" style={{ color: '#5CB85C' }}>
          Message sent! We&apos;ll get back to you within 1 business day.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full sm:w-auto px-10 py-3.5 rounded-xl text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
