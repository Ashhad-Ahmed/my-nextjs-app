import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-white flex flex-col font-sans">
      {/* Topmost thin bar */}
      <div className="bg-[#f3f4f6] text-xs py-2 px-6 flex space-x-6 text-gray-700">
        <a href="#" className="hover:underline">Websites by Vista x Wix</a>
        <a href="#" className="hover:underline">Corporate Pricing</a>
        <a href="#" className="hover:underline">Reseller Program</a>
        <a href="#" className="hover:underline">VistaCreate</a>
      </div>

      {/* Main navigation area */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-2 cursor-pointer">
          {/* Logo Placeholder */}
          <div className="text-2xl font-bold tracking-tighter flex items-center">
             <span className="text-blue-500 mr-1 text-3xl">▼</span>
             vistaprint<span className="text-sm font-normal align-top">®</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-[0.5] mx-8 relative group">
          <input 
            type="text" 
            placeholder="Search products or services..." 
            className="w-full bg-gray-50/80 border border-gray-200 rounded-full py-2.5 px-5 pl-5 pr-12 text-[14px] outline-none transition-all duration-300 focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 hover:border-gray-300 shadow-sm hover:shadow-md"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 group-hover:text-gray-600 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-8 text-[14px] font-medium text-gray-800">
          <div className="relative flex items-center">
            <span className="flex items-center gap-1.5 cursor-pointer hover:text-gray-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              Help is here
            </span>
            <span className="absolute top-full left-[26px] text-[11px] text-gray-500 font-normal leading-none mt-0.5">1.866.207.4955</span>
          </div>
          <a href="#" className="flex items-center gap-1.5 hover:text-gray-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            My projects
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-gray-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            My Favorites
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-gray-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            My Account
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-gray-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            Cart
          </a>
        </div>
      </div>

      {/* Category Links */}
      <div className="px-6 py-3 flex items-center justify-between text-[13px] font-medium text-gray-800 leading-tight">
        <a href="#" className="text-[#C42033] hover:underline">Deals</a>
        <a href="#" className="hover:underline text-center">Business<br/>Cards</a>
        <a href="#" className="hover:underline text-center">Postcards & Print<br/>Advertising</a>
        <a href="#" className="hover:underline text-center">Signs, Banners &<br/>Posters</a>
        <a href="#" className="hover:underline text-center">Stickers &<br/>Labels</a>
        <a href="#" className="hover:underline text-center">Clothing &<br/>Bags</a>
        <a href="#" className="hover:underline text-center">Promotional<br/>Products</a>
        <a href="#" className="hover:underline text-center">Packaging</a>
        <a href="#" className="hover:underline text-center">Invitations, Gifts &<br/>Stationery</a>
        <a href="#" className="hover:underline text-center">Wedding</a>
        <a href="#" className="hover:underline text-center">Logo, Websites &<br/>Social</a>
        <a href="#" className="hover:underline text-center">Design<br/>Services</a>
      </div>
    </header>
  );
}
