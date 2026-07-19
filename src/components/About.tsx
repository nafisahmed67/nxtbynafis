import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Zap, Target, Lightbulb, Rocket } from 'lucide-react';

const values = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Performance-first approach ensuring blazing speed.' },
  { icon: Target, title: 'Pixel Perfect', desc: 'Every detail crafted with surgical precision.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Pushing boundaries with cutting-edge technology.' },
  { icon: Rocket, title: 'Results Driven', desc: 'Solutions that accelerate your growth.' },
];

export default function About() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand text-sm font-semibold uppercase tracking-[0.3em]">Who We Are</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-space font-bold leading-tight">
              Crafting Digital{' '}
              <span className="gradient-text">Excellence</span>{' '}
              Since Day One
            </h2>
            <p className="mt-6 text-white/50 text-lg leading-relaxed">
              At NXT by Nafis, we're not just building websites — we're engineering 
              digital ecosystems. We combine creative vision with technical mastery 
              to deliver experiences that captivate, convert, and leave lasting impressions.
            </p>
            <p className="mt-4 text-white/40 leading-relaxed">
              Our approach blends aesthetics with functionality, ensuring every project 
              isn't just visually stunning but strategically designed to achieve your 
              business objectives.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="#contact"
                className="magnetic-btn px-8 py-3.5 bg-gradient-to-r from-brand to-brand-light text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                Start a Project
              </a>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-accent border-2 border-dark flex items-center justify-center text-xs font-bold"
                    >
                      {['N', 'X', 'T'][i - 1]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">50+ Clients</div>
                  <div className="text-xs text-white/40">Trust our expertise</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="glass glass-hover rounded-2xl p-6 group cursor-default transition-all duration-500 hover:translate-y-[-4px]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={22} className="text-brand-light" />
                </div>
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
