import type { Metadata } from 'next';
import Link from 'next/link';
import Effects from '@/components/homepage/Effects';
import EnquiryCta from '@/components/homepage/EnquiryCta';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'iGreen Systems project portfolio — IoT platforms, smart building management, digital transformation, visa processing, and web & mobile applications delivered for clients in Hyderabad, India, and the USA.',
  alternates: { canonical: '/portfolio' },
};

const metrics = [
  { value: '200+', label: 'Locations Monitored', sub: 'OilCop tank network' },
  { value: '80%', label: 'Admin Effort Reduced', sub: 'VWI visa processing' },
  { value: '6×', label: 'Throughput Gain', sub: 'MubarakRishte platform' },
  { value: '10+', label: 'IoT Modules per Platform', sub: 'iGreen smart building' },
];

export default function PortfolioPage() {
  const sorted = [...projects]
    .filter((p) => p.isReal)
    .sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1));

  return (
    <div className="vibrant v-page">
      <noscript>
        <style>{'.v-rv{opacity:1!important;transform:none!important}'}</style>
      </noscript>
      <Effects />

      <section className="v-w v-ihero solo" aria-labelledby="pf-h">
        <nav className="v-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Portfolio</span>
        </nav>
        <span className="v-chip" style={{ background: 'var(--v-sky)', justifySelf: 'start' }}>
          Our work
        </span>
        <h1 id="pf-h">Projects that define us</h1>
        <p className="v-lead">
          From IoT deployments to full digital transformations — here&apos;s a selection of the work we&apos;re proud of.
        </p>
      </section>

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-label="Projects">
        <PortfolioGrid projects={sorted} />
      </section>

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-label="Results at a glance">
        <div className="v-stats">
          {metrics.map((m) => (
            <div className="v-stat v-brut v-rv" key={m.label}>
              <b>{m.value}</b>
              <span>{m.label}</span>
              <small className="v-note" style={{ display: 'block', marginTop: 4 }}>
                {m.sub}
              </small>
            </div>
          ))}
        </div>
      </section>

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="brief-h">
        <div className="v-brut v-rv v-brief">
          <div>
            <h2 className="v-disp" id="brief-h">
              Need a technical deep-dive?
            </h2>
            <p>
              We can walk enterprise and procurement teams through architecture diagrams, data flow specs, and scale benchmarks for any
              project. More detailed case studies are also in preparation.
            </p>
          </div>
          <Link className="v-btn" href="#enquire">
            Request a briefing →
          </Link>
        </div>
      </section>

      <EnquiryCta />
    </div>
  );
}
