import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your
          <span className="block text-yellow-400">Living Space</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-neutral-200 font-light max-w-2xl mx-auto leading-relaxed">
          Award-winning interior design that reflects your unique style and elevates your everyday living experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-yellow-600 text-white font-semibold rounded-none hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Our Work
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-none hover:bg-white hover:text-neutral-800 transition-all duration-300">
            Get Consultation
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20 animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;