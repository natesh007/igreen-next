import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import Testimonials from '@/components/home/Testimonials';
import Process from '@/components/home/Process';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Testimonials />
      <Process />
      <CTA />
    </>
  );
}
