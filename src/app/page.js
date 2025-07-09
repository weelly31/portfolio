'use client';

import React, { useRef } from 'react';
import HeroSection from './components/portfolio/HeroSection';
import AboutSection from './components/portfolio/AboutSection';
import ProjectsSection from './components/portfolio/ProjectSection';
import ContactSection from './components/portfolio/ContactSection';

export default function Portfolio() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <HeroSection scrollToContact={scrollToContact} />
      <AboutSection />
      <ProjectsSection />
      
      {/* 👇 Ref placed here for scroll target */}
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </div>
  );
}
