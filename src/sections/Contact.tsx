
import React from 'react';
import SectionContainer from '@/components/SectionContainer';
import SocialIcon from '@/components/SocialIcon';
import { Mail, Phone, Linkedin, GitHub } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  return (
    <SectionContainer id="contact">
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-8">
          <span className="text-portfolio-red font-mono text-lg">06.</span>
          <h2 className="section-title inline-block ml-2">Contact</h2>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-700 delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-portfolio-white mb-6">Get In Touch</h3>
            <p className="text-portfolio-lightGray text-lg mb-10">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          
          <div className="glass-card max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`transition-all duration-700 delay-500 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <SocialIcon 
                  href="mailto:imtiajhossain7862@gmail.com" 
                  icon={<Mail size={20} />} 
                  label="imtiajhossain7862@gmail.com"
                />
              </div>
              
              <div className={`transition-all duration-700 delay-600 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <SocialIcon 
                  href="tel:+8801708652827" 
                  icon={<Phone size={20} />} 
                  label="+8801708652827"
                />
              </div>
              
              <div className={`transition-all duration-700 delay-700 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <SocialIcon 
                  href="https://www.linkedin.com/in/imtiaj-hossain-saikat/" 
                  icon={<Linkedin size={20} />} 
                  label="Imtiaj Hossain Saikat"
                />
              </div>
              
              <div className={`transition-all duration-700 delay-800 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <SocialIcon 
                  href="https://github.com/imrat_67" 
                  icon={<GitHub size={20} />} 
                  label="imrat_67"
                />
              </div>
            </div>
          </div>
          
          <div className={`mt-10 transition-all duration-700 delay-900 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary text-lg"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
