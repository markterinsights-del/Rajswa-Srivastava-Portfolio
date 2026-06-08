import React, { useState } from 'react';
import { 
  ArrowRight, 
  Linkedin, 
  Github, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Menu, 
  X, 
  Sparkles, 
  Send 
} from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from './data';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import SkillsSection from './components/SkillsSection';
import LearningSection from './components/LearningSection';

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-natural-bg font-sans text-natural-text selection:bg-warm-accent-100 selection:text-warm-accent-700">
      
      {/* 1. Header & Navigation */}
      <header className="sticky top-0 z-50 bg-natural-bg/90 backdrop-blur-md border-b border-natural-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-stone-900 text-white flex items-center justify-center font-bold text-sm tracking-wide transition-colors group-hover:bg-warm-accent-500">
              {PERSONAL_INFO.avatarInitials}
            </div>
            <div>
              <span className="block text-sm font-extrabold tracking-tight text-natural-text-dark font-sans">
                {PERSONAL_INFO.name}
              </span>
              <span className="block text-[10px] font-mono text-stone-450 uppercase tracking-widest leading-none font-medium">
                Portfolio Log
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-xs font-mono font-semibold text-[#555] hover:text-warm-accent-500 transition-colors uppercase tracking-wider">
              About
            </a>
            <a href="#projects" className="text-xs font-mono font-semibold text-[#555] hover:text-warm-accent-500 transition-colors uppercase tracking-wider">
              AdLeak AI
            </a>
            <a href="#skills" className="text-xs font-mono font-semibold text-[#555] hover:text-warm-accent-500 transition-colors uppercase tracking-wider">
              Competencies
            </a>
            <a href="#learning" className="text-xs font-mono font-semibold text-[#555] hover:text-warm-accent-500 transition-colors uppercase tracking-wider">
              Journals
            </a>
            <a href="#contact" className="ml-2 px-3.5 py-1.5 bg-stone-900 hover:bg-warm-accent-500 text-white rounded-lg text-xs font-mono font-medium tracking-wide transition-all duration-300">
              Get in Touch
            </a>
          </nav>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center border border-natural-border hover:bg-stone-100 transition-colors cursor-pointer"
            id="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-natural-border p-6 flex flex-col gap-4 shadow-lg">
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-mono font-bold text-stone-700 hover:text-warm-accent-500 py-1 transition-colors uppercase"
            >
              About Me
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-mono font-bold text-stone-700 hover:text-warm-accent-500 py-1 transition-colors uppercase"
            >
              AdLeak AI
            </a>
            <a 
              href="#skills" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-mono font-bold text-stone-700 hover:text-warm-accent-500 py-1 transition-colors uppercase"
            >
              Competencies
            </a>
            <a 
              href="#learning" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-mono font-bold text-stone-700 hover:text-warm-accent-500 py-1 transition-colors uppercase"
            >
              Journals
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-stone-900 hover:bg-warm-accent-500 text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors mt-2"
            >
              Get in Touch
            </a>
          </nav>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-natural-border">
        
        {/* Abstract subtle backdrop pattern */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#F27D26_1px,transparent_1.5px)] [background-size:24px_24px] opacity-15"></div>
        <div className="absolute top-[30%] right-[-10%] w-72 h-72 rounded-full bg-warm-accent-50 blur-3xl opacity-30"></div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-8"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-warm-accent-50 border border-warm-accent-100 rounded-full">
              <span className="w-1.5 h-1.5 bg-warm-accent-500 rounded-full animate-ping"></span>
              <span className="text-[10px] font-mono font-extrabold text-warm-accent-700 uppercase tracking-widest">
                Evidence Over Credentials
              </span>
            </div>

            {/* Typography Stack */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-natural-text-dark font-sans leading-[1.05]">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold font-sans text-stone-850 max-w-2xl leading-snug">
                {PERSONAL_INFO.headline}
              </p>
              <p className="text-xs sm:text-sm font-mono text-stone-500 max-w-xl font-medium uppercase tracking-wide">
                {PERSONAL_INFO.subheadline}
              </p>
            </div>

            {/* Strategic Bio Excerpt */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
              I am an experiment-driven AI builder and product strategist studying business (BBA). I specialize in identifying performance leaks, building autonomous agent workflows (n8n, Supabase), and launching rapid validation frameworks for founders and high-growth brands.
            </p>

            {/* CTA Panel */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href={PERSONAL_INFO.adleakApp} 
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-stone-950 hover:bg-warm-accent-500 text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider shadow-sm transition-all duration-300 flex items-center gap-2"
                id="cta-launch-app"
              >
                <span>Launch Live Web App</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white border border-natural-border text-stone-700 hover:text-stone-950 hover:border-stone-400 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300"
                id="cta-projects"
              >
                Analyze Architecture
              </a>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* 3. About Me & Focal areas block */}
      <AboutSection />

      {/* 4. Flagship Project AdLeak AI & Selection Sandbox & Timeline */}
      <ProjectSection />

      {/* 5. Competencies & Technical Skills Tree */}
      <SkillsSection />

      {/* 6. Learning in Public Articles */}
      <LearningSection />

      {/* 7. Vision Statement (Evidence through Execution) */}
      <section id="vision" className="relative py-24 bg-warm-accent-500 text-white overflow-hidden">
        {/* Tiny grid backdrop overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white text-xs font-mono uppercase tracking-wider rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
            Core Mantra
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold font-sans tracking-tight text-white max-w-2xl mx-auto leading-tight">
              Building Evidence Through Execution
            </h2>
            <p className="text-white/90 font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              I believe skills are best demonstrated through real projects, real feedback, and real-world outcomes. My goal is to combine product thinking, AI systems, and business understanding to create meaningful solutions.
            </p>
          </div>

          <div className="pt-4 border-t border-white/20 max-w-md mx-auto grid grid-cols-3 gap-4 text-xs font-mono text-white/80">
            <div>
              <span className="block text-2xl font-bold text-white font-sans">100+</span>
              <span>Problems Evaluated</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white font-sans">n8n</span>
              <span>API Orchestration</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white font-sans">100%</span>
              <span>Public Learning Logs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact Section (Direct recruiter-friendly card) */}
      <section id="contact" className="py-24 bg-natural-bg border-t border-natural-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-natural-border rounded-3xl p-8 sm:p-12 shadow-sm space-y-10">
            
            {/* Header copy */}
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold text-warm-accent-500 uppercase tracking-widest">
                INBOX COMMUNICATOR
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-natural-text-dark font-sans tracking-tight">
                Let's Build Systems Together
              </h3>
              <p className="text-xs sm:text-sm text-stone-500">
                Are you a founder looking for an execution-focused AI Product intern, or an agency searching for an operational automation architect? Let's connect.
              </p>
            </div>

            {/* Grid options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
              
              {/* Linked In Card */}
              <a 
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                referrerPolicy="no-referrer"
                className="group flex flex-col justify-between p-5 rounded-2xl border border-natural-border hover:border-warm-accent-500 hover:bg-warm-accent-50/20 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-9 h-9 rounded-xl bg-warm-accent-50 flex items-center justify-center shrink-0">
                    <Linkedin className="w-4.5 h-4.5 text-warm-accent-500" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold text-natural-text-dark font-sans uppercase tracking-wide">
                      LinkedIn Reach
                    </h5>
                    <p className="text-[11px] text-stone-400 font-mono">
                      @rajswa-srivastava
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-warm-accent-500 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* Github Card */}
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                referrerPolicy="no-referrer"
                className="group flex flex-col justify-between p-5 rounded-2xl border border-natural-border hover:border-warm-accent-500 hover:bg-warm-accent-50/20 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-9 h-9 rounded-xl bg-warm-accent-50 flex items-center justify-center shrink-0">
                    <Github className="w-4.5 h-4.5 text-warm-accent-500" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold text-natural-text-dark font-sans uppercase tracking-wide">
                      GitHub Hub
                    </h5>
                    <p className="text-[11px] text-stone-400 font-mono">
                      @rajswasrivastava
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>Explore Stack</span>
                  <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-warm-accent-500 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>

              {/* Email Direct Copy Card */}
              <div 
                onClick={handleCopyEmail}
                className="group flex flex-col justify-between p-5 rounded-2xl border border-natural-border hover:border-warm-accent-500 hover:bg-warm-accent-50/20 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="w-9 h-9 rounded-xl bg-warm-accent-50 flex items-center justify-center shrink-0">
                    <Mail className="w-4.5 h-4.5 text-warm-accent-500" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold text-natural-text-dark font-sans uppercase tracking-wide">
                      Shoot Email
                    </h5>
                    <p className="text-[11px] text-stone-400 font-mono truncate">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-green-500" />
                  ) : (
                    <Copy className="w-3 h-3 text-stone-400 group-hover:text-warm-accent-500 transition-colors" />
                  )}
                </div>
              </div>

            </div>

            {/* Direct Mail Trigger Action */}
            <div className="text-center pt-2">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-warm-accent-500 text-white rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                id="mail-now-btn"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Launch Client Email</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Premium Minimalist Footer */}
      <footer className="bg-stone-900 text-stone-400 border-t border-stone-850 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-6 h-6 rounded bg-warm-accent-500 text-white flex items-center justify-center font-bold text-[10px]">
                {PERSONAL_INFO.avatarInitials}
              </div>
              <span className="font-extrabold text-stone-100 text-sm tracking-tight font-sans">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-stone-500 font-mono leading-relaxed">
              "Built with curiosity, experimentation, and continuous learning."
            </p>
          </div>

          <div className="text-[11px] font-mono text-stone-500 space-y-1">
            <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reservable.</p>
            <p className="text-[10px]">Crafted with React, Tailwind CSS v4, and Lucide Icons.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
