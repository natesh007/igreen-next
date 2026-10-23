import type { CSSProperties } from 'react';

/**
 * Slide 2 — visa processing. The applicant uploads each document, it is scanned and checked automatically:
 * Passport is verified, Photo is rejected (blurry) and re-uploaded, Bank statement is verified, and the
 * application ends "Visa approved". Plays once from the moment the slide appears and holds the final state.
 * Timings are seconds from the start. Without animation (reduced motion) the final state is what shows.
 */

type St = { cls: string; label: string; on: number; off?: number; scan?: boolean };
type RowT = { name: string; icon: 'passport' | 'photo' | 'bank'; up: [number, number]; states: St[] };

const ROWS: RowT[] = [
  {
    name: 'Passport',
    icon: 'passport',
    up: [0.2, 0.7],
    states: [
      { cls: 'up', label: 'Uploading…', on: 0.2, off: 0.9 },
      { cls: 'scan', label: 'Scanning…', on: 0.9, off: 1.7, scan: true },
      { cls: 'ok fin', label: '✓ Verified', on: 1.7 },
    ],
  },
  {
    name: 'Photo',
    icon: 'photo',
    up: [1.9, 0.6],
    states: [
      { cls: 'wait', label: 'Waiting', on: 0, off: 1.9 },
      { cls: 'up', label: 'Uploading…', on: 1.9, off: 2.5 },
      { cls: 'scan', label: 'Scanning…', on: 2.5, off: 3.2, scan: true },
      { cls: 'bad', label: '✗ Rejected · blurry', on: 3.2, off: 4.0 },
      { cls: 'up', label: 'Re-uploading…', on: 4.0, off: 4.5 },
      { cls: 'scan', label: 'Scanning…', on: 4.5, off: 5.0, scan: true },
      { cls: 'ok fin', label: '✓ Verified', on: 5.0 },
    ],
  },
  {
    name: 'Bank statement',
    icon: 'bank',
    up: [5.2, 0.5],
    states: [
      { cls: 'wait', label: 'Waiting', on: 0, off: 5.2 },
      { cls: 'up', label: 'Uploading…', on: 5.2, off: 5.7 },
      { cls: 'scan', label: 'Scanning…', on: 5.7, off: 6.3, scan: true },
      { cls: 'ok fin', label: '✓ Verified', on: 6.3 },
    ],
  },
];

const COUNTS = [
  { t: '0/3', on: 0, off: 1.7 },
  { t: '1/3', on: 1.7, off: 5.0 },
  { t: '2/3', on: 5.0, off: 6.3 },
  { t: '3/3', on: 6.3 },
];

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
    <div className="slide vs" role="img" aria-label="Animated illustration: a visa applicant uploads a passport, a photo and a bank statement. Each document is scanned and checked automatically; the blurry photo is rejected and re-uploaded, and the application ends approved.">
      <div className="hdr" aria-hidden="true">
        <span>
          <b>Visa application</b>
          <small>Automatic document check</small>
        </span>
        <span className="pill">
          <span className="st scan" style={win(0, 6.9)}>
            Checking documents…
          </span>
          <span className="st ok fin" style={win(6.9)}>
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
            {r.name === 'Photo' && <i className="flash" style={win(3.2, 4.0)} />}
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

      <div className="seal" aria-hidden="true">
        <span className="chk">✓</span>
        <b>Visa approved</b>
        <small>No manual paperwork</small>
      </div>
    </div>
  );
}
