import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-dark-2/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 group mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand to-accent rounded-lg rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
                <span className="relative text-white font-bold font-space text-lg">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-space font-bold text-lg leading-none">NXT</span>
                <span className="text-white/40 text-[10px] tracking-[0.3em] uppercase">by Nafis</span>
              </div>
            </a>
            <p className="text-white/40 leading-relaxed max-w-sm text-sm">
              Pushing boundaries in digital design and development. 
              We craft next-level digital experiences that inspire and transform.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { label: 'X', href: '#' },
                { label: 'Li', href: '#' },
                { label: 'Gh', href: '#' },
                { label: 'Dr', href: '#' },
                { label: 'Ig', href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-brand/20 transition-all duration-300 text-xs font-bold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Work', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'UI/UX Design', 'Mobile Apps', 'E-Commerce', 'Brand Identity'].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/40 hover:text-white text-sm transition-colors duration-300"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} NXT by Nafis. All rights reserved.
          </p>
          <p className="text-white/20 text-sm flex items-center gap-1">
            Made with <Heart size={12} className="text-accent-2 fill-accent-2" /> by Nafis
          </p>
        </div>
      </div>
    </footer>
  );
}
