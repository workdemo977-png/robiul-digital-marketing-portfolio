import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, ProjectItem } from '../data/portfolioData';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  Info, 
  ExternalLink, 
  Sparkles,
  Search,
  Instagram,
  Share2,
  Globe
} from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'SEO',
    'Instagram Marketing',
    'Social Media',
    'Keyword Research',
    'Digital Marketing',
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Instagram Marketing':
        return <Instagram className="w-3.5 h-3.5 text-pink-400" />;
      case 'SEO':
      case 'Keyword Research':
        return <Search className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Social Media':
        return <Share2 className="w-3.5 h-3.5 text-blue-400" />;
      default:
        return <Globe className="w-3.5 h-3.5 text-sky-400" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 relative border-t border-slate-900 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
              <span>Portfolio</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">Featured Work & Case Outlines</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Selected Digital Marketing Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              A curated showcase of practical campaign structures, keyword research matrices, and social media growth frameworks.
            </p>
          </div>

          {/* Editorial Note regarding placeholders */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 self-start md:self-auto">
            <Info className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>Honest Showcase: Client details anonymized or marked as template outlines</span>
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800/90 overflow-x-auto no-scrollbar mb-10 max-w-full">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-sm ring-1 ring-sky-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {cat !== 'All' && getCategoryIcon(cat)}
                <span>{cat}</span>
                {cat === 'All' && <span className="text-[10px] text-slate-500">({PORTFOLIO_PROJECTS.length})</span>}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200 overflow-hidden flex flex-col justify-between text-left group shadow-lg"
            >
              <div>
                {/* Visual Thumbnail if available */}
                {project.imageUrl && (
                  <div className="aspect-[16/9] w-full bg-slate-950 overflow-hidden relative border-b border-slate-800/60">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Unboxed category metadata on top corner */}
                    <div className="absolute top-3 left-3 text-[11px] font-medium text-slate-200 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-700/60 flex items-center gap-1.5">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>

                    {project.isPlaceholder && (
                      <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-400 bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-slate-800">
                        Template Outline
                      </div>
                    )}
                  </div>
                )}

                {/* Content body */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Service Provided */}
                  <div className="text-xs font-semibold text-sky-400 uppercase tracking-wide">
                    {project.serviceProvided}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-sky-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Results / Objectives Block */}
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                    <span className="font-semibold text-slate-200 block text-[11px] uppercase tracking-wider text-sky-300">
                      Objectives & Execution
                    </span>
                    <p className="text-slate-400 leading-relaxed">
                      {project.resultsOrObjectives}
                    </p>
                  </div>

                  {/* Deliverables summary */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-medium text-slate-400">Included Deliverables:</span>
                    <ul className="text-xs text-slate-300 space-y-1">
                      {project.deliverables.slice(0, 2).map((del, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer: View Project Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-sky-500 hover:text-slate-950 border border-slate-700/80 hover:border-sky-400 transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer group/btn"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-slate-950 transition-colors" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
