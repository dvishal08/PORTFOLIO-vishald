import React, { useState, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import TechStackSection from './sections/TechStackSection';
import ProjectsSection from './sections/ProjectsSection';
import JourneySection from './sections/JourneySection';
import EducationSection from './sections/EducationSection';
import GithubSection from './sections/GithubSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-darkBg text-slate-100 selection:bg-electricBlue/30 selection:text-white font-sans overflow-x-hidden">
      {/* Animated subtle background elements */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-electricBlue/20 blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-violetAccent/20 blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-emeraldAccent/10 blur-[120px] mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Background canvas particles */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <ParticleCanvas />
      </div>

      {/* Main layout container */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <ProjectsSection />
          <JourneySection />
          <EducationSection />
          <GithubSection />
          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll To Top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/80 text-electricBlue border border-electricBlue/30 hover:bg-electricBlue hover:text-white shadow-lg shadow-electricBlue/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-md group"
        >
          <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
