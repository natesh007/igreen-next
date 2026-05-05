import type { Metadata } from 'next';
import CareersJobListings from '@/components/careers/CareersJobListings';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join iGreen Systems in Hyderabad — we\'re hiring a Flutter Developer and a Digital Transformation Consultant. Build IoT solutions and digital platforms that matter. Freshers welcome.',
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
    'title': 'Flutter Developer (Android & iOS)',
    'description': 'We are looking for a proactive Flutter Developer who can take ownership of mobile application development — both enhancing existing applications and building new ones from scratch. The ideal candidate should be capable of working independently, quickly understanding existing codebases, and delivering production-ready apps from day one.',
    'datePosted': '2026-05-05',
    'employmentType': 'FULL_TIME',
    'hiringOrganization': {
      '@type': 'Organization',
      'name': 'iGreen Systems',
      'sameAs': 'https://igreensystems.com',
      'logo': 'https://igreensystems.com/igreen_1.png',
    },
    'jobLocation': {
      '@type': 'Place',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Hyderabad',
        'addressRegion': 'Telangana',
        'addressCountry': 'IN',
      },
    },
    'jobLocationType': 'TELECOMMUTE',
    'applicantLocationRequirements': { '@type': 'Country', 'name': 'India' },
    'experienceRequirements': '0 to 2+ years. Freshers can apply but should be ready to contribute from day one.',
    'skills': 'Flutter, Dart, Firebase, iOS, Android, Push Notifications, REST APIs, Git',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    'title': 'Digital Transformation Consultant',
    'description': 'We are looking for a sharp, business-minded professional who can identify organizations still dependent on manual or semi-digital processes and help them transition toward digital solutions. This role combines business development with consultative selling.',
    'datePosted': '2026-05-05',
    'employmentType': 'FULL_TIME',
    'hiringOrganization': {
      '@type': 'Organization',
      'name': 'iGreen Systems',
      'sameAs': 'https://igreensystems.com',
      'logo': 'https://igreensystems.com/igreen_1.png',
    },
    'jobLocation': {
      '@type': 'Place',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Hyderabad',
        'addressRegion': 'Telangana',
        'addressCountry': 'IN',
      },
    },
    'jobLocationType': 'TELECOMMUTE',
    'applicantLocationRequirements': { '@type': 'Country', 'name': 'India' },
    'experienceRequirements': '0 to 3+ years. Freshers with strong communication and business understanding can apply.',
    'skills': 'Consultative selling, Lead generation, Business communication, Digital transformation, Market research',
  },
];

export default function CareersPage() {
  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersJsonLd) }}
      />
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
