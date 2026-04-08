import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const communities = [
  {
    title: 'SCHOOLS & ACADEMIES',
    desc: 'Schools & academies still use churches and institutions as a logical educational factors.',
    image: '/community_schools.png'
  },
  {
    title: 'CHURCHES & MINISTRIES',
    desc: 'Businesses and religious Ministries, customized enough to print or offer solutions.',
    image: '/community_churches.png'
  },
  {
    title: 'SPORTS TEAMS',
    desc: 'Team mockups & embroidered clothing create a visibility and sports mockups.',
    image: '/community_sports.png'
  },
  {
    title: 'SMALL BUSINESSES',
    desc: 'Publishing books, brochures, binders, and other custom apparel and individual businesses.',
    image: '/community_business.png'
  }
];

const Community = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-premium-black mb-16 tracking-tight">
          TRUSTED SOLUTIONS FOR EVERY COMMUNITY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {communities.map((item, index) => (
            <div key={index} className="text-left group">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6 shadow-md transition-shadow group-hover:shadow-xl">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-black text-premium-black mb-3 tracking-wider">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                {item.desc}
              </p>
              <Link href="#" className="text-[10px] font-bold text-gold-600 hover:text-premium-black transition-colors flex items-center space-x-2 group">
                <span>Learn More</span>
                <span className="text-lg text-gold-500 group-hover:text-premium-black transition-colors">›</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
