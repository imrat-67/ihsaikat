
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SectionContainer from '@/components/SectionContainer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Education from '@/sections/Education';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import CodingProfiles from '@/sections/CodingProfiles';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

const Index = () => {
  // Handle page load animation
  useEffect(() => {
    document.body.classList.add('opacity-0');
    setTimeout(() => {
      document.body.classList.remove('opacity-0');
      document.body.classList.add('transition-opacity', 'duration-1000', 'opacity-100');
    }, 100);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      
      <main className="pt-20">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <CodingProfiles />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
