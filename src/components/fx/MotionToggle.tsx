'use client';

import { setMotion, useMotion } from './motion';

/** Footer switch for decorative animation (also respected by the hero scene and the background). */
export default function MotionToggle({ className }: { className?: string }) {
  const on = useMotion();
  return (
    <button type="button" className={className ?? 'v-motion-btn'} onClick={() => setMotion(!on)}>
      {on ? 'Pause animations' : 'Play animations'}
    </button>
  );
}
