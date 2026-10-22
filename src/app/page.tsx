import type { Metadata } from 'next';
import Effects from '@/components/homepage/Effects';
import Hero from '@/components/homepage/Hero';
import Trust from '@/components/homepage/Trust';
import Solutions from '@/components/homepage/Solutions';
import IotDemo from '@/components/homepage/IotDemo';
import CaseStudies from '@/components/homepage/CaseStudies';
import Industries from '@/components/homepage/Industries';
import Why from '@/components/homepage/Why';
import EnquiryCta from '@/components/homepage/EnquiryCta';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div className="vibrant v-page">
      <noscript>
        <style>{'.v-rv{opacity:1!important;transform:none!important}'}</style>
      </noscript>
      <Effects />
      <Hero />
      <Trust />
      <Solutions />
      <CaseStudies />
      <IotDemo />
      <Industries />
      <Why />
      <EnquiryCta />
    </div>
  );
}
