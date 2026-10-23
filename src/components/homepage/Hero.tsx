import Link from 'next/link';
import HeroLive from './HeroLive';

export default function Hero() {
  return (
    <>
      <section className="v-hero v-w" aria-labelledby="hero-h">
        <div>
          <span className="v-chip" style={{ background: 'var(--v-sky)' }}>
            IoT &amp; enterprise software
          </span>
          <h1 id="hero-h">
            Intelligent IoT. Connected Systems. <span className="g"><span style={{ whiteSpace: 'nowrap' }}>Real-World</span> Impact.</span>
          </h1>
          <p className="v-lead">
            We build smart building solutions, connected products, and enterprise software that turn complex operations into
            measurable business outcomes.
          </p>
          <div className="v-cta-row">
            <Link className="v-btn" href="/services">
              Explore solutions →
            </Link>
            <Link className="v-btn alt" href="#enquire">
              Discuss your project
            </Link>
          </div>
        </div>

        <HeroLive />
      </section>

    </>
  );
}
