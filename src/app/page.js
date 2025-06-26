
import React from 'react';
import HeroSection from './components/portfolio/HeroSection';
import AboutSection from './components/portfolio/AboutSection';
import ProjectsSection from './components/portfolio/ProjectSection';
import ContactSection from './components/portfolio/ContactSection';

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}