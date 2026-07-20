import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Layers, Terminal, Cpu, Sparkles, Filter, X } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { Skill } from '../types';

interface SkillsProps {
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
}

export default function Skills({ selectedSkill, onSelectSkill }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'stack' | 'tools' | 'fundamentals' | 'exploring'>('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Award },
    { id: 'stack', label: 'Core Stack', icon: Layers },
    { id: 'tools', label: 'Tools & Cloud', icon: Terminal },
    { id: 'fundamentals', label: 'Fundamentals', icon: Cpu },
    { id: 'exploring', label: 'Exploring', icon: Sparkles },
  ];

  const filteredSkills = SKILLS.filter(
    (skill) => activeTab === 'all' || skill.category === activeTab
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'stack': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'tools': return 'text-teal-400 bg-teal-500/10 border-teal-500/20';
      case 'fundamentals': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      case 'exploring': return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
      default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'stack': return 'MERN & Database';
      case 'tools': return 'Tools & DevOps';
      case 'fundamentals': return 'CS Fundamentals';
      case 'exploring': return 'Exploring Tech';
      default: return '';
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-900/20">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-full -translate-x-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Expertise & Technical Skills
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Curated list of technical proficiencies. <strong className="text-emerald-400">Click on any skill tag</strong> to highlight the projects and professional experiences where it was actively utilized!
          </p>
        </div>

        {/* Selected Skill Clear Banner */}
        {selectedSkill && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
              <span>Filtering experience and projects by: <strong className="font-semibold text-white">{selectedSkill}</strong></span>
              <button 
                onClick={() => onSelectSkill(null)}
                className="p-1 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 hover:text-white transition-all cursor-pointer"
                title="Clear filter"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40 shadow-sm'
                    : 'bg-slate-900/30 text-slate-400 border-slate-800/80 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const isHighlighted = selectedSkill === skill.name;
            const anySkillFiltered = selectedSkill !== null;
            return (
              <motion.div
                key={skill.name}
                layout
                onClick={() => onSelectSkill(isHighlighted ? null : skill.name)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isHighlighted 
                    ? 'bg-emerald-500/15 border-emerald-500 shadow-md shadow-emerald-500/10' 
                    : anySkillFiltered
                    ? 'bg-slate-900/10 border-slate-800/40 opacity-40 hover:opacity-100 hover:border-slate-700'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-display font-semibold text-sm ${isHighlighted ? 'text-emerald-300' : 'text-slate-200'}`}>
                    {skill.name}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-mono tracking-wide ${getCategoryColor(skill.category)}`}>
                    {getCategoryLabel(skill.category)}
                  </span>
                </div>

                {/* Micro-meter Indicator */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between items-center text-[10px] text-slate-500">
                    <span>Proficiency</span>
                    <span className="font-mono">{skill.level * 20}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-850 rounded-full overflow-hidden flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((step) => (
                      <div
                        key={step}
                        className={`h-full flex-1 rounded-sm transition-colors duration-300 ${
                          step <= skill.level
                            ? isHighlighted
                              ? 'bg-emerald-400'
                              : 'bg-emerald-500/70'
                            : 'bg-slate-800'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
