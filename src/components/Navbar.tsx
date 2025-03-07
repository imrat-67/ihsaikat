
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { downloadCV } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-portfolio-black/90 backdrop-blur-md py-4 shadow-lg' : 'py-6'}`}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gradient">IH Saikat</a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-2">
          {['about', 'education', 'skills', 'experience', 'coding', 'contact'].map((item, index) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item)} 
              className="nav-link"
            >
              <span className="text-portfolio-red font-mono mr-1">{`0${index + 1}.`}</span> {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <a 
            href="#" 
            onClick={downloadCV}
            className="btn-primary ml-4"
          >
            Resume
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-screen w-3/4 bg-portfolio-blue transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40 shadow-2xl`}>
        <div className="flex flex-col p-8 mt-16">
          {['about', 'education', 'skills', 'experience', 'coding', 'contact'].map((item, index) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item)} 
              className="py-4 px-2 text-xl text-portfolio-lightGray hover:text-portfolio-white transition-colors text-left border-b border-portfolio-gray/20"
            >
              <span className="text-portfolio-red font-mono mr-2">{`0${index + 1}.`}</span> {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <a 
            href="#" 
            onClick={downloadCV}
            className="btn-primary mt-8 text-center"
          >
            Resume
          </a>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-30"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Navbar;
