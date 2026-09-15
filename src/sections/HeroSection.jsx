import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HeroSection() {
  const { personalInfo } = portfolioData;

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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const floatingBadges = [
    { name: "React", icon: "⚛️", top: "10%", left: "-10%", delay: 0 },
    { name: "Node.js", icon: "🟢", bottom: "20%", left: "-5%", delay: 1 },
    { name: "Next.js", icon: "▲", top: "20%", right: "-10%", delay: 2 },
    { name: "Supabase", icon: "⚡", bottom: "15%", right: "-5%", delay: 3 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electricBlue/10 border border-electricBlue/20 text-electricBlue text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electricBlue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electricBlue"></span>
              </span>
              {personalInfo.availability}
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-slate-400 font-medium mb-2">
              Hi, I'm
            </motion.h2>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-normal mb-4 text-white">
              {personalInfo.name}
            </motion.h1>

            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-6 text-slate-300">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue via-cyanAccent to-violetAccent">
                {personalInfo.role}
              </span>
              <br />
              <span className="text-xl md:text-2xl opacity-80">& {personalInfo.subtitle}</span>
            </motion.h3>

            <motion.p variants={itemVariants} className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
              {personalInfo.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
              <a 
                href="#projects" 
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-darkBg font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-electricBlue to-cyanAccent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative group-hover:text-white transition-colors">View My Projects</span>
                <ArrowRight className="w-4 h-4 relative group-hover:text-white transition-colors group-hover:translate-x-1 duration-300" />
              </a>
              
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-3 glass hover:bg-white/5 text-white font-medium rounded-full transition-all hover:scale-105"
              >
                <Download className="w-4 h-4 text-slate-400" />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all p-2 glass rounded-full">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all p-2 glass rounded-full">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-white hover:scale-110 transition-all p-2 glass rounded-full">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-80 xl:w-96 xl:h-96 z-10">
              {/* Glowing Border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electricBlue via-violetAccent to-cyanAccent p-1 animate-spin-slow">
                <div className="w-full h-full bg-darkBg rounded-full"></div>
              </div>
              
              {/* Image Container */}
              <div className="absolute inset-2 rounded-full overflow-hidden glass flex items-center justify-center bg-darkBg/80 backdrop-blur-sm animate-float">
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover object-[55%_22%] hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>

            {/* Floating Badges */}
            {floatingBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  opacity: { delay: 0.8 + index * 0.2, duration: 0.5 },
                  y: { repeat: Infinity, duration: 4, delay: badge.delay, ease: "easeInOut" }
                }}
                className="absolute glass px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl shadow-black/50 z-20"
                style={{ top: badge.top, left: badge.left, right: badge.right, bottom: badge.bottom }}
              >
                <span className="text-xl">{badge.icon}</span>
                <span className="font-semibold text-sm text-slate-200">{badge.name}</span>
              </motion.div>
            ))}
            
            {/* Background glowing orb for image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-electricBlue/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
