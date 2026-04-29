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
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ backgroundColor: '#0A0F1C', borderColor: '#1F2937' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Services
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[480px] rounded-xl shadow-2xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}
              >
                <div className="p-5 grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#1DBCD6' }}>
                      IoT & Digital Transformation
                    </p>
                    <ul className="space-y-1">
                      {iotServices.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#5CB85C' }}>
                      Digital Delivery
                    </p>
                    <ul className="space-y-1">
                      {deliveryServices.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-t px-5 py-3" style={{ borderColor: '#1F2937' }}>
                  <Link
                    href="/services"
                    className="text-sm font-medium transition-colors"
                    style={{ color: '#1DBCD6' }}
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/careers"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #1DBCD6, #5CB85C)' }}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t" style={{ backgroundColor: '#111827', borderColor: '#1F2937' }}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            <button
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-300"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="pl-4 space-y-1">
                <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider" style={{ color: '#1DBCD6' }}>
                  IoT & Digital Transformation
                </p>
                {iotServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
                <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider mt-2" style={{ color: '#5CB85C' }}>
                  Digital Delivery
                </p>
                {deliveryServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-3 py-1.5 text-sm text-gray-400 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            <div className="pt-2">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-2 rounded-lg text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #1DBCD6, #5CB85C)' }}
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
