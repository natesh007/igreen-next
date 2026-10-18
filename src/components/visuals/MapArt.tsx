// Decorative SVG art for About, Contact and Careers. All aria-hidden, no external assets.

const CONTINENTS = [
  // [x, y] on a 360×180 equirectangular grid (x = lon+180, y = 90-lat), deliberately coarse
  '12,24 40,20 85,18 120,30 125,42 110,48 100,60 98,66 83,72 92,75 102,82 80,70 62,58 55,45 45,32 15,30',
  '100,82 120,80 145,96 140,112 122,128 112,145 106,135 108,110 99,95',
  '170,54 180,40 190,32 210,20 220,24 220,45 208,54',
  '163,69 175,54 210,59 223,78 231,79 220,105 212,120 198,125 192,100 188,86 172,86',
  '220,24 250,15 290,13 350,22 320,50 302,62 288,80 278,74 260,82 252,68 238,66 230,60 215,54 225,45',
  '293,112 310,102 330,110 333,120 320,128 295,124',
];

const PINS = [
  { x: 258, y: 73, c: '#F59E0B' }, // India (Hyderabad · Kakinada)
  { x: 82, y: 52, c: '#8B5CF6' }, // USA
  { x: 125, y: 100, c: '#EC4899' }, // South America
];

export function MapArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 180"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <pattern id="map-dots" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.95" fill="#1DBCD6" />
        </pattern>
        <clipPath id="map-land">
          {CONTINENTS.map((p) => (
            <polygon key={p} points={p} />
          ))}
        </clipPath>
        <linearGradient id="map-arc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <rect width="360" height="180" fill="url(#map-dots)" clipPath="url(#map-land)" opacity="0.55" />
      <path d="M258 73 Q170 10 82 52" stroke="url(#map-arc)" strokeWidth="1" strokeDasharray="3 3" opacity="0.9" />
      <path d="M258 73 Q200 120 125 100" stroke="#EC4899" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
      {PINS.map((p) => (
        <g key={p.c}>
          <circle cx={p.x} cy={p.y} r="9" stroke={p.c} strokeWidth="0.8" opacity="0.4" />
          <circle cx={p.x} cy={p.y} r="5" stroke={p.c} strokeWidth="0.8" opacity="0.7" />
          <circle cx={p.x} cy={p.y} r="2.2" fill={p.c} />
        </g>
      ))}
    </svg>
  );
}

// Map-pin with radar rings — office cards.
export function PinArt({ color, className }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" strokeWidth="1.4" aria-hidden="true" focusable="false" className={className}>
      <circle cx="40" cy="58" r="22" stroke={color} opacity="0.25" />
      <circle cx="40" cy="58" r="14" stroke={color} opacity="0.4" />
      <ellipse cx="40" cy="58" rx="6" ry="2.5" stroke={color} opacity="0.7" />
      <path d="M40 54c-9-9-13-15-13-21a13 13 0 0126 0c0 6-4 12-13 21z" fill={`${color}22`} stroke={color} strokeLinejoin="round" />
      <circle cx="40" cy="33" r="4.5" stroke={color} />
    </svg>
  );
}

// Brochure cover thumbnail — About download banner.
export function BrochureArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 72" fill="none" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <linearGradient id="bro-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1DBCD6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="54" height="70" rx="5" fill="#0A0F1C" stroke="url(#bro-g)" strokeWidth="1.5" />
      <rect x="1" y="1" width="54" height="30" rx="5" fill="url(#bro-g)" opacity="0.22" />
      <circle cx="40" cy="14" r="7" stroke="#F59E0B" strokeWidth="1.2" />
      <circle cx="40" cy="14" r="2" fill="#F59E0B" />
      <path d="M8 44h28M8 50h40M8 56h32" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <rect x="8" y="10" width="16" height="3" rx="1.5" fill="#1DBCD6" />
      <rect x="8" y="17" width="10" height="3" rx="1.5" fill="#5CB85C" />
      <path d="M8 64h12" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export type PerkKind = 'flex' | 'learn' | 'projects' | 'growth';

// Careers perk icons (large, faint, top-right of the perk card).
export function PerkArt({ kind, color, className }: { kind: PerkKind; color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {kind === 'flex' && (
        <>
          <rect x="10" y="18" width="44" height="28" rx="3" />
          <path d="M4 50h56" />
          <path d="M24 32l8-7 8 7v8H24z" />
        </>
      )}
      {kind === 'learn' && (
        <>
          <path d="M4 24l28-12 28 12-28 12z" />
          <path d="M16 31v12c4 5 12 8 16 8s12-3 16-8V31" />
          <path d="M60 24v14" />
        </>
      )}
      {kind === 'projects' && (
        <>
          <rect x="18" y="18" width="28" height="28" rx="5" />
          <rect x="26" y="26" width="12" height="12" rx="2" />
          <path d="M24 18v-8M32 18v-8M40 18v-8M24 54v-8M32 54v-8M40 54v-8M18 24h-8M18 32h-8M18 40h-8M54 24h-8M54 32h-8M54 40h-8" />
        </>
      )}
      {kind === 'growth' && (
        <>
          <path d="M8 52h12V40h12V28h12V16h12" />
          <path d="M44 16h12v12" />
          <path d="M8 58h48" opacity="0.5" />
        </>
      )}
    </svg>
  );
}
