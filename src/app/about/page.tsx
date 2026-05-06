import type { Metadata } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'iGreen Systems — Engineering intelligent IoT systems since 2008. Smart building automation, asset lifecycle management, connected field operations, and predictive maintenance across India and the Americas.',
};

const stats = [
  { value: '18+', label: 'Years Experience', color: '#1DBCD6' },
  { value: '25', label: 'Team Members', color: '#5CB85C' },
  { value: '232+', label: 'Clients', color: '#1DBCD6' },
  { value: '521+', label: 'Projects Delivered', color: '#5CB85C' },
];

const pillars = [
  {
    title: 'Smart Building Automation',
    desc: 'Enable real-time monitoring and control of infrastructure systems.',
    color: '#1DBCD6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="9" width="18" height="12" rx="1" />
        <path d="M3 9l9-6 9 6" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    title: 'Asset Lifecycle Management',
    desc: 'Track, manage, and extend the life of critical operational assets.',
    color: '#5CB85C',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 11-6.219-8.56" />
        <path d="M21 3v4h-4" />
      </svg>
    ),
  },
  {
    title: 'Connected Field Operations',
    desc: 'Digitize service workflows and improve execution efficiency on-site.',
    color: '#1DBCD6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49M19.07 4.93a10 10 0 010 14.14M4.93 19.07a10 10 0 010-14.14" />
      </svg>
    ),
  },
  {
    title: 'System Integrations',
    desc: 'Seamlessly connect IoT devices, sensors, and enterprise platforms.',
    color: '#5CB85C',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: 'Predictive Maintenance',
    desc: 'Move from reactive fixes to data-driven, proactive maintenance cycles.',
    color: '#1DBCD6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const approachSteps = [
  { num: '01', name: 'Discover', desc: 'Understand business challenges and operational gaps' },
  { num: '02', name: 'Design', desc: 'Architect scalable, future-ready solutions' },
  { num: '03', name: 'Build', desc: 'Develop using agile and iterative methodologies' },
  { num: '04', name: 'Deploy', desc: 'Pilot, test, and scale to production environments' },
  { num: '05', name: 'Optimize', desc: 'Continuously monitor, improve, and evolve systems' },
];

const impactItems = [
  {
    label: 'Reduce energy and operational costs',
    desc: 'Intelligent monitoring and automation cut utility spend and manual overhead.',
  },
  {
    label: 'Improve productivity and efficiency',
    desc: 'Connected workflows eliminate delays and keep operations running at pace.',
  },
  {
    label: 'Increase asset lifespan',
    desc: 'Proactive maintenance and lifecycle tracking protect capital investments.',
  },
  {
    label: 'Enable real-time monitoring and automation',
    desc: 'Live dashboards and automated alerts deliver complete operational visibility.',
  },
  {
    label: 'Minimize manual intervention and risks',
    desc: 'Smart systems reduce human error and surface issues before they escalate.',
  },
];

const goalBullets = [
  'Gain complete visibility into their operations',
  'Automate decision-making processes',
  'Improve sustainability and efficiency',
  'Operate with clarity, control, and confidence',
];

const differentiators = [
  {
    title: 'End-to-End Capability',
    desc: 'From hardware integration and IoT sensor networks to software platforms and cloud dashboards — we handle the full stack.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="4" rx="1" />
        <rect x="2" y="10" width="20" height="4" rx="1" />
        <rect x="2" y="17" width="20" height="4" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Real-World Deployment Experience',
    desc: 'Proven solutions deployed across smart buildings, cold storage, fire safety, hospitality, and visa processing.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
  {
    title: 'Scalable Architecture',
    desc: 'Systems built to start small and scale to enterprise — designed for growth from day one.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: 'Integration-First Approach',
    desc: 'We design systems to work alongside your existing infrastructure, not replace it.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Outcome-Driven Execution',
    desc: 'We measure success by operational impact — not lines of code or feature count.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>

      {/* §1 — Hero */}
      <section className="py-28 text-center relative overflow-hidden" style={{ backgroundColor: '#060A12' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #1DBCD612 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-semibold mb-8"
              style={{ borderColor: '#1DBCD630', backgroundColor: '#1DBCD610', color: '#1DBCD6' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#1DBCD6' }} />
              Intelligent Systems Since 2008
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Engineering Intelligent Systems{' '}
              <span style={{ color: '#1DBCD6', whiteSpace: 'nowrap' }}>for a Connected World</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
              We design and deliver IoT-driven solutions that connect infrastructure, assets, and operations —
              enabling real-time visibility, automation, and smarter decision-making.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <Link href="/contact" className="btn-primary inline-block px-8 py-3.5 rounded-xl text-base">
              Discuss Your Requirement
            </Link>
          </Reveal>
        </div>
      </section>

      {/* §2 — Who We Are */}
      <section className="py-24" style={{ backgroundColor: '#0A0F1C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#1DBCD6' }}>
                Who We Are
              </p>
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                From Software to Intelligent Infrastructure
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Founded in 2008, iGreen Systems &amp; Technologies began as a software engineering company
                focused on solving business problems through technology.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                As we worked closely with organisations, we recognised a larger challenge — many critical
                operations still depended on disconnected systems, manual processes, and limited visibility.
                This led to our evolution.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Today, we specialise in building intelligent, connected systems that bring together sensors,
                software, and real-time data to transform how physical infrastructure is monitored, managed,
                and optimised.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.08 + i * 0.07}>
                  <div
                    className="rounded-2xl p-8 text-center border transition-all duration-300 hover:border-[#1DBCD630] hover:shadow-[0_0_24px_#1DBCD610]"
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

      {/* §3 — What We Do */}
      <section className="py-24 relative" style={{ backgroundColor: '#060A12' }}>
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #5CB85C25, transparent)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#5CB85C' }}>
              What We Do
            </p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Turning Operations into Intelligent Systems
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className={i === 4 ? 'lg:col-start-2 xl:col-start-auto' : ''}
              >
                <div
                  className="rounded-2xl p-7 border h-full flex flex-col transition-all duration-300 hover:border-[#1DBCD630] hover:shadow-[0_0_24px_#1DBCD610]"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                    style={{ backgroundColor: `${p.color}18`, color: p.color }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-4 h-0.5 rounded-full" style={{ backgroundColor: `${p.color}40` }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* §4 — Founder Story */}
      <section className="py-24" style={{ backgroundColor: '#0A0F1C' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#5CB85C' }}>
              Our Story
            </p>
            <h2 className="text-4xl font-bold text-white mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why We Evolved
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-gray-400 leading-relaxed mb-5">
              When we started, our focus was simple — build reliable software solutions.
            </p>
            <p className="text-gray-400 leading-relaxed mb-5">
              But over time, we realised that software alone was not enough. Operational challenges were deeply
              rooted in the physical world — buildings, equipment, utilities, and infrastructure that lacked
              real-time visibility and intelligent control.
            </p>
            <p className="text-gray-400 leading-relaxed mb-12">
              We asked a fundamental question:
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="relative py-8 px-4">
              <span
                aria-hidden="true"
                className="absolute -top-4 left-0 text-9xl font-bold leading-none select-none"
                style={{ color: '#1DBCD6', opacity: 0.18, fontFamily: 'Georgia, serif' }}
              >
                &#8220;
              </span>
              <blockquote className="relative">
                <p
                  className="text-2xl sm:text-3xl font-semibold italic leading-relaxed"
                  style={{ color: '#1DBCD6', fontFamily: 'Poppins, sans-serif' }}
                >
                  What if these systems could think, respond, and optimise themselves?
                </p>
              </blockquote>
              <span
                aria-hidden="true"
                className="absolute -bottom-8 right-0 text-9xl font-bold leading-none select-none"
                style={{ color: '#1DBCD6', opacity: 0.18, fontFamily: 'Georgia, serif' }}
              >
                &#8221;
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-16 text-gray-400 leading-relaxed">
              That question shaped our journey. We expanded beyond traditional development and began building
              integrated systems that connect physical environments with digital intelligence. Today, our work
              reflects that vision — solving real-world problems through practical, scalable technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* §5 — Our Approach */}
      <section className="py-24 relative" style={{ backgroundColor: '#060A12' }}>
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #1DBCD625, transparent)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#1DBCD6' }}>
              Our Approach
            </p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              From Idea to Impact
            </h2>
          </Reveal>
          <div className="flex flex-col lg:flex-row lg:items-start">
            {approachSteps.map((step, i) => (
              <Fragment key={step.num}>
                <Reveal
                  delay={i * 0.1}
                  className="lg:flex-1 flex flex-col items-center text-center px-2 py-6 lg:py-0"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-sm font-bold flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #1DBCD625, #1DBCD610)',
                      border: '2px solid #1DBCD650',
                      color: '#1DBCD6',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {step.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-[160px]">{step.desc}</p>
                </Reveal>
                {i < 4 && (
                  <div className="hidden lg:flex items-center self-start mt-6 flex-shrink-0 w-6">
                    <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, #1DBCD640, #1DBCD615)' }} />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* §6 — Our Impact */}
      <section className="py-24" style={{ backgroundColor: '#0A0F1C' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#5CB85C' }}>
              Our Impact
            </p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Delivering Measurable Outcomes
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {impactItems.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 0.08}
                className={i === 4 ? 'sm:col-span-2 sm:max-w-lg sm:mx-auto sm:w-full' : ''}
              >
                <div
                  className="rounded-2xl p-7 border flex items-start gap-5 h-full transition-all duration-300 hover:border-[#1DBCD630] hover:shadow-[0_0_24px_#1DBCD610]"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5"
                    style={{ backgroundColor: i % 2 === 0 ? '#1DBCD6' : '#5CB85C' }}
                  />
                  <div>
                    <p className="font-semibold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.label}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* §7 — Vision */}
      <section className="py-24 relative" style={{ backgroundColor: '#060A12' }}>
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #1DBCD625, transparent)' }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#1DBCD6' }}>
              Our Vision
            </p>
            <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Building the Future of Intelligent Infrastructure
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-gray-400 leading-relaxed mb-8">
              We envision a world where physical environments are no longer passive, but intelligent and
              responsive. By combining IoT, data, and software, we are building systems that make
              infrastructure smarter, more reliable, and future-ready.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="text-white font-medium mb-5 text-left">Our goal is to help organisations:</p>
            <ul className="space-y-3 text-left">
              {goalBullets.map((goal) => (
                <li key={goal} className="flex items-start gap-3 text-gray-400">
                  <div
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: '#1DBCD615', border: '1px solid #1DBCD640' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1DBCD6' }} />
                  </div>
                  {goal}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-10 text-lg text-gray-300 leading-relaxed">
              This is the future we are building — one intelligent system at a time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* §8 — Why iGreen */}
      <section className="py-24" style={{ backgroundColor: '#0A0F1C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#5CB85C' }}>
              Why iGreen
            </p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What Sets Us Apart
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <Reveal
                key={d.title}
                delay={i * 0.08}
                className={i === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}
              >
                <div
                  className="rounded-2xl p-7 border h-full transition-all duration-300 hover:border-[#1DBCD630] hover:shadow-[0_0_24px_#1DBCD610]"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: '#1DBCD618', color: '#1DBCD6' }}
                  >
                    {d.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {d.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* §9 — Global Outlook */}
      <section className="py-24" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#1DBCD6' }}>
              Global Reach
            </p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Built for Scale, Designed for Global Impact
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="relative rounded-2xl p-10"
              style={{ background: 'linear-gradient(135deg, #0d2a33 0%, #0a1f0a 100%)' }}
            >
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, #1DBCD6, #5CB85C)',
                  padding: '1px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #1DBCD608 0%, transparent 70%)' }}
              />
              <p className="text-gray-300 leading-relaxed text-lg text-center relative">
                Our solutions are designed to be scalable, adaptable, and relevant across geographies.
                With experience working across diverse operational environments — from smart buildings in
                India to tank monitoring in the Americas — we bring a global perspective to solving complex
                infrastructure challenges.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* §10 — Download Brochure */}
      <section className="py-16" style={{ backgroundColor: '#0A0F1C' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div
              className="rounded-2xl px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-8 border"
              style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
            >
              {/* Icon + text */}
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#1DBCD618' }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1DBCD6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <polyline points="9 15 12 18 15 15" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#1DBCD6' }}>
                    Company Profile
                  </p>
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Download Our Company Brochure
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                    A complete overview of iGreen Systems — our story, services, portfolio highlights,
                    and contact details in one shareable PDF.
                  </p>
                </div>
              </div>
              {/* CTA */}
              <a
                href="/api/company-brochure"
                download="iGreen-Systems-Company-Profile.pdf"
                className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all border hover:bg-white/5"
                style={{ borderColor: '#1DBCD650', color: '#1DBCD6' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PDF
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* §11 — Final CTA */}
      <section className="py-24" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div
              className="rounded-3xl p-14 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0d2a33 0%, #0a1f0a 100%)' }}
            >
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
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #5CB85C08 0%, transparent 70%)' }}
              />
              <h2
                className="text-4xl sm:text-5xl font-bold text-white mb-5 relative"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Let&apos;s Build Something{' '}
                <span style={{ color: '#1DBCD6' }}>Intelligent</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto relative">
                Have a challenge, idea, or opportunity? Let&apos;s explore how technology can transform
                your operations.
              </p>
              <Link
                href="/contact"
                className="btn-primary px-8 py-3.5 rounded-xl text-base relative inline-block"
              >
                Start a Conversation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
