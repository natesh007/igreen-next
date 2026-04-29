import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms of Service | iGreen' };

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>
      <section className="py-20" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Terms of Service</h1>
          <p className="mt-3 text-gray-400">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-invert">
          <p className="text-gray-400 leading-relaxed">
            By accessing or using iGreen&apos;s services, you agree to be bound by these Terms of Service.
            Please read them carefully before using our services.
          </p>
          <p className="text-gray-400 leading-relaxed mt-6">
            Full terms and conditions will be updated here. For questions, contact us at{' '}
            <a href="mailto:contact@igreensystems.com" style={{ color: '#1DBCD6' }}>contact@igreensystems.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
