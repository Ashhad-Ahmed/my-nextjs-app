import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LatestBlog = () => {
  return (
    <section className="py-24 bg-premium-black relative overflow-hidden">
      {/* Decorative Accents matching footer transition in design */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-500/5 to-transparent skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tighter uppercase italic">
            LATEST FROM THE BLOG
          </h2>
          <div className="w-16 h-1 bg-gold-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Big Featured Item */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 italic text-gray-300 text-center md:text-left">
                <span className="text-gold-500 text-6xl font-serif">“</span>
                <p className="text-lg leading-relaxed mb-6 -mt-4">
                  EEBBP transformed our identity! We’re also efficient businesses for our customers.
                </p>
                <div className="text-sm font-bold text-white uppercase tracking-widest">— Pastor John, Hope Church</div>
            </div>
            <div className="w-full md:w-1/2 group cursor-pointer">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4 shadow-2xl border border-white/10">
                    <Image src="/blog_1.png" alt="Blog" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-white font-bold hover:text-gold-500 transition-colors">EEBBP Branding Tips for Social Branding Tips</h3>
            </div>
          </div>

          {/* List of Blog Posts */}
          <div className="space-y-8">
            <div className="flex gap-6 group cursor-pointer items-center">
                <div className="relative w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-white/10">
                    <Image src="/service_branding.png" alt="Post" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div>
                    <span className="text-gold-500 text-[10px] uppercase font-bold tracking-widest">BRANDING TIPS</span>
                    <h4 className="text-white font-bold text-sm leading-tight group-hover:text-gold-500 transition-colors">Creative Branding Tips on Branding Tips</h4>
                </div>
            </div>
            <div className="flex gap-6 group cursor-pointer items-center">
                <div className="relative w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-white/10">
                    <Image src="/service_print.png" alt="Post" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div>
                   <span className="text-gold-500 text-[10px] uppercase font-bold tracking-widest">PRINTING IDEAS</span>
                    <h4 className="text-white font-bold text-sm leading-tight group-hover:text-gold-500 transition-colors">Branding Tips Branding Tips</h4>
                </div>
            </div>
            <div className="flex gap-6 group cursor-pointer items-center">
                <div className="relative w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(230,184,0,0.1)]">
                    <Image src="/service_publishing.png" alt="Post" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div>
                   <span className="text-gold-500 text-[10px] uppercase font-bold tracking-widest">BUSINESS DESIGN</span>
                    <h4 className="text-white font-bold text-sm leading-tight group-hover:text-gold-500 transition-colors">Branding Tips Branding Tips</h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
