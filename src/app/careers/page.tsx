import type { Metadata } from 'next';
import CareersJobListings from '@/components/careers/CareersJobListings';

export const metadata: Metadata = {
  title: 'Careers | iGreen',
  description: "Join the iGreen team — we're hiring engineers, designers, and consultants passionate about IoT and digital transformation.",
};

const perks = [
  { title: 'Flexible Work', desc: 'Hybrid and remote options across most roles.' },
  { title: 'Learning Budget', desc: 'Annual learning and certification allowance.' },
  { title: 'Cutting-Edge Projects', desc: 'Work on real IoT and enterprise transformation initiatives.' },
  { title: 'Growth Path', desc: 'Clear career progression with mentorship from senior engineers.' },
];

export default function CareersPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>
      {/* Header */}
      <section className="py-24 text-center" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#5CB85C' }}>
            Join Our Team
          </p>
          <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Build the Future With Us
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We&apos;re a team of 25 passionate engineers, designers, and consultants building IoT
            solutions and digital experiences that matter. If you love hard problems and great
            collaboration, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((p, i) => (
              <div
                key={p.title}
                className="rounded-xl p-6 border"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
              >
                <div
                  className="w-8 h-1 rounded mb-4"
                  style={{ backgroundColor: i % 2 === 0 ? '#1DBCD6' : '#5CB85C' }}
                />
                <h3 className="font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive job listings + modal (client component) */}
      <CareersJobListings />
    </div>
  );
}
