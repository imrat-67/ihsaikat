
import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description?: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  subtitle, 
  description, 
  isLast = false 
}) => {
  return (
    <div className="relative pl-8 pb-8 group">
      {!isLast && (
        <div className="absolute left-0 top-0 h-full w-0.5 bg-portfolio-gray/30 group-hover:bg-portfolio-red/50 transition-colors duration-300"></div>
      )}
      <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-portfolio-red bg-portfolio-black group-hover:bg-portfolio-red transition-colors duration-300"></div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 text-portfolio-red font-mono mb-2 md:mb-0">{year}</div>
        <div className="md:w-3/4">
          <h3 className="text-xl font-bold text-portfolio-white mb-1">{title}</h3>
          <p className="text-portfolio-lightGray mb-2">{subtitle}</p>
          {description && <p className="text-portfolio-gray">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
