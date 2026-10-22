import Image from 'next/image';
import Link from 'next/link';
import CaseFlips from './CaseFlips';

export default function CaseStudies() {
  return (
    <section className="v-w v-sec" id="case-studies" aria-labelledby="cs-h">
      <div className="v-sh">
        <h2 className="v-disp" id="cs-h">
          Case studies
        </h2>
        <p>The problem, what we built, and the measurable result.</p>
      </div>

      <div className="v-work">
        <div className="v-devices v-rv">
          <div className="phone">
            <Image src="/images/home/wis-phone.webp" alt="Mobile screen from the facility management platform" width={560} height={835} sizes="(min-width: 900px) 15vw, 34vw" />
          </div>
          <div className="tile t1">
            <Image src="/images/home/wis-energy.webp" alt="Energy consumption by area chart" width={900} height={631} sizes="(min-width: 900px) 24vw, 52vw" />
          </div>
          <div className="tile t2">
            <Image src="/images/home/wis-trend.webp" alt="Weekly trend chart" width={900} height={434} sizes="(min-width: 900px) 26vw, 56vw" />
          </div>
        </div>

        <div className="v-rv">
          <span className="v-chip" style={{ background: 'var(--v-sky)' }}>
            Featured · IoT · Smart buildings
          </span>
          <h3 className="v-disp" style={{ margin: '0.4em 0 0.2em' }}>
            Smart building &amp; facility management platform
          </h3>
          <div className="v-cso">
            <div>
              <b>Challenge</b>
              <p>Facility teams running water, energy, air and maintenance in disconnected systems, with limited visibility.</p>
            </div>
            <div>
              <b>Solution</b>
              <p>One IoT platform across Water, Energy, Air, Light &amp; Analytics — 10+ monitoring and automation modules with live web and mobile dashboards.</p>
            </div>
            <div>
              <b>Outcome</b>
              <p>Real-time visibility, intelligent alerts and anomaly detection for engineering teams.</p>
            </div>
          </div>
          <div className="v-metrics">
            <div>
              <b>10+</b>
              <span>monitoring modules</span>
            </div>
            <div>
              <b>100+</b>
              <span>sensor types supported</span>
            </div>
            <div>
              <b>Up to 30%</b>
              <span>utility savings, hospitality sites</span>
            </div>
          </div>
          <Link className="v-btn" href="/portfolio">
            See all projects →
          </Link>
        </div>
      </div>

      <CaseFlips />
    </section>
  );
}
