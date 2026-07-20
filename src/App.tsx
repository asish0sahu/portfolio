import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import RecruiterSandbox from './components/RecruiterSandbox';
import ResumeModal from './components/ResumeModal';
import { Inquiry } from './types';
import { PERSONAL_INFO } from './data/portfolioData';
import { Mail, Phone, MapPin, Sparkles, Terminal, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [sandboxOpen, setSandboxOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse inquiries', e);
      }
    } else {
      // Seed a welcome message for the recruiter to make it look alive!
      const welcomeMessage: Inquiry = {
        id: 'welcome',
        senderName: 'Sundar Pichai (Simulated)',
        senderEmail: 'sundar@google.com',
        company: 'Google Inc.',
        message: 'Welcome to Asish Sahu\'s portfolio! Check out the Recruiter Sandbox in the top right to load direct interview opportunities or export his high-resolution printable PDF CV directly.',
        timestamp: '10:00 AM',
        type: 'general'
      };
      setInquiries([welcomeMessage]);
      localStorage.setItem('portfolio_inquiries', JSON.stringify([welcomeMessage]));
    }
  }, []);

  // Monitor scroll for header active states & scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Scroll-to-top visibility
      setShowScrollTop(window.scrollY > 500);

      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleAddInquiry = (inquiry: Inquiry) => {
    const updated = [inquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('portfolio_inquiries', JSON.stringify(updated));
    triggerToast(`New message from ${inquiry.senderName} logged in sandbox!`);
  };

  const handleClearInquiries = () => {
    setInquiries([]);
    localStorage.removeItem('portfolio_inquiries');
    triggerToast('Simulated Inbox cleared.');
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Quick templates simulation inject
  const handleQuickLoadTemplate = (templateType: 'senior' | 'contract' | 'startup') => {
    let mockInquiry: Inquiry;
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (templateType === 'senior') {
      mockInquiry = {
        id: `temp-${Date.now()}`,
        senderName: 'Sarah Jenkins',
        senderEmail: 'sjenkins@google.com',
        company: 'Google (Hyderabad)',
        message: 'Hi Asish, we are reviewing your MERN stack Logistics and Healthcare platform work. We have an opening for an experienced Full Stack Developer to build our internal cloud consoles. Would you be open to a call this week?',
        timestamp: timeStr,
        type: 'hire'
      };
    } else if (templateType === 'contract') {
      mockInquiry = {
        id: `temp-${Date.now()}`,
        senderName: 'David Chen',
        senderEmail: 'd.chen@tesla.com',
        company: 'Tesla Supply Chain',
        message: 'Hello Sahu, we saw your Divos.in logistics portal details. We are restructuring our warehouse API latency in Node.js/MySQL and need an immediate contract consultant to audit compound schemas. Let us connect!',
        timestamp: timeStr,
        type: 'collab'
      };
    } else {
      mockInquiry = {
        id: `temp-${Date.now()}`,
        senderName: 'Alex Mercer',
        senderEmail: 'alex@alpha-neuro.io',
        company: 'AlphaNeuro (YC W26)',
        message: 'Hey Asish! Loved your React/Redux e-commerce work at Ratna Global. We are building a high-speed bio-data dashboard using Next.js & MongoDB. We need an agile builder who can ship fast. Coffee soon?',
        timestamp: timeStr,
        type: 'hire'
      };
    }

    handleAddInquiry(mockInquiry);
    // Auto open sandbox to show the message
    setSandboxOpen(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Top Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        messageCount={inquiries.length}
        onOpenSandbox={() => setSandboxOpen(true)}
      />

      {/* Main Content Layout Sections */}
      <main className="flex-1">
        <Hero
          onNavigate={handleNavigate}
          onOpenCVModal={() => setCvModalOpen(true)}
        />
        
        <Skills
          selectedSkill={selectedSkill}
          onSelectSkill={(skill) => setSelectedSkill(skill)}
        />
        
        <Experience
          selectedSkill={selectedSkill}
          onSelectSkill={(skill) => setSelectedSkill(skill)}
        />
        
        <Projects
          selectedSkill={selectedSkill}
          onSelectSkill={(skill) => setSelectedSkill(skill)}
          onOpenContact={() => handleNavigate('contact')}
        />
        
        <Education />
        
        <Contact onAddInquiry={handleAddInquiry} />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Left Col */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-xs">
                  AS
                </span>
                <span className="font-display font-bold text-slate-200 tracking-wide">
                  Asish Kumar Sahu
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-mono tracking-wider">
                PORTFOLIO & CV APPMAP ENVIRONMENT
              </p>
            </div>

            {/* Middle Col (Quick links) */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-xs text-slate-400 font-medium max-w-xs text-center">
                Engineering high-performance web systems, responsive portals, and optimized databases.
              </p>
              <div className="flex gap-4 text-xs font-mono text-slate-500">
                <button onClick={() => handleNavigate('about')} className="hover:text-emerald-400 transition-colors">About</button>
                <button onClick={() => handleNavigate('skills')} className="hover:text-emerald-400 transition-colors">Skills</button>
                <button onClick={() => handleNavigate('experience')} className="hover:text-emerald-400 transition-colors">Experience</button>
                <button onClick={() => handleNavigate('projects')} className="hover:text-emerald-400 transition-colors">Projects</button>
              </div>
            </div>

            {/* Right Col */}
            <div className="flex flex-col items-center md:items-end gap-2 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-emerald-500" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <p className="text-[10px] text-slate-600">
                © {new Date().getFullYear()} Asish Kumar Sahu. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </footer>

      {/* Recruiter Drawer panel */}
      <RecruiterSandbox
        isOpen={sandboxOpen}
        onClose={() => setSandboxOpen(false)}
        inquiries={inquiries}
        onClearInquiries={handleClearInquiries}
        selectedSkill={selectedSkill}
        onSelectSkill={(skill) => setSelectedSkill(skill)}
        onQuickLoadTemplate={handleQuickLoadTemplate}
        onOpenCVModal={() => setCvModalOpen(true)}
      />

      {/* Printable high-res CV modal sheet */}
      <ResumeModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Floating Scroll to Top trigger */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all z-40 cursor-pointer hover:-translate-y-1"
          title="Scroll back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Floating System Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 p-4 rounded-xl glass-panel border-emerald-500/30 text-xs text-slate-200 font-mono shadow-xl flex items-center gap-2.5 max-w-sm animate-slide-in">
          <Terminal className="h-4 w-4 text-emerald-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
