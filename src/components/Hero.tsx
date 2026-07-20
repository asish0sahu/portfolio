import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight, Download, Terminal, Database, Server, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenCVModal: () => void;
}

export default function Hero({ onNavigate, onOpenCVModal }: HeroProps) {
  return (
    <section
      id="about"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 left-1/10 w-[35rem] h-[35rem] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none -z-10 animate-soft-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-[25rem] h-[25rem] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none -z-10 animate-soft-pulse" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold tracking-wider uppercase"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Full-time Roles
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
              >
                Asish Kumar Sahu
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-display text-2xl sm:text-3xl font-semibold text-slate-300 flex items-center gap-3"
              >
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
                <span className="hidden sm:inline text-slate-600 text-xl font-normal">|</span>
                <span className="hidden sm:inline font-mono text-sm tracking-wider text-slate-400 uppercase">
                  MERN Specialist
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              {PERSONAL_INFO.about}
            </motion.p>

            {/* Quick Contact Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-2 font-mono text-xs text-slate-400"
            >
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Mail className="h-4 w-4 text-emerald-500" />
                {PERSONAL_INFO.email}
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Phone className="h-4 w-4 text-emerald-500" />
                {PERSONAL_INFO.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-500" />
                {PERSONAL_INFO.location}
              </span>
            </motion.div>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 w-full pt-4"
            >
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 group"
              >
                View Selected Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCVModal}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-semibold border border-slate-700 hover:border-slate-600 flex items-center gap-2 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4 text-emerald-400" />
                Interactive CV / Resume
              </button>

              <div className="flex gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-emerald-400 hover:bg-slate-850 transition-all duration-200 cursor-pointer"
                  title="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-emerald-400 hover:bg-slate-850 transition-all duration-200 cursor-pointer"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Interactive Code Window mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 glass-panel rounded-2xl border border-slate-800 shadow-2xl relative"
          >
            {/* Window title bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-900/40 rounded-t-2xl">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 block" />
              </div>
              <span className="font-mono text-[10px] text-slate-500 tracking-wide uppercase flex items-center gap-1">
                <Terminal className="h-3 w-3" />
                sahu-stack.ts
              </span>
              <div className="w-10" />
            </div>

            {/* Code container */}
            <div className="p-5 sm:p-6 font-mono text-[11px] sm:text-xs text-slate-300 leading-relaxed overflow-x-auto select-none bg-slate-950/80 rounded-b-2xl">
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">1</span>
                <span className="text-slate-500">import <span className="text-emerald-400">Developer</span> from <span className="text-amber-300">"asish-kumar-sahu"</span>;</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">2</span>
                <span>const <span className="text-cyan-400">profile</span> = <span className="text-emerald-400">Developer</span>.<span className="text-emerald-300">init</span>();</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">3</span>
                <span>&nbsp;</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">4</span>
                <span className="text-slate-500">// Actively engineering high-scale portals</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">5</span>
                <span>profile.<span className="text-emerald-400">getPrimaryStack</span>({'{'}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">6</span>
                <span>&nbsp;&nbsp;frontend: <span className="text-amber-300">["React.js", "TypeScript", "Redux"]</span>,</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">7</span>
                <span>&nbsp;&nbsp;backend: <span className="text-amber-300">["Node.js", "Express.js", "REST APIs"]</span>,</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">8</span>
                <span>&nbsp;&nbsp;databases: <span className="text-amber-300">["MongoDB", "MySQL", "PostgreSQL"]</span>,</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">9</span>
                <span>&nbsp;&nbsp;styling: <span className="text-amber-300">["Tailwind CSS", "MUI"]</span></span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">10</span>
                <span>{'}'});</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">11</span>
                <span>&nbsp;</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">12</span>
                <span className="text-slate-500">// Current active project telemetry</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">13</span>
                <span>await profile.<span className="text-emerald-400">deploy</span>(<span className="text-teal-400">"divos-logistics"</span>);</span>
              </div>
              <div className="flex gap-2">
                <span className="text-slate-600 text-right w-4">14</span>
                <span>&nbsp;</span>
              </div>
              <div className="flex gap-2 text-emerald-400">
                <span className="text-slate-600 text-right w-4">15</span>
                <span>&gt;&gt; compilation successful. live and active!</span>
              </div>
            </div>

            {/* Absolute positioned floaters for visual flair */}
            <div className="absolute -bottom-5 -left-5 h-12 w-32 rounded-xl glass-panel border border-slate-800 p-2.5 flex items-center gap-2 shadow-lg hidden sm:flex">
              <Database className="h-5 w-5 text-emerald-400" />
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-400 uppercase font-mono">DB Clusters</span>
                <span className="text-[10px] font-bold text-white">MySQL + Mongo</span>
              </div>
            </div>

            <div className="absolute -top-5 -right-5 h-12 w-32 rounded-xl glass-panel border border-slate-800 p-2.5 flex items-center gap-2 shadow-lg hidden sm:flex">
              <Layers className="h-5 w-5 text-emerald-400 animate-pulse" />
              <div className="flex flex-col">
                <span className="text-[9px] text-slate-400 uppercase font-mono">Full Stack</span>
                <span className="text-[10px] font-bold text-white">MERN & TS</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
