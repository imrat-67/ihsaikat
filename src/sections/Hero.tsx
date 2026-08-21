
import React, { useEffect, useRef } from 'react';
import SectionContainer from '@/components/SectionContainer';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = containerRef.current;
      
      const x = (clientX / offsetWidth - 0.5) * 20;
      const y = (clientY / offsetHeight - 0.5) * 20;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionContainer id="home" className="relative min-h-screen flex items-center justify-center">
      <div 
        ref={containerRef}
        className="relative z-10 text-center max-w-3xl mx-auto transition-transform duration-300"
        style={{ 
          transform: 'perspective(1000px) rotateX(calc(var(--mouse-y, 0) * 0.05deg)) rotateY(calc(var(--mouse-x, 0) * -0.05deg))',
        }}
      >
        <p className="text-portfolio-red font-mono mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-portfolio-white mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          Imtiaj Hossain Saikat
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-portfolio-gray mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
          Computer Engineer & Competitive Programmer
        </h2>
        <p className="text-xl text-portfolio-lightGray max-w-xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
          I build efficient algorithms and solve complex problems. Currently focused on AI development and competitive programming.
        </p>
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}>
          <a 
            href="/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary text-lg px-8 py-4"
          >
            Download CV
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-portfolio-lightGray hover:text-portfolio-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-portfolio-blue/20 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-portfolio-red/10 filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
