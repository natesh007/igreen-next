import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy | iGreen' };

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>
      <section className="py-20" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Privacy Policy</h1>
          <p className="mt-3 text-gray-400">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-400 leading-relaxed">
            iGreen is committed to protecting your personal data. This policy explains how we collect,
            use, and safeguard information when you visit our website or use our services.
          </p>
          <p className="text-gray-400 leading-relaxed mt-6">
            Full privacy policy details will be updated here. For data-related requests, contact us at{' '}
            <a href="mailto:contact@igreensystems.com" style={{ color: '#1DBCD6' }}>contact@igreensystems.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
