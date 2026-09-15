import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

export default function JourneySection() {
  const { experience } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            EXPERIENCE
          </motion.h2>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electricBlue/50 via-violetAccent/30 to-transparent transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-darkBg border border-electricBlue flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <Briefcase className="w-4 h-4 text-electricBlue" />
                </div>
                
                <div className="md:w-1/2 w-full pl-12 md:pl-0">
                  <div className={`glass p-8 rounded-3xl border-white/5 hover:border-electricBlue/30 transition-all ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                    <span className="text-electricBlue font-mono text-sm tracking-wider mb-2 block">{exp.period}</span>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-lg text-slate-400 mb-6">{exp.company}</h4>
                    
                    <ul className="space-y-3">
                      {exp.skills.map((skill, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyanAccent"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
