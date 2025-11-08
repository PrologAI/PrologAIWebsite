import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { WhyLog } from '@/components/WhyLog';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <WhyLog />
      <Features />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
