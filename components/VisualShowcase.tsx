
import React from 'react';

const VisualShowcase: React.FC = () => {
  const showcaseItems = [
    {
      title: "Golden Crust",
      description: "Artisanally sealed to lock in flavor.",
      img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop"
    },
    {
      title: "Prime Ingredients",
      description: "Wagyu beef and locally sourced greens.",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop"
    },
    {
      title: "The Experience",
      description: "Modern aesthetics in every bite.",
      img: "https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-sufo-taupe">Visual Identity</h2>
        <p className="font-serif text-4xl md:text-5xl text-sufo-charcoal">Architectural Dining</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {showcaseItems.map((item, idx) => (
          <div key={idx} className="group relative overflow-hidden bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-[4/5] overflow-hidden mb-6 relative">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-sufo-charcoal/0 group-hover:bg-sufo-charcoal/10 transition-colors duration-500"></div>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-sufo-charcoal">{item.title}</h3>
              <p className="text-sufo-taupe text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualShowcase;
