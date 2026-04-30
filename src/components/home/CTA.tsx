import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

export default function CTA() {
  return (
    <section className="py-24" style={{ backgroundColor: '#060A12' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div
            className="rounded-3xl p-14 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0d2a33 0%, #0a1f0a 100%)' }}
          >
            {/* Gradient border */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #1DBCD6, #5CB85C)',
                padding: '1px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            {/* Radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #1DBCD610 0%, transparent 70%)',
              }}
            />

            <p className="text-sm font-semibold uppercase tracking-wider mb-4 relative" style={{ color: '#1DBCD6' }}>
              Ready to Transform?
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Your next project{' '}
              <span style={{ color: '#5CB85C' }}>belongs on this page.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto relative">
              If you need an IoT platform, web application, mobile app, or cloud solution that
              actually ships — let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              <Link href="/contact" className="btn-primary px-8 py-3.5 rounded-xl text-base">
                Start a Conversation
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3.5 rounded-xl text-base font-semibold border transition-all hover:bg-white/5 hover:border-white/20"
                style={{ borderColor: '#374151', color: '#D1D5DB' }}
              >
                View Our Work
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
