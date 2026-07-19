import ParticleField from './components/ParticleField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Work from './components/Work';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark text-white overflow-x-hidden noise-overlay">
      {/* Particle Background */}
      <ParticleField />

      {/* Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <MarqueeBanner />
        <About />
        <Services />
        <Process />
        <Work />
        <TechStack />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
