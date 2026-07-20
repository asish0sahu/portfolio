import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Mail, Phone, MapPin, Github, Linkedin, GraduationCap, Award, Briefcase, FileText } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILLS, EDUCATION } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  
  const handlePrint = () => {
    // Standard approach to print just the resume portion
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-slate-950/85 backdrop-blur-md">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 cursor-pointer"
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10 print:max-h-none print:h-auto print:border-none print:shadow-none print:rounded-none"
          >
            
            {/* Header / Actions toolbar (Hidden in print) */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50 print:hidden shrink-0">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-400" />
                <h3 className="font-display font-bold text-base text-white">Formatted CV / Resume</h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                >
                  <Printer className="h-4 w-4" />
                  Print / Export PDF
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Print Instructions Banner (Hidden in print) */}
            <div className="px-6 py-3 bg-slate-900/20 border-b border-slate-850 text-[11px] text-slate-400 flex items-center gap-2 print:hidden shrink-0">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Tip: Click <strong>"Print / Export PDF"</strong> and select <strong>"Save as PDF"</strong> in the destination menu to generate a corporate-ready copy.</span>
            </div>

            {/* Resume Sheet Content Area (Print Target) */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 print:overflow-visible print:p-0 print:bg-white print:text-black">
              
              <div id="print-sheet" className="max-w-3xl mx-auto space-y-6">
                
                {/* Header info matching CV */}
                <div className="border-b-2 border-slate-900 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 print:text-black">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-600 print:text-slate-800">
                      MERN STACK DEVELOPER / FULL STACK DEVELOPER
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 font-mono text-[11px] text-slate-700 print:text-slate-900">
                    <div className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-slate-800" />
                      <span>{PERSONAL_INFO.email}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-slate-800" />
                      <span>{PERSONAL_INFO.phone}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-slate-800" />
                      <span>{PERSONAL_INFO.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Github className="h-3.5 w-3.5 text-slate-800" />
                      <span>github.com/asish0sahu84</span>
                    </div>
                  </div>
                </div>

                {/* Profile Summary */}
                <div className="space-y-1.5">
                  <h2 className="font-display text-sm font-bold tracking-widest uppercase border-b border-slate-300 pb-1 text-slate-950 flex items-center gap-2">
                    <Award className="h-4.5 w-4.5 text-slate-800 print:hidden" />
                    Career Objective & Profile
                  </h2>
                  <p className="text-xs text-slate-700 leading-relaxed font-sans text-justify">
                    {PERSONAL_INFO.about}
                  </p>
                </div>

                {/* Experiences */}
                <div className="space-y-3">
                  <h2 className="font-display text-sm font-bold tracking-widest uppercase border-b border-slate-300 pb-1 text-slate-950 flex items-center gap-2">
                    <Briefcase className="h-4.5 w-4.5 text-slate-800 print:hidden" />
                    Professional Experience
                  </h2>

                  <div className="space-y-4">
                    {EXPERIENCES.map((exp) => (
                      <div key={exp.id} className="space-y-1.5 text-xs">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <h3 className="font-bold text-slate-900">
                            {exp.role}, <span className="font-medium text-slate-700 italic">{exp.company}</span>
                          </h3>
                          <span className="font-mono text-[10px] text-slate-600 font-semibold">
                            {exp.period} | {exp.location}
                          </span>
                        </div>
                        {exp.projectTitle && (
                          <p className="font-mono text-[10px] text-slate-600 font-bold">
                            Project: {exp.projectTitle}
                          </p>
                        )}
                        <ul className="list-disc list-inside pl-1 text-slate-700 leading-relaxed space-y-1 font-sans">
                          {exp.details.map((detail, idx) => (
                            <li key={idx} className="text-[11px] list-item text-justify">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-2">
                  <h2 className="font-display text-sm font-bold tracking-widest uppercase border-b border-slate-300 pb-1 text-slate-950 flex items-center gap-2">
                    <GraduationCap className="h-4.5 w-4.5 text-slate-800 print:hidden" />
                    Education & Credentials
                  </h2>

                  {EDUCATION.map((edu, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                      <div>
                        <h3 className="font-bold text-slate-900">
                          {edu.degree}
                        </h3>
                        <p className="text-slate-700 font-sans">{edu.institution}, {edu.location}</p>
                      </div>
                      <div className="text-right font-mono text-[10px] text-slate-600 font-bold">
                        <span>{edu.period}</span>
                        <span className="block text-emerald-700 print:text-black">{edu.grade}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <h2 className="font-display text-sm font-bold tracking-widest uppercase border-b border-slate-300 pb-1 text-slate-950 flex items-center gap-2">
                    <Award className="h-4.5 w-4.5 text-slate-800 print:hidden" />
                    Technical Skills Inventory
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                    <div className="space-y-1">
                      <p className="font-bold text-slate-900">Core Stack:</p>
                      <p className="text-slate-700 text-[11px]">
                        MERN (MongoDB, Express.js, React.js, Node.js), HTML5, CSS3, JavaScript (ES6+), TypeScript, Redux Toolkit, MySQL, PostgreSQL, Jest.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-slate-900">Tools & Environments:</p>
                      <p className="text-slate-700 text-[11px]">
                        Git, GitHub, Linux, Postman, AWS (S3, EC2), Docker, Bootstrap, Tailwind CSS, MaterialUI.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-slate-900">Architectural Fundamentals:</p>
                      <p className="text-slate-700 text-[11px]">
                        REST API, JWT Auth & RBAC, High-Level Design (HLD), Low-Level Design (LLD), Agile & Scrum, CI/CD Pipeline, Microservices, Unit Testing.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-slate-900">Exploring & R&D:</p>
                      <p className="text-slate-700 text-[11px]">
                        Google Cloud Platform (GCP), Next.js, NextAuth, OAuth 2.0, GraphQL, Kubernetes.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>
        </div>
      )}

      {/* Global CSS for Print Target matching standard CV dimensions */}
      <style>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            overflow: visible !important;
          }
          #root > *:not(.fixed) {
            display: none !important;
          }
          #root {
            padding: 0 !important;
            margin: 0 !important;
          }
          /* Hide all fixed panels like the header, footer, overlay backdrop */
          .fixed, .print\\:hidden, #main-header, footer {
            display: none !important;
          }
          /* Target printable sheet container specifically */
          #print-sheet {
            display: block !important;
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            color: black !important;
          }
          /* Ensure no visual cut-offs */
          @page {
            size: A4;
            margin: 15mm;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
