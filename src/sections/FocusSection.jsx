import React from 'react';

export default function FocusSection() {
  const goals = [
    {
      title: 'Build',
      quote: 'Turn ideas into working products.',
      desc: 'Creating tangible, domain-driven projects that address real user workflows with responsive UI and dependable logic.',
      icon: '🚀',
      accent: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
    },
    {
      title: 'Learn',
      quote: 'Explore technologies beyond the basics.',
      desc: 'Pushing boundaries by exploring scalable full stack patterns, state orchestration, database optimization, and modern tools.',
      icon: '🧠',
      accent: 'border-blue-500/30 text-blue-400 bg-blue-500/10'
    },
    {
      title: 'Improve',
      quote: 'Write cleaner code and design better experiences.',
      desc: 'Refining software architecture, code modularity, design tokens, and web performance metrics step by step.',
      icon: '⚡',
      accent: 'border-violet-500/30 text-violet-400 bg-violet-500/10'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-futuristic-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & Description */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-widest">
            FUTURE VISION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What I'm Building Towards.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            My goal is to become a stronger Full Stack Developer by building meaningful products, improving problem-solving skills, understanding better application architecture, and creating better user experiences.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((item) => (
            <div
              key={item.title}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl">{item.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${item.accent}`}>
                    {item.title}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  "{item.quote}"
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>FOCUS MODE</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">ON →</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
