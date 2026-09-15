import React from 'react';
import Terminal from '../components/Terminal';

export default function ConsoleSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/80 border-y border-white/5">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-widest">
            INTERACTIVE SHELL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer Console
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Inspect profile state, system variables, and active mission statement.
          </p>
        </div>

        {/* Terminal Component */}
        <Terminal autoStart={true} />

      </div>
    </section>
  );
}
