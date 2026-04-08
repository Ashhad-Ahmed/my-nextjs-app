import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-premium-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero_team.png" 
          alt="Luxury Office" 
          fill 
          className="object-cover opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-premium-black via-premium-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-transparent to-premium-black/50"></div>
      </div>

      {/* Golden Geometric Shapes (Design Accents) */}
      <div className="absolute top-20 right-[-10%] w-[600px] h-1 bg-gold-500/20 rotate-[35deg] blur-sm"></div>
      <div className="absolute top-40 right-[-5%] w-[600px] h-1 bg-gold-500/30 rotate-[35deg] blur-md"></div>
      <div className="absolute bottom-40 left-[-10%] w-[600px] h-1 bg-gold-500/20 scale-x-[-1] rotate-[35deg] blur-sm"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-block py-1 pr-10 border-r-4 border-gold-500 mb-6 px-4 bg-white/5 backdrop-blur-sm">
            <span className="text-white text-sm font-bold tracking-[0.3em] uppercase">Elite Solutions in Orlando</span>
          </div>

          <h3 className="text-white lg:text-3xl text-xl font-bold mb-2 tracking-tight">
            WE DON'T JUST DESIGN....
          </h3>
          <h1 className="text-white lg:text-7xl md:text-5xl text-4xl font-extrabold mb-8 leading-tight">
            WE <span className="text-gold">DOMINATE</span> BRANDING.
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
            Elevate your business with Elite Branding, Printing, & Custom Solutions in Orlando. 
            We turn your vision into high-impact visual reality.
          </p>

          <div className="flex flex-wrap gap-6">
            <Link 
              href="/start" 
              className="px-10 py-4 bg-gold-500 text-premium-black font-bold rounded shadow-[0_0_30px_rgba(230,184,0,0.3)] hover:bg-white hover:scale-105 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Start Your Brand
            </Link>
            <Link 
              href="/portfolio" 
              className="group flex items-center space-x-4 px-10 py-4 border border-white/20 text-white font-bold rounded hover:bg-white hover:text-premium-black transition-all duration-300 uppercase tracking-widest text-sm"
            >
              <span>View Portfolio</span>
              <div className="w-6 h-px bg-white group-hover:bg-premium-black transition-colors"></div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-[10px] text-gold-500 font-bold tracking-widest mb-2 uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
