import type { Metadata } from 'next';
import CareersJobListings from '@/components/careers/CareersJobListings';
import { PerkArt, type PerkKind } from '@/components/visuals/MapArt';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join iGreen Systems in Hyderabad — we\'re hiring a Technology Solutions Associate. Build IoT solutions and digital platforms that matter. Freshers welcome.',
};

const perks = [
  { title: 'Flexible Work', desc: 'Hybrid and remote options across most roles.' },
  { title: 'Learning Budget', desc: 'Annual learning and certification allowance.' },
  { title: 'Cutting-Edge Projects', desc: 'Work on real IoT and enterprise transformation initiatives.' },
  { title: 'Growth Path', desc: 'Clear career progression with mentorship from senior engineers.' },
];

const careersJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://igreensystems.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Careers', 'item': 'https://igreensystems.com/careers' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    'title': 'Technology Solutions Associate',
    'description': 'Learn about our SaaS products, IoT solutions and digital platforms, identify potential customers, understand their business requirements, and explain how our solutions can help solve their problems. Develop skills in technology sales, customer communication, product demonstrations, and business development.',
    'datePosted': '2026-10-18',
    'employmentType': [
      'FULL_TIME',
      'INTERN'
    ],
    'hiringOrganization': {
      '@type': 'Organization',
      'name': 'iGreen Systems',
      'sameAs': 'https://igreensystems.com',
      'logo': 'https://igreensystems.com/igreen_1.png'
    },
    'jobLocation': {
      '@type': 'Place',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Hyderabad',
        'addressRegion': 'Telangana',
        'addressCountry': 'IN'
      }
    },
    'jobLocationType': 'TELECOMMUTE',
    'applicantLocationRequirements': {
      '@type': 'Country',
      'name': 'India'
    },
    'experienceRequirements': 'Freshers and students welcome. Prior sales experience and coding skills are not required.',
    'skills': 'Communication, Lead generation, B2B sales, Research, Customer relationship management, Product presentations'
  }
];

const perkArt: { kind: PerkKind; color: string }[] = [
  { kind: 'flex', color: '#F59E0B' },
  { kind: 'learn', color: '#8B5CF6' },
  { kind: 'projects', color: '#1DBCD6' },
  { kind: 'growth', color: '#5CB85C' },
];

export default function CareersPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersJsonLd) }}
      />
      {/* Header */}
      <section className="py-24 text-center relative overflow-hidden" style={{ backgroundColor: '#060A12' }}>
        {/* Background video */}
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover" src="/videos/prisma-bg.mp4" />
        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        {/* Gradient overlay — darkens edges so text stays readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
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
                className="relative overflow-hidden rounded-xl p-6 border"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
              >
                <PerkArt kind={perkArt[i].kind} color={perkArt[i].color} className="absolute top-3 right-3 w-14 h-14 opacity-40 pointer-events-none" />
                <div
                  className="w-8 h-1 rounded mb-4"
                  style={{ backgroundColor: perkArt[i].color }}
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
