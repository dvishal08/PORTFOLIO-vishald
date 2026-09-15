import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            FEATURED PROJECTS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Some things I've built.
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden glass border-white/5 hover:border-white/10 transition-all hover:-translate-y-2"
            >
              {/* Image / Mockup Area */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-darkBg">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* CSS Mockup / Real Image Preview */}
                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 transition-transform duration-700 group-hover:scale-105">
                   <div className="w-full h-full rounded-xl bg-slate-900 border border-slate-700/50 shadow-2xl overflow-hidden flex flex-col relative">
                     {/* Mockup Header */}
                     <div className="h-6 bg-slate-800/90 backdrop-blur-sm flex items-center px-3 gap-1.5 border-b border-slate-700/50 shrink-0 z-10">
                       <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                       <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                       <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                     </div>
                     {/* Mockup Body Content */}
                     {project.image && (project.image.includes('/') || project.image.includes('.')) ? (
                       <div className="w-full h-full relative overflow-hidden bg-slate-950 flex-grow">
                         <img 
                           src={project.image} 
                           alt={project.title} 
                           className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                           loading="lazy"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                       </div>
                     ) : (
                       <div className="flex-grow bg-slate-900 p-4 flex flex-col items-center justify-center text-center">
                         <MonitorPlay className="w-12 h-12 text-slate-700 mb-3" />
                         <span className="text-xl font-black text-slate-700 tracking-wider uppercase">{project.image}</span>
                       </div>
                     )}
                   </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-darkBg/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-white text-darkBg rounded-full hover:scale-110 transition-transform"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-slate-800 text-white rounded-full hover:scale-110 transition-transform"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-electricBlue transition-colors flex-1">
                    {project.title}
                  </h3>
                  {project.liveLink && project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full hover:bg-emerald-500/25 transition-all shadow-[0_0_12px_rgba(16,185,129,0.2)] shrink-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live Demo
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6 space-y-3">
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Key Features:</h4>
                  <ul className="flex flex-wrap gap-2 text-sm text-slate-400">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electricBlue"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium text-electricBlue bg-electricBlue/10 border border-electricBlue/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
