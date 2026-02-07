
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisualShowcase from './components/VisualShowcase';
import WhySufo from './components/WhySufo';
import MenuHighlights from './components/MenuHighlights';
import FamilyExperience from './components/FamilyExperience';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-sufo-gold selection:text-white">
      <Navbar scrolled={scrolled} />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="showcase" className="py-20 md:py-32 bg-sufo-offwhite">
          <VisualShowcase />
        </section>

        <section id="about" className="py-20 md:py-32">
          <WhySufo />
        </section>

        <section id="menu" className="py-20 md:py-32 bg-sufo-sand/30">
          <MenuHighlights />
        </section>

        <section id="experience" className="py-20 md:py-32">
          <FamilyExperience />
        </section>

        <section id="reviews" className="py-20 md:py-32 bg-sufo-charcoal text-sufo-beige">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
