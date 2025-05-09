import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutCourseSection from '../components/AboutCourseSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import InstructorSection from '../components/InstructorSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import FinalCtaSection from '../components/FinalCtaSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Realize Seu Chamado: Torne-se Terapeuta Integrativo | Curso S.O.S";
    
    // Add a meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transforme sua vocação para cuidar em uma carreira profissional com o Curso S.O.S Terapias Integrativas Complementares. Aprenda técnicas Seitai e muito mais.');
    }
    
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutCourseSection />
      <ProblemSection />
      <SolutionSection />
      <InstructorSection />
      <TestimonialsSection />
      <CtaSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Index;