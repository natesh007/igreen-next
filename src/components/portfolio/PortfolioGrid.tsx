'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Project } from '@/data/projects';

const imageFor: Record<string, { src: string; alt: string; cap?: string }> = {
  building: { src: '/images/industries/smart-buildings.webp', alt: 'Aerial view of a campus with connected buildings' },
  restaurant: { src: '/images/industries/restaurants.webp', alt: 'Restaurant kitchen with monitoring sensors on the gas line' },
  hotel: { src: '/images/industries/hospitality.webp', alt: 'Hotel room with connected-device icons for climate, lighting, security and Wi-Fi' },
  twin: { src: '/images/home/night-building.webp', alt: 'Connected building at night with live monitoring points' },
  firepump: { src: '/images/industries/fire-safety.webp', alt: 'Fire pump room with a control panel and monitoring unit' },
  cold: { src: '/images/industries/cold-chain.webp', alt: 'Cold room with a wireless temperature sensor beside the door' },
  visa: { src: '/images/home/vwi.webp', alt: 'Visa World India website home page', cap: 'Website screenshot' },
  matching: { src: '/images/home/mubarakrishte.webp', alt: 'MubarakRishte website home page', cap: 'Website screenshot' },
  tank: { src: '/images/industries/fuel-tank-monitoring.webp', alt: 'Fuel station with a wireless monitoring unit on the dispenser' },
};

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="v-filter" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button key={c} type="button" className="v-pick" aria-pressed={active === c} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="v-pf">
        {shown.map((p, i) => {
          const img = p.art ? imageFor[p.art] : undefined;
          return (
            <article className={`v-pfcard v-brut ${p.category === 'IoT' ? 'iot' : 'del'}${p.featured ? ' feat' : ''}`} key={p.title}>
              {img && (
                <div className="pic">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={900}
                    height={675}
                    sizes={p.featured ? '(min-width: 960px) 50vw, 100vw' : '(min-width: 1100px) 30vw, (min-width: 640px) 46vw, 100vw'}
                    priority={i === 0}
                  />
                  <span className="cap">{img.cap ?? 'Illustrative image'}</span>
                </div>
              )}
              <div className="body">
                <div className="meta">
                  <span className="v-chip" style={{ background: p.category === 'IoT' ? 'var(--v-sky)' : 'var(--v-lime)' }}>
                    {p.tag}
                  </span>
                  {p.featured && (
                    <span className="v-chip" style={{ background: 'var(--v-ink)', color: '#fff' }}>
                      Featured
                    </span>
                  )}
                </div>
                <h3>{p.title}</h3>
                {p.client && <p className="client">{p.client}</p>}
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
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
