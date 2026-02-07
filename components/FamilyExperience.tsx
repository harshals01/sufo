
import React from 'react';

const FamilyExperience: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-sufo-offwhite p-8 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sufo-sand/20 -skew-x-12 translate-x-12"></div>
        
        <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
          <div className="space-y-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-sufo-taupe">Atmosphere</h2>
            <p className="font-serif text-5xl md:text-6xl text-sufo-charcoal leading-[1.1]">The Art of <br /> <span className="italic">Connection.</span></p>
            <p className="text-sufo-taupe text-lg font-light leading-relaxed max-w-md">
              Our spaces are crafted with a minimalist, warm palette to create a sanctuary from the noise of the outside world. Whether it's a birthday celebration or a quiet Tuesday night, we offer the perfect backdrop for family intimacy.
            </p>
            
            <ul className="space-y-4 pt-4">
              {['Kid-Safe Ergonomic Furniture', 'Soft Acoustic Environment', 'Integrated Play Zones', 'Premium Hygiene Protocols'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sufo-charcoal font-medium">
                  <div className="w-5 h-5 rounded-full border border-sufo-gold flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-sufo-gold rounded-full"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="space-y-4">
              <div className="h-2/3 bg-gray-200 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" alt="Detail 1" />
              </div>
              <div className="h-1/3 bg-gray-200 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" alt="Detail 2" />
              </div>
            </div>
            <div className="h-full bg-gray-200 rounded-lg overflow-hidden mt-8">
               <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" alt="Detail 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyExperience;
