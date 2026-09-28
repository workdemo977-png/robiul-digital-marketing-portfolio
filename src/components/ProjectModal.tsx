import React from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, CheckCircle2, ArrowRight, Layers, Sparkles, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (serviceName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Thumbnail Image if present */}
        {project.imageUrl && (
          <div className="aspect-[16/8] w-full bg-slate-950 relative overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-6">
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                {project.category}
              </span>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div>
            <div className="text-xs font-medium text-sky-400 mb-1">
              Service: {project.serviceProvided}
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Objectives & Strategy */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            <h4 className="text-xs font-semibold text-sky-300 uppercase tracking-wider mb-1.5">
              Project Objectives & Strategy
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.resultsOrObjectives}
            </p>
          </div>

          {/* Case study execution highlights */}
          {project.caseStudyHighlights && project.caseStudyHighlights.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                Key Execution Highlights:
              </h4>
              <ul className="space-y-2">
                {project.caseStudyHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deliverables Breakdown */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Documented Deliverables Handed Over:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.deliverables.map((item, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                >
                  <Layers className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Need a similar marketing setup for your brand?
            </span>
            <button
              onClick={() => {
                onClose();
                onInquire(project.serviceProvided);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-300 hover:from-sky-300 hover:to-cyan-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Inquire About This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
