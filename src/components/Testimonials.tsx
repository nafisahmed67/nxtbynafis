import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './useInView';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechVentures',
    text: "NXT by Nafis completely transformed our digital presence. The attention to detail and strategic thinking they brought to the project exceeded all our expectations. Our conversion rate increased by 340%.",
    rating: 5,
    avatar: 'S',
  },
  {
    name: 'James Rodriguez',
    role: 'Founder, InnovateLab',
    text: "Working with Nafis was an absolute game-changer. They don't just build websites — they create experiences. The level of creativity and technical expertise is unmatched in the industry.",
    rating: 5,
    avatar: 'J',
  },
  {
    name: 'Emily Chen',
    role: 'CMO, GrowthScale',
    text: "From concept to launch, the NXT team delivered perfection. Our new platform handles 10x the traffic with lightning-fast performance. Best investment we've made for our brand.",
    rating: 5,
    avatar: 'E',
  },
  {
    name: 'Michael Foster',
    role: 'Director, Artisan Studio',
    text: "The design thinking and user-centric approach Nafis brings is extraordinary. They turned our complex requirements into an elegant, intuitive solution that our users absolutely love.",
    rating: 5,
    avatar: 'M',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView(0.1);
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const goTo = (index: number) => {
    setCurrent(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-brand text-sm font-semibold uppercase tracking-[0.3em]">Testimonials</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-space font-bold">
            Client <span className="gradient-text">Love</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 md:p-12 text-center relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 left-8 opacity-10">
                <Quote size={60} className="text-brand" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto italic">
                "{testimonials[current].text}"
              </p>

              {/* Author */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{testimonials[current].name}</div>
                  <div className="text-white/40 text-sm">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => goTo((current - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-brand' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo((current + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
