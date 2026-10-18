import type { ReactNode } from 'react';

// Full-width illustration strip for the top of a card. Pass `bleed` matching the card padding
// (e.g. "-mx-6 -mt-6 mb-4") so it runs edge to edge; the card needs overflow-hidden.
export default function ArtBanner({
  color,
  className = '',
  children,
}: {
  color: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative h-28 flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: `radial-gradient(ellipse 70% 100% at 50% 0%, ${color}2E, transparent 75%), #0B1220` }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border" style={{ borderColor: `${color}30` }} />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border" style={{ borderColor: `${color}18` }} />
      <div className="relative">{children}</div>
      <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${color}55, transparent)` }} />
    </div>
  );
}
