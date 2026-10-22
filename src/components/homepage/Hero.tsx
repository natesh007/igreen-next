import Image from 'next/image';
import Link from 'next/link';

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

        <div className="v-artwrap v-rv">
          <div className="v-art">
            <Image
              className="photo"
              src="/images/home/office-soft.webp"
              alt=""
              width={1400}
              height={560}
              sizes="(min-width: 960px) 45vw, 100vw"
              priority
            />
            <i className="tint" />
            <div className="v-browser">
              <div className="bar">
                <i />
                <i />
                <i />
                <span>Facility dashboard</span>
              </div>
              <Image
                src="/images/home/wis-energy-glass.webp"
                alt="Energy consumption by area, from our facility management platform"
                width={900}
                height={631}
                sizes="(min-width: 960px) 34vw, 70vw"
                priority
              />
            </div>
            <div className="v-phone">
              <Image
                src="/images/home/wis-phone.webp"
                alt="Mobile screen from our facility management platform"
                width={560}
                height={835}
                sizes="(min-width: 960px) 12vw, 25vw"
              />
            </div>
            <span className="cap">Live platform screens</span>
          </div>
        </div>
      </section>

    </>
  );
}
