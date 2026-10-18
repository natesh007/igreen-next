import type { ReactNode } from 'react';

export type ProjectArtKind =
  | 'building'
  | 'visa'
  | 'hotel'
  | 'twin'
  | 'firepump'
  | 'cold'
  | 'restaurant'
  | 'matching'
  | 'tank';

const CYAN = '#1DBCD6';
const GREEN = '#5CB85C';
const PANEL = '#0A0F1C';

// Decorative dashboard-style mockups on a 320×160 canvas (no figures — purely illustrative).
function Panel({ x, y, w, h, c = CYAN }: { x: number; y: number; w: number; h: number; c?: string }) {
  return <rect x={x} y={y} width={w} height={h} rx="6" fill={PANEL} stroke={c} strokeOpacity=".45" />;
}

function Bars({ x, y, vals, c }: { x: number; y: number; vals: number[]; c: string }) {
  return (
    <>
      {vals.map((v, i) => (
        <rect key={i} x={x + i * 9} y={y - v} width="5" height={v} rx="1.5" fill={c} fillOpacity={0.35 + (i % 3) * 0.2} stroke="none" />
      ))}
    </>
  );
}

function Gauge({ cx, cy, r, c, level }: { cx: number; cy: number; r: number; c: string; level: number }) {
  const a = Math.PI * (1 - level);
  const x = cx + r * Math.cos(a);
  const y = cy - r * Math.sin(a);
  return (
    <>
      <path d={`M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r} ${cy}`} stroke="currentColor" strokeOpacity=".2" />
      <path d={`M${cx - r} ${cy} A${r} ${r} 0 0 1 ${x} ${y}`} stroke={c} strokeWidth="3" />
      <path d={`M${cx} ${cy} L${x} ${y}`} stroke={c} />
      <circle cx={cx} cy={cy} r="2.5" fill={c} stroke="none" />
    </>
  );
}

function Line({ x, y, pts, c }: { x: number; y: number; pts: number[]; c: string }) {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${x + i * 12} ${y - p}`).join(' ');
  return <path d={d} stroke={c} strokeWidth="1.8" />;
}

function scene(kind: ProjectArtKind): ReactNode {
  switch (kind) {
    case 'building':
      return (
        <>
          <path d="M40 130V60l30-14 30 14v70M70 46V30M100 130H40" stroke={CYAN} fill={`${CYAN}10`} />
          {[0, 1, 2].map((r) => [0, 1].map((c) => <rect key={`${r}${c}`} x={50 + c * 22} y={70 + r * 18} width="12" height="10" rx="2" stroke={c ? GREEN : CYAN} strokeOpacity=".8" />))}
          <Panel x={130} y={28} w={86} h={52} />
          <Bars x={140} y={72} vals={[14, 24, 18, 32, 22, 36, 28, 20]} c={CYAN} />
          <Panel x={226} y={28} w={64} h={52} c={GREEN} />
          <Gauge cx={258} cy={66} r={18} c={GREEN} level={0.7} />
          <Panel x={130} y={92} w={160} h={40} />
          <Line x={140} y={122} pts={[4, 10, 6, 16, 12, 8, 18, 14, 22, 12, 26, 20]} c={CYAN} />
          {[[48, 120], [78, 120], [24, 62]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3" fill={GREEN} stroke="none" />)}
        </>
      );
    case 'visa':
      return (
        <>
          <rect x="30" y="30" width="62" height="86" rx="6" fill={PANEL} stroke={CYAN} />
          <circle cx="61" cy="62" r="12" stroke={CYAN} />
          <path d="M42 100h38M42 108h24M47 84h28" stroke={CYAN} strokeOpacity=".6" />
          <path d="M104 73h38" stroke={GREEN} strokeDasharray="4 4" />
          <path d="M136 67l8 6-8 6" stroke={GREEN} />
          <Panel x={152} y={34} w={136} h={80} c={GREEN} />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <circle cx="170" cy={52 + i * 17} r="5" stroke={GREEN} />
              {i < 3 && <path d="M167.5 52.5l2 2 3.5-4" transform={`translate(0 ${i * 17})`} stroke={GREEN} />}
              <path d={`M184 ${52 + i * 17}h${70 - i * 12}`} stroke="currentColor" strokeOpacity=".35" />
            </g>
          ))}
          <circle cx="262" cy="108" r="14" fill={PANEL} stroke={GREEN} />
          <path d="M255 108l5 5 9-10" stroke={GREEN} strokeWidth="2" />
        </>
      );
    case 'hotel':
      return (
        <>
          <rect x="34" y="30" width="60" height="100" rx="4" fill={`${CYAN}10`} stroke={CYAN} />
          {[0, 1, 2, 3, 4].map((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={42 + c * 17} y={38 + r * 18} width="10" height="10" rx="1.5" stroke={(r + c) % 3 ? CYAN : GREEN} strokeOpacity=".8" />))}
          <path d="M104 80h28" stroke={CYAN} strokeDasharray="3 4" />
          <Panel x={138} y={26} w={150} h={44} />
          <Line x={148} y={62} pts={[6, 14, 10, 20, 16, 12, 22, 18, 26, 20, 30, 24]} c={CYAN} />
          <Panel x={138} y={80} w={70} h={50} c={GREEN} />
          <Gauge cx={173} cy={116} r={20} c={GREEN} level={0.55} />
          <Panel x={218} y={80} w={70} h={50} />
          <Bars x={228} y={122} vals={[10, 22, 16, 28, 20, 34]} c={CYAN} />
        </>
      );
    case 'twin':
      return (
        <>
          <path d="M60 104l60-30 60 30-60 30z" fill={`${GREEN}10`} stroke={GREEN} />
          <path d="M60 104V86l60-30 60 30v18M120 74v60" stroke={GREEN} strokeOpacity=".5" />
          <path d="M82 78l38-19 38 19" stroke={CYAN} strokeOpacity=".7" />
          {[[96, 94], [120, 112], [146, 98], [120, 82]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="5" fill={PANEL} stroke={CYAN} />
              <path d={`M${x} ${y - 5}V${y - 20}`} stroke={CYAN} strokeOpacity=".5" />
            </g>
          ))}
          <Panel x={206} y={30} w={84} h={30} />
          <path d="M214 40h40M214 50h26" stroke={CYAN} strokeOpacity=".6" />
          <Panel x={206} y={68} w={84} h={30} c={GREEN} />
          <path d="M214 78h40M214 88h26" stroke={GREEN} strokeOpacity=".6" />
          <rect x="206" y="106" width="30" height="30" rx="4" stroke="currentColor" strokeOpacity=".5" />
          <path d="M212 112h8v8h-8zM222 112h8v8h-8zM212 122h8v8h-8z" stroke={CYAN} />
        </>
      );
    case 'firepump':
      return (
        <>
          <Panel x={30} y={28} w={78} h={64} />
          <Gauge cx={69} cy={78} r={24} c={CYAN} level={0.62} />
          <Panel x={118} y={28} w={78} h={64} c={GREEN} />
          <Gauge cx={157} cy={78} r={24} c={GREEN} level={0.8} />
          <Panel x={206} y={28} w={84} h={64} />
          <rect x="222" y="40" width="14" height="40" rx="3" stroke={CYAN} />
          <rect x="224" y="58" width="10" height="20" rx="2" fill={CYAN} fillOpacity=".5" stroke="none" />
          <rect x="248" y="40" width="14" height="40" rx="3" stroke={GREEN} />
          <rect x="250" y="50" width="10" height="28" rx="2" fill={GREEN} fillOpacity=".5" stroke="none" />
          <Panel x={30} y={102} w={260} h={34} />
          {[0, 1, 2, 3, 4, 5].map((i) => <circle key={i} cx={50 + i * 18} cy="119" r="4" fill={i === 4 ? '#F87171' : GREEN} fillOpacity=".75" stroke="none" />)}
          <path d="M170 119h108" stroke="currentColor" strokeOpacity=".3" />
        </>
      );
    case 'cold':
      return (
        <>
          <rect x="30" y="30" width="70" height="100" rx="6" fill={`${CYAN}10`} stroke={CYAN} />
          <path d="M30 70h70M65 38v24" stroke={CYAN} strokeOpacity=".6" />
          <path d="M65 84v28M53 90l24 16M77 90L53 106" stroke={CYAN} />
          <Panel x={112} y={30} w={178} h={64} />
          <Line x={124} y={80} pts={[30, 26, 28, 20, 24, 28, 18, 16, 22, 14, 18, 22]} c={CYAN} />
          <path d="M124 52h154" stroke="#F87171" strokeOpacity=".5" strokeDasharray="4 4" />
          <Panel x={112} y={104} w={84} h={26} c={GREEN} />
          <path d="M122 117h30M122 123h20" stroke={GREEN} strokeOpacity=".7" />
          <Panel x={206} y={104} w={84} h={26} />
          <circle cx="222" cy="117" r="5" stroke={CYAN} />
          <path d="M234 117h42" stroke="currentColor" strokeOpacity=".35" />
        </>
      );
    case 'restaurant':
      return (
        <>
          <path d="M34 66h72v10a36 36 0 01-72 0z" fill={`${CYAN}10`} stroke={CYAN} />
          <path d="M44 56c0-8 8-8 8-16M62 56c0-8 8-8 8-16M80 56c0-8 8-8 8-16" stroke={GREEN} strokeOpacity=".8" />
          <path d="M26 66h88M70 112v14M54 126h32" stroke={CYAN} />
          <Panel x={130} y={28} w={78} h={50} />
          <path d="M142 66l12-14 10 8 14-20" stroke={GREEN} strokeWidth="1.8" />
          <Panel x={218} y={28} w={72} h={50} c={GREEN} />
          <Gauge cx={254} cy={66} r={20} c={GREEN} level={0.5} />
          <Panel x={130} y={88} w={160} h={44} />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={142 + i * 50} y="98" width="40" height="24" rx="4" stroke={i === 1 ? GREEN : CYAN} strokeOpacity=".8" />
              <path d={`M${148 + i * 50} 110h28`} stroke="currentColor" strokeOpacity=".35" />
            </g>
          ))}
        </>
      );
    case 'matching':
      return (
        <>
          <rect x="32" y="34" width="74" height="92" rx="8" fill={PANEL} stroke={CYAN} />
          <circle cx="69" cy="64" r="14" stroke={CYAN} />
          <path d="M44 106h50M52 94h34" stroke={CYAN} strokeOpacity=".6" />
          <rect x="214" y="34" width="74" height="92" rx="8" fill={PANEL} stroke={GREEN} />
          <circle cx="251" cy="64" r="14" stroke={GREEN} />
          <path d="M226 106h50M234 94h34" stroke={GREEN} strokeOpacity=".6" />
          <path d="M112 80h28M208 80h-28" stroke="currentColor" strokeOpacity=".4" strokeDasharray="3 4" />
          <circle cx="160" cy="80" r="26" fill={PANEL} stroke={`url(#mg)`} />
          <defs>
            <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={CYAN} />
              <stop offset="1" stopColor={GREEN} />
            </linearGradient>
          </defs>
          <path d="M160 92c-12-8-16-14-16-20a8 8 0 0116-3 8 8 0 0116 3c0 6-4 12-16 20z" stroke={GREEN} fill={`${GREEN}20`} />
        </>
      );
    case 'tank':
      return (
        <>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={36 + i * 52} y="40" width="38" height="84" rx="10" fill={PANEL} stroke={i === 1 ? GREEN : CYAN} />
              <rect x={40 + i * 52} y={[70, 56, 88][i]} width="30" height={[50, 64, 32][i]} rx="6" fill={i === 1 ? GREEN : CYAN} fillOpacity=".3" stroke="none" />
              <path d={`M${40 + i * 52} ${[70, 56, 88][i]}h30`} stroke={i === 1 ? GREEN : CYAN} />
            </g>
          ))}
          <Panel x={200} y={30} w={90} h={52} />
          <Line x={210} y={72} pts={[10, 16, 12, 24, 20, 18, 28, 24, 22]} c={CYAN} />
          <Panel x={200} y={92} w={90} h={38} c={GREEN} />
          <circle cx="216" cy="111" r="5" stroke={GREEN} />
          <path d="M228 106h50M228 116h34" stroke={GREEN} strokeOpacity=".6" />
        </>
      );
  }
}

export default function ProjectArt({ kind, color = CYAN }: { kind: ProjectArtKind; color?: string }) {
  return (
    <div
      className="relative w-full h-40 overflow-hidden"
      style={{ background: `radial-gradient(ellipse at 30% 0%, ${color}22, transparent 65%), #0B1220` }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <svg
        viewBox="0 0 320 160"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative h-full w-full text-white"
        focusable="false"
      >
        {scene(kind)}
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-8" style={{ background: 'linear-gradient(to top, #111827, transparent)' }} />
    </div>
  );
}
