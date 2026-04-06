import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white flex flex-col font-sans">
      {/* Brand accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-blue"></div>
      {/* Topmost thin bar */}
      <div className="bg-gray-50 text-xs py-2 px-6 flex space-x-6 text-gray-600">
        <a href="#" className="hover:text-brand-orange hover:underline transition-colors">Websites by Elevated Elite Business Branding and Printing</a>
        <a href="#" className="hover:text-brand-orange hover:underline transition-colors">Corporate Pricing</a>
        <a href="#" className="hover:text-brand-orange hover:underline transition-colors">Reseller Program</a>
        <a href="#" className="hover:text-brand-orange hover:underline transition-colors">Elevated Elite Business Branding and PrintingCreate</a>
      </div>

      {/* Main navigation area */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-2 cursor-pointer">
          {/* Logo Placeholder */}
          <div className="flex items-center">
             <Image src="/logo.png" alt="VistaPrint Logo" width={150} height={40} className="object-contain" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-[0.5] mx-8 relative group">
          <input 
            type="text" 
            placeholder="Search products or services..." 
            className="w-full bg-gray-50/80 border border-gray-200 rounded-full py-2.5 px-5 pl-5 pr-12 text-[14px] outline-none transition-all duration-300 focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15 hover:border-brand-blue/40 shadow-sm hover:shadow-md"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 group-hover:text-brand-orange transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-8 text-[14px] font-medium text-gray-800">
          <div className="relative flex items-center">
            <span className="flex items-center gap-1.5 cursor-pointer hover:text-brand-blue transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              Help is here
            </span>
            <span className="absolute top-full left-[26px] text-[11px] text-gray-500 font-normal leading-none mt-0.5">1.866.207.4955</span>
          </div>
          <a href="#" className="flex items-center gap-1.5 hover:text-brand-blue transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            My projects
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            My Favorites
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-brand-blue transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            My Account
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            Cart
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="px-6 py-3 flex items-center justify-between text-[13px] font-medium text-gray-800 leading-tight">
        <a href="/" className="text-brand-orange font-bold hover:underline">Home</a>
        <a href="/about" className="hover:text-brand-blue hover:underline text-center transition-colors">About Us</a>
        <a href="/services" className="hover:text-brand-blue hover:underline text-center transition-colors">Our Services</a>
        <a href="/custom-printing" className="hover:text-brand-blue hover:underline text-center transition-colors">Custom Printing</a>
        <a href="/branding" className="hover:text-brand-blue hover:underline text-center transition-colors">Branding Services</a>
        <a href="/publishing" className="hover:text-brand-blue hover:underline text-center transition-colors">Publishing Services</a>
        <a href="/apparel" className="hover:text-brand-blue hover:underline text-center transition-colors">Apparel &<br/>Merchandise</a>
        <a href="/portfolio" className="hover:text-brand-blue hover:underline text-center transition-colors">Portfolio</a>
        <a href="/quote" className="hover:text-brand-blue hover:underline text-center transition-colors">Request a Quote</a>
        <a href="/shop" className="hover:text-brand-blue hover:underline text-center transition-colors">Shop</a>
        <a href="/testimonials" className="hover:text-brand-blue hover:underline text-center transition-colors">Testimonials</a>
        <a href="/contact" className="hover:text-brand-blue hover:underline text-center transition-colors">Contact Us</a>
      </div>
    </header>
  );
}
