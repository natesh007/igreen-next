import Link from 'next/link';
import type { ReactNode } from 'react';
import Effects from '@/components/homepage/Effects';
import EnquiryCta from '@/components/homepage/EnquiryCta';

export type LegalSection = { id: string; title: string; body: ReactNode };

export default function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="vibrant v-page">
      <noscript>
        <style>{'.v-rv{opacity:1!important;transform:none!important}'}</style>
      </noscript>
      <Effects />

      <section className="v-w v-ihero solo" aria-labelledby="legal-h">
        <nav className="v-crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <span className="v-chip" style={{ background: 'var(--v-sky)' }}>
          Last updated: {updated}
        </span>
        <h1 id="legal-h">{title}</h1>
        <p className="v-lead">{intro}</p>
      </section>

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-label={title}>
        <div className="v-legal">
          <nav className="toc v-brut" aria-label="On this page">
            <strong>On this page</strong>
            <ol>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="doc">
            {sections.map((s) => (
              <section id={s.id} key={s.id} aria-labelledby={`${s.id}-h`}>
                <h2 id={`${s.id}-h`}>{s.title}</h2>
                {s.body}
              </section>
            ))}
          </div>
        </div>
      </section>

      <EnquiryCta />
    </div>
  );
}
