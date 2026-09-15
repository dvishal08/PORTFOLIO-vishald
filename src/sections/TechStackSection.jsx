import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function TechStackSection() {
  const { skills } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electricBlue/10 border border-electricBlue/20 text-electricBlue text-sm font-medium mb-6"
          >
            My Arsenal
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            TECH STACK
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Technologies I use to build modern applications.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {skills.map((skillGroup, groupIndex) => (
            <motion.div key={groupIndex} variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-bold text-white tracking-widest uppercase flex items-center gap-4">
                <span className="text-electricBlue">{skillGroup.category}</span>
                <div className="h-px bg-white/10 flex-grow rounded-full"></div>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {skillGroup.items.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group glass p-5 rounded-2xl border-white/5 hover:border-electricBlue/50 hover:bg-white/[0.05] transition-all relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-electricBlue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-darkBg/50 flex items-center justify-center text-slate-300 group-hover:text-electricBlue group-hover:scale-110 transition-all border border-white/5">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-1 group-hover:text-electricBlue transition-colors">{skill.name}</h4>
                          <p className="text-sm text-slate-400">{skill.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
