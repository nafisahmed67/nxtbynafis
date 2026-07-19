import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-dark/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 bg-accent rounded-full pulse-dot" />
          <span className="text-white/60 text-sm font-medium">Available for new projects</span>
          <Sparkles size={14} className="text-brand-light" />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-space font-bold leading-[0.9] tracking-tight">
            <span className="block text-white">We Build</span>
            <span className="block gradient-text mt-2">The Future</span>
            <span className="block text-white mt-2">of Digital</span>
          </h1>
        </motion.div>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
        >
          NXT by Nafis crafts <span className="text-white/80">cutting-edge digital experiences</span> that
          push boundaries. From stunning websites to powerful brands — we turn your
          vision into <span className="text-accent">reality</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="magnetic-btn group relative px-8 py-4 bg-gradient-to-r from-brand to-brand-light text-white font-semibold rounded-full overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#about"
            className="magnetic-btn px-8 py-4 text-white/70 font-semibold rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-3xl mx-auto"
        >
          {[
            { num: '150+', label: 'Projects Delivered' },
            { num: '50+', label: 'Happy Clients' },
            { num: '5+', label: 'Years Experience' },
            { num: '99%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-space font-bold gradient-text">{stat.num}</div>
              <div className="mt-1 text-xs md:text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
