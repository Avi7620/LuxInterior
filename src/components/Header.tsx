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
       { /* Overlay & Sidebar */ }
<div className={`fixed inset-0 z-40 flex transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
  {/* Overlay background */}
  <div
    className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
    onClick={() => setIsMenuOpen(false)}
  />

  {/* Sidebar menu */}
  <div
    className={`relative z-50 w-72 max-w-full h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out
      ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
  >
    {/* Header */}
    <div className="flex justify-between items-center p-4 border-b border-neutral-200">
      <div className="text-xl font-bold text-neutral-800">
        <span className="text-yellow-600">Lux</span>Interiors
      </div>
      <button
        onClick={() => setIsMenuOpen(false)}
        className="p-2 text-neutral-800 hover:text-yellow-600"
      >
        <X size={24} />
      </button>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-col p-6 space-y-4">
      <button onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</button>
      <button onClick={() => scrollToSection('portfolio')} className="mobile-nav-link">Portfolio</button>
      <button onClick={() => scrollToSection('services')} className="mobile-nav-link">Services</button>
      <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
      <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
    </div>
  </div>
</div>

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