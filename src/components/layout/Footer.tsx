import Link from 'next/link';
import Logo from '../ui/Logo';

const iotServices = [
  { href: '/services/iot-solutions', label: 'IoT Solutions' },
  { href: '/services/connected-devices', label: 'Connected Devices' },
  { href: '/services/smart-manufacturing', label: 'Smart Manufacturing' },
  { href: '/services/edge-computing', label: 'Edge Computing' },
  { href: '/services/digital-transformation', label: 'Digital Transformation' },
];

const deliveryServices = [
  { href: '/services/web-applications', label: 'Web Applications' },
  { href: '/services/mobile-apps', label: 'Mobile Apps' },
  { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

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

export default function Footer() {
  return (
    <footer className="vibrant v-foot">
      <div className="top">
        <div className="brand">
          <Logo />
          <p>Connecting the future, transforming business. IoT solutions and digital transformation for the next generation of enterprises.</p>
          <a href="https://www.linkedin.com/company/igreensystems/" target="_blank" rel="noopener noreferrer" className="li" aria-label="iGreen Systems on LinkedIn">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <div>
          <h3 className="c1">IoT &amp; digital</h3>
          <ul>
            {iotServices.map((s) => (
              <li key={s.href}>
                <Link href={s.href}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="c2">Digital delivery</h3>
          <ul>
            {deliveryServices.map((s) => (
              <li key={s.href}>
                <Link href={s.href}>{s.label}</Link>
              </li>
            ))}
          </ul>
          <h3 style={{ marginTop: 28 }}>Company</h3>
          <ul>
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Our offices</h3>
          {offices.map((o) => (
            <div className="office" key={o.city}>
              <p className="city">{o.city}</p>
              <p>{o.address}</p>
              {o.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>
                  {p}
                </a>
              ))}
            </div>
          ))}
          <div className="office">
            <p className="city">Email</p>
            <a href="mailto:contact@igreensystems.com">contact@igreensystems.com</a>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p>© {new Date().getFullYear()} iGreen Systems. All rights reserved.</p>
        <div>
          <Link href="/useful-links/privacy-policy">Privacy Policy</Link>
          <Link href="/useful-links/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
