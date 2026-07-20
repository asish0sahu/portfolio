import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Sparkles, MessageSquareHeart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Inquiry } from '../types';

interface ContactProps {
  onAddInquiry: (inquiry: Inquiry) => void;
}

export default function Contact({ onAddInquiry }: ContactProps) {
  const [formState, setFormState] = useState({
    senderName: '',
    senderEmail: '',
    company: '',
    message: '',
    type: 'hire' as 'hire' | 'collab' | 'general'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.senderName.trim()) newErrors.senderName = 'Name is required';
    
    if (!formState.senderEmail.trim()) {
      newErrors.senderEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.senderEmail)) {
      newErrors.senderEmail = 'Please provide a valid email';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message text cannot be empty';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API transport latency
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: `inq-${Date.now()}`,
        senderName: formState.senderName,
        senderEmail: formState.senderEmail,
        company: formState.company || undefined,
        message: formState.message,
        timestamp: new Date().toLocaleTimeString(),
        type: formState.type
      };

      onAddInquiry(newInquiry);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Clear form states
      setFormState({
        senderName: '',
        senderEmail: '',
        company: '',
        message: '',
        type: 'hire'
      });

      // Show success briefly, then let them send another if they like
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-slate-900/10">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Let's collaborate! Message me for full-time job openings, freelancing projects, or general queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left panel: Info & Bio cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 space-y-4">
              <h3 className="font-display font-bold text-lg text-white">
                Direct Contact Telemetry
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect directly using standard endpoints or email routes. Response times are usually within 12 hours.
              </p>

              <div className="space-y-4 pt-2 font-mono text-xs sm:text-sm">
                
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-850 hover:border-emerald-500/30 text-slate-300 hover:text-emerald-400 transition-all cursor-pointer group"
                >
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Email Route</span>
                    <span className="text-xs sm:text-sm font-semibold">{PERSONAL_INFO.email}</span>
                  </div>
                </a>

                <a 
                  href={`tel:${PERSONAL_INFO.phone}`} 
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-850 hover:border-emerald-500/30 text-slate-300 hover:text-emerald-400 transition-all cursor-pointer group"
                >
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Voice Telephony</span>
                    <span className="text-xs sm:text-sm font-semibold">{PERSONAL_INFO.phone}</span>
                  </div>
                </a>

                <div 
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-850 text-slate-300 transition-all"
                >
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Geographic Base</span>
                    <span className="text-xs sm:text-sm font-semibold">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Simulated Live status widget */}
            <div className="p-5 rounded-2xl border border-slate-800/80 bg-gradient-to-tr from-[#131d31] to-[#0d121f] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white">Live Availability Check</span>
                  <span className="text-[10px] text-slate-400">Active hours: 9:00 AM - 10:00 PM IST</span>
                </div>
              </div>
              <Sparkles className="h-5 w-5 text-emerald-400 animate-pulse" />
            </div>

          </div>

          {/* Right panel: Live Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="senderName" className="font-mono text-xs font-semibold text-slate-300 block">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="senderName"
                      name="senderName"
                      value={formState.senderName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors ${
                        errors.senderName ? 'border-rose-500/50 focus:border-rose-500' : 'border-slate-850'
                      }`}
                    />
                    {errors.senderName && (
                      <p className="text-[11px] text-rose-500 font-mono flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.senderName}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label htmlFor="senderEmail" className="font-mono text-xs font-semibold text-slate-300 block">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="senderEmail"
                      name="senderEmail"
                      value={formState.senderEmail}
                      onChange={handleInputChange}
                      placeholder="johndoe@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors ${
                        errors.senderEmail ? 'border-rose-500/50 focus:border-rose-500' : 'border-slate-850'
                      }`}
                    />
                    {errors.senderEmail && (
                      <p className="text-[11px] text-rose-500 font-mono flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.senderEmail}
                      </p>
                    )}
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Company Field (Optional) */}
                  <div className="space-y-1">
                    <label htmlFor="company" className="font-mono text-xs font-semibold text-slate-300 block">
                      Company / Organization <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleInputChange}
                      placeholder="Tesla Inc."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  {/* Inquiry Type Select */}
                  <div className="space-y-1">
                    <label htmlFor="type" className="font-mono text-xs font-semibold text-slate-300 block">
                      Objective Purpose <span className="text-emerald-400">*</span>
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formState.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-850 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="hire">Full-time Job Recruitment</option>
                      <option value="collab">Freelance / Partnership</option>
                      <option value="general">General Technology Discussion</option>
                    </select>
                  </div>

                </div>

                {/* Message Field */}
                <div className="space-y-1">
                  <label htmlFor="message" className="font-mono text-xs font-semibold text-slate-300 block">
                    Message Body <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Provide your requirements or outline your open position details..."
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors ${
                      errors.message ? 'border-rose-500/50 focus:border-rose-500' : 'border-slate-850'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 font-mono flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Actions Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                      isSubmitted 
                        ? 'bg-emerald-500/25 text-emerald-300 cursor-default'
                        : 'bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/15 hover:shadow-emerald-500/30'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-slate-950 border-t-transparent rounded-full" />
                        Transmitting...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-emerald-400" />
                        Inquiry Received!
                      </>
                    ) : (
                      <>
                        Send Secure Message
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>

                  {/* Recruiter feedback indicator */}
                  {isSubmitted && (
                    <p className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 animate-pulse">
                      <MessageSquareHeart className="h-4 w-4" />
                      Successfully logged in local recruiter sandbox (top-right)!
                    </p>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
