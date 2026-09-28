import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onContactClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Transparent Answers About My Working Process
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-xl mx-auto">
            Everything you need to know before initiating a project or booking an organic growth campaign.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 text-left">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-slate-900/80 transition-colors cursor-pointer"
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have other questions CTA */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400 mb-3">
            Have a specific requirement or question not listed here?
          </p>
          <button
            onClick={onContactClick}
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1.5 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask me directly on WhatsApp or Email →</span>
          </button>
        </div>

      </div>
    </section>
  );
};
