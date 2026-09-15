import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Code, Laptop, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const { about } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const icons = [Laptop, Code, Terminal, Sparkles];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT: Text Content */}
          <div>
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl md:text-5xl font-black text-white">{about.title}</h2>
              <div className="h-px bg-white/10 flex-grow rounded-full"></div>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-400 leading-relaxed mb-8">
              {about.description}
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {about.stats.map((stat, index) => (
                <div key={index} className="glass p-6 rounded-2xl hover:bg-white/[0.03] transition-colors border-white/5">
                  <h4 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-cyanAccent mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Glass Info Card */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-electricBlue/20 to-violetAccent/20 blur-3xl rounded-full"></div>
            
            <div className="glass p-8 md:p-10 rounded-3xl relative z-10 border-white/10 shadow-2xl overflow-hidden">
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electricBlue via-cyanAccent to-violetAccent"></div>
              
              <div className="space-y-6">
                {about.highlights.map((highlight, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <motion.div 
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-electricBlue group-hover:bg-electricBlue/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <p className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">
                        {highlight.substring(2).trim()} {/* Removing emoji from highlight if present, replaced by Lucide icon */}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
