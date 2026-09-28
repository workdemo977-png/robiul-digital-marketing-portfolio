import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onHireMeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHireMeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = ['home', 'about', 'experience', 'services', 'portfolio', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
          >
            <Logo variant="full" size="sm" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-sky-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onHireMeClick}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-300 hover:from-sky-300 hover:to-cyan-200 rounded-lg transition-all duration-200 shadow-md shadow-sky-500/20 active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onHireMeClick}
              className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 rounded-lg whitespace-nowrap cursor-pointer"
            >
              Hire Me
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-slate-900 text-sky-400 border border-sky-500/20'
                    : 'text-slate-300 hover:bg-slate-900/60 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onHireMeClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-300"
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
