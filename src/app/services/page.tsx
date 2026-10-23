import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Effects from '@/components/homepage/Effects';
import EnquiryCta from '@/components/homepage/EnquiryCta';
import { serviceImages } from '@/components/services/serviceImages';

export const metadata: Metadata = {
  title: 'Services',
  description: 'IoT solutions, digital transformation consulting, web applications, mobile apps, and cloud solutions from iGreen Systems, Hyderabad. Serving enterprises in Andhra Pradesh, Telangana, and globally since 2008.',
  alternates: { canonical: '/services' },
};

const iotServices = [
  { href: '/services/iot-solutions', title: 'IoT Solutions', desc: 'End-to-end IoT architecture, sensor integration, and real-time data pipelines that connect your physical assets to actionable insights.' },
  { href: '/services/connected-devices', title: 'Connected Devices', desc: 'Intelligent device ecosystems from hardware selection and firmware through cloud connectivity and device management at scale.' },
  { href: '/services/smart-manufacturing', title: 'Smart Manufacturing', desc: 'Industry 4.0 intelligence — real-time production monitoring, predictive maintenance, and OEE optimization for modern factories.' },
  { href: '/services/edge-computing', title: 'Edge Computing', desc: 'Low-latency edge architectures that process data at the source, reduce bandwidth costs, and enable offline capability.' },
  { href: '/services/digital-transformation', title: 'Digital Transformation', desc: 'Technology-aligned business strategy — process digitization, legacy modernization, and change management that sticks.' },
];

const deliveryServices = [
  { href: '/services/web-applications', title: 'Web Applications', desc: 'Scalable, high-performance web apps built with React, Next.js, and modern cloud-native architectures.' },
  { href: '/services/mobile-apps', title: 'Mobile Apps', desc: 'Cross-platform and native mobile applications for iOS and Android — from concept to App Store.' },
  { href: '/services/cloud-solutions', title: 'Cloud Solutions', desc: 'AWS, Azure, and GCP architecture design, cloud migration, infrastructure-as-code, and DevOps automation.' },
];

function Group({ title, items, kind }: { title: string; items: typeof iotServices; kind: 'iot' | 'del' }) {
  return (
    <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-label={title}>
      <h2 className="v-grp">{title}</h2>
      <div className="v-sgrid">
        {items.map((s) => {
          const img = serviceImages[s.href.split('/').pop()!];
          return (
            <Link className={`v-scard v-brut ${kind} v-rv`} href={s.href} key={s.href}>
              <div className="pic">
                <Image src={img.hero} alt={img.alt} width={900} height={506} sizes="(min-width: 1100px) 30vw, (min-width: 640px) 46vw, 100vw" />
              </div>
              <div className="body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="more">Learn more →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="vibrant v-page">
      <noscript>
        <style>{'.v-rv{opacity:1!important;transform:none!important}'}</style>
      </noscript>
      <Effects />

      <section className="v-w v-ihero two" aria-labelledby="svcs-h">
        <div>
          <nav className="v-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Services</span>
          </nav>
          <span className="v-chip" style={{ background: 'var(--v-sky)' }}>
            Services
          </span>
          <h1 id="svcs-h">Full-spectrum technology solutions</h1>
          <p className="v-lead">IoT &amp; Digital Transformation at the core, delivered through world-class web, mobile, and cloud engineering.</p>
          <div className="v-cta-row" style={{ marginTop: 22 }}>
            <Link className="v-btn" href="#enquire">
              Book a free consultation →
            </Link>
            <Link className="v-btn alt" href="/portfolio">
              See our work
            </Link>
          </div>
        </div>
        <div className="pic v-rv">
          <Image src="/images/home/night-building.webp" alt="Connected building at night with live monitoring points" width={1500} height={700} sizes="(min-width: 960px) 48vw, 100vw" priority />
          <span className="cap">Illustrative image</span>
        </div>
      </section>

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="local-h">
        <div className="v-brut v-rv v-brief">
          <div>
            <h2 className="v-disp" id="local-h">
              Software company in Kakinada and Hyderabad
            </h2>
            <p>
              From our offices in Kakinada, Andhra Pradesh and Hyderabad, Telangana, we build{' '}
              <Link href="/services/iot-solutions" style={{ textDecoration: 'underline', fontWeight: 800 }}>
                IoT solutions
              </Link>
              ,{' '}
              <Link href="/services/web-applications" style={{ textDecoration: 'underline', fontWeight: 800 }}>
                web applications
              </Link>{' '}
              and{' '}
              <Link href="/services/mobile-apps" style={{ textDecoration: 'underline', fontWeight: 800 }}>
                mobile apps
              </Link>{' '}
              for businesses across India and abroad. Web development, mobile application development and IoT under one team, since 2008.
            </p>
          </div>
        </div>
      </section>

      <Group title="IoT & Digital Transformation" items={iotServices} kind="iot" />
      <Group title="Digital Delivery" items={deliveryServices} kind="del" />

      <EnquiryCta />
    </div>
  );
}
