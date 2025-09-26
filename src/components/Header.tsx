import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-neutral-800">
            <span className="text-yellow-600">Lux</span>Interiors
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-neutral-800 hover:text-yellow-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-neutral-200">
            <div className="flex flex-col py-4 px-6 space-y-2">
              <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
              <button onClick={() => scrollToSection('portfolio')} className="mobile-nav-link">Portfolio</button>
              <button onClick={() => scrollToSection('services')} className="mobile-nav-link">Services</button>
              <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
              <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        .nav-link {
          @apply text-neutral-800 hover:text-yellow-600 transition-colors duration-300 font-medium;
        }
        .mobile-nav-link {
          @apply text-neutral-800 hover:text-yellow-600 transition-colors duration-300 font-medium py-2 text-left;
        }
      `}</style>
    </header>
  );
};

export default Header;