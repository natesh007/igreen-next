import type { Metadata } from "next";
import { Unbounded, Manrope } from "next/font/google";
import "./globals.css";
import "./vibrant.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const unbounded = Unbounded({ variable: "--font-unbounded", subsets: ["latin"], weight: ["500", "700", "900"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "700", "800"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: 'iGreen Systems | Software & IoT Company, Kakinada & Hyderabad',
    template: '%s | iGreen Systems',
  },
  description:
    'iGreen Systems — software company in Kakinada and Hyderabad, India. IoT solutions, smart building management, web development and mobile application development since 2008.',
  keywords: [
    'software company Kakinada',
    'software company in Kakinada',
    'web development company Kakinada',
    'mobile application development Kakinada',
    'mobile app development company Kakinada',
    'software development company Hyderabad',
    'IoT solutions Hyderabad',
    'IoT solutions Kakinada',
    'IoT solutions Andhra Pradesh',
    'smart building management India',
    'digital transformation company Hyderabad',
    'connected devices IoT India',
    'facility management IoT',
    'industrial IoT India',
    'web application development Hyderabad',
    'mobile app development India',
    'iGreen Systems',
    'IoT company Telangana',
    'digital transformation Andhra Pradesh',
    'Flutter developer Hyderabad',
    'cloud solutions India',
  ],
  authors: [{ name: 'iGreen Systems', url: 'https://igreensystems.com' }],
  creator: 'iGreen Systems',
  publisher: 'iGreen Systems',
  metadataBase: new URL('https://igreensystems.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'iGreen Systems',
    title: 'iGreen Systems | Software & IoT Company, Kakinada & Hyderabad',
    description:
      'Software company in Kakinada and Hyderabad, India. IoT solutions, smart building management, web development and mobile application development since 2008.',
    url: 'https://igreensystems.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iGreen Systems | Software & IoT Company, Kakinada & Hyderabad',
    description:
      'Software company in Kakinada and Hyderabad, India. IoT solutions, web development and mobile app development since 2008.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://igreensystems.com/#organization',
      'name': 'iGreen Systems',
      'url': 'https://igreensystems.com',
      'logo': {
        '@type': 'ImageObject',
        '@id': 'https://igreensystems.com/#logo',
        'url': 'https://igreensystems.com/igreen_1.png',
        'contentUrl': 'https://igreensystems.com/igreen_1.png',
        'caption': 'iGreen Systems',
      },
      'image': { '@id': 'https://igreensystems.com/#logo' },
      'sameAs': ['https://www.linkedin.com/company/igreensystems/'],
      'foundingDate': '2008',
      'numberOfEmployees': { '@type': 'QuantitativeValue', 'value': 25 },
      'email': 'contact@igreensystems.com',
      'telephone': '+91-984-948-1081',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '#1, 1-98/9/12C, Jaihind Enclave, Near Image Gardens, Madhapur',
        'addressLocality': 'Hyderabad',
        'addressRegion': 'Telangana',
        'postalCode': '500081',
        'addressCountry': 'IN',
      },
      'description':
        'IoT solutions and digital transformation company based in Hyderabad, India. Building smart building management, connected devices, and enterprise digital transformation solutions since 2008.',
      'knowsAbout': [
        'Internet of Things',
        'Digital Transformation',
        'Smart Building Management',
        'Connected Devices',
        'Edge Computing',
        'Web Application Development',
        'Mobile App Development',
        'Cloud Solutions',
        'Industrial IoT',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://igreensystems.com/#local-hyderabad',
      'name': 'iGreen Systems',
      'url': 'https://igreensystems.com',
      'image': 'https://igreensystems.com/igreen_1.png',
      'telephone': '+91-984-948-1081',
      'email': 'contact@igreensystems.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '#1, 1-98/9/12C, Jaihind Enclave, Near Image Gardens, Madhapur',
        'addressLocality': 'Hyderabad',
        'addressRegion': 'Telangana',
        'postalCode': '500081',
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 17.4478,
        'longitude': 78.3817,
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '09:00',
        'closes': '18:00',
      },
      'priceRange': '$$',
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://igreensystems.com/#local-kakinada',
      'name': 'iGreen Systems — Kakinada',
      'url': 'https://igreensystems.com',
      'image': 'https://igreensystems.com/igreen_1.png',
      'telephone': '+91-984-948-1081',
      'email': 'contact@igreensystems.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '4/52-2, Sita Enclave, Rama Reddy Nagar, Pratap Nagar Bridge',
        'addressLocality': 'Kakinada',
        'addressRegion': 'Andhra Pradesh',
        'postalCode': '533004',
        'addressCountry': 'IN',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://igreensystems.com/#website',
      'url': 'https://igreensystems.com',
      'name': 'iGreen Systems',
      'description': 'IoT solutions and digital transformation company in Hyderabad, India',
      'publisher': { '@id': 'https://igreensystems.com/#organization' },
      'inLanguage': 'en-IN',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Google tag (gtag.js) — one tag for the whole site, loaded from the root layout after the page has finished loading (keeps it off the critical path) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JBSWRHXTX4" strategy="lazyOnload" />
        <Script id="google-tag" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JBSWRHXTX4');`}
        </Script>
      </body>
    </html>
  );
}
