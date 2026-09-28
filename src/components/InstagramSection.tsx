import React, { useState } from 'react';
import { INSTAGRAM_SERVICES_LIST, PERSONAL_DATA } from '../data/portfolioData';
import instagramHeroImg from '../assets/images/instagram_marketing_hero_1790567263312.jpg';
import { 
  Instagram, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Compass, 
  Hash, 
  Search, 
  CalendarDays, 
  Target, 
  Award, 
  HeartHandshake,
  MessageCircle
} from 'lucide-react';

interface InstagramSectionProps {
  onLetsTalkClick: () => void;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ onLetsTalkClick }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const icons = [
    <Sparkles className="w-4 h-4 text-pink-400" />,
    <Compass className="w-4 h-4 text-purple-400" />,
    <Users className="w-4 h-4 text-amber-400" />,
    <TrendingUp className="w-4 h-4 text-emerald-400" />,
    <Hash className="w-4 h-4 text-cyan-400" />,
    <Search className="w-4 h-4 text-sky-400" />,
    <CalendarDays className="w-4 h-4 text-indigo-400" />,
    <Target className="w-4 h-4 text-rose-400" />,
    <Award className="w-4 h-4 text-violet-400" />,
    <HeartHandshake className="w-4 h-4 text-pink-400" />,
  ];

  return (
    <section id="instagram-growth" className="py-20 md:py-28 relative border-t border-slate-900 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 overflow-hidden">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-pink-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20 text-xs font-semibold text-pink-400 mb-3">
            <Instagram className="w-3.5 h-3.5" />
            <span>Dedicated Primary Service</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Instagram Marketing & Organic Growth
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            I help businesses turn their Instagram from a static feed into an active audience engine. From high-converting profile architecture to niche hashtag research and daily organic engagement, every step is designed for authentic brand growth.
          </p>
        </div>

        {/* Bento Grid: Visual Hero Asset + 10 Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Visual Showcase & Active Pillar Detail */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img
                  src={instagramHeroImg}
                  alt="Instagram Marketing & Organic Growth Strategy Visual"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = document.getElementById('instagram-img-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                
                {/* Fallback */}
                <div
                  id="instagram-img-fallback"
                  style={{ display: 'none' }}
                  className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-purple-950 via-slate-900 to-slate-950 p-6 text-center"
                >
                  <Instagram className="w-12 h-12 text-pink-400 mb-2" />
                  <p className="font-display font-bold text-white text-base">Instagram Growth Suite</p>
                </div>
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <div className="inline-flex items-center gap-1.5 text-xs text-pink-300 font-medium mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
                  <span>Real Organic Audience Growth</span>
                </div>
                <p className="text-xs text-slate-300">
                  Zero bots or fake engagement. Safe, targeted routines that align with Instagram algorithm guidelines.
                </p>
              </div>
            </div>

            {/* Active Strategy Spotlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-purple-950/30 border border-slate-800/90 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-pink-400 uppercase tracking-wider mb-2">
                <span>Selected Focus</span>
                <span className="text-slate-600">·</span>
                <span>Pillar {activeItemIndex + 1} of {INSTAGRAM_SERVICES_LIST.length}</span>
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-2">
                {INSTAGRAM_SERVICES_LIST[activeItemIndex].title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {INSTAGRAM_SERVICES_LIST[activeItemIndex].description}
              </p>
              
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">Click any card on the right to inspect</span>
                <button
                  onClick={onLetsTalkClick}
                  className="text-xs font-semibold text-pink-400 hover:text-pink-300 inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Apply to my account →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 10 Core Instagram Services Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {INSTAGRAM_SERVICES_LIST.map((item, idx) => {
              const isSelected = activeItemIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveItemIndex(idx)}
                  className={`p-4 rounded-xl text-left cursor-pointer transition-all duration-200 border ${
                    isSelected
                      ? 'bg-slate-900 border-pink-500/50 shadow-lg shadow-pink-500/5 ring-1 ring-pink-500/30'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 rounded-lg bg-slate-800 border border-slate-700/80">
                      {icons[idx]}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>
                  <h4 className={`font-display font-semibold text-sm mb-1.5 transition-colors ${
                    isSelected ? 'text-pink-300' : 'text-white'
                  }`}>
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA Bar */}
        <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-pink-950/40 border border-pink-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Want to Grow Your Instagram? — Let's Talk
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Get an honest assessment of your current profile, content layout, and audience growth potential. Let's discuss a strategy tailored to your niche.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onLetsTalkClick}
              className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 hover:opacity-95 shadow-lg shadow-pink-500/20 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Let's Talk Instagram</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={PERSONAL_DATA.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl font-medium text-xs text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
