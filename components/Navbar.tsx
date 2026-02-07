
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav border-b border-sufo-sand py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-sufo-charcoal rounded-full flex items-center justify-center">
            <span className="text-sufo-beige font-serif text-xl font-bold">S</span>
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-sufo-charcoal">SUFO</span>
        </div>

        <div className="hidden md:flex gap-10 items-center">
          <a href="#home" className="text-sm font-medium tracking-wide uppercase hover:text-sufo-gold transition-colors">Home</a>
          <a href="#menu" className="text-sm font-medium tracking-wide uppercase hover:text-sufo-gold transition-colors">Menu</a>
          <a href="#about" className="text-sm font-medium tracking-wide uppercase hover:text-sufo-gold transition-colors">Our Story</a>
          <a href="#experience" className="text-sm font-medium tracking-wide uppercase hover:text-sufo-gold transition-colors">Experience</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-6 py-2.5 text-sm font-semibold tracking-wide uppercase border border-sufo-charcoal hover:bg-sufo-charcoal hover:text-sufo-beige transition-all duration-300">
            Book a Table
          </button>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-sufo-charcoal">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
