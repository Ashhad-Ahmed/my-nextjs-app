import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-premium-black mb-4 tracking-tighter uppercase italic">
            PORTFOLIO
          </h2>
          <div className="w-16 h-1 bg-gold-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-12 gap-4 h-[600px]">
          {/* Main Portfolio Grid Matching Design */}
          <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
            <div className="relative h-1/2 rounded-sm overflow-hidden shadow-sm group">
              <Image src="/service_branding.png" alt="P1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-1/2 rounded-sm overflow-hidden shadow-sm group">
              <Image src="/portfolio_1.png" alt="P2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
             <div className="relative h-2/3 rounded-sm overflow-hidden shadow-sm group">
              <Image src="/service_print.png" alt="P3" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-1/3 rounded-sm overflow-hidden shadow-sm group">
              <Image src="/service_publishing.png" alt="P4" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4 h-1/2">
              <div className="relative rounded-sm overflow-hidden shadow-sm group">
                <Image src="/service_apparel.png" alt="P5" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="relative rounded-sm overflow-hidden shadow-sm group">
                <Image src="/public/logo.png" alt="P6" fill className="object-contain p-8 bg-black group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 h-1/2">
               <div className="relative rounded-sm overflow-hidden shadow-sm group">
                <Image src="/service_branding.png" alt="P7" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="relative rounded-sm overflow-hidden shadow-sm group">
                <Image src="/portfolio_1.png" alt="P8" fill className="object-cover rotate-90 scale-150 group-hover:scale-[1.6] transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <Link href="/portfolio" className="inline-block px-12 py-3 border-2 border-premium-black font-bold text-xs uppercase tracking-[0.2em] hover:bg-premium-black hover:text-white transition-all duration-300">
                View All Projects
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
