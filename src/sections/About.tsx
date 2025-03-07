
import React, { useEffect, useRef } from 'react';
import SectionContainer from '@/components/SectionContainer';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <SectionContainer id="about">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-4">
          <span className="text-portfolio-red font-mono text-lg">01.</span>
          <h2 className="section-title inline-block ml-2">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 text-portfolio-lightGray space-y-4 text-lg">
            <p className={`transition-all duration-700 delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              I am Imtiaj Hossain Saikat, a passionate Computer Science and Engineering professional. My career goal is to thrive in dynamic, challenging environments where I can leverage my technical expertise, creative problem-solving, and disciplined work ethic.
            </p>
            <p className={`transition-all duration-700 delay-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              With a robust foundation in programming, AI tools, and problem-solving across platforms like Codeforces and LeetCode, I aim to drive technological innovations and collaborate on impactful projects.
            </p>
            <p className={`transition-all duration-700 delay-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              I'm dedicated to lifelong learning and pushing boundaries in technology and engineering.
            </p>
          </div>
          
          <div className="md:col-span-5 relative group">
            <div className={`relative z-10 rounded-lg overflow-hidden transition-all duration-700 delay-700 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="aspect-square bg-portfolio-blue/20 backdrop-blur-sm rounded-lg flex items-center justify-center p-1">
                <div className="w-full h-full overflow-hidden rounded-lg relative">
                  <img 
                    src="/lovable-uploads/b2118097-59f0-449e-a3fa-63b0e4f6bc41.png" 
                    alt="Imtiaj Hossain Saikat" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border-2 border-portfolio-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-portfolio-red rounded-lg transform translate-x-5 translate-y-5 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 z-0"></div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
