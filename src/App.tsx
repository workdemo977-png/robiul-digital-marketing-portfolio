import React, { useState, useEffect } from 'react';
import { PERSONAL_DATA, ServiceItem, ProjectItem } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { InstagramSection } from './components/InstagramSection';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WorkProcess } from './components/WorkProcess';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { FiverrUrlModal } from './components/FiverrUrlModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [contactServicePreselect, setContactServicePreselect] = useState<string>('Instagram Marketing');
  const [fiverrUrlModalOpen, setFiverrUrlModalOpen] = useState(false);
  const [fiverrUrl, setFiverrUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('fiverr_profile_url') || PERSONAL_DATA.contacts.defaultFiverrUrl;
    }
    return PERSONAL_DATA.contacts.defaultFiverrUrl;
  });

  const handleSaveFiverrUrl = (newUrl: string) => {
    setFiverrUrl(newUrl);
    if (typeof window !== 'undefined') {
      localStorage.setItem('fiverr_profile_url', newUrl);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleHireMeClick = () => {
    scrollToSection('contact');
  };

  const handleViewPortfolioClick = () => {
    scrollToSection('portfolio');
  };

  const handleInstagramClick = () => {
    scrollToSection('instagram-growth');
  };

  const handleContactService = (serviceTitle: string) => {
    setContactServicePreselect(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500/30 selection:text-sky-200 relative">
      {/* Sticky Top Navigation */}
      <Navbar onHireMeClick={handleHireMeClick} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onHireMeClick={handleHireMeClick}
          onViewPortfolioClick={handleViewPortfolioClick}
          onInstagramClick={handleInstagramClick}
        />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Experience Section */}
        <Experience onServiceSelect={handleContactService} />

        {/* 4. Instagram Marketing Special Feature Section */}
        <InstagramSection onLetsTalkClick={handleHireMeClick} />

        {/* 5. Core Services Section (8 Service Cards) */}
        <Services
          onSelectService={(service) => setSelectedService(service)}
          onContactService={handleContactService}
        />

        {/* 6. Portfolio Showcase Section */}
        <Portfolio
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 7. How Clients Can Contact Me (Work Process) */}
        <WorkProcess onStartClick={handleHireMeClick} />

        {/* 8. Frequently Asked Questions */}
        <FaqSection onContactClick={handleHireMeClick} />

        {/* 9. Direct Message CTAs & Contact Section */}
        <ContactSection
          initialService={contactServicePreselect}
          fiverrUrl={fiverrUrl}
          onEditFiverrUrl={() => setFiverrUrlModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer fiverrUrl={fiverrUrl} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleContactService}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onContact={handleContactService}
      />

      <FiverrUrlModal
        isOpen={fiverrUrlModalOpen}
        currentUrl={fiverrUrl}
        onSave={handleSaveFiverrUrl}
        onClose={() => setFiverrUrlModalOpen(false)}
      />
    </div>
  );
}
