export default function MarqueeBanner() {
  const items = [
    'Web Development',
    'UI/UX Design',
    'Brand Identity',
    'Mobile Apps',
    'E-Commerce',
    'SEO Strategy',
    'Digital Marketing',
    'Motion Design',
  ];

  return (
    <div className="relative py-6 overflow-hidden border-y border-white/5 bg-dark-2/50">
      <div className="flex whitespace-nowrap marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center mx-8">
            <span className="w-2 h-2 bg-brand rounded-full mr-4" />
            <span className="text-lg md:text-xl font-space font-medium text-white/30 uppercase tracking-wider">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
