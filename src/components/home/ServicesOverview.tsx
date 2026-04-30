'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

const iotServices = [
  {
    href: '/services/iot-solutions',
    label: 'IoT Solutions',
    desc: '10+ modules — water, energy, air quality, safety — connected and monitored in real time across smart buildings.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
      </svg>
    ),
  },
  {
    href: '/services/connected-devices',
    label: 'Connected Devices',
    desc: 'From sensor hardware to firmware to cloud — deployed in buildings, restaurants, and industrial plants across India and the US.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    href: '/services/smart-manufacturing',
    label: 'Smart Manufacturing',
    desc: 'Real-time production monitoring and predictive maintenance — built for India\'s industrial sector.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    href: '/services/edge-computing',
    label: 'Edge Computing',
    desc: 'Process data at source — low-latency architectures with offline capability.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    href: '/services/digital-transformation',
    label: 'Digital Transformation',
    desc: 'We turned a paper-based visa workflow into a platform processing thousands of applications. Same approach, applied to your process.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const deliveryServices = [
  {
    href: '/services/web-applications',
    label: 'Web Applications',
    desc: 'From matrimonial platforms to tank monitoring portals to facility dashboards — we build what the brief demands.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    href: '/services/mobile-apps',
    label: 'Mobile Apps',
    desc: 'Cross-platform and native apps for iOS and Android with seamless UX.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    href: '/services/cloud-solutions',
    label: 'Cloud Solutions',
    desc: 'AWS, Azure, and GCP architecture, migration, and DevOps automation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
];

const MotionLink = motion.create(Link);

function ServiceCard({
  href,
  label,
  desc,
  icon,
  accent,
}: {
  href: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  accent: string;
}) {
  return (
    <MotionLink
      href={href}
      className="group block rounded-xl p-6 border"
      style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
      whileHover={{
        y: -5,
        boxShadow: `0 0 0 1px ${accent}35, 0 8px 32px ${accent}18`,
        borderColor: `${accent}30`,
      }}
      transition={{ duration: 0.22 }}
    >
      <motion.div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: `${accent}18`, color: accent }}
        whileHover={{ backgroundColor: `${accent}28`, scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <h3 className="font-semibold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {label}
      </h3>
      <p className="text-[15px] text-gray-300 leading-relaxed">{desc}</p>
      <p className="mt-4 text-sm font-medium transition-colors" style={{ color: accent }}>
        Learn more →
      </p>
    </MotionLink>
  );
}

export default function ServicesOverview() {
  return (
    <section
      className="py-24 relative"
      style={{
        backgroundColor: '#0A0F1C',
        background: 'radial-gradient(ellipse 60% 40% at 50% 0%, #1DBCD608 0%, #0A0F1C 70%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#1DBCD6' }}>
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Services
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            From IoT strategy to digital delivery, we build technology solutions that connect operations, improve visibility, and support long-term growth.
          </p>
        </Reveal>

        {/* IoT & Digital Transformation */}
        <div className="mb-12">
          <Reveal delay={0.05}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#1DBCD6' }}>
                IoT & Digital
              </span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #1DBCD630, transparent)' }} />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {iotServices.map((s, i) => (
              <Reveal key={s.href} delay={0.08 + i * 0.07}>
                <ServiceCard {...s} accent="#1DBCD6" />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Digital Delivery */}
        <div>
          <Reveal delay={0.05}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#5CB85C' }}>
                Digital Delivery
              </span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #5CB85C30, transparent)' }} />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {deliveryServices.map((s, i) => (
              <Reveal key={s.href} delay={0.08 + i * 0.08}>
                <ServiceCard {...s} accent="#5CB85C" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
