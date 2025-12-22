import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    
    
    // // Add meta description
    // const metaDescription = document.querySelector('meta[name="description"]');
    // if (metaDescription) {
    //   metaDescription.setAttribute('content', 'Portfolio of John Developer - A Full Stack JavaScript Developer specializing in React, Node.js, and modern web technologies.');
    // } else {
    //   const meta = document.createElement('meta');
    //   meta.name = 'description';
    //   meta.content = 'Portfolio of John Developer - A Full Stack JavaScript Developer specializing in React, Node.js, and modern web technologies.';
    //   document.head.appendChild(meta);
    // }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
