import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, ExternalLink, Github, ChevronRight, X, Layers, Database, Cpu, Milestone, FolderGit } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
  onOpenContact: () => void;
}

export default function Projects({ selectedSkill, onSelectSkill, onOpenContact }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-slate-900/10">
      {/* Background Decorative Mesh */}
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Enterprise software systems, production dashboards, and role-based application portals.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project) => {
            const matchesSkillFilter = selectedSkill 
              ? project.techStack.some(tech => tech.toLowerCase() === selectedSkill.toLowerCase() || selectedSkill.toLowerCase().includes(tech.toLowerCase()))
              : false;

            return (
              <div
                key={project.id}
                className={`group rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
                  matchesSkillFilter
                    ? 'bg-emerald-500/5 border-emerald-500 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                {/* Tech Accent Lines */}
                <div className="h-1 w-full bg-gradient-to-r from-emerald-500/60 via-teal-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Meta info */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10px] text-emerald-400 font-semibold tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                        {project.company}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1 uppercase">
                        <FolderGit className="h-3.5 w-3.5 text-slate-600" />
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors mt-2">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2.5">
                      {project.description}
                    </p>
                  </div>

                  {/* Skills/Tags block */}
                  <div className="mt-5">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 4).map((tech) => {
                        const isTargetTech = selectedSkill && tech.toLowerCase() === selectedSkill.toLowerCase();
                        return (
                          <span
                            key={tech}
                            className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                              isTargetTech
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                                : 'bg-slate-950/60 text-slate-400 border-slate-850'
                            }`}
                          >
                            {tech}
                          </span>
                        );
                      })}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950/40 text-slate-500 border border-slate-850">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action trigger */}
                    <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between w-full">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        Explore Architecture & Metrics
                        <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal Component */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Dark Overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-[#0f172a] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            >
              {/* Modal Title header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/40">
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-400">
                    {selectedProject.company}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-slate-850 text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 overflow-y-auto space-y-6">
                
                {/* Tech Stack Banner */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                    Project Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => {
                      const isHighlighted = selectedSkill && tech.toLowerCase() === selectedSkill.toLowerCase();
                      return (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${
                            isHighlighted
                              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500'
                              : 'bg-slate-950 text-slate-400 border-slate-850'
                          }`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Role and Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950/40 border border-slate-850">
                  <div className="flex items-start gap-2.5">
                    <Cpu className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 font-mono uppercase">Internal Role</span>
                      <span className="text-xs sm:text-sm font-semibold text-white">{selectedProject.role}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Milestone className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 font-mono uppercase">Delivery Level</span>
                      <span className="text-xs sm:text-sm font-semibold text-white">Corporate Enterprise Release</span>
                    </div>
                  </div>
                </div>

                {/* Deep Description */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                    Product Objective
                  </span>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Key Outcomes & Metrics */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                    Engineering Milestones & Impacts
                  </span>
                  <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {selectedProject.impact.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="text-emerald-500 select-none font-bold mt-1">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-slate-800/80 bg-slate-900/40 flex items-center justify-between flex-wrap gap-4">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Database className="h-3.5 w-3.5 text-emerald-500" />
                  MySQL & MongoDB Integrated
                </span>

                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenContact();
                  }}
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  Request Technical Arch
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
