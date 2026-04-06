import React from 'react';

export default function Hero() {
  return (
    <section className="w-full flex flex-col font-sans">
      {/* Top Banner - Subtle gradient instead of flat black */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-xs py-2.5 px-4 flex justify-between items-center shadow-md">
        <button className="text-gray-300 hover:text-white transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div className="font-medium tracking-wide text-center flex-1">
          $50 off orders $150+, $25 off orders $100+, $15 off orders $75+ | Code: <span className="font-bold text-brand-yellow">BMSM</span> | Ends April 7 | <a href="#" className="underline font-bold text-brand-blue hover:text-white transition-colors">Shop now</a>
        </div>
        <button className="text-gray-300 hover:text-white transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>

      {/* Main Hero Area - Modern smooth gradient */}
      <div className="relative w-full h-[550px] bg-gradient-to-br from-slate-900 via-brand-blue/20 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Subtle decorative glow instead of cluttered text */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-orange/8 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Center Content Box - Modern Glassmorphic style */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-10 max-w-2xl w-full mx-4 text-center shadow-2xl border border-white/20 z-10 transform transition-all duration-500 hover:shadow-cyan-900/20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-3">Buy More, Save More</p>
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">$50 off orders $150+</h2>
          <p className="text-gray-600 font-medium text-lg mb-6">$25 off orders $100+ <span className="mx-2 text-gray-300">|</span> $15 off orders $75+</p>
          
          <div className="bg-gray-50/80 inline-block px-6 py-2 rounded-full border border-gray-100 mb-8">
            <p className="text-gray-800 font-medium text-sm">
              Code: <strong className="font-bold text-black border-b-2 border-brand-orange">BMSM</strong> <span className="text-gray-300 mx-2">|</span> Ends April 7
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button className="bg-gray-900 text-white px-8 py-3.5 rounded-xl font-semibold transform transition-all hover:bg-brand-orange hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/25 active:translate-y-0">
              Business Cards
            </button>
            <button className="bg-gray-900 text-white px-8 py-3.5 rounded-xl font-semibold transform transition-all hover:bg-brand-orange hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/25 active:translate-y-0">
              Clothing & Bags
            </button>
            <button className="bg-gray-900 text-white px-8 py-3.5 rounded-xl font-semibold transform transition-all hover:bg-brand-orange hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/25 active:translate-y-0">
              Promotional products
            </button>
          </div>

          <p className="text-[11px] text-gray-400">Not combinable with other offers.</p>
        </div>
      </div>
    </section>
  );
}
