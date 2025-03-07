
import React from 'react';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-portfolio-gray hover:text-portfolio-white transition-all duration-300 group"
      aria-label={label}
    >
      <div className="text-portfolio-red group-hover:text-portfolio-lightRed transition-colors duration-300">
        {icon}
      </div>
      <span>{label}</span>
    </a>
  );
};

export default SocialIcon;
