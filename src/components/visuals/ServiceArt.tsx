import type { ReactNode } from 'react';

const CYAN = '#1DBCD6';
const GREEN = '#5CB85C';

interface ServiceArtProps {
  slug: string;
  color?: string;
  className?: string;
}

// Two-tone line illustrations on a 120×120 grid. `c` = service accent, GREEN = secondary.
function art(slug: string, c: string): ReactNode {
  switch (slug) {
    case 'iot-solutions':
      return (
        <>
          {[[20, 88], [48, 100], [76, 100], [100, 88]].map(([x, y], i) => (
            <g key={i}>
              <path d={`M${x} ${y} L60 56`} stroke={c} strokeOpacity=".5" strokeDasharray="3 4" />
              <circle cx={x} cy={y} r="7" fill="#0A0F1C" stroke={GREEN} />
              <circle cx={x} cy={y} r="2.5" fill={GREEN} stroke="none" />
            </g>
          ))}
          <rect x="46" y="42" width="28" height="28" rx="6" fill="#0A0F1C" stroke={c} />
          <path d="M54 52h12M54 56h12M54 60h7" stroke={c} />
          <path d="M60 42V28" stroke={c} />
          <path d="M42 20a26 26 0 0136 0M49 25a16 16 0 0122 0" stroke={c} strokeOpacity=".8" />
          <circle cx="60" cy="30" r="2.5" fill={c} stroke="none" />
        </>
      );
    case 'connected-devices':
      return (
        <>
          <path d="M60 60L22 34M60 60L98 34M60 60L22 88M60 60L98 88M22 34L22 88M98 34L98 88" stroke={c} strokeOpacity=".4" strokeDasharray="3 4" />
          <rect x="44" y="44" width="32" height="32" rx="8" fill="#0A0F1C" stroke={c} />
          <circle cx="60" cy="60" r="7" stroke={GREEN} />
          <rect x="10" y="24" width="24" height="18" rx="3" fill="#0A0F1C" stroke={GREEN} />
          <rect x="86" y="24" width="24" height="18" rx="3" fill="#0A0F1C" stroke={c} />
          <circle cx="22" cy="88" r="9" fill="#0A0F1C" stroke={c} />
          <rect x="88" y="78" width="20" height="20" rx="4" fill="#0A0F1C" stroke={GREEN} />
          <path d="M15 33h14M92 33h12" stroke="currentColor" strokeOpacity=".35" />
        </>
      );
    case 'smart-manufacturing':
      return (
        <>
          <path d="M10 92h100" stroke={c} strokeOpacity=".5" />
          <path d="M22 92V66l16 8V62l16 8V54l16 8V40h24v52" stroke={c} fill={`${c}12`} />
          <path d="M82 40V28M90 40V24" stroke={c} />
          <circle cx="86" cy="20" r="3" stroke={GREEN} />
          <circle cx="36" cy="30" r="12" stroke={GREEN} />
          <circle cx="36" cy="30" r="4" stroke={GREEN} />
          <path d="M36 14v4M36 42v4M20 30h4M48 30h4M25 19l3 3M44 38l3 3M25 41l3-3M44 22l3-3" stroke={GREEN} />
          <path d="M62 84l8-8 7 5 9-11" stroke={GREEN} />
        </>
      );
    case 'edge-computing':
      return (
        <>
          <path d="M60 14v18" stroke={c} strokeOpacity=".6" strokeDasharray="3 4" />
          <path d="M38 20a14 14 0 0110-26 18 18 0 0132 4 12 12 0 01-2 22z" transform="translate(6 12) scale(.85)" stroke={c} strokeOpacity=".7" />
          <rect x="36" y="48" width="48" height="36" rx="6" fill="#0A0F1C" stroke={c} />
          <rect x="46" y="58" width="28" height="16" rx="3" stroke={GREEN} />
          <path d="M42 84v8M54 84v8M66 84v8M78 84v8M30 56h6M30 66h6M84 56h6M84 66h6" stroke={c} />
          <path d="M52 66h5l3-5 4 9 3-4h3" stroke={GREEN} />
        </>
      );
    case 'digital-transformation':
      return (
        <>
          <rect x="10" y="22" width="30" height="76" rx="4" stroke="currentColor" strokeOpacity=".35" strokeDasharray="3 4" />
          <path d="M16 36h18M16 46h12M16 56h18M16 66h10" stroke="currentColor" strokeOpacity=".4" />
          <path d="M46 60h12" stroke={c} />
          <path d="M54 55l6 5-6 5" stroke={c} />
          <rect x="66" y="22" width="44" height="76" rx="6" fill="#0A0F1C" stroke={c} />
          <path d="M74 84l10-12 8 6 10-16" stroke={GREEN} />
          <rect x="74" y="30" width="12" height="12" rx="2" stroke={c} />
          <rect x="92" y="30" width="10" height="12" rx="2" stroke={GREEN} />
          <path d="M74 50h28" stroke={c} strokeOpacity=".5" />
        </>
      );
    case 'web-applications':
      return (
        <>
          <rect x="12" y="20" width="96" height="70" rx="8" fill="#0A0F1C" stroke={c} />
          <path d="M12 36h96" stroke={c} />
          <circle cx="22" cy="28" r="2" fill={GREEN} stroke="none" />
          <circle cx="30" cy="28" r="2" fill={c} stroke="none" />
          <circle cx="38" cy="28" r="2" fill="currentColor" fillOpacity=".4" stroke="none" />
          <rect x="22" y="46" width="24" height="34" rx="3" stroke={GREEN} />
          <path d="M54 50h44M54 60h32M54 70h38" stroke={c} strokeOpacity=".7" />
          <path d="M44 98h32M60 90v8" stroke={c} />
          <path d="M70 80l-5-4 5-4M80 72l5 4-5 4" stroke={GREEN} />
        </>
      );
    case 'mobile-apps':
      return (
        <>
          <rect x="34" y="10" width="52" height="100" rx="10" fill="#0A0F1C" stroke={c} />
          <path d="M52 18h16" stroke={c} strokeOpacity=".6" />
          <rect x="42" y="30" width="36" height="22" rx="4" stroke={GREEN} />
          <path d="M42 62h36M42 72h24" stroke={c} strokeOpacity=".7" />
          <circle cx="50" cy="90" r="5" stroke={c} />
          <circle cx="70" cy="90" r="5" stroke={GREEN} />
          <path d="M96 42a14 14 0 010 24M104 36a24 24 0 010 36" stroke={c} strokeOpacity=".6" />
          <path d="M24 42a14 14 0 000 24M16 36a24 24 0 000 36" stroke={GREEN} strokeOpacity=".6" />
        </>
      );
    case 'cloud-solutions':
      return (
        <>
          <path d="M34 62a14 14 0 012-27 22 22 0 0142-4 16 16 0 011 31z" fill={`${c}12`} stroke={c} />
          <path d="M60 62v12M40 74v10M80 74v10" stroke={c} strokeOpacity=".6" strokeDasharray="3 4" />
          <rect x="48" y="74" width="24" height="10" rx="2" fill="#0A0F1C" stroke={GREEN} />
          <rect x="28" y="84" width="24" height="10" rx="2" fill="#0A0F1C" stroke={c} />
          <rect x="68" y="84" width="24" height="10" rx="2" fill="#0A0F1C" stroke={c} />
          <path d="M50 92h0M32 89h0M72 89h0" stroke={GREEN} strokeWidth="3" />
          <path d="M22 100h76" stroke={c} strokeOpacity=".35" />
        </>
      );
    default:
      return <circle cx="60" cy="60" r="20" stroke={c} />;
  }
}

export default function ServiceArt({ slug, color = CYAN, className }: ServiceArtProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {art(slug, color)}
    </svg>
  );
}
