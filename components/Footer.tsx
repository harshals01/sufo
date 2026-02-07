
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sufo-beige pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-8">
          <h2 className="font-serif text-5xl md:text-7xl text-sufo-charcoal italic">Join the Orbit.</h2>
          <p className="text-sufo-taupe text-lg">Ready to experience the future of family dining?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <button className="px-12 py-5 bg-sufo-charcoal text-sufo-beige font-semibold uppercase tracking-widest hover:bg-sufo-gold transition-all duration-500 shadow-xl">
              Book a Table
            </button>
            <button className="px-12 py-5 border border-sufo-charcoal text-sufo-charcoal font-semibold uppercase tracking-widest hover:bg-white transition-all duration-300">
              Find a Location
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-t border-sufo-sand pt-16 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
             <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sufo-charcoal rounded-full flex items-center justify-center">
                <span className="text-sufo-beige font-serif text-sm font-bold">S</span>
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-sufo-charcoal">SUFO</span>
            </div>
            <p className="text-sufo-taupe max-w-xs text-sm leading-relaxed">
              Redefining comfort food through architectural innovation and a commitment to premium, hygienic family dining.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="text-xs font-bold uppercase tracking-widest text-sufo-charcoal hover:text-sufo-gold transition-colors">{social}</a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sufo-gold">Location</h4>
            <p className="text-sm text-sufo-taupe leading-relaxed">
              77 Galactic Avenue,<br />
              Skyline District, SF 94105
            </p>
            <p className="text-sm text-sufo-taupe">
              Mon - Sun: 11am - 11pm
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-sufo-gold">Contact</h4>
            <p className="text-sm text-sufo-taupe">
              hello@sufo-dining.com
            </p>
            <p className="text-sm text-sufo-taupe">
              +1 (555) 902-UFO-1
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-sufo-taupe font-bold">
          <span>&copy; 2024 SUFO Premium Dining. All Rights Reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sufo-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sufo-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
