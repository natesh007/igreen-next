// Faint node-and-circuit pattern for CTA-style cards. Decorative, no external assets.
const NODES: [number, number, string][] = [
  [30, 40, '#1DBCD6'],
  [90, 70, '#F59E0B'],
  [60, 120, '#8B5CF6'],
  [140, 100, '#5CB85C'],
  [110, 160, '#EC4899'],
  [180, 40, '#1DBCD6'],
];
const LINKS = [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [1, 5], [3, 5]];

function Cluster({ className, flip }: { className: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 210 200"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`absolute pointer-events-none ${className}${flip ? ' -scale-x-100' : ''}`}
    >
      {LINKS.map(([a, b]) => (
        <path
          key={`${a}-${b}`}
          d={`M${NODES[a][0]} ${NODES[a][1]} L${NODES[b][0]} ${NODES[b][1]}`}
          stroke="#9CA3AF"
          strokeOpacity="0.35"
          strokeDasharray="3 4"
        />
      ))}
      {NODES.map(([x, y, c]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="8" stroke={c} strokeOpacity="0.35" />
          <circle cx={x} cy={y} r="3" fill={c} />
        </g>
      ))}
    </svg>
  );
}

export default function AbstractBackdrop() {
  return (
    <>
      <Cluster className="hidden md:block -left-4 -top-2 w-56 h-52 opacity-40" />
      <Cluster className="hidden md:block -right-4 -bottom-2 w-56 h-52 opacity-40" flip />
    </>
  );
}
