'use client';

import { useEffect, useRef, useState } from 'react';

// Milestones for the scroll "XP" chip.
const STEPS: [number, string, string][] = [
  [0, 'LVL 1', 'Founded 2008'],
  [0.2, 'LVL 2', '232+ clients'],
  [0.45, 'LVL 3', '521+ projects'],
  [0.7, 'LVL 4', '18+ years strong'],
  [0.97, 'MAX', 'Let’s build together'],
];

/** Scroll reveals, count-up numbers and the scroll progress / level chip. Renders no layout of its own. */
export default function Effects() {
  const barRef = useRef<HTMLElement>(null);
  const [step, setStep] = useState(STEPS[0]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const count = (el: HTMLElement) => {
      const target = Number(el.dataset.n);
      const suffix = el.dataset.s ?? '';
      const start = performance.now();
      const dur = reduce ? 1 : 1400;
      const frame = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };

    // numbers start at 0 only while their (hidden) parent waits to be revealed
    document.querySelectorAll<HTMLElement>('.vibrant [data-n]').forEach((el) => {
      if (!reduce) el.textContent = '0' + (el.dataset.s ?? '');
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const t = e.target as HTMLElement;
          t.classList.add('v-in');
          t.querySelectorAll<HTMLElement>('[data-n]').forEach(count);
          t.querySelectorAll<HTMLElement>('[data-w]').forEach((u) => {
            u.style.width = u.dataset.w ?? '0';
          });
          if (t.matches('[data-n]')) count(t);
          io.unobserve(t);
        });
      },
      { threshold: 0.18 }
    );
    document.querySelectorAll('.vibrant .v-rv').forEach((n) => io.observe(n));

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
        if (barRef.current) barRef.current.style.width = p * 100 + '%';
        let s = STEPS[0];
        STEPS.forEach((x) => {
          if (p >= x[0]) s = x;
        });
        setStep((prev) => (prev[0] === s[0] ? prev : s));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div className="v-bar" aria-hidden="true">
        <i ref={barRef} />
      </div>
      <div className="v-hud" aria-hidden="true">
        <b>{step[1]}</b>
        <span>{step[2]}</span>
      </div>
    </>
  );
}
