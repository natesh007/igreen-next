import Image from 'next/image';
import Link from 'next/link';
import Effects from '@/components/homepage/Effects';
import EnquiryCta from '@/components/homepage/EnquiryCta';
import { serviceImages } from './serviceImages';

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
  const slug = path.split('/').pop()!;
  const img = serviceImages[slug];
  const kind = accent === '#5CB85C' ? 'del' : 'iot';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://igreensystems.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://igreensystems.com/services' },
        { '@type': 'ListItem', position: 3, name: title, item: `https://igreensystems.com${path}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title,
      description: subtitle,
      serviceType: badge,
      provider: { '@type': 'Organization', '@id': 'https://igreensystems.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Hyderabad' },
        { '@type': 'City', name: 'Kakinada' },
        { '@type': 'Country', name: 'India' },
      ],
      url: `https://igreensystems.com${path}`,
    },
  ];

  return (
    <div className="vibrant v-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <noscript>
        <style>{'.v-rv{opacity:1!important;transform:none!important}'}</style>
      </noscript>
      <Effects />

      <section className="v-w v-ihero two" aria-labelledby="svc-h">
        <div>
          <nav className="v-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{title}</span>
          </nav>
          <span className="v-chip" style={{ background: kind === 'del' ? 'var(--v-lime)' : 'var(--v-sky)' }}>
            {badge}
          </span>
          <h1 id="svc-h">{title}</h1>
          <p className="v-lead">{subtitle}</p>
          <div className="v-cta-row" style={{ marginTop: 22 }}>
            <Link className="v-btn" href="#enquire">
              Discuss your project →
            </Link>
            <Link className="v-btn alt" href="/services">
              All services
            </Link>
          </div>
        </div>
        {img && (
          <div className="pic v-rv">
            <Image src={img.hero} alt={img.alt} width={1400} height={788} sizes="(min-width: 960px) 48vw, 100vw" priority />
            <span className="cap">{img.cap}</span>
          </div>
        )}
      </section>

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="feat-h">
        <div className="v-sh">
          <h2 className="v-disp" id="feat-h">
            What we deliver
          </h2>
        </div>
        <div className="v-svc" style={{ marginBottom: 0 }}>
          {features.map((f, i) => (
            <div className={`v-card v-brut ${kind} v-rv`} key={f.title}>
              <div>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {img && (
        <section className="v-w" style={{ paddingBottom: 'clamp(30px, 5vw, 70px)' }} aria-label="In the field">
          <div className="v-band v-brut v-rv">
            <Image src={img.band} alt={img.bandAlt} width={1400} height={640} sizes="100vw" />
            <span className="cap">{img.bandCap ?? img.cap}</span>
          </div>
        </section>
      )}

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="uc-h">
        <div className="v-sh">
          <h2 className="v-disp" id="uc-h">
            Common use cases
          </h2>
        </div>
        <ul className="v-checks">
          {useCases.map((uc) => (
            <li className="v-brut v-rv" key={uc}>
              {uc}
            </li>
          ))}
        </ul>
      </section>

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="rel-h">
        <div className="v-sh">
          <h2 className="v-disp" id="rel-h">
            Related services
          </h2>
        </div>
        <div className="v-cta-row">
          {relatedServices.map((s) => (
            <Link className="v-btn alt" href={s.href} key={s.href}>
              {s.label} →
            </Link>
          ))}
        </div>
      </section>

      <EnquiryCta />
    </div>
  );
}
