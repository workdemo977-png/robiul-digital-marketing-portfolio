import React, { useState } from 'react';
import { EXPERIENCE_DETAILS } from '../data/portfolioData';
import { 
  Briefcase, 
  Instagram, 
  Facebook, 
  Share2, 
  FileText, 
  Search, 
  Link2, 
  Target, 
  Mail, 
  Building2, 
  TrendingUp, 
  Check, 
  Calendar,
  Layers
} from 'lucide-react';

interface ExperienceProps {
  onServiceSelect?: (serviceName: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onServiceSelect }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'social' | 'seo-leads'>('all');

  const responsibilities = [
    {
      title: 'Instagram Marketing & Organic Growth',
      category: 'social',
      icon: <Instagram className="w-4 h-4 text-pink-400" />,
      description: 'Designing tailored content strategies, profile revamps, aesthetic grids, and daily engagement routines for organic reach.',
      highlight: 'Core Specialization',
    },
    {
      title: 'Facebook Marketing',
      category: 'social',
      icon: <Facebook className="w-4 h-4 text-blue-400" />,
      description: 'Setting up Meta business assets, audience interest targeting, community growth posts, and page optimization.',
      highlight: 'High Engagement',
    },
    {
      title: 'Social Media Management',
      category: 'social',
      icon: <Share2 className="w-4 h-4 text-cyan-400" />,
      description: 'Organizing unified cross-platform posting calendars, caption writing, visual asset consistency, and audience moderation.',
      highlight: 'End-to-End',
    },
    {
      title: 'Content Strategy',
      category: 'social',
      icon: <FileText className="w-4 h-4 text-amber-400" />,
      description: 'Building strategic content pillars balancing brand authority, informative carousel posts, client results, and conversion CTAs.',
      highlight: 'Audience-Centric',
    },
    {
      title: 'SEO & Keyword Research',
      category: 'seo-leads',
      icon: <Search className="w-4 h-4 text-emerald-400" />,
      description: 'Uncovering high-intent commercial keywords, analyzing search volumes, competitor gap analysis, and title/meta recommendations.',
      highlight: 'Organic Rankings',
    },
    {
      title: 'Profile Backlink Building',
      category: 'seo-leads',
      icon: <Link2 className="w-4 h-4 text-indigo-400" />,
      description: 'Executing 100% manual, high-domain-authority profile backlinks with live links report and safe backlink velocity.',
      highlight: 'Domain Authority',
    },
    {
      title: 'Lead Generation',
      category: 'seo-leads',
      icon: <Target className="w-4 h-4 text-rose-400" />,
      description: 'Curating targeted business prospect lists with verified contact information, industry classification, and decision-maker roles.',
      highlight: 'B2B & B2C',
    },
    {
      title: 'Email Marketing',
      category: 'seo-leads',
      icon: <Mail className="w-4 h-4 text-violet-400" />,
      description: 'Crafting persuasive welcome email flows, promotional newsletters, subject lines with high open rates, and list hygiene.',
      highlight: 'Nurture & Convert',
    },
    {
      title: 'Business Profile Optimization',
      category: 'seo-leads',
      icon: <Building2 className="w-4 h-4 text-sky-400" />,
      description: 'Polishing directory profiles, social bio links, Google Business profiles, and ensuring uniform brand identity across the web.',
      highlight: 'Credibility',
    },
    {
      title: 'Digital Brand Growth',
      category: 'social',
      icon: <TrendingUp className="w-4 h-4 text-teal-400" />,
      description: 'Advising clients on long-term organic retention, customer trust building, brand reputation management, and multi-channel coherence.',
      highlight: 'Sustainable',
    },
  ];

  const filteredItems = responsibilities.filter((item) => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
              <span>Experience</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">Practical Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              4+ Years of Practical Digital Marketing & Client Execution
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Hands-on experience delivering social media visibility, search engine keyword optimization, and sustainable digital brand growth for diverse businesses.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-slate-800 text-sky-300 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Areas ({responsibilities.length})
            </button>
            <button
              onClick={() => setFilterCategory('social')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filterCategory === 'social'
                  ? 'bg-slate-800 text-sky-300 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Social Media & Growth
            </button>
            <button
              onClick={() => setFilterCategory('seo-leads')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filterCategory === 'seo-leads'
                  ? 'bg-slate-800 text-sky-300 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              SEO & Lead Generation
            </button>
          </div>
        </div>

        {/* Primary Role Overview Banner */}
        <div className="mb-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 shadow-xl text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {EXPERIENCE_DETAILS.role}
                </h3>
              </div>
              <p className="text-sm text-slate-400 mt-1">
                {EXPERIENCE_DETAILS.organization} · Focus on Strategic Organic & Digital Growth
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-xs font-medium text-sky-300 self-start sm:self-auto">
              <Calendar className="w-3.5 h-3.5" />
              <span>{EXPERIENCE_DETAILS.period}</span>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-4xl">
            {EXPERIENCE_DETAILS.summary}
          </p>
        </div>

        {/* 10 Responsibilities & Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-200 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700/80 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="font-display font-semibold text-base text-white group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium shrink-0">
                    {item.highlight}
                  </span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Practical Experience Verified
                </span>
                {onServiceSelect && (
                  <button
                    onClick={() => onServiceSelect(item.title)}
                    className="text-sky-400 hover:text-sky-300 font-medium transition-colors cursor-pointer"
                  >
                    Inquire →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
