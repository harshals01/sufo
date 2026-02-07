
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-sufo-beige">
      {/* Background Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sufo-sand rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-sufo-taupe/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sufo-taupe/30 bg-white/50">
            <span className="w-2 h-2 rounded-full bg-sufo-gold animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-sufo-taupe">The Future of Comfort Food</span>
          </div>
          
          <h1 className="font-serif text-5xl lg:text-7xl xl:text-8xl leading-[1.1] text-sufo-charcoal">
            The World is <br />
            <span className="italic text-sufo-gold">Better Rounded.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-sufo-taupe max-w-lg leading-relaxed font-light">
            Experience the revolution of the burger. Seamlessly sealed, gourmet ingredients, and a futuristic dining experience designed for the modern family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 bg-sufo-charcoal text-sufo-beige font-semibold uppercase tracking-widest hover:bg-sufo-gold transition-all duration-500 shadow-xl">
              Explore the Menu
            </button>
            <button className="px-8 py-4 border border-sufo-charcoal text-sufo-charcoal font-semibold uppercase tracking-widest hover:bg-white transition-all duration-300">
              Visit SUFO
            </button>
          </div>

          <div className="flex items-center gap-8 pt-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-sufo-charcoal">4.9/5</span>
              <span className="text-xs text-sufo-taupe uppercase tracking-wider">Customer Satisfaction</span>
            </div>
            <div className="h-8 w-px bg-sufo-sand"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-sufo-charcoal">100%</span>
              <span className="text-xs text-sufo-taupe uppercase tracking-wider">Hygienic Craft</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center group">
          <div className="absolute inset-0 bg-sufo-gold/5 rounded-full blur-3xl scale-125 group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="relative z-10 w-full max-w-md lg:max-w-lg animate-in fade-in zoom-in duration-1000 delay-300">
            {/* Using a placeholder that looks like a sleek burger/round object */}
            <div className="relative aspect-square rounded-full overflow-hidden border-[16px] border-white shadow-2xl ufo-shadow">
               <img 
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop" 
                alt="Signature UFO Burger" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sufo-charcoal/40 to-transparent"></div>
              <div className="absolute bottom-10 left-0 right-0 text-center">
                 <span className="text-white font-serif italic text-2xl">The Zenith Classic</span>
              </div>
            </div>
            {/* Flying Accents */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white p-2 rounded-2xl shadow-lg rotate-12 flex flex-col items-center justify-center">
              <span className="text-sufo-gold font-bold text-xl leading-none">ZERO</span>
              <span className="text-[10px] text-sufo-taupe uppercase font-bold">Mess</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
