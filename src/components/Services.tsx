import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './useInView';
import {
  Globe,
  Palette,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Code2,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Custom-built websites with cutting-edge technologies. We create fast, scalable, and SEO-optimized web applications tailored to your needs.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    color: '#6C3CE9',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'User-centric design that converts. From wireframes to high-fidelity prototypes, we craft interfaces that delight users and drive engagement.',
    tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    color: '#00F5D4',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android devices.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    color: '#FF6B6B',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    desc: 'Complete e-commerce solutions that drive sales. Custom storefronts, payment integration, and conversion-optimized checkout flows.',
    tags: ['Shopify', 'WooCommerce', 'Stripe', 'Custom'],
    color: '#9B6DFF',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    desc: 'Data-driven marketing strategies that grow your brand. SEO, content marketing, social media, and paid advertising campaigns.',
    tags: ['SEO', 'Analytics', 'Social Media', 'PPC'],
    color: '#00F5D4',
  },
  {
    icon: Code2,
    title: 'Brand Identity',
    desc: 'Compelling brand identities that tell your story. Logo design, brand guidelines, and visual systems that set you apart.',
    tags: ['Logo Design', 'Brand Guide', 'Typography', 'Colors'],
    color: '#FF6B6B',
  },
];

export default function Services() {
  const [ref, inView] = useInView(0.1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 overflow-hidden grid-bg" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-brand text-sm font-semibold uppercase tracking-[0.3em]">What We Do</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-space font-bold">
            Services That <span className="gradient-text">Elevate</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-lg">
            End-to-end digital solutions designed to transform your brand and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group rounded-2xl p-8 glass glass-hover cursor-default transition-all duration-500 hover:translate-y-[-6px]"
            >
              {/* Glow effect */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)`,
                    }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}15` }}
                >
                  <service.icon size={26} style={{ color: service.color }} />
                </div>

                {/* Title + Arrow */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-space font-semibold text-white">{service.title}</h3>
                  <ArrowUpRight
                    size={18}
                    className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed mb-6">{service.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/40 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
