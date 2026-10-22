'use client';
import { useState } from 'react';
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

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/careers', label: 'Careers' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <header className="vibrant v-head">
      <div className="in">
        <Link href="/" className="v-logo" aria-label="iGreen Systems home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="v-nav" aria-label="Main">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          <div className="v-dd">
            <button type="button" className="dd-btn" aria-haspopup="true">
              Services <span aria-hidden="true">▾</span>
            </button>
            <div className="v-dd-panel v-brut">
              <div>
                <h4>IoT &amp; digital</h4>
                {iotServices.map((s) => (
                  <Link key={s.href} href={s.href}>
                    {s.label}
                  </Link>
                ))}
              </div>
              <div>
                <h4>Digital delivery</h4>
                {deliveryServices.map((s) => (
                  <Link key={s.href} href={s.href}>
                    {s.label}
                  </Link>
                ))}
                <Link href="/services" className="all">
                  View all services →
                </Link>
              </div>
            </div>
          </div>

          <Link href="/portfolio">Portfolio</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact" className="v-btn v-btn-sm">
            Discuss your project
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="v-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="v-mobile">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={close}>
              {l.label}
            </Link>
          ))}
          <button type="button" className="sv" onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen}>
            Services <span aria-hidden="true">{servicesOpen ? '▴' : '▾'}</span>
          </button>
          {servicesOpen && (
            <div className="sub">
              <h4>IoT &amp; digital</h4>
              {iotServices.map((s) => (
                <Link key={s.href} href={s.href} onClick={close}>
                  {s.label}
                </Link>
              ))}
              <h4>Digital delivery</h4>
              {deliveryServices.map((s) => (
                <Link key={s.href} href={s.href} onClick={close}>
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          <Link href="/contact" className="v-btn" onClick={close} style={{ width: '100%' }}>
            Discuss your project
          </Link>
        </div>
      )}
    </header>
  );
}
