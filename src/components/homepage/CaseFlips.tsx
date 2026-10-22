'use client';

import Image from 'next/image';
import { useState } from 'react';
import { flips } from './data';

function Viz({ kind }: { kind: string }) {
  if (kind === 'bars') {
    return (
      <div className="v-viz" aria-hidden="true">
        <div className="row">
          <span>Before</span>
          <span className="bar" style={{ width: '100%', background: '#8d8a99' }} />
        </div>
        <div className="row">
          <span>After</span>
          <span className="bar" style={{ width: '60%', background: 'var(--v-lime)' }} />
        </div>
      </div>
    );
  }
  if (kind === 'dots') {
    return (
      <div className="v-viz" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <i className="dot" key={i} />
        ))}
        <span style={{ fontWeight: 800, fontSize: '0.8rem' }}>ALL ONLINE</span>
      </div>
    );
  }
  return (
    <div className="v-viz" aria-hidden="true" style={{ gap: 5 }}>
      {Array.from({ length: 16 }).map((_, i) => (
        <i className={`sq${i % 5 === 2 ? ' lime' : ''}`} key={i} />
      ))}
    </div>
  );
}

export default function CaseFlips() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [seen, setSeen] = useState<Record<string, boolean>>({});
  const n = Object.keys(seen).length;

  const flip = (k: string) => {
    setOpen((o) => ({ ...o, [k]: !o[k] }));
    setSeen((s) => ({ ...s, [k]: true }));
  };

  return (
    <>
      <div className="v-sh" style={{ marginTop: 'clamp(40px, 6vw, 90px)' }}>
        <h3 className="v-disp" style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2.4rem)' }}>
          More results
        </h3>
        <div className="v-xp">
          <span className="v-chip" style={{ background: 'var(--v-lime)' }} aria-live="polite">
            {n === flips.length ? 'Explorer badge unlocked' : `Badges ${n} / ${flips.length}`}
          </span>
          <span>Tap a tile to flip it</span>
        </div>
      </div>
      <div className="v-flips">
        {flips.map((f) => (
          <button key={f.key} className="v-flip v-rv" aria-pressed={!!open[f.key]} onClick={() => flip(f.key)}>
            <span className="in2">
              <span className="v-face front">
                <Image src={f.photo} alt="" width={900} height={506} sizes="(min-width: 900px) 30vw, 90vw" />
                <Image className="ink-over" src={f.ink} alt="" width={900} height={506} sizes="(min-width: 900px) 30vw, 90vw" />
                <span className="tap">TAP</span>
                <h4>{f.title}</h4>
              </span>
              <span className="v-face back">
                <Image className="bgphoto" src={f.photo} alt="" width={900} height={506} sizes="(min-width: 900px) 30vw, 90vw" />
                <span className="v-chip" style={{ color: 'var(--v-ink)', background: f.chip, alignSelf: 'flex-start' }}>
                  Result
                </span>
                <span className="stat">
                  {f.pre && <span className="pre">{f.pre}</span>}
                  <b>{f.big}</b>
                  <span className="lbl">{f.label}</span>
                </span>
                <Viz kind={f.viz} />
                <ul>
                  {f.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </span>
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
