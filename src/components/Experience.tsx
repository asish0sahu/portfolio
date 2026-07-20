import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, Sparkles, FolderDot, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceProps {
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
}

export default function Experience({ selectedSkill, onSelectSkill }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-slate-950/40">
      {/* Decorative side light */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Tenures in full-stack application design, REST API engineering, and database optimization.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 md:ml-32 pl-6 sm:pl-8 space-y-12 pb-6">
          
          {EXPERIENCES.map((exp) => {
            // Check if this experience matches the active skill filter
            const matchesSkillFilter = selectedSkill 
              ? exp.techStack.some(tech => tech.toLowerCase() === selectedSkill.toLowerCase() || selectedSkill.toLowerCase().includes(tech.toLowerCase()))
              : false;
            
            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Side Marker for dates (Desktop only) */}
                <div className="hidden md:block absolute right-full mr-12 top-1.5 text-right w-44">
                  <span className="font-mono text-xs font-semibold text-slate-400 block tracking-wide">
                    {exp.period}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase block mt-1">
                    {exp.location}
                  </span>
                </div>

                {/* Timeline Connector Indicator Node */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 h-6 w-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    matchesSkillFilter 
                      ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.5)] scale-110'
                      : 'bg-slate-900 border-slate-700 group-hover:border-emerald-500/50'
                  }`}
                >
                  <Briefcase className={`h-3 w-3 ${matchesSkillFilter ? 'text-slate-950' : 'text-slate-400'}`} />
                </div>

                {/* Experience Box Container */}
                <div 
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative ${
                    matchesSkillFilter
                      ? 'bg-emerald-500/5 border-emerald-500/40 shadow-lg shadow-emerald-500/5'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  {/* Current Active Badge */}
                  {exp.isCurrent && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] font-bold tracking-wider uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Active
                    </span>
                  )}

                  {/* Header details */}
                  <div className="space-y-1 pr-14 md:pr-0">
                    <span className="font-mono text-[10px] text-slate-500 md:hidden flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-emerald-500" />
                      {exp.period} | {exp.location}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-emerald-400 font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>

                  {/* Connected Projects */}
                  {exp.projectTitle && (
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs font-mono text-slate-300">
                      <FolderDot className="h-3.5 w-3.5 text-emerald-500" />
                      Project: <span className="text-white font-medium">{exp.projectTitle}</span>
                    </div>
                  )}

                  {/* Deliverables Bullet List */}
                  <ul className="mt-4 space-y-2.5 text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {exp.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="text-emerald-500 select-none mt-1 font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges container */}
                  <div className="mt-5 pt-4 border-t border-slate-800/40 flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => {
                      const isTargetTech = selectedSkill && tech.toLowerCase() === selectedSkill.toLowerCase();
                      return (
                        <button
                          key={tech}
                          onClick={() => onSelectSkill(isTargetTech ? null : tech)}
                          className={`px-2.5 py-1 rounded-md text-[10px] font-mono border transition-all duration-200 cursor-pointer ${
                            isTargetTech
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 shadow-sm'
                              : 'bg-slate-950/50 text-slate-400 border-slate-850 hover:border-slate-700 hover:text-slate-200'
                          }`}
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
