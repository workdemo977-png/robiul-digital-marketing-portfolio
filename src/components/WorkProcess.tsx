import React from 'react';
import { WORK_STEPS, PERSONAL_DATA } from '../data/portfolioData';
import { 
  MessageSquare, 
  Building, 
  Lightbulb, 
  Rocket, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';

interface WorkProcessProps {
  onStartClick: () => void;
}

export const WorkProcess: React.FC<WorkProcessProps> = ({ onStartClick }) => {
  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-sky-400" />,
    <Building className="w-5 h-5 text-purple-400" />,
    <Lightbulb className="w-5 h-5 text-amber-400" />,
    <Rocket className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section className="py-20 md:py-28 relative border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
            <span>Collaboration Workflow</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">Step-by-Step</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            A straightforward, transparent 4-step onboarding process ensuring complete alignment from first inquiry to project launch.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all duration-200 flex flex-col justify-between text-left group relative"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80 group-hover:scale-105 transition-transform">
                    {stepIcons[index]}
                  </div>
                  <span className="font-mono font-bold text-xl text-slate-600 group-hover:text-sky-400 transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Channels or Tips */}
              <div className="pt-3 border-t border-slate-800/70 text-[11px] text-slate-400 leading-normal">
                <span className="text-slate-500 block mb-0.5 font-medium">Channel / Tip:</span>
                <span className="text-slate-300">{step.channelsOrTips}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Track Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-300">
              Ready to discuss your Instagram growth or SEO requirements?
            </p>
          </div>

          <button
            onClick={onStartClick}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Start Step 1: Send Message</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
