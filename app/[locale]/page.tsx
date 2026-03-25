import Hero from '@/components/Hero';
import ImpactBanner from '@/components/ImpactBanner';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactBanner />
      <Process />
      <Gallery />
      <Testimonials />
      <CTABanner />
    </>
  );
}
