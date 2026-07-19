import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Send, Mail, MapPin, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '', budget: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[200px]" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-brand text-sm font-semibold uppercase tracking-[0.3em]">Get In Touch</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-space font-bold">
            Let's Build Something{' '}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto text-lg">
            Have a project in mind? We'd love to hear about it. Drop us a message and let's create magic together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-space font-semibold text-white mb-6">
                Let's start a conversation
              </h3>
              <p className="text-white/40 leading-relaxed">
                Whether you need a website, app, or complete brand overhaul — we've got you covered.
                Reach out and let's discuss how we can elevate your digital presence.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'hello@nxtbynafis.com', href: 'mailto:hello@nxtbynafis.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { icon: MapPin, label: 'Location', value: 'Worldwide — Remote First', href: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 group p-4 rounded-xl glass glass-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                    <item.icon size={20} className="text-brand-light" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">{item.label}</div>
                    <div className="text-white font-medium text-sm">{item.value}</div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-white/10 group-hover:text-white/40 transition-colors"
                  />
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <div className="text-sm text-white/30 mb-4 uppercase tracking-wider">Follow Us</div>
              <div className="flex gap-3">
                {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white hover:bg-brand/20 transition-all duration-300 text-xs font-bold"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 size={64} className="text-accent mb-6" />
                  <h3 className="text-2xl font-space font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/50">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-white/50 mb-2 font-medium">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-white/50 mb-2 font-medium">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project inquiry"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 mb-2 font-medium">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-all duration-300 appearance-none"
                      >
                        <option value="" className="bg-dark-2">Select budget</option>
                        <option value="1k-5k" className="bg-dark-2">$1,000 - $5,000</option>
                        <option value="5k-10k" className="bg-dark-2">$5,000 - $10,000</option>
                        <option value="10k-25k" className="bg-dark-2">$10,000 - $25,000</option>
                        <option value="25k+" className="bg-dark-2">$25,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/50 mb-2 font-medium">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/30 transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="magnetic-btn w-full py-4 bg-gradient-to-r from-brand to-brand-light text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-300"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
