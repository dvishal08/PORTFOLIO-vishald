import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/5 bg-darkBg/80 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-slate-400 text-sm">
            <span className="font-bold text-white">{portfolioData.personalInfo.name}</span> &copy; {currentYear}
          </div>
          
          <div className="text-slate-500 text-sm flex items-center gap-2">
            Designed & Built with <span className="text-electricBlue">React</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-slate-500 hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
