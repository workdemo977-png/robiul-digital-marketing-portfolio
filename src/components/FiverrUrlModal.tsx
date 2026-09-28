import React, { useState } from 'react';
import { X, Check, Globe, RefreshCw } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

interface FiverrUrlModalProps {
  isOpen: boolean;
  currentUrl: string;
  onSave: (newUrl: string) => void;
  onClose: () => void;
}

export const FiverrUrlModal: React.FC<FiverrUrlModalProps> = ({
  isOpen,
  currentUrl,
  onSave,
  onClose,
}) => {
  const [urlInput, setUrlInput] = useState(currentUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = urlInput.trim() || PERSONAL_DATA.contacts.defaultFiverrUrl;
    onSave(cleanUrl);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    setUrlInput(PERSONAL_DATA.contacts.defaultFiverrUrl);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-xs text-emerald-400">
            fi
          </div>
          <h3 className="font-display font-bold text-lg text-white">
            Customize Fiverr Profile URL
          </h3>
        </div>

        <p className="text-xs text-slate-400 mb-4 leading-relaxed">
          Update your Fiverr profile link here. It will update all Fiverr buttons across the website and save to your browser.
        </p>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Fiverr Profile URL
            </label>
            <div className="relative">
              <input
                type="url"
                required
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://www.fiverr.com/yourusername"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-colors"
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-1.5 flex items-center justify-between">
              <span>Default placeholder: {PERSONAL_DATA.contacts.defaultFiverrUrl}</span>
              <button
                type="button"
                onClick={handleReset}
                className="text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            </p>
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-emerald-500/20"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Fiverr URL</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
