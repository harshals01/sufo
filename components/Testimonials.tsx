
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "The UFO shape isn't just a gimmick—it actually makes eating a premium burger with kids entirely stress-free. The truffle Zenith is a must-try.",
      author: "Sarah J.",
      role: "Verified Guest"
    },
    {
      text: "Exceptional aesthetics matched by even better food. The hygiene standards here are visible and reassuring. A true 5-star experience.",
      author: "Mark Henderson",
      role: "Food Enthusiast"
    },
    {
      text: "Finally, a place that feels high-end but welcomes our noisy toddlers with open arms. The architecture of the food is fascinating.",
      author: "The Miller Family",
      role: "Local Residents"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20 space-y-4">
        <div className="flex justify-center gap-1">
          {[1,2,3,4,5].map(i => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-sufo-gold">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
          ))}
        </div>
        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-sufo-taupe">Voices of SUFO</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {reviews.map((r, i) => (
          <div key={i} className="flex flex-col gap-8">
            <div className="text-sufo-gold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 opacity-40">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM6.01704 21L6.01704 18C6.01704 16.8954 6.91242 16 8.01704 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H7.01704C6.46476 8 6.01704 8.44772 6.01704 9V12C6.01704 12.5523 5.56933 13 5.01704 13H4.01704V21H6.01704Z" />
              </svg>
            </div>
            <p className="text-xl font-serif italic text-sufo-beige leading-relaxed opacity-90">
              "{r.text}"
            </p>
            <div className="mt-auto space-y-1">
              <p className="font-bold text-sufo-beige">{r.author}</p>
              <p className="text-xs text-sufo-taupe uppercase tracking-widest">{r.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
