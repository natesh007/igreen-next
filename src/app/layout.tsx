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
    default: 'iGreen Systems | IoT & Digital Transformation',
    template: '%s | iGreen Systems',
  },
  description:
    'End-to-end IoT solutions and digital transformation services in Hyderabad, Kakinada and across Andhra Pradesh & India. Smart building management, connected devices, web & mobile applications.',
  keywords: [
    'IoT solutions Hyderabad',
    'IoT solutions Kakinada',
    'IoT solutions Andhra Pradesh',
    'smart building management',
    'digital transformation company India',
    'connected devices IoT',
    'facility management IoT',
    'industrial IoT India',
    'web application development Hyderabad',
    'mobile app development India',
  ],
  authors: [{ name: 'iGreen Systems' }],
  creator: 'iGreen Systems',
  metadataBase: new URL('https://igreensystems.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'iGreen Systems',
    title: 'iGreen Systems | IoT & Digital Transformation',
    description:
      'End-to-end IoT solutions and digital transformation in Hyderabad, Kakinada, Andhra Pradesh and across India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iGreen Systems | IoT & Digital Transformation',
    description:
      'End-to-end IoT solutions and digital transformation in Hyderabad, Kakinada, Andhra Pradesh and across India.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
