'use client';

import Image from 'next/image';
import { useState } from 'react';
import { flips } from './data';

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
                <Image src={f.img} alt="" width={900} height={506} sizes="(min-width: 900px) 30vw, 90vw" />
                <span className="tap">TAP</span>
                <h4>{f.title}</h4>
              </span>
              <span className="v-face back">
                <span className="v-chip" style={{ color: 'var(--v-ink)', background: f.chip, alignSelf: 'flex-start' }}>
                  Result
                </span>
                <b>{f.big}</b>
                <span className="t">{f.text}</span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
