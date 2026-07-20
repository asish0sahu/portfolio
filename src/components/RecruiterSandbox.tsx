import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, Trash2, Calendar, Sparkles, Send, Download, FileText, Check, Briefcase, Building2, Eye } from 'lucide-react';
import { Inquiry } from '../types';

interface RecruiterSandboxProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: Inquiry[];
  onClearInquiries: () => void;
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
  onQuickLoadTemplate: (templateType: 'senior' | 'contract' | 'startup') => void;
  onOpenCVModal: () => void;
}

export default function RecruiterSandbox({
  isOpen,
  onClose,
  inquiries,
  onClearInquiries,
  selectedSkill,
  onSelectSkill,
  onQuickLoadTemplate,
  onOpenCVModal,
}: RecruiterSandboxProps) {
  
  const templates = [
    {
      id: 'senior',
      label: 'Senior Full Stack Role',
      desc: 'US remote, $130k+, React/Node.js specialist',
      icon: Briefcase
    },
    {
      id: 'contract',
      label: 'Consultancy Contract',
      desc: 'Migration of Legacy DBs to MySQL/MongoDB',
      icon: Building2
    },
    {
      id: 'startup',
      label: 'Fast-growth Seed Startup',
      desc: 'Early engineer, equity, complete ownership',
      icon: Sparkles
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs"
          />

          {/* Drawer container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col h-full relative"
            >
              
              {/* Header */}
              <div className="px-6 py-5 border-b border-slate-800 bg-slate-900/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-emerald-400" />
                  <h2 className="font-display font-bold text-lg text-white">Recruiter Sandbox</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg bg-slate-850 text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {/* Intro pitch */}
                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-850 space-y-2">
                  <h3 className="font-display font-semibold text-xs text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4" />
                    Interactive Portfolio Sandbox
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    This sandbox acts as a client-side database simulation where you can test contact pipelines, view submitted messages, and use quick-form templates to simulate recruiter submissions.
                  </p>
                </div>

                {/* Printable CV and view controls */}
                <div className="space-y-3">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">
                    Document & Resume Actions
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={() => {
                        onClose();
                        onOpenCVModal();
                      }}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-slate-600 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Eye className="h-4 w-4 text-emerald-400" />
                      View Printable CV / Resume
                    </button>
                  </div>
                </div>

                {/* Quick load template triggers */}
                <div className="space-y-3">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">
                    Fill Form with Quick Templates
                  </span>
                  <div className="space-y-2">
                    {templates.map((temp) => {
                      const Icon = temp.icon;
                      return (
                        <button
                          key={temp.id}
                          onClick={() => {
                            onQuickLoadTemplate(temp.id as any);
                            onClose();
                            // Scroll to contact form
                            const el = document.getElementById('contact');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full p-3 rounded-xl bg-slate-900/60 border border-slate-850 hover:border-emerald-500/40 hover:bg-slate-850/60 transition-all text-left flex items-start gap-3 cursor-pointer group"
                        >
                          <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                              {temp.label}
                            </span>
                            <span className="text-[10px] text-slate-500 mt-0.5">
                              {temp.desc}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active Global Skill Filter Status */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">
                    Active Page-wide Skill Filter
                  </span>
                  {selectedSkill ? (
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Check className="h-4 w-4" />
                        {selectedSkill}
                      </span>
                      <button
                        onClick={() => onSelectSkill(null)}
                        className="text-[10px] text-emerald-500 hover:text-emerald-300 font-mono underline cursor-pointer"
                      >
                        Reset Highlight
                      </button>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 italic">
                      No active filter. Click on a skill tag (e.g. React, MongoDB) on the page to highlight connected items!
                    </p>
                  )}
                </div>

                {/* Submitted Inquiries List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">
                      Local Inbox ({inquiries.length})
                    </span>
                    {inquiries.length > 0 && (
                      <button
                        onClick={onClearInquiries}
                        className="text-[10px] text-rose-500 hover:text-rose-400 font-mono flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="h-3 w-3" />
                        Reset Inbox
                      </button>
                    )}
                  </div>

                  {inquiries.length === 0 ? (
                    <div className="p-8 text-center border border-dashed border-slate-800 rounded-xl">
                      <p className="text-xs text-slate-500 font-medium">No messages sent yet</p>
                      <p className="text-[10px] text-slate-600 mt-1">Use the contact form below or quick templates above to populate simulated inquiries!</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {inquiries.map((inq) => (
                        <div
                          key={inq.id}
                          className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 flex flex-col space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-display font-bold text-xs text-white">
                              {inq.senderName}
                            </span>
                            <span className="font-mono text-[9px] text-slate-500 flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {inq.timestamp}
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap gap-1.5 text-[9px] font-mono">
                            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              {inq.type.toUpperCase()}
                            </span>
                            {inq.company && (
                              <span className="px-1.5 py-0.5 rounded bg-slate-850 text-slate-400 border border-slate-800">
                                {inq.company}
                              </span>
                            )}
                            <span className="text-slate-500">
                              {inq.senderEmail}
                            </span>
                          </div>

                          <p className="text-slate-400 text-xs leading-relaxed italic border-l-2 border-slate-800 pl-2.5 py-0.5">
                            "{inq.message}"
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Footer */}
              <div className="p-4 border-t border-slate-800 bg-slate-900/20 text-center text-[10px] text-slate-500 font-mono">
                Sahu Dev Environment Sandbox v1.0
              </div>

            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}
