import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin } from 'lucide-react';

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            EDUCATION
          </motion.h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative glass p-8 md:p-12 rounded-3xl border-white/5 overflow-hidden group hover:border-electricBlue/30 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-electricBlue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-electricBlue border border-white/10 shrink-0">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className="text-xl text-slate-300 mb-2">{edu.institution}</h4>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:text-right">
                  <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-electricBlue font-mono text-sm tracking-wider">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
