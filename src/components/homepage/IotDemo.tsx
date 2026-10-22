'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// x / y are % positions of each device on the night-building image.
const DEVICES = [
  { label: 'Water meter', reading: 'Water flow', base: 42, unit: ' L/min', digits: 0, x: 24.6, y: 48.3 },
  { label: 'Energy meter', reading: 'Energy load', base: 318, unit: ' kW', digits: 0, x: 53.9, y: 55.6 },
  { label: 'Tank level', reading: 'Rooftop tank level', base: 72, unit: ' %', digits: 0, x: 71, y: 8.7 },
  { label: 'Pump', reading: 'Pump pressure', base: 7.1, unit: ' bar', digits: 1, x: 59, y: 74.3 },
];

export default function IotDemo() {
  const [on, setOn] = useState<boolean[]>([false, false, false, false]);
  const onRef = useRef(on); // always-current copy so rapid taps never read stale state
  const [vals, setVals] = useState<number[]>(DEVICES.map((d) => d.base));
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
          <div className="v-night">
            <div className="in">
            <Image
              src="/images/home/night-building.webp"
              alt="A smart building at night with a rooftop water tank, electrical panels, pipes and pumps"
              width={1500}
              height={700}
              sizes="(min-width: 900px) 52vw, 100vw"
            />
            {DEVICES.map((d, i) => (
              <button
                key={d.label}
                type="button"
                className={`v-hot${on[i] ? ' on' : ''}`}
                style={{ left: d.x + '%', top: d.y + '%' }}
                aria-pressed={on[i]}
                aria-label={`${d.label}: ${on[i] ? 'connected' : 'tap to connect'}`}
                onClick={() => toggle(i)}
              >
                <span className="tip">{d.label}</span>
              </button>
            ))}
            </div>
          </div>
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
        {count === 4 && (
          <div className="v-done" role="status">
            <span className="tick" aria-hidden="true">
              ✓
            </span>
            <span>
              <strong>All systems connected</strong>
              <small>The real platform runs 10+ modules like these.</small>
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
