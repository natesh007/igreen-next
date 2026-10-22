import Link from 'next/link';
import { industries } from './data';

export default function Industries() {
  return (
    <section className="v-w v-sec" id="industries" aria-labelledby="ind-h">
      <div className="v-sh">
        <h2 className="v-disp" id="ind-h">
          Solutions by industry
        </h2>
        <p>The sectors where our systems are already running.</p>
      </div>
      <div className="v-ind">
        {industries.map((i) => (
          <Link className="v-brut v-rv" href="/portfolio" key={i.title}>
            <span>
              {i.title}
              <em>{i.sub}</em>
            </span>
            <span className="dot" style={{ background: i.dot }} />
          </Link>
        ))}
      </div>
    </section>
  );
}
