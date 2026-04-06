"use client";
import React, { useRef } from 'react';

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const categories = [
    { title: "Business Cards", color: "bg-[#F3F4ED]" },
    { title: "Postcards & Print Advertising", color: "bg-[#F1F3EE]" },
    { title: "Signs, Banners & Posters", color: "bg-[#F5F2ED]" },
    { title: "Stickers & Labels", color: "bg-[#F9F6F0]" },
    { title: "Clothing & Bags", color: "bg-[#F5F6F3]" },
    { title: "Promotional Products", color: "bg-[#F7F5EE]" },
    { title: "Packaging", color: "bg-[#F5F2EE]" },
    { title: "Booklets, Catalogs & Magazines", color: "bg-[#F5F5ED]" },
  ];

  return (
    <section className="w-full py-12 px-6 font-sans bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Explore all categories</h2>
        
        <div className="relative group/carousel">
          
          {/* Left Arrow Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-[20px] -translate-x-[20px] bg-white shadow-lg border border-gray-100 rounded-lg p-3 z-10 hover:bg-gray-50 items-center justify-center h-12 w-12 hidden md:group-hover/carousel:flex transition-opacity"
          >
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col min-w-[150px] cursor-pointer group snap-start">
                <div className={`w-full aspect-[4/5] rounded-xl mb-3 flex items-center justify-center p-4 transition-transform group-hover:scale-[1.02] ${cat.color} overflow-hidden relative shadow-sm`}>
                  {/* Abstract shapes as placeholders */}
                  <div className="absolute w-24 h-24 bg-black/10 rounded-lg transform rotate-12 group-hover:rotate-6 transition-all duration-300"></div>
                  <div className="absolute w-20 h-20 bg-brand-blue/90/10 rounded-full blur-xl"></div>
                </div>
                <h3 className="font-bold text-[14px] text-gray-900 leading-tight">{cat.title}</h3>
              </div>
            ))}
          </div>
          
          {/* Right Arrow Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-[20px] bg-white shadow-lg border border-gray-100 rounded-lg p-3 z-10 hover:bg-gray-50 flex items-center justify-center h-12 w-12 hidden md:group-hover/carousel:flex transition-opacity"
          >
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>

        </div>
      </div>
    </section>
  );
}
