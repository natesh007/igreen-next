'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { setMotion, useMotion } from '../fx/motion';
import BuildingSlide from './live/BuildingSlide';
import MatchSlide from './live/MatchSlide';
import VisaSlide from './live/VisaSlide';

/**
 * Hero visual: a three-slide "iGreen live" show — smart building (IoT), visa processing and matchmaking —
 * each a short animation. It advances on its own (the progress bar under the active tab drives it, so it
 * pauses with hover, focus or the site-wide animation switch), and can be driven with the tabs, arrow keys
 * or a swipe. Slides are decorative and described by their own text alternative.
 */
const SLIDES = [
  { key: 'building', label: 'Smart buildings' },
  { key: 'visa', label: 'Visa processing' },
  { key: 'match', label: 'Matchmaking' },
] as const;

export default function HeroLive() {
  const on = useMotion();
  const [active, setActive] = useState(0);
  const down = useRef<number | null>(null);
  const go = (i: number) => setActive((i + SLIDES.length) % SLIDES.length);

  return (
    <div className="v-live-wrap">
      <div
        className="v-live"
        onPointerDown={(e) => (down.current = e.clientX)}
        onPointerUp={(e) => {
          if (down.current === null) return;
          const dx = e.clientX - down.current;
          down.current = null;
          if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
        }}
      >
        <div className="stage" role="tabpanel" id="live-panel" aria-labelledby={`live-tab-${active}`}>
          {active === 0 && <BuildingSlide />}
          {active === 1 && <VisaSlide />}
          {active === 2 && <MatchSlide />}
        </div>
      </div>

      <div
        className="v-live-tabs"
        role="tablist"
        aria-label="What iGreen builds"
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') go(active + 1);
          else if (e.key === 'ArrowLeft') go(active - 1);
          else return;
          e.preventDefault();
          (document.getElementById(`live-tab-${(active + (e.key === 'ArrowRight' ? 1 : -1) + SLIDES.length) % SLIDES.length}`) as HTMLElement | null)?.focus();
        }}
      >
        {SLIDES.map((s, i) => (
          <button
            key={s.key}
            type="button"
            role="tab"
            id={`live-tab-${i}`}
            aria-selected={active === i}
            aria-controls="live-panel"
            tabIndex={active === i ? 0 : -1}
            className={`tab${active === i ? ' on' : ''}`}
            onClick={() => go(i)}
          >
            <span>{s.label}</span>
            {active === i && <i className="prog" aria-hidden="true" onAnimationEnd={() => go(i + 1)} />}
          </button>
        ))}
      </div>

      <p className="v-mosaic-foot">
        One platform for water, energy, cold chain, fire safety, hospitality and more. Illustrative animation.{' '}
        <Link href="/industries">See all industries →</Link>
        <button type="button" className="v-motion-btn" onClick={() => setMotion(!on)}>
          {on ? 'Pause animation' : 'Play animation'}
        </button>
      </p>
    </div>
  );
}
