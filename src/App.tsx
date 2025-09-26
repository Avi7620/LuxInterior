import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Portfolio from './components/Portfolio';

import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <Hero />
       <BeforeAfter />
      <Portfolio />
     
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;