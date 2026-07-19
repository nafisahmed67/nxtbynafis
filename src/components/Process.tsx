import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    num: '01',
    title: 'Discovery',
    desc: 'We dive deep into your vision, goals, and audience to understand every aspect of your project.',
  },
  {
    icon: PenTool,
    num: '02',
    title: 'Design',
    desc: 'Crafting pixel-perfect designs and prototypes that bring your vision to life with stunning detail.',
  },
  {
    icon: Code,
    num: '03',
    title: 'Develop',
    desc: 'Building with cutting-edge technology, ensuring performance, scalability, and clean code.',
  },
  {
    icon: Rocket,
    num: '04',
    title: 'Launch',
    desc: 'Deploying, optimizing, and providing ongoing support to ensure your success.',
  },
];

export default function Process() {
  const [ref, inView] = useInView(0.15);

  return (
    <section className="relative py-32 overflow-hidden bg-dark-2/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-brand text-sm font-semibold uppercase tracking-[0.3em]">Our Process</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-space font-bold">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-lg">
            A streamlined process designed to deliver exceptional results on time.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-brand/30 via-accent/30 to-brand/30" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center group"
            >
              {/* Number + Icon */}
              <div className="relative mx-auto w-20 h-20 mb-8">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/20 to-accent/10 rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
                <div className="absolute inset-1 rounded-2xl bg-dark-2 rotate-45" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <step.icon size={28} className="text-brand-light" />
                </div>
                {/* Number badge */}
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                  {step.num}
                </div>
              </div>

              <h3 className="text-xl font-space font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
