export function InspiratorMarquee() {
  const inspiratorsRow1 = [
    "hack_the_flag champ", "Gold Medalist iTREXC2025", "Silver Medalist RISE2026",
    "Bronze Medalist InnoGen2026", "top_coder_unisel 3rd", "Exco Webmaster",
    "@ai_enthusiast", "CanvaSmart Lead", "@iot4u_director",
    "Full-Stack Developer", "Next.js Pro"
  ];

  const inspiratorsRow2 = [
    "Assembly Language", "SQL", "HTML",
    "PHP", "Python", "JavaScript",
    "CSS", "C++", "C#",
    "Flask", "Node.js", "FastAPI"
  ];

  const inspiratorsRow3 = [
    "Predictive Modeling", "System Architecture", "Machine Learning",
    "Facial Recognition", "Raspberry Pi", "API Integration",
    "Software Testing", "C# .NET", "Python pandas",
    "React Native", "SQL Server", "Smart Parking"
  ];

  // Helper to double the items so the scroll is seamless from 0 to -50%
  const MarqueeRow = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => (
    <div className="flex overflow-hidden group w-full mb-4">
      <div className={`flex w-max space-x-4 ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
        {/* Render two identical sets of items side by side */}
        {[...items, ...items, ...items].map((name, idx) => (
          <span
            key={idx}
            className="text-sm md:text-base font-medium text-blue-300 px-6 py-2 border border-blue-500/30 rounded-full bg-blue-900/20 backdrop-blur-sm whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="container mx-auto px-4 py-10 relative z-10 overflow-hidden">
      <div className="flex items-center justify-end mb-8">
        <div className="flex items-center w-full">
          <div className="h-[1px] bg-glass-border flex-1" />
          <div className="w-2 h-2 rounded-full bg-white ml-4 mr-4" />
          <h2 className="text-xl font-bold text-gray-400 whitespace-nowrap">My Inspirator</h2>
        </div>
      </div>

      <div className="relative glass-panel py-6 overflow-hidden">
        <MarqueeRow items={inspiratorsRow1} />
        <MarqueeRow items={inspiratorsRow2} reverse={true} />
        <MarqueeRow items={inspiratorsRow3} />
      </div>

      {/* Bottom Checkered pattern */}
      <div className="mt-12 h-4 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIiAvPjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIiAvPjwvc3ZnPg==')] opacity-20" />
    </section>
  );
}
