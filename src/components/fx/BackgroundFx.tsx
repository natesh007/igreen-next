'use client';

import { useEffect, useRef } from 'react';
import { useMotion } from './motion';

/**
 * Site-wide background: a faint "connected devices" network that drifts behind the content.
 * Nodes move slowly, links fade in and out with distance, a small data pulse travels along a link now and
 * then, and the whole field shifts a little as the page scrolls. It starts only after the page has loaded
 * and is idle, pauses in background tabs, and stops when the visitor pauses animations.
 */
type Node = { x: number; y: number; vx: number; vy: number; r: number; c: 0 | 1 };
type Pulse = { a: number; b: number; t: number; speed: number };

const CYAN = '29,188,214';
const GREEN = '92,184,92';

export default function BackgroundFx() {
  const ref = useRef<HTMLCanvasElement>(null);
  const on = useMotion();

  useEffect(() => {
    document.documentElement.dataset.motion = on ? 'on' : 'off';
  }, [on]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    const pulses: Pulse[] = [];
    let raf = 0;
    let started = false;
    let stopped = false;
    let last = 0;
    let nextPulse = 0;
    const small = () => window.innerWidth < 700;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(16, Math.min(54, Math.round((w * h) / 30000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: 1.6 + Math.random() * 1.8,
        c: Math.random() < 0.6 ? 0 : 1,
      }));
      pulses.length = 0;
    };

    const link = small() ? 120 : 160;

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      // 30 fps on phones keeps the work light
      if (small() && t - last < 33) return;
      const dt = Math.min(48, t - last || 16);
      last = t;
      const shift = (window.scrollY * 0.18) % h;
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx * (dt / 16);
        n.y += n.vy * (dt / 16);
        if (n.x < -20) n.x = w + 20;
        else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        else if (n.y > h + 20) n.y = -20;
      }
      const pos = nodes.map((n) => ({ x: n.x, y: (((n.y - shift) % h) + h) % h }));

      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = pos[i].x - pos[j].x;
          const dy = pos[i].y - pos[j].y;
          const d = Math.hypot(dx, dy);
          if (d < link) {
            ctx.strokeStyle = `rgba(${nodes[i].c ? GREEN : CYAN},${(1 - d / link) * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(pos[i].x, pos[i].y);
            ctx.lineTo(pos[j].x, pos[j].y);
            ctx.stroke();
          }
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.fillStyle = `rgba(${n.c ? GREEN : CYAN},0.62)`;
        ctx.beginPath();
        ctx.arc(pos[i].x, pos[i].y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // a data pulse hops along a short link every so often
      if (t > nextPulse && pulses.length < 4) {
        nextPulse = t + 700 + Math.random() * 900;
        const a = Math.floor(Math.random() * nodes.length);
        let b = -1;
        let best = link;
        for (let j = 0; j < nodes.length; j++) {
          if (j === a) continue;
          const d = Math.hypot(pos[a].x - pos[j].x, pos[a].y - pos[j].y);
          if (d < best && Math.random() < 0.6) {
            best = d;
            b = j;
          }
        }
        if (b >= 0) pulses.push({ a, b, t: 0, speed: 0.0011 + Math.random() * 0.0008 });
      }
      for (let k = pulses.length - 1; k >= 0; k--) {
        const p = pulses[k];
        p.t += p.speed * dt;
        if (p.t >= 1) {
          pulses.splice(k, 1);
          continue;
        }
        const x = pos[p.a].x + (pos[p.b].x - pos[p.a].x) * p.t;
        const y = pos[p.a].y + (pos[p.b].y - pos[p.a].y) * p.t;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 9);
        g.addColorStop(0, `rgba(${CYAN},0.85)`);
        g.addColorStop(1, `rgba(${CYAN},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const run = () => {
      if (stopped || raf) return;
      raf = requestAnimationFrame(draw);
    };
    const halt = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const visibility = () => (document.hidden || !on ? halt() : run());

    const start = () => {
      if (started || stopped) return;
      started = true;
      resize();
      if (on) {
        run();
      } else {
        // paused: paint one still frame
        draw(0);
        halt();
      }
    };

    // wait for the page to finish loading and the browser to be idle
    const kick = () => {
      const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => void }).requestIdleCallback;
      if (ric) ric(start, { timeout: 3000 });
      else window.setTimeout(start, 1200);
    };
    if (document.readyState === 'complete') kick();
    else window.addEventListener('load', kick, { once: true });

    let rt = 0;
    const onResize = () => {
      window.clearTimeout(rt);
      rt = window.setTimeout(() => started && resize(), 200);
    };
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', visibility);

    return () => {
      stopped = true;
      halt();
      window.removeEventListener('load', kick);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, [on]);

  return <canvas ref={ref} className="v-netbg" aria-hidden="true" />;
}
