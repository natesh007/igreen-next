'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { setMotion, useMotion } from '../fx/motion';

/**
 * Hero visual: "iGreen live" — one scene that shows what we do. A real-estate IoT scene (night building
 * with tank, panels and pumps) whose sensors send readings along glowing lines to a live platform dashboard
 * and to the phone app, while notifications from other iGreen products (cold chain, fire safety, visa,
 * matchmaking) arrive. Values are illustrative and tick gently; everything is decorative (aria-hidden)
 * and pauses with the site-wide animation switch.
 */

// sensor spots, % of the stage (the building render is cropped to a 5:4 window)
const SENSORS = [
  { key: 'water', name: 'Water meter', x: 9, y: 48.3, side: 'r' },
  { key: 'energy', name: 'Energy meter', x: 59.3, y: 55.6, side: 'l' },
  { key: 'tank', name: 'Tank level', x: 88.6, y: 8.7, side: 'l' },
  { key: 'pump', name: 'Pump', x: 68, y: 74.3, side: 'l' },
] as const;

// flow lines in a 125 x 100 box (stage % with x scaled by 1.25) from each sensor to the platform / phone
const FLOWS = [
  'M11.3 48.3 C 11.3 43 17 40 21 35.5',
  'M74.1 55.6 C 70 46 65 38 59 32',
  'M110.8 8.7 C 96 3 76 9 61.5 14',
  'M85 74.3 C 88 74.5 90.5 73 93 70.5',
];

const TOASTS = [
  { c: '#1dbcd6', t: 'Cold room 2', s: '−18 °C · normal' },
  { c: '#5cb85c', t: 'Fire pump', s: 'Ready · pressure OK' },
  { c: '#ffb300', t: 'Visa file', s: 'Documents verified' },
  { c: '#ff4fa3', t: 'Matchmaking', s: 'New ranked matches' },
];

const SPARK = [18, 22, 20, 27, 24, 31, 29, 36, 33, 40, 37, 44, 41, 47];

function useTicker(on: boolean) {
  const [v, setV] = useState({ water: 41, energy: 318, tank: 70, pump: 7.2, age: 1 });
  useEffect(() => {
    if (!on) return;
    const id = window.setInterval(() => {
      setV((p) => ({
        water: Math.round(Math.min(46, Math.max(36, p.water + (Math.random() - 0.5) * 4))),
        energy: Math.round(Math.min(340, Math.max(300, p.energy + (Math.random() - 0.5) * 14))),
        tank: Math.min(74, Math.max(66, Math.round(p.tank + (Math.random() - 0.45) * 1.6))),
        pump: Math.round(Math.min(7.6, Math.max(6.8, p.pump + (Math.random() - 0.5) * 0.3)) * 10) / 10,
        age: (p.age % 4) + 1,
      }));
    }, 1600);
    return () => window.clearInterval(id);
  }, [on]);
  return v;
}

export default function HeroLive() {
  const on = useMotion();
  const v = useTicker(on);
  const svgRef = useRef<SVGSVGElement>(null);

  // SMIL pulses cannot be paused from CSS
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    if (on) el.unpauseAnimations();
    else el.pauseAnimations();
  }, [on]);

  const value = (k: (typeof SENSORS)[number]['key']) =>
    k === 'water' ? `${v.water} L/min` : k === 'energy' ? `${v.energy} kW` : k === 'tank' ? `${v.tank} %` : `${v.pump} bar`;

  return (
    <div className="v-live-wrap">
      <div className="v-live" role="img" aria-label="Animated illustration: sensors on a connected building send live readings to the iGreen platform dashboard and a mobile app, with alerts from cold storage, fire pumps, visa processing and matchmaking.">
        <div className="stage">
          <div className="scene" aria-hidden="true">
            <Image src="/images/home/night-building.webp" alt="" fill sizes="(min-width: 960px) 1100px, 175vw" priority quality={72} />
          </div>
          <span className="vig" aria-hidden="true" />
          <span className="scan" aria-hidden="true" />
          <span className="tw tw1" aria-hidden="true" />
          <span className="tw tw2" aria-hidden="true" />
          <span className="tw tw3" aria-hidden="true" />

          {/* data lines: sensors -> platform / phone */}
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

          {/* sensors with live readings */}
          {SENSORS.map((s) => (
            <div key={s.key} className={`hs ${s.side}`} style={{ left: `${s.x}%`, top: `${s.y}%` }} aria-hidden="true">
              <i className="pin" />
              <span className="chip">
                <small>{s.name}</small>
                <b>{value(s.key)}</b>
              </span>
            </div>
          ))}

          {/* platform dashboard */}
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
            <p className="up">
              Updated {v.age}s ago · all systems normal
            </p>
          </div>

          {/* phone with notifications */}
          <div className="phone" aria-hidden="true">
            <div className="top">
              <i />
              iGreen app
            </div>
            <div className="toasts">
              {TOASTS.map((t, i) => (
                <div className="toast" key={t.t} style={{ ['--k' as string]: i, ['--c' as string]: t.c }}>
                  <i />
                  <span>
                    <b>{t.t}</b>
                    <small>{t.s}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* phones are narrow: the same alerts run along the bottom instead */}
          <div className="bar" aria-hidden="true">
            {TOASTS.map((t, i) => (
              <div className="toast" key={t.t} style={{ ['--k' as string]: i, ['--c' as string]: t.c }}>
                <i />
                <span>
                  <b>{t.t}</b>
                  <small>{t.s}</small>
                </span>
              </div>
            ))}
          </div>

          <span className="note" aria-hidden="true">
            Illustrative live view
          </span>
        </div>
      </div>

      <p className="v-mosaic-foot">
        One platform for water, energy, cold chain, fire safety, hospitality and more.{' '}
        <Link href="/industries">See all industries →</Link>
        <button type="button" className="v-motion-btn" onClick={() => setMotion(!on)}>
          {on ? 'Pause animation' : 'Play animation'}
        </button>
      </p>
    </div>
  );
}
