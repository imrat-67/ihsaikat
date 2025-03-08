
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-portfolio-gray bg-portfolio-black/80 backdrop-blur-sm border-t border-portfolio-gray/10">
      <div className="max-w-screen-xl mx-auto px-6">
        <p>© {currentYear} Imtiaj Hossain Saikat. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
