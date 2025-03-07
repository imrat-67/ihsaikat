
import React from 'react';

interface ProgressBarProps {
  value: number;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, label }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-portfolio-lightGray">{label}</span>
        <span className="text-xs font-semibold text-portfolio-lightBlue">{value}%</span>
      </div>
      <div className="w-full bg-portfolio-blue/30 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-portfolio-red to-portfolio-lightBlue h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
