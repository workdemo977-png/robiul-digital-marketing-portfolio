import React from 'react';
import { SERVICES, ServiceItem } from '../data/portfolioData';
import { 
  Instagram, 
  Facebook, 
  Share2, 
  Search, 
  Link2, 
  Target, 
  Mail, 
  Megaphone, 
  ArrowRight, 
  CheckCircle2, 
  Clock,
  Sparkles
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onContactService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectService,
  onContactService,
}) => {
  const getServiceIcon = (iconName: string, isPrimary?: boolean) => {
    const iconClass = `w-5 h-5 ${isPrimary ? 'text-pink-400' : 'text-sky-400'}`;
    switch (iconName) {
      case 'Instagram':
        return <Instagram className={iconClass} />;
      case 'Facebook':
        return <Facebook className={iconClass} />;
      case 'Share2':
        return <Share2 className={iconClass} />;
      case 'Search':
        return <Search className={iconClass} />;
      case 'Link2':
        return <Link2 className={iconClass} />;
      case 'Target':
        return <Target className={iconClass} />;
      case 'Mail':
        return <Mail className={iconClass} />;
      case 'Megaphone':
      default:
        return <Megaphone className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
            <span>Services</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">Core Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Specialized Digital Marketing Services Built for Growth
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Every service is executed with a focus on practical strategies, clear communication, white-hat standards, and long-term client results.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, index) => {
            const isInstagram = service.id === 'instagram-marketing';

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between text-left transition-all duration-200 group ${
                  isInstagram
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-purple-950/20 border-2 border-pink-500/40 shadow-xl shadow-pink-500/5 ring-1 ring-pink-500/20'
                    : 'bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 shadow-lg'
                }`}
              >
                <div>
                  {/* Top Header: Icon & Category Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl border ${
                        isInstagram
                          ? 'bg-pink-500/10 border-pink-500/30'
                          : 'bg-slate-800 border-slate-700/80'
                      } group-hover:scale-105 transition-transform`}
                    >
                      {getServiceIcon(service.iconName, isInstagram)}
                    </div>
                    
                    {isInstagram ? (
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30">
                        Primary Focus
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-slate-500">
                        0{index + 1}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-sky-300 transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/60 mb-5">
                    {service.keyDeliverables.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Learn More
                  </button>

                  <button
                    onClick={() => onContactService(service.title)}
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                      isInstagram
                        ? 'bg-pink-500 text-white hover:bg-pink-400'
                        : 'bg-slate-800 text-sky-300 hover:bg-sky-500 hover:text-slate-950'
                    }`}
                  >
                    <span>Contact Me</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
