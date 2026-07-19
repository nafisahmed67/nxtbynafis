import { motion } from 'framer-motion';
import { useInView } from './useInView';

const technologies = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Tailwind', color: '#06B6D4' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Three.js', color: '#FFFFFF' },
  { name: 'Python', color: '#3776AB' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'GraphQL', color: '#E10098' },
];

export default function TechStack() {
  const [ref, inView] = useInView(0.2);

  return (
    <section className="relative py-24 overflow-hidden border-y border-white/5 bg-dark-2/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-white/30 text-sm uppercase tracking-[0.3em]">Technologies We Master</span>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col items-center justify-center p-6 rounded-xl glass glass-hover cursor-default transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold font-space mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
              >
                {tech.name.slice(0, 2)}
              </div>
              <span className="text-white/50 text-xs font-medium group-hover:text-white/80 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
