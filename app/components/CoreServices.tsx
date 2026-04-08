import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'BRANDING & IDENTITY',
    desc: 'Strategy, Logos, Guides',
    image: '/service_branding.png',
    icon: '🏆'
  },
  {
    title: 'PRINT SOLUTIONS',
    desc: 'Business Cards, Flyers, Signage',
    image: '/service_print.png',
    icon: '🖨️'
  },
  {
    title: 'CUSTOM APPAREL',
    desc: 'Team, Event, Workwear',
    image: '/service_apparel.png',
    icon: '👕'
  },
  {
    title: 'PUBLISHING & DESIGN',
    desc: 'Books, Layouts, Merch',
    image: '/service_publishing.png',
    icon: '📚'
  }
];

const CoreServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-premium-black mb-4 tracking-tight">
            CORE SERVICES
          </h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative premium-card border-none bg-gray-50 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-premium-black/20 group-hover:bg-premium-black/0 transition-colors duration-500"></div>
              </div>
              
              <div className="p-8 text-center bg-white border border-gray-100 flex-grow relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white shadow-xl flex items-center justify-center text-2xl rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-premium-black mb-2 mt-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{service.desc}</p>
                <Link href="#" className="inline-block text-[10px] font-bold tracking-widest text-gold-600 hover:text-premium-black transition-colors uppercase border-b border-gold-600 pb-1">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
