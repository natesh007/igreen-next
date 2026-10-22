'use client';

import { useEffect, useRef, useState } from 'react';

const DEVICES = [
  { label: 'Water meter', reading: 'Water flow', base: 42, unit: ' L/min', digits: 0, x: 150, y: 292 },
  { label: 'Energy meter', reading: 'Energy load', base: 318, unit: ' kW', digits: 0, x: 395, y: 250 },
  { label: 'Cold room', reading: 'Cold room', base: -18.2, unit: ' °C', digits: 1, x: 395, y: 128 },
  { label: 'Fire pump', reading: 'Fire pump pressure', base: 7.1, unit: ' bar', digits: 1, x: 275, y: 285 },
];

function confetti() {
  const colors = ['#C8FF2E', '#1DBCD6', '#5CB85C', '#FFB300', '#FF4FA3'];
  for (let i = 0; i < 46; i++) {
    const d = document.createElement('i');
    d.className = 'v-conf';
    d.style.background = colors[i % 5];
    d.style.left = 30 + Math.random() * 40 + 'vw';
    d.style.top = '40vh';
    document.body.appendChild(d);
    d.animate(
      [
        { transform: 'translate(0,0) rotate(0)', opacity: 1 },
        {
          transform: `translate(${(Math.random() - 0.5) * 500}px, ${200 + Math.random() * 320}px) rotate(${Math.random() * 720}deg)`,
          opacity: 0,
        },
      ],
      { duration: 1400 + Math.random() * 900, easing: 'cubic-bezier(.2,.8,.3,1)' }
    ).onfinish = () => d.remove();
  }
}

export default function IotDemo() {
  const [on, setOn] = useState<boolean[]>([false, false, false, false]);
  const onRef = useRef(on); // always-current copy so rapid taps never read stale state
  const [vals, setVals] = useState<number[]>(DEVICES.map((d) => d.base));
  const [won, setWon] = useState(false);
  const count = on.filter(Boolean).length;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => {
      setVals(DEVICES.map((d) => d.base + (Math.random() - 0.5) * Math.abs(d.base) * 0.06));
    }, 1300);
    return () => clearInterval(t);
  }, []);

  const toggle = (i: number) => {
    const next = onRef.current.map((v, j) => (j === i ? !v : v));
    onRef.current = next;
    setOn(next);
    if (!won && next.every(Boolean)) {
      setWon(true);
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) confetti();
    }
  };

  return (
    <section className="v-game v-w" id="demo" aria-labelledby="demo-h">
      <div>
        <h2 className="v-disp" id="demo-h" style={{ margin: '0 0 0.4em' }}>
          See how it works
        </h2>
        <p className="v-lead" style={{ fontWeight: 700 }}>
          Connect the sensors on this building and watch live readings appear — the same approach our real platform uses.{' '}
          <small style={{ opacity: 0.85 }}>Demo data.</small>
        </p>

        <div className="v-scene v-brut" style={{ marginTop: 18 }}>
          <svg viewBox="0 0 520 340" role="img" aria-label="Line drawing of a building with four sensor spots">
            <defs>
              <filter id="v-wob">
                <feTurbulence type="fractalNoise" baseFrequency=".03" numOctaves="2" seed="4" result="n" />
                <feDisplacementMap in="SourceGraphic" in2="n" scale="4" />
              </filter>
            </defs>
            <g fill="none" stroke="#14111C" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" filter="url(#v-wob)">
              <path d="M40 310 H480" />
              <path d="M110 310 V70 H330 V310" />
              <path d="M330 150 H450 V310" />
              <path d="M110 70 L220 24 L330 70" />
              <path d="M140 110h50v34h-50zM210 110h50v34h-50zM280 110h30v34h-30zM140 170h50v34h-50zM210 170h50v34h-50zM280 170h30v34h-30zM360 180h70v34h-70z" />
              <path d="M200 310 v-60 h50 v60" />
              <path d="M30 310 q10-40 40-30 q10-30 40-10" strokeWidth="3" />
            </g>
            {DEVICES.map((d, i) => (
              <g
                key={d.label}
                className={`v-spot${on[i] ? ' on' : ''}`}
                tabIndex={0}
                role="button"
                aria-label={`${d.label}: ${on[i] ? 'installed' : 'tap to install'}`}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle(i);
                  }
                }}
              >
                <circle className="ring" cx={d.x} cy={d.y} r="14" />
                <circle className="dot" cx={d.x} cy={d.y} r="13" />
              </g>
            ))}
          </svg>
        </div>

        <div className="v-picks">
          {DEVICES.map((d, i) => (
            <button key={d.label} className="v-pick" aria-pressed={on[i]} onClick={() => toggle(i)}>
              + {d.label}
            </button>
          ))}
        </div>
      </div>

      <div className="v-panel" aria-live="polite">
        <span className="v-chip" style={{ alignSelf: 'flex-start', background: 'var(--v-cyan)' }}>
          Live dashboard
        </span>
        {DEVICES.map((d, i) => (
          <div className={`v-read${on[i] ? ' on' : ''}`} key={d.label}>
            <span>{d.reading}</span>
            <b>{on[i] ? vals[i].toFixed(d.digits) + d.unit : '— —'}</b>
          </div>
        ))}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, marginBottom: 6 }}>
            <span>Systems connected</span>
            <span>{count} / 4</span>
          </div>
          <div className="v-meter">
            <u style={{ width: count * 25 + '%' }} />
          </div>
        </div>
        <div className={`v-badge${won ? ' on' : ''}`}>
          <span className="v-disp" style={{ fontSize: '1.6rem' }} aria-hidden="true">
            ★
          </span>
          <span>
            Badge unlocked: <b>Smart Building</b>
            <br />
            <small style={{ fontWeight: 700, fontSize: '0.9rem' }}>The real platform runs 10+ modules like these.</small>
          </span>
        </div>
      </div>
    </section>
  );
}
