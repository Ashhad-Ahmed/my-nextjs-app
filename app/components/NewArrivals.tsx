"use client";
import React, { useRef } from 'react';

export default function NewArrivals() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const arrivals = [
    { title: "New in Clothing & Bags", color: "bg-[#F3F4ED]" },
    { title: "New in Packaging", color: "bg-[#F6F4EE]" },
    { title: "New in Stickers & Labels", color: "bg-[#F4F3EE]" },
    { title: "New in Promo Products", color: "bg-[#F3F4EE]" },
  ];

  return (
    <section className="w-full py-12 px-6 font-sans bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto relative group/carousel">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Shop new arrivals, from clothing to packaging</h2>
          <a href="#" className="text-sm font-semibold hover:underline flex items-center">
            See all
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </a>
        </div>
        
        {/* Left Arrow */}
        <button 
           onClick={() => scroll('left')}
           className="absolute left-0 top-1/2 -translate-y-[20px] -translate-x-[20px] bg-white shadow-lg border border-gray-100 rounded-lg p-3 z-10 hover:bg-gray-50 items-center justify-center h-10 w-10 md:group-hover/carousel:flex hidden transition-opacity"
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {arrivals.map((item, idx) => (
            <div key={idx} className="flex flex-col flex-1 min-w-[250px] cursor-pointer group snap-start">
              <div className={`w-full aspect-square rounded-xl mb-3 flex items-center justify-center p-4 transition-transform group-hover:scale-105 ${item.color} overflow-hidden shadow-sm hover:shadow-md`}>
                  {/* Decorative placeholder */}
                  <div className="w-40 h-40 bg-zinc-200/50 rounded-lg shadow-inner blur-[2px] rotate-3 transition-transform group-hover:rotate-6"></div>
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
    </section>
  );
}
