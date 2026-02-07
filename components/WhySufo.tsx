
import React from 'react';

const WhySufo: React.FC = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
      title: "Hygienic Precision",
      desc: "Our unique sealing process ensures zero contact and absolute hygiene from kitchen to table."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
        </svg>
      ),
      title: "No-Mess Form Factor",
      desc: "The UFO shape locks in juices and sauces, providing a mess-free experience for kids and adults alike."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      ),
      title: "Family First",
      desc: "Designed with warm spaces and ergonomic seating to make every family meal a cherished memory."
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
           <div className="absolute -inset-4 border border-sufo-sand translate-x-4 translate-y-4 -z-10"></div>
           <img 
            src="https://images.unsplash.com/photo-1550966841-3ee7ad6b107a?q=80&w=2071&auto=format&fit=crop" 
            alt="Inside SUFO" 
            className="w-full h-[600px] object-cover grayscale-[0.3]"
          />
        </div>
        
        <div className="order-1 lg:order-2 space-y-12">
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-sufo-gold">Why Choose SUFO</h2>
            <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-sufo-charcoal leading-tight">Beyond the <br /><span className="italic">Traditional.</span></p>
          </div>

          <div className="space-y-10">
            {features.map((f, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="text-sufo-gold group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-2xl text-sufo-charcoal">{f.title}</h4>
                  <p className="text-sufo-taupe font-light max-w-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySufo;
