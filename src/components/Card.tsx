
import React from 'react';

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, icon, children, className = "" }) => {
  return (
    <div className={`glass-card ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-portfolio-red">{icon}</div>}
        <h3 className="text-xl font-bold text-portfolio-white">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default Card;
