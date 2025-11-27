import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <Benefits />
      <Contact />
      <Footer />
    </main>
  );
}
