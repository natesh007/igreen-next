import type { Metadata } from 'next';
import Link from 'next/link';
import Effects from '@/components/homepage/Effects';
import EnquiryCta from '@/components/homepage/EnquiryCta';
import IndustryCards from '@/components/industries/IndustryCards';
import { industries } from '@/components/industries/data';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'IoT and software solutions by industry from iGreen Systems, Hyderabad: smart buildings, hospitality, cold chain, fire safety, restaurants, fuel and tank monitoring, travel and visa services, and consumer platforms.',
  alternates: { canonical: '/industries' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://igreensystems.com' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://igreensystems.com/industries' },
  ],
};

export default function IndustriesPage() {
  return (
    <div className="vibrant v-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <noscript>
        <style>{'.v-rv{opacity:1!important;transform:none!important}'}</style>
      </noscript>
      <Effects />

      <section className="v-w v-ihero" aria-labelledby="ind-page-h">
        <div>
          <nav className="v-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Industries</span>
          </nav>
          <span className="v-chip" style={{ background: 'var(--v-sky)' }}>
            Where our systems run
          </span>
          <h1 id="ind-page-h">Industries we serve</h1>
          <p className="v-lead">
            From smart buildings and cold chain to fuel monitoring and visa processing, these are the sectors where our IoT platforms and
            software are already in use. Pick yours to see what we have built and the results it delivered.
          </p>
        </div>
      </section>

      <section className="v-w" style={{ paddingBottom: 'clamp(40px, 6vw, 90px)' }} aria-label="All industries">
        <IndustryCards items={industries} />
      </section>

      <EnquiryCta />
    </div>
  );
}
