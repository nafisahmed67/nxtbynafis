import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const [ref, inView] = useInView(0.2);

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-dark to-dark opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-accent-2/20 rounded-full blur-[80px]" />

          <div className="relative z-10 py-20 px-8 md:px-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-space font-bold text-white leading-tight"
            >
              Ready to Take Your
              <br />
              Brand to the{' '}
              <span className="text-accent">Next Level?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-white/60 text-lg max-w-xl mx-auto"
            >
              Let's collaborate and create something extraordinary. Your vision, our expertise — unlimited possibilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#contact"
                className="group px-8 py-4 bg-white text-dark font-bold rounded-full flex items-center gap-2 hover:bg-accent hover:text-dark transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#work"
                className="px-8 py-4 text-white/80 font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                View Our Work
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
