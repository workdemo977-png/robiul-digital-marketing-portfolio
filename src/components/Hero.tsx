import React from 'react';
import { PERSONAL_DATA } from '../data/portfolioData';
import { Logo } from './Logo';
import { 
  ArrowRight, 
  Briefcase, 
  MapPin, 
  Sparkles, 
  Instagram, 
  CheckCircle2, 
  MessageSquare,
  TrendingUp
} from 'lucide-react';

interface HeroProps {
  onHireMeClick: () => void;
  onViewPortfolioClick: () => void;
  onInstagramClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onHireMeClick,
  onViewPortfolioClick,
  onInstagramClick,
}) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-sky-600/15 via-indigo-600/10 to-teal-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Pill / Editorial Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-slate-200">{PERSONAL_DATA.title}</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">{PERSONAL_DATA.experienceYears} Experience</span>
              <span className="text-slate-500">·</span>
              <span className="inline-flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-sky-400" />
                {PERSONAL_DATA.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.12]">
              Grow Your Brand.{' '}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Reach the Right Audience.
              </span>{' '}
              Build Real Digital Growth.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {PERSONAL_DATA.subheadline}
            </p>

            {/* Instagram Primary Focus Spotlight */}
            <div 
              onClick={onInstagramClick}
              className="p-3.5 rounded-xl bg-gradient-to-r from-purple-950/40 via-pink-950/30 to-slate-900/60 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-200 cursor-pointer group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-0.5 shrink-0 shadow-md">
                  <div className="w-full h-full bg-slate-950/70 rounded-[7px] flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-pink-300 tracking-wide uppercase">Featured Core Specialty</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-200 font-medium">High Impact</span>
                  </div>
                  <p className="text-sm font-medium text-slate-100">
                    Instagram Marketing & Organic Growth — Audience Building & Content Optimization
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-pink-400 shrink-0 group-hover:translate-x-1 transition-transform ml-2" />
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onHireMeClick}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 hover:opacity-95 shadow-lg shadow-sky-500/25 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewPortfolioClick}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-sky-400" />
                <span>View My Portfolio</span>
              </button>
            </div>

            {/* Core Direct Channels Row */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="text-slate-500 font-medium">Quick Connect:</span>
              <a
                href={PERSONAL_DATA.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                WhatsApp: {PERSONAL_DATA.contacts.whatsapp}
              </a>
              <a
                href={PERSONAL_DATA.contacts.emailUrl}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                {PERSONAL_DATA.contacts.email}
              </a>
            </div>

          </div>

          {/* Right Column: Professional Profile Image Area & Brand Lockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative Framing Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-pink-500/20 rounded-3xl blur-md opacity-75" />
              
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5 shadow-2xl backdrop-blur-sm">
                
                {/* Image Container displaying official photo */}
                <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-inner group">
                  <img
                    src={PERSONAL_DATA.portraitOfficialUrl || PERSONAL_DATA.avatarUrl}
                    alt="Md. Robiul Sardar - Digital Marketing Specialist"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = document.getElementById('hero-avatar-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  
                  {/* Styled CSS Fallback */}
                  <div
                    id="hero-avatar-fallback"
                    style={{ display: 'none' }}
                    className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-6 text-center"
                  >
                    <Logo variant="compact" size="lg" />
                    <p className="mt-3 font-display font-bold text-white text-lg">Md. Robiul Sardar</p>
                    <p className="text-xs text-sky-400">Digital Marketing Specialist</p>
                  </div>

                  {/* Clean bottom gradient scrim */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent pointer-events-none" />

                  {/* Floating Identity Badge in Scrim */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/60 shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <div className="text-left">
                        <p className="text-xs font-bold text-white leading-tight">Md. Robiul Sardar</p>
                        <p className="text-[10px] text-sky-400 leading-tight">Digital Marketing Specialist</p>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                      4+ Yrs Exp
                    </span>
                  </div>
                </div>

                {/* Sub-card highlights */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-left">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70">
                    <div className="flex items-center gap-1.5 text-sky-400 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs font-semibold">Growth Strategy</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      Organic audience & reach optimization
                    </p>
                  </div>
                  
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70">
                    <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-xs font-semibold">Proven Results</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      4+ Years of client marketing execution
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
