import React from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-slate-950/20">
      {/* Decorative center accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Academic Foundation
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal engineering background facilitating critical analytical frameworks and structural systems design.
          </p>
        </div>

        {/* Education Card */}
        {EDUCATION.map((edu, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:border-slate-700/80 transition-all duration-300 max-w-2xl mx-auto flex flex-col sm:flex-row gap-6 items-start"
          >
            {/* Left Cap Icon Column */}
            <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <GraduationCap className="h-7 w-7" />
            </div>

            {/* Right content column */}
            <div className="space-y-3 flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 w-full">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                  {edu.degree}
                </h3>
                <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full w-fit">
                  {edu.grade}
                </span>
              </div>

              <div className="space-y-1 text-slate-400 text-sm">
                <p className="font-medium text-slate-300">
                  {edu.institution}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-emerald-500/80" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-emerald-500/80" />
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Extra curriculum or engineering focus context */}
              <div className="pt-3 border-t border-slate-800/50 mt-3">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Focusing on core engineering fundamentals, algorithms, system modeling, computational physics, and technical writing. Successfully bridged analytical problem-solving skills into production full-stack software development pipelines.
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
