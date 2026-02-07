
import React, { useState } from 'react';

type Category = 'All' | 'Non-Veg' | 'Veg';

const MenuHighlights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('All');

  const menuItems = [
    {
      name: "Zenith Galactic",
      price: "$18",
      desc: "Double wagyu beef, aged cheddar, charcoal aioli, and caramelized onions.",
      category: "Non-Veg",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop"
    },
    {
      name: "Terra Truffle",
      price: "$21",
      desc: "Forest mushrooms, truffle-infused béchamel, and provolone melt.",
      category: "Veg",
      img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=2000&auto=format&fit=crop"
    },
    {
      name: "Solar Spices",
      price: "$16",
      desc: "Zesty peri-peri paneer, roasted bell peppers, and chipotle slaw.",
      category: "Veg",
      img: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Nebula Prawns",
      price: "$24",
      desc: "Crispy butterfly prawns, wasabi mayo, and seaweed flakes.",
      category: "Non-Veg",
      img: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const filteredItems = activeTab === 'All' ? menuItems : menuItems.filter(i => i.category === activeTab);

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-sufo-taupe">Curated Selection</h2>
          <p className="font-serif text-4xl md:text-5xl text-sufo-charcoal">Signature UFOs</p>
        </div>

        <div className="flex border-b border-sufo-sand w-full md:w-auto">
          {['All', 'Non-Veg', 'Veg'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat as Category)}
              className={`px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 relative ${activeTab === cat ? 'text-sufo-charcoal' : 'text-sufo-taupe hover:text-sufo-charcoal'}`}
            >
              {cat}
              {activeTab === cat && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sufo-gold"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row gap-6 p-4 bg-white/40 hover:bg-white transition-colors duration-500 border border-transparent hover:border-sufo-sand">
            <div className="w-full sm:w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale-[0.2]" />
            </div>
            <div className="flex-grow flex flex-col justify-between py-2">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-2xl text-sufo-charcoal">{item.name}</h3>
                  <span className="text-xl font-serif text-sufo-gold">{item.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${item.category === 'Veg' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className="text-[10px] uppercase font-bold tracking-tighter text-sufo-taupe">{item.category}</span>
                </div>
                <p className="text-sufo-taupe text-sm leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
              <button className="text-xs font-bold uppercase tracking-widest text-sufo-charcoal hover:text-sufo-gold transition-colors flex items-center gap-2 mt-4">
                Details
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="px-12 py-5 bg-sufo-charcoal text-sufo-beige font-semibold uppercase tracking-widest hover:bg-sufo-gold transition-all duration-500 shadow-xl">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default MenuHighlights;
