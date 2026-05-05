import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: 'iGreen Systems | IoT Solutions & Digital Transformation',
    template: '%s | iGreen Systems',
  },
  description:
    'iGreen Systems — IoT solutions and digital transformation company in Hyderabad & Kakinada, India. Smart building management, connected devices, industrial IoT, web & mobile app development since 2008.',
  keywords: [
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
    title: 'iGreen Systems | IoT Solutions & Digital Transformation',
    description:
      'IoT solutions and digital transformation company in Hyderabad & Kakinada, India. Smart building management, connected devices, industrial IoT, and web & mobile app development since 2008.',
    url: 'https://igreensystems.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iGreen Systems | IoT Solutions & Digital Transformation',
    description:
      'IoT solutions and digital transformation company in Hyderabad & Kakinada, India. Smart building management, connected devices, and web & mobile apps since 2008.',
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
      'telephone': '+91-9849481081',
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
      'telephone': '+91-9849481081',
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
      'telephone': '+91-9849481081',
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
