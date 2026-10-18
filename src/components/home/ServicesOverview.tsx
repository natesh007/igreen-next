'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import ServiceArt, { SERVICE_PALETTE } from '@/components/visuals/ServiceArt';

const iotServices = [
  {
    href: '/services/iot-solutions',
    label: 'IoT Solutions',
    desc: '10+ modules — water, energy, air quality, safety — connected and monitored in real time across smart buildings.',
  },
  {
    href: '/services/connected-devices',
    label: 'Connected Devices',
    desc: 'From sensor hardware to firmware to cloud — deployed in buildings, restaurants, and industrial plants across India and the US.',
  },
  {
    href: '/services/smart-manufacturing',
    label: 'Smart Manufacturing',
    desc: 'Real-time production monitoring and predictive maintenance — helping Indian manufacturers minimize unplanned downtime and maximize OEE across the production floor.',
  },
  {
    href: '/services/edge-computing',
    label: 'Edge Computing',
    desc: 'Process data at source — low-latency architectures with offline capability.',
  },
  {
    href: '/services/digital-transformation',
    label: 'Digital Transformation',
    desc: 'We turned a paper-based visa workflow into a platform processing thousands of applications. Same approach, applied to your process.',
  },
];

const deliveryServices = [
  {
    href: '/services/web-applications',
    label: 'Web Applications',
    desc: 'Production-grade platforms built to measurable outcomes — like the AI matchmaking system that delivered a 6× throughput gain, or the visa portal that cut admin effort by 80%.',
  },
  {
    href: '/services/mobile-apps',
    label: 'Mobile Apps',
    desc: 'Native Android and iOS apps — from IoT monitoring dashboards to consumer-scale platforms — shipped with real-world production quality and App Store compliance.',
  },
  {
    href: '/services/cloud-solutions',
    label: 'Cloud Solutions',
    desc: 'Scalable AWS, Azure, and GCP infrastructure backing live IoT platforms and digital applications — with automated CI/CD, monitoring, and cost-optimised cloud architecture.',
  },
];

const MotionLink = motion.create(Link);

function ServiceCard({
  href,
  label,
  desc,
  accent,
}: {
  href: string;
  label: string;
  desc: string;
  accent: string;
}) {
  const slug = href.split('/').pop()!;
  const artColor = SERVICE_PALETTE[slug]?.[0] ?? accent;
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
        style={{ backgroundColor: `${artColor}1F` }}
        whileHover={{ backgroundColor: `${artColor}30`, scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <ServiceArt slug={slug} className="w-10 h-10" />
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
