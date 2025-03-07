
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import Card from '@/components/Card';
import { Code, Globe, Database, Cpu, Laptop, BrainCircuit } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <SectionContainer id="skills">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-12">
          <span className="text-portfolio-red font-mono text-lg">03.</span>
          <h2 className="section-title inline-block ml-2">Technical Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={`transition-all duration-700 delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Card title="Programming Languages" icon={<Code size={24} />}>
              <ul className="space-y-2 text-portfolio-lightGray">
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> C/C++
                </li>
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Python
                </li>
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Java
                </li>
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> JavaScript
                </li>
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> PHP
                </li>
              </ul>
            </Card>
          </div>
          
          <div className={`transition-all duration-700 delay-400 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Card title="Web Development" icon={<Globe size={24} />}>
              <ul className="space-y-2 text-portfolio-lightGray">
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Frontend: HTML, CSS, JavaScript
                </li>
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Backend: PHP
                </li>
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Databases: SQL (MySQL)
                </li>
              </ul>
            </Card>
          </div>
          
          <div className={`transition-all duration-700 delay-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Card title="Embedded Systems" icon={<Cpu size={24} />}>
              <ul className="space-y-2 text-portfolio-lightGray">
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Microcontroller programming (STM32, Arduino)
                </li>
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Assembly language
                </li>
              </ul>
            </Card>
          </div>
          
          <div className={`transition-all duration-700 delay-600 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Card title="Software Development" icon={<Laptop size={24} />}>
              <ul className="space-y-2 text-portfolio-lightGray">
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Object-Oriented Programming (OOP)
                </li>
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Design patterns
                </li>
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Software architecture and Agile methodologies
                </li>
              </ul>
            </Card>
          </div>
          
          <div className={`transition-all duration-700 delay-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Card title="Hardware Knowledge" icon={<Database size={24} />}>
              <ul className="space-y-2 text-portfolio-lightGray">
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Digital Logic Design
                </li>
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Computer Architecture
                </li>
              </ul>
            </Card>
          </div>
          
          <div className={`transition-all duration-700 delay-800 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Card title="Data Structures & Algorithms" icon={<BrainCircuit size={24} />}>
              <ul className="space-y-2 text-portfolio-lightGray">
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Disjoint Set Union (DSU), Segment Tree
                </li>
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Binary Indexed Tree (BIT), Sparse Table
                </li>
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Graph Algorithms, Dynamic Programming
                </li>
                <li className="flex items-center">
                  <span className="text-portfolio-red mr-2">›</span> Game Theory, Bit Manipulation
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;
