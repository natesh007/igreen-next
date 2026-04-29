import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import Stats from '@/components/home/Stats';
import Process from '@/components/home/Process';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Stats />
      <Process />
      <CTA />
    </>
  );
}
