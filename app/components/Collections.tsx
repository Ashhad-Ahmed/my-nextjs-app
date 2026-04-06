"use client";
import React, { useRef } from 'react';

export default function Collections() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const collections = [
    { title: "Top products, starting at $10", color: "bg-[#E6E2D6]" },
    { title: "Gifts for clients & employees", color: "bg-[#F3EFE9]" },
    { title: "Prepare for professional events", color: "bg-[#E3E8E6]" },
    { title: "Prepare for local & community events", color: "bg-[#EFE8DF]" },
    { title: "2-day delivery", color: "bg-[#E2EFF6]" },
    { title: "Launch my business", color: "bg-[#F2EDEA]" },
  ];

  return (
    <section className="w-full py-12 px-6 font-sans bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Shop by collection</h2>
          <a href="#" className="text-sm font-semibold hover:underline flex items-center">
            See all collections
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </a>
        </div>
        
        <div className="relative group/carousel">
          {/* Left Arrow */}
          <button 
             onClick={() => scroll('left')}
             className="absolute left-0 top-1/2 -translate-y-[20px] -translate-x-[20px] bg-white shadow-lg border border-gray-100 rounded-lg p-3 z-10 hover:bg-gray-50 items-center justify-center h-10 w-10 md:group-hover/carousel:flex hidden transition-opacity"
          >
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {collections.map((item, idx) => (
              <div key={idx} className="flex flex-col min-w-[200px] flex-1 cursor-pointer group snap-start">
                <div className={`w-full aspect-[4/3] rounded-xl mb-3 flex items-center justify-center p-4 transition-transform group-hover:scale-[1.02] ${item.color} overflow-hidden shadow-sm hover:shadow-md`}>
                   {/* Decorative placeholders */}
                   <div className="w-32 h-32 bg-black/10 rounded-xl transform rotate-12 group-hover:rotate-6 transition-all duration-300 backdrop-blur-sm"></div>
                </div>
                <h3 className="font-bold text-[14px] text-gray-900 leading-tight">{item.title}</h3>
              </div>
            ))}
          </div>
          
          {/* Right Arrow Navigation Overlay */}
          <button 
             onClick={() => scroll('right')}
             className="absolute right-0 top-1/2 -translate-y-[20px] bg-white shadow-lg border border-gray-100 rounded-lg p-3 z-10 hover:bg-gray-50 md:group-hover/carousel:flex items-center justify-center h-10 w-10 hidden transition-opacity"
          >
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
