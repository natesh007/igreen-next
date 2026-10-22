import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Effects from '@/components/homepage/Effects';
import EnquiryCta from '@/components/homepage/EnquiryCta';
import { stats, why } from '@/components/homepage/data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'iGreen Systems — Engineering intelligent IoT systems since 2008. Smart building automation, asset lifecycle management, connected field operations, and predictive maintenance across India and the Americas.',
  alternates: { canonical: '/about' },
};

const pillars = [
  { title: 'Smart Building Automation', desc: 'Enable real-time monitoring and control of infrastructure systems.' },
  { title: 'Asset Lifecycle Management', desc: 'Track, manage, and extend the life of critical operational assets.' },
  { title: 'Connected Field Operations', desc: 'Digitize service workflows and improve execution efficiency on-site.' },
  { title: 'System Integrations', desc: 'Seamlessly connect IoT devices, sensors, and enterprise platforms.' },
  { title: 'Predictive Maintenance', desc: 'Move from reactive fixes to data-driven, proactive maintenance cycles.' },
];

const approachSteps = [
  { num: '01', name: 'Discover', desc: 'Understand business challenges and operational gaps' },
  { num: '02', name: 'Design', desc: 'Architect scalable, future-ready solutions' },
  { num: '03', name: 'Build', desc: 'Develop using agile and iterative methodologies' },
  { num: '04', name: 'Deploy', desc: 'Pilot, test, and scale to production environments' },
  { num: '05', name: 'Optimize', desc: 'Continuously monitor, improve, and evolve systems' },
];

const impactItems = [
  { label: 'Reduce energy and operational costs', desc: 'Intelligent monitoring and automation cut utility spend and manual overhead.' },
  { label: 'Improve productivity and efficiency', desc: 'Connected workflows eliminate delays and keep operations running at pace.' },
  { label: 'Increase asset lifespan', desc: 'Proactive maintenance and lifecycle tracking protect capital investments.' },
  { label: 'Enable real-time monitoring and automation', desc: 'Live dashboards and automated alerts deliver complete operational visibility.' },
  { label: 'Minimize manual intervention and risks', desc: 'Smart systems reduce human error and surface issues before they escalate.' },
];

const goalBullets = [
  'Gain complete visibility into their operations',
  'Automate decision-making processes',
  'Improve sustainability and efficiency',
  'Operate with clarity, control, and confidence',
];

const standards = [
  { name: 'IEC 62443', subtitle: 'Industrial Cybersecurity', benefit: 'Industrial control systems secured against cyber threats — end-to-end.' },
  { name: 'GDPR Compliant', subtitle: 'Data Privacy', benefit: 'Data collection, storage, and processing aligned with EU privacy regulations.' },
];

export default function AboutPage() {
  return (
    <div className="vibrant v-page">
      <noscript>
        <style>{'.v-rv{opacity:1!important;transform:none!important}'}</style>
      </noscript>
      <Effects />

      {/* Hero */}
      <section className="v-w v-ihero two" aria-labelledby="about-h">
        <div>
          <nav className="v-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">About us</span>
          </nav>
          <span className="v-chip" style={{ background: 'var(--v-sky)' }}>
            Intelligent systems since 2008
          </span>
          <h1 id="about-h">Engineering intelligent systems for a connected world</h1>
          <p className="v-lead">
            We design and deliver IoT-driven solutions that connect infrastructure, assets, and operations — enabling real-time
            visibility, automation, and smarter decision-making.
          </p>
          <div className="v-cta-row" style={{ marginTop: 22 }}>
            <Link className="v-btn" href="#enquire">
              Discuss your requirement →
            </Link>
            <Link className="v-btn alt" href="/portfolio">
              See our work
            </Link>
          </div>
        </div>
        <div className="v-collage v-brut v-rv" aria-label="The iGreen team and some of our work">
          <figure className="main">
            <Image src="/images/industries/consumer-platforms.webp" alt="The iGreen team working in an open-plan office with plants and the iGreen sign wall" width={900} height={675} sizes="(min-width: 960px) 28vw, 60vw" priority />
            <figcaption>Our team</figcaption>
          </figure>
          <figure>
            <Image src="/images/industries/smart-buildings.webp" alt="Aerial view of a campus with connected buildings" width={900} height={675} sizes="(min-width: 960px) 20vw, 40vw" />
            <figcaption>Smart buildings</figcaption>
          </figure>
          <figure>
            <Image src="/images/home/photo-tank.webp" alt="Tank site with a wireless level-monitoring device" width={900} height={506} sizes="(min-width: 960px) 20vw, 40vw" />
            <figcaption>Tanks &amp; pumps</figcaption>
          </figure>
          <span className="cap">Illustrative images</span>
        </div>
      </section>

      {/* Who we are */}
      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="who-h">
        <div className="v-sh">
          <h2 className="v-disp" id="who-h">
            From software to intelligent infrastructure
          </h2>
        </div>
        <div className="v-about2">
          <div className="v-prose">
            <p>
              Founded in 2008, iGreen Systems &amp; Technologies began as a software engineering company focused on solving business
              problems through technology.
            </p>
            <p>
              As we worked closely with organisations, we recognised a larger challenge — many critical operations still depended on
              disconnected systems, manual processes, and limited visibility. This led to our evolution.
            </p>
            <p>
              Today, we specialise in building intelligent, connected systems that bring together sensors, software, and real-time data
              to transform how physical infrastructure is monitored, managed, and optimised.
            </p>
          </div>
          <div className="v-stats">
            {stats.map((s) => (
              <div className="v-stat v-brut v-rv" key={s.label}>
                <b data-n={s.n} data-s={s.suffix}>
                  {s.n}
                  {s.suffix}
                </b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="do-h">
        <div className="v-sh">
          <h2 className="v-disp" id="do-h">
            Turning operations into intelligent systems
          </h2>
        </div>
        <div className="v-svc five">
          {pillars.map((p, i) => (
            <div className={`v-card v-brut ${i % 2 ? 'del' : 'iot'} v-rv`} key={p.title}>
              <div>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="story-h">
        <div className="v-story v-brut v-rv">
          <div>
            <span className="v-chip" style={{ background: 'var(--v-lime)' }}>
              Our story
            </span>
            <h2 className="v-disp" id="story-h" style={{ marginTop: '0.4em' }}>
              Why we evolved
            </h2>
          </div>
          <div className="v-prose">
            <p>When we started, our focus was simple — build reliable software solutions.</p>
            <p>
              But over time, we realised that software alone was not enough. Operational challenges were deeply rooted in the physical
              world — buildings, equipment, utilities, and infrastructure that lacked real-time visibility and intelligent control.
            </p>
            <p>We asked a fundamental question:</p>
            <blockquote>What if these systems could think, respond, and optimise themselves?</blockquote>
            <p>
              That question shaped our journey. We expanded beyond traditional development and began building integrated systems that
              connect physical environments with digital intelligence. Today, our work reflects that vision — solving real-world problems
              through practical, scalable technology.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="appr-h">
        <div className="v-sh">
          <h2 className="v-disp" id="appr-h">
            From idea to impact
          </h2>
          <p>Our approach, in five steps.</p>
        </div>
        <ol className="v-steps">
          {approachSteps.map((s) => (
            <li className="v-brut v-rv" key={s.num}>
              <span className="n">{s.num}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Impact */}
      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="impact-h">
        <div className="v-sh">
          <h2 className="v-disp" id="impact-h">
            Delivering measurable outcomes
          </h2>
        </div>
        <ul className="v-checks rich">
          {impactItems.map((it) => (
            <li className="v-brut v-rv" key={it.label}>
              <strong>{it.label}</strong>
              <span>{it.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Why iGreen — proof, same as the homepage */}
      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="why-h">
        <div className="v-sh">
          <h2 className="v-disp" id="why-h">
            What sets us apart
          </h2>
          <p>What we have actually deployed, and where.</p>
        </div>
        <div className="v-why">
          {why.map((w, i) => (
            <div key={w.title}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
              <div className="proof">
                <b>{w.stat}</b>
                <span>{w.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="vision-h">
        <div className="v-sh">
          <h2 className="v-disp" id="vision-h">
            Building the future of intelligent infrastructure
          </h2>
        </div>
        <div className="v-about2">
          <div className="v-prose">
            <p>
              We envision a world where physical environments are no longer passive, but intelligent and responsive. By combining IoT,
              data, and software, we are building systems that make infrastructure smarter, more reliable, and future-ready.
            </p>
            <p>This is the future we are building — one intelligent system at a time.</p>
          </div>
          <div>
          <p style={{ fontWeight: 800, marginBottom: 12 }}>Our goal is to help organisations:</p>
          <ul className="v-checks one">
            {goalBullets.map((g) => (
              <li className="v-brut v-rv" key={g}>
                {g}
              </li>
            ))}
          </ul>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="std-h">
        <div className="v-sh">
          <h2 className="v-disp" id="std-h">
            Built to enterprise standards
          </h2>
          <p>
            Our solutions are designed and delivered in alignment with internationally recognised standards — giving enterprise clients
            the confidence to deploy at scale.
          </p>
        </div>
        <div className="v-svc" style={{ marginBottom: 0 }}>
          {standards.map((s, i) => (
            <div className={`v-card v-brut ${i ? 'del' : 'iot'} v-rv`} key={s.name}>
              <div>
                <h3>{s.name}</h3>
                <p className="v-note" style={{ marginBottom: 8 }}>
                  {s.subtitle}
                </p>
                <p>{s.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global + brochure */}
      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="global-h">
        <div className="v-about2">
          <div className="v-brut v-rv v-global">
            <h2 className="v-disp" id="global-h">
              Built for scale, designed for global impact
            </h2>
            <p>
              Our solutions are designed to be scalable, adaptable, and relevant across geographies. With experience working across
              diverse operational environments — from smart buildings in India to tank monitoring in the Americas — we bring a global
              perspective to solving complex infrastructure challenges.
            </p>
          </div>
          <div className="v-brut v-rv v-brochure">
            <span className="v-chip" style={{ background: 'var(--v-lime)' }}>
              Company profile
            </span>
            <h3>Download our company brochure</h3>
            <p>A complete overview of iGreen Systems — our story, services, portfolio highlights, and contact details in one shareable PDF.</p>
            <a className="v-btn" href="/iGreen-Systems-Company-Profile.pdf" download="iGreen-Systems-Company-Profile.pdf">
              Download PDF ↓
            </a>
          </div>
        </div>
      </section>

      <EnquiryCta />
    </div>
  );
}
