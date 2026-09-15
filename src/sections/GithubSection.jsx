import React from 'react';
import { motion } from 'framer-motion';
import { Github, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function GithubSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            BUILDING. LEARNING. IMPROVING.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg mb-8"
          >
            Currently building and experimenting with modern web technologies.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#24292e] text-white rounded-full font-medium hover:bg-[#2f363d] transition-colors border border-white/10"
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 border-white/5 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-emeraldAccent" />
              <h3 className="text-xl font-bold text-white">Contribution Activity</h3>
            </div>
            <div className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full">
              Placeholder Data
            </div>
          </div>
          
          {/* GitHub style contribution visualization mockup */}
          <div className="flex justify-between gap-1 md:gap-2 mb-4 overflow-x-auto pb-4">
            {[...Array(52)].map((_, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-1 md:gap-2 shrink-0">
                {[...Array(7)].map((_, rowIndex) => {
                  // Generate random intensity for demo
                  const intensity = Math.random();
                  let colorClass = "bg-white/5";
                  if (intensity > 0.8) colorClass = "bg-emeraldAccent";
                  else if (intensity > 0.5) colorClass = "bg-emeraldAccent/70";
                  else if (intensity > 0.3) colorClass = "bg-emeraldAccent/40";
                  else if (intensity > 0.1) colorClass = "bg-emeraldAccent/20";
                  
                  return (
                    <div 
                      key={rowIndex} 
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-[2px] ${colorClass} transition-colors hover:scale-125`}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-sm text-slate-500 mt-4">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emeraldAccent animate-pulse"></span>
              Connect GitHub API to display live statistics
            </p>
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="w-3 h-3 rounded-[2px] bg-white/5"></div>
              <div className="w-3 h-3 rounded-[2px] bg-emeraldAccent/20"></div>
              <div className="w-3 h-3 rounded-[2px] bg-emeraldAccent/40"></div>
              <div className="w-3 h-3 rounded-[2px] bg-emeraldAccent/70"></div>
              <div className="w-3 h-3 rounded-[2px] bg-emeraldAccent"></div>
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
