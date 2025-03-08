import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import TimelineItem from '@/components/TimelineItem';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <SectionContainer id="experience">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-8">
          <span className="text-portfolio-red font-mono text-lg">04.</span>
          <h2 className="section-title inline-block ml-2">Experience</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-700 delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <TimelineItem 
              year="2025 - Present"
              title="Industrial Trainee"
              subtitle="Texlab IT, Rajshahi"
              description="Currently undergoing industrial training at Texlab IT as part of my academic curriculum at RUET. Gaining hands-on experience in software development, IT solutions, and real-world project implementation."
            />
          </div>
          
          <div className={`transition-all duration-700 delay-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <TimelineItem 
              year="2023 - 2024"
              title="AI Bangla Language Trainer and Reviewer"
              subtitle="Outlier"
              description="Developing and refining AI language models for Bangla language processing and natural language understanding."
            />
          </div>
          
          <div className={`transition-all duration-700 delay-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <TimelineItem 
              year="2022 - 2023"
              title="AI Coding Trainer and Reviewer"
              subtitle="Remotasks"
              description="Trained and reviewed AI models for code generation, debugging, and optimization across multiple programming languages."
            />
          </div>
          
          <div className={`transition-all duration-700 delay-900 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <TimelineItem 
              year="2021 - Present"
              title="Competitive Programming Contestant"
              subtitle="Various Platforms & Onsite Contests"
              description="Participated in numerous competitive programming contests including Inter-University Programming Contests (IUPCs) and online contests across multiple platforms."
              isLast={true}
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Experience;
;
