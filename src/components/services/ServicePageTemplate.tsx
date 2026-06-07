'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServicePageProps {
  badge: string;
  title: string;
  subtitle: string;
  accent: string;
  features: ServiceFeature[];
  useCases: string[];
  relatedServices: { href: string; label: string }[];
  path: string;
}

export default function ServicePageTemplate({
  badge,
  title,
  subtitle,
  accent,
  features,
  useCases,
  relatedServices,
  path,
}: ServicePageProps) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://igreensystems.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://igreensystems.com/services' },
        { '@type': 'ListItem', 'position': 3, 'name': title, 'item': `https://igreensystems.com${path}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': title,
      'description': subtitle,
      'serviceType': badge,
      'provider': {
        '@type': 'Organization',
        '@id': 'https://igreensystems.com/#organization',
      },
      'areaServed': [
        { '@type': 'City', 'name': 'Hyderabad' },
        { '@type': 'City', 'name': 'Kakinada' },
        { '@type': 'Country', 'name': 'India' },
      ],
      'url': `https://igreensystems.com${path}`,
    },
  ];

  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="relative py-28 text-center overflow-hidden"
        style={{ backgroundColor: '#060A12' }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, ${accent} 0%, transparent 70%)`,
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <motion.span
            className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6 border"
            style={{ color: accent, borderColor: `${accent}40`, backgroundColor: `${accent}10` }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            {badge}
          </motion.span>
          <motion.h1
            className="text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: EASE }}
          >
            <Link
              href="/contact"
              className="px-8 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${accent}, #5CB85C)` }}
            >
              Discuss Your Project
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 rounded-xl font-semibold border transition-all hover:bg-white/5"
              style={{ borderColor: '#374151', color: '#D1D5DB' }}
            >
              All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              What We Deliver
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <motion.div
                  className="rounded-2xl p-7 border"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                  whileHover={{ boxShadow: `0 0 28px ${accent}30` }}
                  transition={{ duration: 0.22 }}
                >
                  <div
                    className="w-1 h-8 rounded mb-4"
                    style={{ backgroundColor: accent }}
                  />
                  <h3
                    className="font-semibold text-white mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8">
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Common Use Cases
            </h2>
          </Reveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {useCases.map((uc, i) => (
              <motion.li
                key={uc}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border text-sm text-gray-300"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                {uc}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Related Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="px-5 py-2 rounded-xl text-sm font-medium border transition-all hover:bg-white/5"
                  style={{ borderColor: '#374151', color: '#D1D5DB' }}
                >
                  {s.label} →
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: '#060A12' }}>
        <div className="max-w-xl mx-auto px-4">
          <Reveal>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ready to get started?
            </h2>
            <p className="text-gray-400 mb-8">
              Let&apos;s talk about how we can apply this to your specific challenges.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #1DBCD6, #5CB85C)' }}
            >
              Get in Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
