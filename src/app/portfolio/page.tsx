import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import CTA from '@/components/home/CTA';
import { WovenCanvas } from '@/components/ui/woven-light-hero';
import ProjectArt from '@/components/visuals/ProjectArt';
import { projects, type Project } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'iGreen Systems project portfolio — IoT platforms, smart building management, digital transformation, visa processing, and web & mobile applications delivered for clients in Hyderabad, India, and the USA.',
};


const categories = ['All', 'IoT', 'Digital Transformation', 'Web & Mobile', 'Cloud'];

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" fill="#1DBCD620" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#1DBCD6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RealCard({ p }: { p: Project }) {
  return (
    <div
      className="group rounded-2xl border overflow-hidden transition-all hover:-translate-y-1 flex flex-col"
      style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ backgroundColor: p.tagColor }} />
      {p.art && <ProjectArt kind={p.art} />}

      <div className="p-6 flex flex-col flex-1">
        {/* Header row: tag + featured badge */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: `${p.tagColor}20`, color: p.tagColor }}
          >
            {p.tag}
          </span>
          {p.featured && (
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: '#1DBCD615', color: '#1DBCD6', border: '1px solid #1DBCD640' }}
            >
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold text-white mb-1 leading-snug"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {p.title}
        </h3>

        {/* Client */}
        {p.client && (
          <p className="text-xs text-gray-500 mb-3">{p.client}</p>
        )}

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{p.description}</p>

        {/* Capability pills */}
        {p.capabilities && p.capabilities.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.capabilities.map((cap) => (
              <span
                key={cap}
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ backgroundColor: `${p.tagColor}15`, color: p.tagColor, border: `1px solid ${p.tagColor}30` }}
              >
                {cap}
              </span>
            ))}
          </div>
        )}

        {/* Highlights */}
        {p.highlights && p.highlights.length > 0 && (
          <ul className="mt-auto space-y-1.5">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-gray-400">
                <CheckIcon />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function PlaceholderCard({ p }: { p: Project }) {
  return (
    <div
      className="group rounded-2xl border overflow-hidden transition-all hover:-translate-y-1"
      style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
    >
      <div
        className="h-48 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)' }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: `${p.tagColor}20` }}
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={p.tagColor} strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
          </svg>
        </div>
      </div>
      <div className="p-6">
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ backgroundColor: `${p.tagColor}20`, color: p.tagColor }}
        >
          {p.tag}
        </span>
        <h3
          className="text-lg font-semibold text-white mt-3 mb-2"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {p.title}
        </h3>
        <p className="text-sm text-gray-500">Case study coming soon.</p>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const sorted = [...projects].sort((a, b) => {
    if (a.isReal !== b.isReal) return a.isReal ? -1 : 1;
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return 0;
  });

  return (
    <div style={{ backgroundColor: '#0A0F1C', color: '#F9FAFB' }}>
      {/* Header */}
      <section
        className="py-24 text-center relative overflow-hidden"
        style={{ backgroundColor: '#060A12' }}
      >
        <WovenCanvas />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #1DBCD610 0%, transparent 70%)' }}
        />
        <div className="max-w-3xl mx-auto px-4 relative">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#1DBCD6' }}>
              Our Work
            </p>
            <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Projects That Define Us
            </h1>
            <p className="text-gray-400 text-lg">
              From IoT deployments to full digital transformations — here&apos;s a selection of the
              work we&apos;re proud of.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-6 border-b" style={{ borderColor: '#1F2937', backgroundColor: '#060A12' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button
                key={c}
                className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors"
                style={
                  i === 0
                    ? { backgroundColor: '#1DBCD6', borderColor: '#1DBCD6', color: '#fff' }
                    : { backgroundColor: 'transparent', borderColor: '#374151', color: '#9CA3AF' }
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                {p.isReal ? <RealCard p={p} /> : <PlaceholderCard p={p} />}
              </Reveal>
            ))}
          </div>

          {/* Scale metrics strip */}
          <Reveal>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: '200+', label: 'Locations Monitored', sub: 'OilCop tank network', color: '#1DBCD6' },
                { value: '80%', label: 'Admin Effort Reduced', sub: 'VWI visa processing', color: '#5CB85C' },
                { value: '6×', label: 'Throughput Gain', sub: 'MubarakRishte platform', color: '#1DBCD6' },
                { value: '10+', label: 'IoT Modules per Platform', sub: 'iGreen smart building', color: '#5CB85C' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl p-6 text-center border"
                  style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
                >
                  <p className="text-4xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: m.color }}>
                    {m.value}
                  </p>
                  <p className="text-sm font-semibold text-white leading-tight">{m.label}</p>
                  <p className="text-xs text-gray-500 mt-1">{m.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Enterprise callout */}
          <Reveal>
            <div
              className="mt-6 rounded-2xl p-10 border"
              style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-white font-semibold text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Need a Technical Deep-Dive?
                  </p>
                  <p className="text-gray-400 text-sm max-w-lg">
                    We can walk enterprise and procurement teams through architecture diagrams, data flow specs, and scale benchmarks for any project. More detailed case studies are also in preparation.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="btn-primary flex-shrink-0 px-6 py-3 rounded-xl text-sm"
                >
                  Request a Briefing →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </div>
  );
}
