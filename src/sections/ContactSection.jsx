import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              LET'S BUILD SOMETHING <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricBlue to-cyanAccent">TOGETHER.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-md">
              Have a project idea, collaboration opportunity, or just want to connect?
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-6 group glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-white/5">
                <div className="w-14 h-14 rounded-full bg-electricBlue/10 flex items-center justify-center text-electricBlue group-hover:bg-electricBlue group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-lg font-medium text-white">{personalInfo.email}</p>
                </div>
              </a>
              
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-6 group glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-white/5">
                <div className="w-14 h-14 rounded-full bg-electricBlue/10 flex items-center justify-center text-electricBlue group-hover:bg-electricBlue group-hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">GitHub</h4>
                  <p className="text-lg font-medium text-white">Explore my repositories</p>
                </div>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-6 group glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-white/5">
                <div className="w-14 h-14 rounded-full bg-electricBlue/10 flex items-center justify-center text-electricBlue group-hover:bg-electricBlue group-hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">LinkedIn</h4>
                  <p className="text-lg font-medium text-white">Let's connect professionally</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-10 rounded-3xl border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electricBlue via-cyanAccent to-violetAccent"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-darkBg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all placeholder:text-slate-600"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-darkBg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all placeholder:text-slate-600"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-darkBg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electricBlue focus:ring-1 focus:ring-electricBlue transition-all resize-none placeholder:text-slate-600"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                className="w-full bg-electricBlue hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : isSuccess ? (
                    <>Message Sent <CheckCircle2 className="w-5 h-5" /></>
                  ) : (
                    <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
