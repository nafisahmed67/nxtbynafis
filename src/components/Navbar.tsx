import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand to-accent rounded-lg rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
              <span className="relative text-white font-bold font-space text-lg">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-space font-bold text-lg leading-none">NXT</span>
              <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">by Nafis</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="magnetic-btn px-6 py-2.5 bg-gradient-to-r from-brand to-brand-light text-white text-sm font-semibold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-space font-semibold text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-brand to-brand-light text-white font-semibold rounded-full"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
