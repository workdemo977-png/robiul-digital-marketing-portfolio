import React from 'react';
import { ServiceItem } from '../data/portfolioData';
import { X, CheckCircle2, ArrowRight, Clock, Target, ShieldCheck } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onContact: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onContact,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
            Service Details
          </div>
          <h3 className="text-2xl font-display font-bold text-white">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Scope and Deliverables */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
            Scope & Deliverables:
          </h4>
          <ul className="space-y-2.5">
            {service.keyDeliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Best for & Timeframe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 mb-1">
              <Target className="w-3.5 h-3.5 text-sky-400" />
              <span>Recommended For</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {service.bestFor}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 mb-1">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Typical Delivery</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {service.deliverableTimeframe}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            Ready to implement this service?
          </span>
          <button
            onClick={() => {
              onClose();
              onContact(service.title);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-300 hover:from-sky-300 hover:to-cyan-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Contact For This Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
