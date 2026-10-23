'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useMotion } from '../../fx/motion';

/**
 * Slide 1 — smart building. A night render with four sensors (water, energy, tank, pump) that send readings
 * along glowing lines to the platform dashboard and to the building-manager phone app. Alerts on the phone
 * are all building management. Values are illustrative and tick gently.
 */

const SENSORS = [
  { key: 'water', name: 'Water meter', x: 9, y: 48.3, side: 'r' },
  { key: 'energy', name: 'Energy meter', x: 59.3, y: 55.6, side: 'l' },
  { key: 'tank', name: 'Tank level', x: 88.6, y: 8.7, side: 'l' },
  { key: 'pump', name: 'Pump', x: 68, y: 74.3, side: 'l' },
] as const;

// flow lines in a 125 x 100 box (stage % with x scaled by 1.25)
const FLOWS = [
  'M11.3 48.3 C 11.3 43 17 40 21 35.5',
  'M74.1 55.6 C 70 46 65 38 59 32',
  'M110.8 8.7 C 96 3 76 9 61.5 14',
  'M85 74.3 C 88 74.5 90.5 73 93 70.5',
];

const ALERTS = [
  { c: '#1dbcd6', t: 'Tank level', s: 'Filling normally' },
  { c: '#5cb85c', t: 'Pump 1', s: 'Started automatically' },
  { c: '#ffb300', t: 'Water usage', s: '12 % above daily average' },
  { c: '#1dbcd6', t: 'Energy meter', s: 'Peak load avoided' },
  { c: '#5cb85c', t: 'Valve 5', s: 'Closed · no leak found' },
  { c: '#ffb300', t: 'AHU filter', s: 'Service due in 3 days' },
];

const SPARK = [18, 22, 20, 27, 24, 31, 29, 36, 33, 40, 37, 44, 41, 47];
const BARS = [42, 58, 36, 66, 52, 74, 48];

function useTicker(on: boolean) {
  const [v, setV] = useState({ water: 41, energy: 318, tank: 70, pump: 7.2, age: 1, n: 2 });
  useEffect(() => {
    if (!on) return;
    let tick = 0;
    const id = window.setInterval(() => {
      tick += 1;
      setV((p) => ({
        water: Math.round(Math.min(46, Math.max(36, p.water + (Math.random() - 0.5) * 4))),
        energy: Math.round(Math.min(340, Math.max(300, p.energy + (Math.random() - 0.5) * 14))),
        tank: Math.min(74, Math.max(66, Math.round(p.tank + (Math.random() - 0.45) * 1.6))),
        pump: Math.round(Math.min(7.6, Math.max(6.8, p.pump + (Math.random() - 0.5) * 0.3)) * 10) / 10,
        age: (p.age % 4) + 1,
        n: tick % 2 === 0 ? p.n + 1 : p.n, // a new alert every ~3 s
      }));
    }, 1600);
    return () => window.clearInterval(id);
  }, [on]);
  return v;
}

function Toast({ a }: { a: (typeof ALERTS)[number] }) {
  return (
    <div className="al" style={{ ['--c' as string]: a.c }}>
      <i />
      <span>
        <b>{a.t}</b>
        <small>{a.s}</small>
      </span>
    </div>
  );
}

export default function BuildingSlide() {
  const on = useMotion();
  const v = useTicker(on);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    if (on) el.unpauseAnimations();
    else el.pauseAnimations();
  }, [on]);

  const value = (k: (typeof SENSORS)[number]['key']) =>
    k === 'water' ? `${v.water} L/min` : k === 'energy' ? `${v.energy} kW` : k === 'tank' ? `${v.tank} %` : `${v.pump} bar`;
  const alert = (back: number) => ALERTS[(((v.n - back) % ALERTS.length) + ALERTS.length) % ALERTS.length];
  const ringOffset = 100 - v.tank;

  return (
    <div className="slide bld" role="img" aria-label="Animated illustration: sensors on a connected building send live readings to the iGreen platform dashboard and to a building-manager mobile app that shows water, pump, tank and energy alerts.">
      <div className="scene" aria-hidden="true">
        <Image src="/images/home/night-building.webp" alt="" fill sizes="(min-width: 960px) 1100px, 175vw" priority quality={72} />
      </div>
      <span className="vig" aria-hidden="true" />
      <span className="scan" aria-hidden="true" />
      <span className="tw tw1" aria-hidden="true" />
      <span className="tw tw2" aria-hidden="true" />
      <span className="tw tw3" aria-hidden="true" />

      <svg ref={svgRef} className="flows" viewBox="0 0 125 100" aria-hidden="true">
        {FLOWS.map((d, i) => (
          <g key={d}>
            <path className="ln" d={d} />
            <circle r="0.95" className="dot">
              <animateMotion dur={`${2.6 + i * 0.35}s`} begin={`${i * 0.5}s`} repeatCount="indefinite" path={d} />
            </circle>
          </g>
        ))}
      </svg>

      {SENSORS.map((s) => (
        <div key={s.key} className={`hs ${s.side}`} style={{ left: `${s.x}%`, top: `${s.y}%` }} aria-hidden="true">
          <i className="pin" />
          <span className="chip">
            <small>{s.name}</small>
            <b>{value(s.key)}</b>
          </span>
        </div>
      ))}

      <div className="dash" aria-hidden="true">
        <div className="hd">
          <span>iGreen platform</span>
          <em>
            <i />
            Live
          </em>
        </div>
        <svg className="spark" viewBox="0 0 140 48" preserveAspectRatio="none">
          <defs>
            <linearGradient id="hl-sp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1dbcd6" stopOpacity="0.55" />
              <stop offset="1" stopColor="#1dbcd6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points={`0,48 ${SPARK.map((y, i) => `${i * (140 / (SPARK.length - 1))},${48 - y}`).join(' ')} 140,48`} fill="url(#hl-sp)" />
          <polyline points={SPARK.map((y, i) => `${i * (140 / (SPARK.length - 1))},${48 - y}`).join(' ')} fill="none" stroke="#7ff0ff" strokeWidth="1.6" strokeLinejoin="round" pathLength="1" />
        </svg>
        <div className="ft">
          <span>Energy today</span>
          <b>{v.energy} kW</b>
        </div>
        <p className="up">Updated {v.age}s ago · all systems normal</p>
      </div>

      {/* what the platform is watching, so the lower-left of the scene is not empty */}
      <ul className="legend" aria-hidden="true">
        {SENSORS.map((s) => (
          <li key={s.key}>
            <i />
            {s.name}
            <em>online</em>
          </li>
        ))}
      </ul>

      {/* building-manager app */}
      <div className="phone" aria-hidden="true">
        <div className="top">
          <span>
            <i />
            Block A
          </span>
          <em>Live</em>
        </div>
        <div className="tiles">
          <div className="tile">
            <svg viewBox="0 0 36 36" className="gauge">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(20,17,28,.12)" strokeWidth="4" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1dbcd6" strokeWidth="4" strokeLinecap="round" pathLength="100" strokeDasharray="100" strokeDashoffset={ringOffset} transform="rotate(-90 18 18)" style={{ transition: 'stroke-dashoffset 1.2s ease' }} />
            </svg>
            <span>
              <b>{v.tank}%</b>
              <small>Tank</small>
            </span>
          </div>
          <div className="tile">
            <span className="sw">
              <u />
            </span>
            <span>
              <b>Pump</b>
              <small>On</small>
            </span>
          </div>
        </div>
        <div className="mini">
          <small>Energy · today</small>
          <div className="bars">
            {BARS.map((h, i) => (
              <u key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.18}s` }} />
            ))}
          </div>
        </div>
        <div className="list">
          <p>Alerts</p>
          <Toast key={v.n} a={alert(0)} />
          <Toast key={v.n - 1} a={alert(1)} />
          <Toast key={v.n - 2} a={alert(2)} />
        </div>
      </div>

      {/* phones are narrow: the same alerts run along the bottom instead */}
      <div className="bar" aria-hidden="true">
        <Toast key={v.n} a={alert(0)} />
      </div>
    </div>
  );
}
