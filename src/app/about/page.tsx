import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | iGreen',
  description: 'Learn about iGreen — our story, mission, and the team behind our IoT and digital transformation solutions.',
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

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>
      {/* Hero */}
      <section className="py-24 text-center" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#1DBCD6' }}>
            About iGreen
          </p>
          <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            12 Years of Building <span style={{ color: '#5CB85C' }}>What's Next</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            We started as a software development studio and evolved into a full-spectrum IoT and
            digital transformation partner. Today, iGreen helps businesses harness connected
            technology to compete in a rapidly changing world.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
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
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '12+', label: 'Years' },
                { value: '25', label: 'Team' },
                { value: '232+', label: 'Clients' },
                { value: '521+', label: 'Projects' },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-8 text-center border"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <p
                    className="text-4xl font-bold"
                    style={{ fontFamily: 'Poppins, sans-serif', color: i % 2 === 0 ? '#1DBCD6' : '#5CB85C' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#5CB85C' }}>
              What We Stand For
            </p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-8 border"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
              >
                <div className="w-3 h-3 rounded-full mb-4" style={{ backgroundColor: v.color }} />
                <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {v.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#1DBCD6' }}>
              The People
            </p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              25 Experts, One Vision
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Our team spans IoT engineering, software development, UX design, and digital strategy.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-8 text-center border"
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Want to work with us?
          </h2>
          <p className="text-gray-400 mb-8">We&apos;re always open to new projects and partnerships.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #1DBCD6, #5CB85C)' }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
