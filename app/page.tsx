import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Features from '@/components/Features';
import Integrations from '@/components/Integrations';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Features />
      <Integrations />
      <HowItWorks />
      <Benefits />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
