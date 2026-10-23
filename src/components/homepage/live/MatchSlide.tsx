import type { CSSProperties } from 'react';

/**
 * Slide 3 — matchmaking. A male profile and a female profile are uploaded, the AI match-maker compares them,
 * a relationship manager verifies the match and approves it. Plays once and holds the final state.
 * Avatars are neutral icons on purpose (no faces, no personal data). Timings are seconds from the start.
 */

const win = (on: number, off?: number): CSSProperties => ({ ['--on' as string]: `${on}s`, ...(off !== undefined ? { ['--off' as string]: `${off}s` } : {}) });

const FACTORS = [
  { t: 'Education', on: 3.0 },
  { t: 'Location', on: 3.5 },
  { t: 'Family values', on: 4.0 },
  { t: 'Interests', on: 4.5 },
];

function Person({ tone }: { tone: 'm' | 'f' }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill={tone === 'm' ? '#bfe6f1' : '#f6cfe2'} />
      <circle cx="20" cy="15" r="6.5" fill={tone === 'm' ? '#3a8fa6' : '#c24f86'} />
      <path d="M6 36 C 8 26 32 26 34 36 Z" fill={tone === 'm' ? '#3a8fa6' : '#c24f86'} />
    </svg>
  );
}

function Card({ tone, label, delay }: { tone: 'm' | 'f'; label: string; delay: number }) {
  const up = delay + 0.2;
  const done = delay + 1.1;
  return (
    <div className={`pc ${tone}`} style={win(delay)} aria-hidden="true">
      <span className="who">
        <span className="av">
          <Person tone={tone} />
        </span>
        <b>{label}</b>
      </span>
      <span className="fields">
        <u>Age</u>
        <u>Education</u>
        <u>Location</u>
      </span>
      <span className="stw">
        <span className="st up" style={win(up, done)}>
          Uploading…
        </span>
        <span className="st ok fin" style={win(done)}>
          ✓ Uploaded
        </span>
      </span>
      <i className="bar" style={{ ...win(up), ['--d' as string]: '0.9s' }} />
    </div>
  );
}

export default function MatchSlide() {
  return (
    <div className="slide ms" role="img" aria-label="Animated illustration: a male profile and a female profile are uploaded, an AI match-maker compares them, and a relationship manager verifies the match and approves it.">
      <Card tone="m" label="Male profile" delay={0.1} />
      <Card tone="f" label="Female profile" delay={0.5} />

      <svg className="links" viewBox="0 0 125 100" aria-hidden="true">
        <path className="lk" d="M42.5 22 C 48 22 50 18.5 53.5 17.5" pathLength="1" style={win(1.7)} />
        <path className="lk" d="M82.5 22 C 77 22 75 18.5 71.5 17.5" pathLength="1" style={win(1.9)} />
      </svg>

      <div className="ai" aria-hidden="true">
        <span className="halo" />
        <span className="ring" />
        <span className="core">
          <b className="st" style={win(0, 7.8)}>
            AI
          </b>
          <b className="st heart fin" style={win(7.8)}>
            ♥
          </b>
        </span>
        <span className="cap">
          <em className="st" style={win(0, 1.9)}>
            Waiting for profiles
          </em>
          <em className="st" style={win(1.9, 5.0)}>
            Comparing profiles…
          </em>
          <em className="st fin" style={win(5.0)}>
            Match found
          </em>
        </span>
      </div>

      <div className="cp" aria-hidden="true">
        <span className="row">
          <b>Compatibility</b>
          <span className="trk">
            <i className="fill" style={win(2.6)} />
          </span>
        </span>
        <span className="fac">
          {FACTORS.map((f) => (
            <span key={f.t} className="st ok fin" style={win(f.on)}>
              ✓ {f.t}
            </span>
          ))}
        </span>
      </div>

      <div className="rm" style={win(5.2)} aria-hidden="true">
        <span className="av2">
          <svg viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="20" fill="#d9ead3" />
            <circle cx="20" cy="15" r="6.5" fill="#4f8f4a" />
            <path d="M6 36 C 8 26 32 26 34 36 Z" fill="#4f8f4a" />
            <path d="M9 18 a11 11 0 0 1 22 0" fill="none" stroke="#1d3d1a" strokeWidth="2" />
          </svg>
        </span>
        <span className="tx">
          <small>Relationship manager</small>
          <span className="stw">
            <em className="st" style={win(5.2, 6.8)}>
              Reviewing the match<span className="dots" />
            </em>
            <em className="st" style={win(6.8, 7.8)}>
              ✓ Profiles verified
            </em>
            <em className="st ok fin" style={win(7.8)}>
              ✓ Match approved
            </em>
          </span>
        </span>
      </div>
    </div>
  );
}
