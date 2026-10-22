import type { Metadata } from 'next';
import CareersJobListings from '@/components/careers/CareersJobListings';
import Image from 'next/image';
import Link from 'next/link';
import Effects from '@/components/homepage/Effects';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join iGreen Systems in Hyderabad — we\'re hiring a Technology Solutions Associate. Build IoT solutions and digital platforms that matter. Freshers welcome.',
  alternates: { canonical: '/careers' },
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

export default function CareersPage() {
  return (
    <div className="vibrant v-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(careersJsonLd) }} />
      <noscript>
        <style>{'.v-rv{opacity:1!important;transform:none!important}'}</style>
      </noscript>
      <Effects />

      <section className="v-w v-ihero two" aria-labelledby="car-h">
        <div>
          <nav className="v-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Careers</span>
          </nav>
          <span className="v-chip" style={{ background: 'var(--v-lime)' }}>
            Join our team
          </span>
          <h1 id="car-h">Build the future with us</h1>
          <p className="v-lead">
            We&apos;re a team of 25 passionate engineers, designers, and consultants building IoT solutions and digital experiences that
            matter. If you love hard problems and great collaboration, we&apos;d love to hear from you.
          </p>
          <div className="v-cta-row" style={{ marginTop: 22 }}>
            <Link className="v-btn" href="#open-roles">
              See open role →
            </Link>
          </div>
        </div>
        <div className="pic v-rv">
          <Image src="/images/industries/consumer-platforms.webp" alt="The iGreen team working in an open-plan office with plants and the iGreen sign wall" width={900} height={675} sizes="(min-width: 960px) 48vw, 100vw" priority />
          <span className="cap">Illustrative image</span>
        </div>
      </section>

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="perk-h">
        <div className="v-sh">
          <h2 className="v-disp" id="perk-h">
            Why work here
          </h2>
        </div>
        <div className="v-svc" style={{ marginBottom: 0 }}>
          {perks.map((p, i) => (
            <div className={`v-card v-brut ${i % 2 ? 'del' : 'iot'} v-rv`} key={p.title}>
              <div>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CareersJobListings />
    </div>
  );
}
