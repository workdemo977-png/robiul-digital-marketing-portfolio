import React, { useState } from 'react';
import { PERSONAL_DATA, SERVICES } from '../data/portfolioData';
import { Logo } from './Logo';
import { 
  MessageSquare, 
  Send, 
  Mail, 
  Phone, 
  Check, 
  Copy, 
  ExternalLink, 
  Edit3, 
  Globe, 
  CheckCircle2, 
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  fiverrUrl: string;
  onEditFiverrUrl: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  fiverrUrl,
  onEditFiverrUrl,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceNeeded: initialService || 'Instagram Marketing',
    websiteUrl: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Update service if prop changes
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialService]);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!formData.name.trim()) {
      setValidationError('Please provide your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setValidationError('Please provide a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setValidationError('Please write a brief message about your project requirements.');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission / Prepare mailto link trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Create prefilled mailto link as auxiliary option
      const subject = encodeURIComponent(`Project Inquiry: ${formData.serviceNeeded} - ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Robiul,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.serviceNeeded}\nWebsite / Social: ${formData.websiteUrl || 'N/A'}\n\nProject Details:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${PERSONAL_DATA.contacts.email}?subject=${subject}&body=${body}`;
      
      // Auto-open mail client after brief delay if desired
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-slate-900 bg-slate-950">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sky-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
            <span>Direct Communication</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">Hire Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Ready to Accelerate Your Brand's Digital Growth?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Reach out via your favorite platform or send a direct project inquiry below. I typically respond within a few hours.
          </p>
        </div>

        {/* 4 Direct Message CTA Buttons Bar (High Priority) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          
          {/* WhatsApp Direct */}
          <a
            href={PERSONAL_DATA.contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-emerald-500/30 hover:border-emerald-500/60 shadow-lg shadow-emerald-500/5 transition-all duration-200 group text-left flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium block">Direct Chat</span>
                <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  WhatsApp Me
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Fiverr Profile */}
          <div className="p-4 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-emerald-500/20 hover:border-emerald-500/40 shadow-lg transition-all duration-200 group text-left flex items-center justify-between relative">
            <a
              href={fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 flex-1 min-w-0"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-600/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 group-hover:scale-105 transition-transform">
                Fi
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 font-medium block truncate">Freelance Platform</span>
                <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors truncate block">
                  Message on Fiverr
                </span>
              </div>
            </a>
            
            {/* Quick Edit URL button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                onEditFiverrUrl();
              }}
              title="Edit Fiverr Profile URL"
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Edit Fiverr URL"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* LinkedIn Profile */}
          <a
            href={PERSONAL_DATA.contacts.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-blue-500/30 hover:border-blue-500/60 shadow-lg shadow-blue-500/5 transition-all duration-200 group text-left flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 group-hover:scale-105 transition-transform">
                in
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium block">Professional Network</span>
                <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                  Connect on LinkedIn
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Direct Email */}
          <a
            href={PERSONAL_DATA.contacts.emailUrl}
            className="p-4 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-sky-500/30 hover:border-sky-500/60 shadow-lg shadow-sky-500/5 transition-all duration-200 group text-left flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium block">Official Inbox</span>
                <span className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  Send Email
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
          </a>

        </div>

        {/* Main Section Content: Identity Details (Left) + Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Brand Identity & Contact Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
              
              {/* Identity & Logo Lockup */}
              <div className="space-y-4 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-700/80 ring-2 ring-sky-500/20 shrink-0 bg-slate-950 shadow-md">
                    <img
                      src={PERSONAL_DATA.avatarUrl}
                      alt={PERSONAL_DATA.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">
                      {PERSONAL_DATA.name}
                    </h3>
                    <p className="text-xs text-sky-400 font-medium">
                      {PERSONAL_DATA.title}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {PERSONAL_DATA.experienceYears} Experience · {PERSONAL_DATA.location}
                    </p>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between">
                  <Logo variant="full" size="sm" />
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-medium border border-emerald-500/20">
                    Open for Projects
                  </span>
                </div>
              </div>

              {/* Exact Contact Options List */}
              <div className="space-y-4">
                
                {/* WhatsApp */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <div>
                      <span className="text-[11px] text-slate-400 block">WhatsApp</span>
                      <a
                        href={PERSONAL_DATA.contacts.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-slate-100 hover:text-emerald-400 transition-colors"
                      >
                        {PERSONAL_DATA.contacts.whatsapp}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_DATA.contacts.whatsapp, 'whatsapp')}
                    className="p-1.5 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy WhatsApp Number"
                  >
                    {copiedField === 'whatsapp' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <div className="min-w-0">
                      <span className="text-[11px] text-slate-400 block">Email</span>
                      <a
                        href={PERSONAL_DATA.contacts.emailUrl}
                        className="text-xs font-semibold text-slate-100 hover:text-sky-400 transition-colors truncate block"
                      >
                        {PERSONAL_DATA.contacts.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_DATA.contacts.email, 'email')}
                    className="p-1.5 rounded text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded text-blue-400 font-bold text-xs flex items-center justify-center">
                      in
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block">LinkedIn Profile</span>
                      <a
                        href={PERSONAL_DATA.contacts.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-slate-100 hover:text-blue-400 transition-colors"
                      >
                        {PERSONAL_DATA.contacts.linkedinName}
                      </a>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_DATA.contacts.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded text-slate-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Fiverr Profile */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-4 h-4 rounded text-emerald-400 font-bold text-xs flex items-center justify-center">
                      fi
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] text-slate-400 block">Fiverr Profile</span>
                      <a
                        href={fiverrUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-slate-100 hover:text-emerald-400 transition-colors truncate block"
                      >
                        Visit My Fiverr Profile
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={onEditFiverrUrl}
                      className="p-1.5 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Update Fiverr URL"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={fiverrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-slate-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Location & Response Time Note */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {PERSONAL_DATA.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  Typically responds &lt; 2 hrs
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl text-left">
              <h3 className="font-display font-bold text-xl text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to share your project goals, timelines, or ask any question.
              </p>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    Inquiry Drafted Successfully!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. If your email app didn't automatically open, you can also send this inquiry directly on WhatsApp or Email:
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={PERSONAL_DATA.contacts.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs inline-flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {validationError && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
                      {validationError}
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-colors placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Service Needed & Website URL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                            {s.title}
                          </option>
                        ))}
                        <option value="General Marketing Consultation" className="bg-slate-900 text-white">
                          General Marketing Consultation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Website or Social Media URL
                      </label>
                      <input
                        type="text"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        placeholder="e.g. instagram.com/yourbrand"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Project Details / Goals <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your business, current marketing hurdles, and what results you are looking to achieve..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white text-sm focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-colors placeholder:text-slate-600 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-300 hover:from-sky-300 hover:to-cyan-200 active:scale-[0.99] transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Preparing Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2">
                      No spam guarantee. Your contact details are kept strictly confidential.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
