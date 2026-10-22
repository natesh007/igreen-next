import Image from 'next/image';
import Link from 'next/link';

/**
 * Hero visual: one tidy grid that shows the breadth of what iGreen builds.
 * Three photo tiles (smart building, restaurants, fuel & tank monitoring) and two product tiles
 * (visa automation, AI matchmaking). Labels are qualitative on purpose — no invented figures.
 */
export default function HeroMosaic() {
  return (
    <div className="v-mosaicwrap">
      <div className="v-mosaic" role="group" aria-label="What iGreen builds">
        {/* Smart building — tall hero tile with a glass dashboard card */}
        <figure className="m bld" style={{ ['--i' as string]: 0 }}>
          <Image
            className="ph"
            src="/images/home/night-building.webp"
            alt="A smart building at night with rooftop tank, panels, pipes and pumps"
            fill
            sizes="(min-width: 960px) 24vw, 92vw"
            priority
          />
          <span className="shade" aria-hidden="true" />
          <span className="tag">
            <i aria-hidden="true" />
            Live monitoring
          </span>
          <div className="glass" aria-hidden="true">
            <Image src="/images/home/wis-energy-glass.webp" alt="" width={900} height={631} sizes="(min-width: 960px) 20vw, 60vw" />
          </div>
          <figcaption className="cap">
            <strong>Smart buildings</strong>
            <em>Water, energy, air and assets</em>
          </figcaption>
        </figure>

        <figure className="m rest" style={{ ['--i' as string]: 1 }}>
          <Image className="ph" src="/images/industries/restaurants.webp" alt="Restaurant kitchen with monitoring sensors on the gas line" fill sizes="(min-width: 960px) 16vw, 46vw" />
          <span className="shade" aria-hidden="true" />
          <figcaption className="cap">
            <strong>Restaurants</strong>
            <em>Utilities and equipment</em>
          </figcaption>
        </figure>

        <figure className="m fuel" style={{ ['--i' as string]: 2 }}>
          <Image className="ph" src="/images/industries/fuel-tank-monitoring.webp" alt="Fuel station with a wireless monitoring unit on the dispenser" fill sizes="(min-width: 960px) 16vw, 46vw" />
          <span className="shade" aria-hidden="true" />
          <figcaption className="cap">
            <strong>Fuel &amp; tanks</strong>
            <em>Remote inventory</em>
          </figcaption>
        </figure>

        {/* Visa automation — product tile */}
        <figure className="m visa" style={{ ['--i' as string]: 3 }}>
          <div className="ui" aria-hidden="true">
            <ul className="chk">
              <li>Passport</li>
              <li>Photo</li>
              <li>Bank statement</li>
            </ul>
            <span className="bar">
              <u />
            </span>
          </div>
          <figcaption className="cap dark">
            <strong>Visa automation</strong>
            <em>Documents verified automatically</em>
          </figcaption>
        </figure>

        {/* AI matchmaking — product tile */}
        <figure className="m match" style={{ ['--i' as string]: 4 }}>
          <div className="ui" aria-hidden="true">
            {[88, 64, 42].map((w, i) => (
              <div className="rank" key={w}>
                <span className="av">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
                  </svg>
                </span>
                <span className="bar">
                  <u style={{ width: w + '%' }} />
                </span>
                <b>{i + 1}</b>
              </div>
            ))}
          </div>
          <figcaption className="cap dark">
            <strong>AI matchmaking</strong>
            <em>Ranked matches, instantly</em>
          </figcaption>
        </figure>
      </div>

      <p className="v-mosaic-foot">
        Plus cold chain, fire safety, hospitality and manufacturing.{' '}
        <Link href="/industries">See all industries →</Link>
      </p>
    </div>
  );
}
