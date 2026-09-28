import React from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  ArrowUp, 
  ExternalLink,
  MapPin
} from 'lucide-react';

interface FooterProps {
  fiverrUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ fiverrUrl }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Identity & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <Logo variant="full" size="md" />
            
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Helping businesses grow through smart digital marketing strategies.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{PERSONAL_DATA.location} · Serving Worldwide Clients</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-sky-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Channels */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Get in Touch
            </h4>
            
            <div className="flex items-center gap-2.5">
              {/* WhatsApp */}
              <a
                href={PERSONAL_DATA.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Fiverr */}
              <a
                href={fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fiverr Profile"
                title="Fiverr"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-400 flex items-center justify-center font-bold text-xs transition-all cursor-pointer"
              >
                fi
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_DATA.contacts.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 flex items-center justify-center font-bold text-xs transition-all cursor-pointer"
              >
                in
              </a>

              {/* Email */}
              <a
                href={PERSONAL_DATA.contacts.emailUrl}
                aria-label="Send Email"
                title="Email"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-sky-500/10 text-slate-300 hover:text-sky-400 flex items-center justify-center transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[11px] text-slate-400 pt-1">
              WhatsApp: {PERSONAL_DATA.contacts.whatsapp}
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Md. Robiul Sardar. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
