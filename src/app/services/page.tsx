import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'IoT solutions, digital transformation consulting, web applications, mobile apps, and cloud solutions from iGreen Systems, Hyderabad. Serving enterprises in Andhra Pradesh, Telangana, and globally since 2008.',
};

const iotServices = [
  {
    href: '/services/iot-solutions',
    title: 'IoT Solutions',
    desc: 'End-to-end IoT architecture, sensor integration, and real-time data pipelines that connect your physical assets to actionable insights.',
    color: '#1DBCD6',
  },
  {
    href: '/services/connected-devices',
    title: 'Connected Devices',
    desc: 'Intelligent device ecosystems from hardware selection and firmware through cloud connectivity and device management at scale.',
    color: '#1DBCD6',
  },
  {
    href: '/services/smart-manufacturing',
    title: 'Smart Manufacturing',
    desc: 'Industry 4.0 intelligence — real-time production monitoring, predictive maintenance, and OEE optimization for modern factories.',
    color: '#1DBCD6',
  },
  {
    href: '/services/edge-computing',
    title: 'Edge Computing',
    desc: 'Low-latency edge architectures that process data at the source, reduce bandwidth costs, and enable offline capability.',
    color: '#1DBCD6',
  },
  {
    href: '/services/digital-transformation',
    title: 'Digital Transformation',
    desc: 'Technology-aligned business strategy — process digitization, legacy modernization, and change management that sticks.',
    color: '#1DBCD6',
  },
];

const deliveryServices = [
  {
    href: '/services/web-applications',
    title: 'Web Applications',
    desc: 'Scalable, high-performance web apps built with React, Next.js, and modern cloud-native architectures.',
    color: '#5CB85C',
  },
  {
    href: '/services/mobile-apps',
    title: 'Mobile Apps',
    desc: 'Cross-platform and native mobile applications for iOS and Android — from concept to App Store.',
    color: '#5CB85C',
  },
  {
    href: '/services/cloud-solutions',
    title: 'Cloud Solutions',
    desc: 'AWS, Azure, and GCP architecture design, cloud migration, infrastructure-as-code, and DevOps automation.',
    color: '#5CB85C',
  },
];

function ServiceRow({ service }: { service: (typeof iotServices)[0] }) {
  return (
    <Link
      href={service.href}
      className="group flex items-start gap-6 p-7 rounded-2xl border transition-all hover:-translate-y-0.5"
      style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mt-0.5"
        style={{ backgroundColor: `${service.color}18` }}
      >
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: service.color }} />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90"
          style={{ fontFamily: 'Poppins, sans-serif' }}>
          {service.title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
      </div>
      <div className="flex-shrink-0 self-center" style={{ color: service.color }}>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>
      {/* Header */}
      <section className="py-24 text-center" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#1DBCD6' }}>
            Services
          </p>
          <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Full-Spectrum Technology Solutions
          </h1>
          <p className="text-gray-400 text-lg">
            IoT & Digital Transformation at the core, delivered through world-class web, mobile, and cloud engineering.
          </p>
        </div>
      </section>

      {/* IoT Services */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              IoT & Digital Transformation
            </h2>
            <div className="flex-1 h-px" style={{ backgroundColor: '#1F2937' }} />
          </div>
          <div className="space-y-4">
            {iotServices.map((s) => <ServiceRow key={s.href} service={s} />)}
          </div>
        </div>
      </section>

      {/* Delivery Services */}
      <section className="py-16" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Digital Delivery
            </h2>
            <div className="flex-1 h-px" style={{ backgroundColor: '#1F2937' }} />
          </div>
          <div className="space-y-4">
            {deliveryServices.map((s) => <ServiceRow key={s.href} service={s} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Not sure where to start?
          </h2>
          <p className="text-gray-400 mb-8">Book a free consultation and we&apos;ll map the right path for your business.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #1DBCD6, #5CB85C)' }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
