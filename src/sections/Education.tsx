
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import TimelineItem from '@/components/TimelineItem';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <SectionContainer id="education">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-8">
          <span className="text-portfolio-red font-mono text-lg">02.</span>
          <h2 className="section-title inline-block ml-2">Education</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-700 delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <TimelineItem 
              year="2021 - Present"
              title="Bachelor in Computer Science and Engineering"
              subtitle="Rajshahi University of Engineering & Technology (RUET)"
              description="Currently pursuing my undergraduate degree with a focus on computer science, algorithms, and AI development."
            />
          </div>
          
          <div className={`transition-all duration-700 delay-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <TimelineItem 
              year="2018 - 2020"
              title="Higher Secondary Certificate (HSC)"
              subtitle="Bir Shrestha Noor Mohammad Public College"
              description="Achieved GPA 5.00 out of 5.00, with a strong focus on science and mathematics."
            />
          </div>
          
          <div className={`transition-all duration-700 delay-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <TimelineItem 
              year="2016 - 2018"
              title="Secondary School Certificate (SSC)"
              subtitle="Takerhat Popular High School"
              description="Achieved GPA 5.00 out of 5.00, building a strong foundation in science and mathematics."
              isLast={true}
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Education;
