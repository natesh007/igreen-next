import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Effects from '@/components/homepage/Effects';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with iGreen Systems — IoT solutions and digital transformation consulting in Hyderabad and Kakinada. Offices in Telangana and Andhra Pradesh. Respond within 1 business day.',
  alternates: { canonical: '/contact' },
};

const offices = [
  {
    city: 'Hyderabad',
    address: '#1, 1-98/9/12C, Jaihind Enclave, Near Image Gardens, Madhapur, Hyderabad, Telangana 500081, India.',
    phones: ['+91 984 948 1081', '+91 934 785 1081'],
  },
  {
    city: 'Kakinada',
    address: '4/52-2, Sita Enclave, Rama Reddy Nagar, Pratap Nagar Bridge, Kakinada, Andhra Pradesh 533004, India.',
    phones: ['+91 984 948 1081', '+91 934 785 1081'],
  },
];

const contactJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://igreensystems.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Contact', 'item': 'https://igreensystems.com/contact' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact iGreen Systems',
    'url': 'https://igreensystems.com/contact',
    'description': 'Get in touch with iGreen Systems for IoT solutions, digital transformation, web and mobile app development in Hyderabad and Kakinada.',
    'mainEntity': { '@id': 'https://igreensystems.com/#organization' },
  },
];

export default function ContactPage() {
  return (
    <div className="vibrant v-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <noscript>
        <style>{'.v-rv{opacity:1!important;transform:none!important}'}</style>
      </noscript>
      <Effects />

      <section className="v-w v-ihero two" aria-labelledby="con-h">
        <div>
          <nav className="v-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <span className="v-chip" style={{ background: 'var(--v-sky)' }}>
            Contact us
          </span>
          <h1 id="con-h">Let&apos;s start a conversation</h1>
          <p className="v-lead">Tell us about your project and we&apos;ll get back to you within one business day.</p>
        </div>
        <div className="pic v-rv">
          <Image src="/images/home/office-soft.webp" alt="An open-plan iGreen office with plants and the iGreen sign wall; faces blurred" width={1400} height={560} sizes="(min-width: 960px) 48vw, 100vw" priority />
          <span className="cap">Illustrative image</span>
        </div>
      </section>

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-label="Contact details and form">
        <div className="v-contact">
          <div className="info">
            <a className="v-brut v-rv" href="mailto:contact@igreensystems.com">
              <small>Email</small>
              <strong>contact@igreensystems.com</strong>
            </a>
            <div className="v-brut v-rv">
              <small>Phone</small>
              <a href="tel:+919849481081">
                <strong>+91 984 948 1081</strong>
              </a>
              <a href="tel:+919347851081">
                <strong>+91 934 785 1081</strong>
              </a>
            </div>
            <div className="v-brut v-rv">
              <small>Response time</small>
              <p>
                We respond to all inquiries within <strong>1 business day</strong>. For urgent matters, mention it in your message.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="v-w v-sec" style={{ paddingTop: 0 }} aria-labelledby="off-h">
        <div className="v-sh">
          <h2 className="v-disp" id="off-h">
            Our offices
          </h2>
        </div>
        <div className="v-svc" style={{ marginBottom: 0 }}>
          {offices.map((o, i) => (
            <div className={`v-card v-brut ${i ? 'del' : 'iot'} v-rv`} key={o.city}>
              <div>
                <h3>{o.city}</h3>
                <p>{o.address}</p>
                <p style={{ marginTop: 10 }}>
                  {o.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`} style={{ display: 'block', fontWeight: 800, textDecoration: 'underline' }}>
                      {p}
                    </a>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
