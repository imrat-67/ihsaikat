
import React from 'react';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ id, className = "", children }) => {
  return (
    <section 
      id={id} 
      className={`section-container ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
