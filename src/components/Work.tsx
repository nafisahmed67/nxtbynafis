import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './useInView';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Web', 'Branding', 'Mobile', 'E-Commerce'];

const projects = [
  {
    title: 'Zenith Finance',
    category: 'Web',
    desc: 'A fintech platform with real-time trading dashboards and analytics.',
    image: 'https://images.pexels.com/photos/7793177/pexels-photo-7793177.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['React', 'Node.js', 'WebSocket'],
    color: '#6C3CE9',
  },
  {
    title: 'Aura Lifestyle',
    category: 'Branding',
    desc: 'Complete brand identity for a luxury wellness brand.',
    image: 'https://images.pexels.com/photos/9881353/pexels-photo-9881353.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['Branding', 'Logo', 'Guidelines'],
    color: '#00F5D4',
  },
  {
    title: 'SwiftCart Pro',
    category: 'E-Commerce',
    desc: 'High-performance e-commerce platform with AI recommendations.',
    image: 'https://images.pexels.com/photos/7675029/pexels-photo-7675029.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['Next.js', 'Stripe', 'AI'],
    color: '#FF6B6B',
  },
  {
    title: 'Pulse Health',
    category: 'Mobile',
    desc: 'Health & fitness tracking app with personalized workout plans.',
    image: 'https://images.pexels.com/photos/7792859/pexels-photo-7792859.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['React Native', 'Firebase'],
    color: '#9B6DFF',
  },
  {
    title: 'Nova Studio',
    category: 'Web',
    desc: 'Creative agency portfolio with immersive 3D animations.',
    image: 'https://images.pexels.com/photos/17279851/pexels-photo-17279851.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['Three.js', 'GSAP', 'WebGL'],
    color: '#00F5D4',
  },
  {
    title: 'EcoMarket',
    category: 'E-Commerce',
    desc: 'Sustainable marketplace connecting eco-conscious consumers.',
    image: 'https://images.pexels.com/photos/7413857/pexels-photo-7413857.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['Shopify', 'Custom Theme'],
    color: '#6C3CE9',
  },
];

export default function Work() {
  const [ref, inView] = useInView(0.1);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-brand text-sm font-semibold uppercase tracking-[0.3em]">Portfolio</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-space font-bold">
            Selected <span className="gradient-text">Works</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-lg">
            A showcase of projects where creativity meets technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand text-white shadow-lg shadow-brand/30'
                  : 'text-white/40 bg-white/5 hover:bg-white/10 hover:text-white/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden glass cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <ExternalLink size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-space font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/40 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-0.5 text-xs rounded-full bg-white/5 text-white/40 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
