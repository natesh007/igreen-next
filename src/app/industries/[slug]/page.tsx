import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Effects from '@/components/homepage/Effects';
import EnquiryCta from '@/components/homepage/EnquiryCta';
import { iotServices, deliveryServices } from '@/components/homepage/data';
import IndustryCards from '@/components/industries/IndustryCards';
import { getIndustry, industries } from '@/components/industries/data';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: { title: `${industry.seoTitle} | iGreen Systems`, description: industry.seoDescription, url: `/industries/${industry.slug}` },
  };
}

const allServices = [...iotServices, ...deliveryServices];

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const related = projects.filter((p) => industry.projects.includes(p.title));
  const services = industry.services
    .map((s) => allServices.find((x) => x.href === `/services/${s}`))
    .filter((s): s is (typeof allServices)[number] => Boolean(s));
  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://igreensystems.com' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://igreensystems.com/industries' },
      { '@type': 'ListItem', position: 3, name: industry.title, item: `https://igreensystems.com/industries/${industry.slug}` },
    ],
  };

  return (
    <div className="vibrant v-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <noscript>
        <style>{'.v-rv{opacity:1!important;transform:none!important}'}</style>
      </noscript>
      <Effects />

      <section className="v-w v-ihero two" aria-labelledby="ind-h">
        <div>
          <nav className="v-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/industries">Industries</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{industry.title}</span>
          </nav>
          <span className="v-chip" style={{ background: 'var(--v-sky)' }}>
            {industry.title}
          </span>
          <h1 id="ind-h">{industry.h1}</h1>
          <p className="v-lead">{industry.intro}</p>
          <div className="v-cta-row" style={{ marginTop: 22 }}>
            <Link className="v-btn" href="#enquire">
              Discuss your project →
            </Link>
            <Link className="v-btn alt" href="/portfolio">
              See all projects
            </Link>
          </div>
        </div>
        <div className="pic v-rv">
          <Image src={industry.hero} alt={industry.alt} width={1400} height={640} sizes="100vw" priority />
          <span className="cap">Illustrative image</span>
        </div>
      </section>

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="solves-h">
        <div className="v-sh">
          <h2 className="v-disp" id="solves-h">
            What this solves
          </h2>
        </div>
        <ul className="v-checks">
          {industry.solves.map((s) => (
            <li className="v-brut v-rv" key={s}>
              {s}
            </li>
          ))}
        </ul>
      </section>

      {related.length > 0 && (
        <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="proj-h">
          <div className="v-sh">
            <h2 className="v-disp" id="proj-h">
              {related.length > 1 ? 'Projects we have delivered' : 'Project we delivered'}
            </h2>
            <p>Details from our live deployments.</p>
          </div>
          <div className="v-projs">
            {related.map((p) => (
              <article className="v-proj v-brut v-rv" key={p.title}>
                <div>
                  <h3>{p.title}</h3>
                  {p.client && <p className="client">{p.client}</p>}
                </div>
                <p>{p.description}</p>
                {p.capabilities && (
                  <div className="pills" aria-label="Capabilities">
                    {p.capabilities.map((c) => (
                      <span className="v-chip" key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                )}
                {p.highlights && (
                  <ul>
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="svc-h">
        <div className="v-sh">
          <h2 className="v-disp" id="svc-h">
            How we build it
          </h2>
          <p>The capabilities behind this work.</p>
        </div>
        <div className="v-links">
          {services.map((s, i) => (
            <Link className={`v-card v-brut ${s.href.includes('web-') || s.href.includes('mobile') || s.href.includes('cloud') ? 'del' : 'iot'} v-rv`} href={s.href} key={s.href}>
              <div>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <span className="go" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="more-h">
        <div className="v-sh">
          <h2 className="v-disp" id="more-h">
            Other industries
          </h2>
          <p>
            <Link href="/industries" style={{ textDecoration: 'underline', fontWeight: 800 }}>
              See all industries →
            </Link>
          </p>
        </div>
        <IndustryCards items={others} />
      </section>

      <EnquiryCta />
    </div>
  );
}
