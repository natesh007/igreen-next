import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import TrustStrip from '@/components/home/TrustStrip';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <TrustStrip />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
