import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about iGreen Systems — 12+ years building IoT and digital transformation solutions across Hyderabad, Kakinada, and Andhra Pradesh.',
};

const values = [
  {
    title: 'Innovation First',
    desc: 'We stay at the frontier of IoT, edge computing, and digital transformation so our clients always get battle-tested, future-ready solutions.',
    color: '#1DBCD6',
  },
  {
    title: 'Client Partnership',
    desc: 'We embed with your team, align with your goals, and deliver as stakeholders — not vendors.',
    color: '#5CB85C',
  },
  {
    title: 'Quality by Design',
    desc: 'Security, scalability, and reliability are built in from day one, not bolted on at the end.',
    color: '#1DBCD6',
  },
  {
    title: 'Transparent Delivery',
    desc: 'Bi-weekly demos, clear milestones, and honest reporting — no surprises.',
    color: '#5CB85C',
  },
];

const team = [
  { name: 'Leadership Team', role: 'Strategy & Vision', initials: 'LT' },
  { name: 'IoT Engineers', role: 'Connected Systems', initials: 'IE' },
  { name: 'Software Team', role: 'Web & Mobile', initials: 'ST' },
  { name: 'Consultants', role: 'Digital Strategy', initials: 'DC' },
];

const stats = [
  { value: '12+', label: 'Years', color: '#1DBCD6' },
  { value: '25', label: 'Team', color: '#5CB85C' },
  { value: '232+', label: 'Clients', color: '#1DBCD6' },
  { value: '521+', label: 'Projects', color: '#5CB85C' },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>
      {/* Hero */}
      <section
        className="py-28 text-center relative overflow-hidden"
        style={{ backgroundColor: '#060A12' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, #1DBCD610 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#1DBCD6' }}>
              About iGreen
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              12 Years of Building{' '}
              <span style={{ color: '#5CB85C' }}>What&apos;s Next</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We started as a software development studio and evolved into a full-spectrum IoT and
              digital transformation partner. Today, iGreen helps businesses across Hyderabad,
              Kakinada, and Andhra Pradesh harness connected technology to compete in a rapidly
              changing world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#1DBCD6' }}>
                Our Mission
              </p>
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Connecting the Physical and Digital World
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                The world is becoming smarter — factories, cities, supply chains, and devices are
                generating more data than ever before. Our mission is to help organizations capture,
                understand, and act on that data to unlock real business value.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We combine deep IoT expertise with strong software engineering to deliver solutions
                that are not just technically excellent but commercially meaningful.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.08 + i * 0.07}>
                  <div
                    className="rounded-2xl p-8 text-center border transition-all duration-300 hover:border-[#1DBCD630]"
                    style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                  >
                    <p className="text-4xl font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: s.color }}>
                      {s.value}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-24 relative"
        style={{
          background: 'linear-gradient(180deg, #060A12 0%, #0A0F1C 50%, #060A12 100%)',
        }}
      >
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #1DBCD625, transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#5CB85C' }}>
              What We Stand For
            </p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Values
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-8 border h-full transition-all duration-300 hover:border-[#1DBCD630] hover:shadow-[0_0_24px_#1DBCD608]"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: v.color }} />
                    <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${v.color}40, transparent)` }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {v.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#1DBCD6' }}>
              The People
            </p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              25 Experts, One Vision
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Our team spans IoT engineering, software development, UX design, and digital strategy.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-8 text-center border transition-all duration-300 hover:border-[#1DBCD630] hover:shadow-[0_0_20px_#1DBCD610]"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                    style={{ background: 'linear-gradient(135deg, #1DBCD6, #5CB85C)', color: '#fff' }}
                  >
                    {t.initials}
                  </div>
                  <p className="font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>{t.name}</p>
                  <p className="text-sm text-gray-400 mt-1">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center relative" style={{ backgroundColor: '#060A12' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 50%, #5CB85C08 0%, transparent 70%)' }}
        />
        <div className="max-w-xl mx-auto px-4 relative">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Want to work with us?
            </h2>
            <p className="text-gray-400 mb-8">We&apos;re always open to new projects and partnerships.</p>
            <Link href="/contact" className="btn-primary inline-block px-8 py-3.5 rounded-xl text-base">
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
