import React from 'react';
import { PERSONAL_DATA, CORE_STATS } from '../data/portfolioData';
import { 
  Sparkles, 
  Target, 
  MessageSquare, 
  ShieldCheck, 
  Users, 
  Compass, 
  MapPin, 
  Calendar,
  CheckCircle2,
  ExternalLink,
  Phone,
  Mail,
  Award,
  TrendingUp,
  Check
} from 'lucide-react';

export const About: React.FC = () => {
  const statIcons = [
    <Calendar className="w-5 h-5 text-sky-400" />,
    <Target className="w-5 h-5 text-cyan-400" />,
    <Users className="w-5 h-5 text-purple-400" />,
    <Compass className="w-5 h-5 text-emerald-400" />,
  ];

  const pillars = [
    {
      title: 'Practical Strategies',
      description: 'Zero fluff or vague promises — only field-tested organic tactics, keyword mapping, and engagement funnels that deliver tangible business value.',
      icon: <Target className="w-4 h-4 text-sky-400" />,
    },
    {
      title: 'Clear Communication',
      description: 'Fast response times, transparent progress reporting, and straightforward answers on WhatsApp, Email, or LinkedIn.',
      icon: <MessageSquare className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: 'Quality Work & Ethics',
      description: 'Strict adherence to white-hat methodologies, authentic organic follower growth, and 100% manual profile link creation.',
      icon: <ShieldCheck className="w-4 h-4 text-amber-400" />,
    },
    {
      title: 'Long-Term Relationships',
      description: 'Treating your brand like my own, iterating on data insights, and supporting your business across multiple quarters.',
      icon: <Users className="w-4 h-4 text-pink-400" />,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
            <span>About Me</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">Professional Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Strategic Mindset, Practical Execution, and Measurable Digital Growth
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Dedicated digital marketing specialist committed to transparent, results-driven organic growth and search visibility.
          </p>
        </div>

        {/* Main Grid: Bio Narrative & Working Pillars (Left) + Stats Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Bio Narrative & Core Working Pillars */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl space-y-5">
              <p className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed">
                {PERSONAL_DATA.bio}
              </p>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span className="text-slate-300">Based in: <strong>{PERSONAL_DATA.location}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-300">Open for Global Remote Projects</span>
                </div>
              </div>
            </div>

            {/* Core Working Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5 font-display font-semibold text-sm text-slate-100">
                    <span className="p-1 rounded bg-slate-800 border border-slate-700">
                      {pillar.icon}
                    </span>
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Required Statistics Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {CORE_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800/80 hover:border-sky-500/30 transition-all duration-200 group text-left"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:scale-105 transition-transform">
                    {statIcons[idx]}
                  </div>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-sky-300 transition-colors mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
