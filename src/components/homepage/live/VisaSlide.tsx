import type { CSSProperties } from 'react';

/**
 * Slide 2 — visa processing. The applicant uploads each document, it is scanned and checked automatically:
 * Passport is verified, Photo is rejected (blurry) and re-uploaded, Bank statement is verified, and the
 * application ends "Visa approved". Plays once from the moment the slide appears and holds the final state.
 * Timings are seconds from the start. Without animation (reduced motion) the final state is what shows.
 */

type St = { cls: string; label: string; on: number; off?: number; scan?: boolean };
type RowT = { name: string; icon: 'passport' | 'photo' | 'bank' | 'itr' | 'ticket' | 'stay'; up: [number, number]; states: St[] };

// A clean document: upload -> scan -> verified. Starts at `t`; `waitUntil` shows a "Waiting" chip before that.
const clean = (t: number, waitUntil?: number): St[] => [
  ...(waitUntil ? [{ cls: 'wait', label: 'Waiting', on: 0, off: waitUntil }] : []),
  { cls: 'up', label: 'Uploading…', on: t, off: t + 0.4 },
  { cls: 'scan', label: 'Scanning…', on: t + 0.4, off: t + 0.9, scan: true },
  { cls: 'ok fin', label: '✓ Verified', on: t + 0.9 },
];

const ROWS: RowT[] = [
  { name: 'Passport', icon: 'passport', up: [0.2, 0.4], states: clean(0.2) },
  {
    name: 'Photo',
    icon: 'photo',
    up: [1.2, 0.4],
    states: [
      { cls: 'wait', label: 'Waiting', on: 0, off: 1.2 },
      { cls: 'up', label: 'Uploading…', on: 1.2, off: 1.6 },
      { cls: 'scan', label: 'Scanning…', on: 1.6, off: 2.1, scan: true },
      { cls: 'bad', label: '✗ Rejected · blurry', on: 2.1, off: 2.9 },
      { cls: 'up', label: 'Re-uploading…', on: 2.9, off: 3.3 },
      { cls: 'scan', label: 'Scanning…', on: 3.3, off: 3.8, scan: true },
      { cls: 'ok fin', label: '✓ Verified', on: 3.8 },
    ],
  },
  { name: 'Bank statement', icon: 'bank', up: [3.9, 0.4], states: clean(3.9, 3.9) },
  { name: 'Personal ITR', icon: 'itr', up: [4.9, 0.4], states: clean(4.9, 4.9) },
  { name: 'Travel itinerary & tickets', icon: 'ticket', up: [5.9, 0.4], states: clean(5.9, 5.9) },
  { name: 'Proof of accommodation', icon: 'stay', up: [6.9, 0.4], states: clean(6.9, 6.9) },
];

// documents verified so far, switching at the moment each one is verified
const COUNTS = [
  { t: '0/6', on: 0, off: 1.1 },
  { t: '1/6', on: 1.1, off: 3.8 },
  { t: '2/6', on: 3.8, off: 4.8 },
  { t: '3/6', on: 4.8, off: 5.8 },
  { t: '4/6', on: 5.8, off: 6.8 },
  { t: '5/6', on: 6.8, off: 7.8 },
  { t: '6/6', on: 7.8 },
];
const APPROVED_AT = 8.4;

const win = (on: number, off?: number): CSSProperties => ({ ['--on' as string]: `${on}s`, ...(off !== undefined ? { ['--off' as string]: `${off}s` } : {}) });

function DocIcon({ kind }: { kind: RowT['icon'] }) {
  return (
    <svg viewBox="0 0 30 40" aria-hidden="true">
      <rect x="1" y="1" width="28" height="38" rx="3" fill="#fff" stroke="#c9ced8" />
      {kind === 'passport' && (
        <>
          <circle cx="15" cy="14" r="5" fill="#cfe9f0" />
          <rect x="6" y="23" width="18" height="2.4" rx="1" fill="#c9ced8" />
          <rect x="6" y="28" width="14" height="2.4" rx="1" fill="#c9ced8" />
        </>
      )}
      {kind === 'photo' && (
        <>
          <rect x="5" y="6" width="20" height="22" rx="2" fill="#d8e9d6" />
          <circle cx="15" cy="15" r="4" fill="#9cc79a" />
          <path d="M7 28 C 10 21 20 21 23 28 Z" fill="#9cc79a" />
        </>
      )}
      {kind === 'itr' && (
        <>
          <rect x="5" y="5" width="20" height="5" rx="1" fill="#c9ced8" />
          <rect x="5" y="14" width="20" height="2.2" rx="1" fill="#dfe3ea" />
          <rect x="5" y="19" width="14" height="2.2" rx="1" fill="#dfe3ea" />
          <rect x="5" y="24" width="20" height="2.2" rx="1" fill="#dfe3ea" />
          <circle cx="21" cy="32" r="3.2" fill="#d8e9d6" />
        </>
      )}
      {kind === 'ticket' && (
        <>
          <rect x="5" y="6" width="20" height="9" rx="1.5" fill="#cfe9f0" />
          <path d="M9 12 L21 9" stroke="#3a8fa6" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="5" y="19" width="12" height="2.2" rx="1" fill="#c9ced8" />
          <rect x="5" y="24" width="18" height="2.2" rx="1" fill="#dfe3ea" />
          <rect x="5" y="30" width="20" height="4" rx="1" fill="#dfe3ea" />
        </>
      )}
      {kind === 'stay' && (
        <>
          <path d="M5 16 L15 7 L25 16 Z" fill="#cfe9f0" />
          <rect x="8" y="16" width="14" height="10" fill="#e3f1e0" />
          <rect x="13" y="19" width="4" height="7" fill="#9cc79a" />
          <rect x="5" y="30" width="20" height="2.4" rx="1" fill="#dfe3ea" />
        </>
      )}
      {kind === 'bank' && (
        <>
          <rect x="5" y="6" width="20" height="3" rx="1" fill="#c9ced8" />
          {[13, 18, 23, 28, 33].map((y) => (
            <g key={y}>
              <rect x="5" y={y} width="10" height="2" rx="1" fill="#dfe3ea" />
              <rect x="18" y={y} width="7" height="2" rx="1" fill="#c9ced8" />
            </g>
          ))}
        </>
      )}
    </svg>
  );
}

export default function VisaSlide() {
  return (
    <div className="slide vs" role="img" aria-label="Animated illustration: a visa applicant uploads six documents: passport, photo, bank statement, personal ITR, travel itinerary and tickets, and proof of accommodation. Each is scanned and checked automatically; the blurry photo is rejected and re-uploaded, and the application ends approved.">
      <div className="hdr" aria-hidden="true">
        <span>
          <b>Visa application</b>
          <small>Automatic document check</small>
        </span>
        <span className="pill">
          <span className="st scan" style={win(0, APPROVED_AT)}>
            Checking documents…
          </span>
          <span className="st ok fin" style={win(APPROVED_AT)}>
            ✓ Approved
          </span>
        </span>
      </div>

      <div className="rows" aria-hidden="true">
        {ROWS.map((r) => (
          <div className="row" key={r.name}>
            <span className="doc">
              <DocIcon kind={r.icon} />
              {r.states
                .filter((s) => s.scan)
                .map((s) => (
                  <i className="beam" key={s.on} style={win(s.on, s.off)} />
                ))}
            </span>
            <span className="info">
              <b className="nm">{r.name}</b>
              <span className="stw">
                {r.states.map((s) => (
                  <span key={s.on + s.label} className={`st ${s.cls}`} style={win(s.on, s.off)}>
                    {s.label}
                  </span>
                ))}
              </span>
            </span>
            <i className="bar" style={{ ...win(r.up[0]), ['--d' as string]: `${r.up[1]}s` }} />
            {r.name === 'Photo' && <i className="flash" style={win(2.1, 2.9)} />}
          </div>
        ))}
      </div>

      <div className="ringbox" aria-hidden="true">
        <svg viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="15.9" fill="none" className="bg" strokeWidth="3" />
          <circle cx="18" cy="18" r="15.9" fill="none" className="fg" strokeWidth="3" strokeLinecap="round" pathLength="100" transform="rotate(-90 18 18)" />
        </svg>
        <span className="ct">
          {COUNTS.map((c) => (
            <b key={c.t} className={`st${c.off === undefined ? ' fin' : ''}`} style={win(c.on, c.off)}>
              {c.t}
            </b>
          ))}
        </span>
        <small>documents verified</small>
      </div>

      <div className="seal" style={win(APPROVED_AT)} aria-hidden="true">
        <span className="chk">✓</span>
        <b>Visa approved</b>
        <small>No manual paperwork</small>
      </div>
    </div>
  );
}
