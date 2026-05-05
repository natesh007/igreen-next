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
    phones: ['+91 9849481081', '+91 9676067666'],
  },
  {
    city: 'Kakinada',
    address: '4/52-2, Sita Enclave, Rama Reddy Nagar, Pratap Nagar Bridge, Kakinada, Andhra Pradesh 533004, India.',
    phones: ['+91 9849481081', '+91 9676067666'],
  },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: '#060A12', borderColor: '#1F2937' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Connecting the future, transforming business. IoT solutions and digital transformation
              for the next generation of enterprises.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.linkedin.com/company/igreensystems/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                style={{ backgroundColor: '#1F2937' }}
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* IoT Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#1DBCD6' }}>
              IoT & Digital
            </h3>
            <ul className="space-y-2">
              {iotServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#5CB85C' }}>
              Digital Delivery
            </h3>
            <ul className="space-y-2">
              {deliveryServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mt-8 mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Our Offices</h3>
            <div className="space-y-6">
              {offices.map((o) => (
                <div key={o.city}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#1DBCD6' }}>
                    {o.city}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-1">{o.address}</p>
                  {o.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="block text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              ))}
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Email</p>
                <a href="mailto:contact@igreensystems.com" className="text-xs text-gray-400 hover:text-white transition-colors">
                  contact@igreensystems.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: '#1F2937' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} iGreen Systems. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/useful-links/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/useful-links/terms-of-service" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
