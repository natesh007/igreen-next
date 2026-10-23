'use client';

import { useSyncExternalStore } from 'react';

/**
 * One switch for every decorative animation on the site (hero scene, network background, image drift).
 * Off when the visitor chose "Pause animations", or when their system asks for reduced motion
 * (unless they explicitly switched animations on). The choice is remembered in localStorage.
 */
const KEY = 'igreen-motion';
const EVENT = 'igreen-motion';

function stored(): string | null {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function reduced(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function motionIsOn(): boolean {
  const s = stored();
  if (s === 'off') return false;
  if (s === 'on') return true;
  return !reduced();
}

export function setMotion(on: boolean) {
  try {
    window.localStorage.setItem(KEY, on ? 'on' : 'off');
  } catch {
    /* storage can be blocked; the toggle still works for this page view */
  }
  document.documentElement.dataset.motion = on ? 'on' : 'off';
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    mq.removeEventListener('change', cb);
  };
}

/** true while decorative animation should run */
export function useMotion(): boolean {
  return useSyncExternalStore(subscribe, motionIsOn, () => true);
}
