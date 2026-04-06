import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full font-sans">
      {/* Top Section */}
      <div className="bg-slate-900 text-white pt-16 pb-8 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-4">
            {/* Logo Column */}
            <div className="col-span-1">
              <div className="flex items-center mb-6">
                 <Image src="/logo.png" alt="VistaPrint Logo" width={150} height={40} className="object-contain" />
              </div>
              <h4 className="font-bold text-lg mb-2">You need it. We print it. You love it.</h4>
              <p className="text-sm text-gray-300">
                VistaPrint is <a href="#" className="underline">here to help</a> every step of the way.
              </p>
            </div>

            {/* Links Column 1 */}
            <div className="col-span-1">
              <h4 className="font-bold mb-4">Let Us Help</h4>
              <ul className="text-sm text-gray-300 space-y-3">
                <li><a href="#" className="hover:underline">My Account</a></li>
                <li><a href="#" className="hover:underline">Shipping</a></li>
                <li><a href="#" className="hover:underline">Contact & Support</a></li>
                <li><a href="#" className="hover:underline">Ideas & Advice</a></li>
                <li><a href="#" className="hover:underline">Reseller Program</a></li>
                <li><a href="#" className="hover:underline">Accessibility</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="col-span-1">
              <h4 className="font-bold mb-4">Our Company</h4>
              <ul className="text-sm text-gray-300 space-y-3">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Ambassador Program</a></li>
                <li><a href="#" className="hover:underline">For Investors</a></li>
                <li><a href="#" className="hover:underline">For Media</a></li>
                <li><a href="#" className="hover:underline">Sustainability</a></li>
                <li><a href="#" className="hover:underline">Do Not Sell or Share My Info</a></li>
              </ul>
            </div>

            {/* Trustpilot */}
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-2 text-white">
                 <span className="text-green-500 text-2xl">★</span> 
                 <span className="font-bold text-xl">Trustpilot</span>
              </div>
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="bg-green-500 p-1 w-8 h-8 flex items-center justify-center rounded-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-300 mb-6 font-semibold">TrustScore 4.5 <span className="underline cursor-pointer">6,275 reviews</span></p>
              <p className="text-xs text-gray-400">Our customers rate us Excellent on <a href="#" className="underline">Trustpilot</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Black Section */}
      <div className="bg-black text-white py-12 px-6 relative">
        <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
           
           {/* Left details */}
           <div className="flex flex-col gap-6 text-[13px] text-gray-400">
             <div className="flex flex-wrap items-center gap-4">
               <a href="#" className="underline hover:text-white transition decoration-gray-400 hover:decoration-white underline-offset-2">1.866.207.4955</a>
               <a href="#" className="underline hover:text-white transition decoration-gray-400 hover:decoration-white underline-offset-2">Home</a>
               <a href="#" className="underline hover:text-white transition decoration-gray-400 hover:decoration-white underline-offset-2">Privacy and Cookie Policy</a>
               <a href="#" className="underline hover:text-white transition decoration-gray-400 hover:decoration-white underline-offset-2">Terms and Conditions</a>
               <a href="#" className="underline hover:text-white transition decoration-gray-400 hover:decoration-white underline-offset-2">Legal Matters</a>
             </div>
             <div>
               A CIMPRESS company © 2001-2026 VistaPrint. All rights reserved.
             </div>
             <div>
               Unless stated otherwise, prices are exclusive of delivery and product options.
             </div>
           </div>

           {/* Right / Center stuff */}
           <div className="flex flex-wrap items-center gap-12 xl:gap-24">
              {/* Payment icons mock */}
              <div className="flex gap-2">
                 <div className="bg-white px-2 py-1.5 rounded w-11 h-8 flex items-center justify-center">
                   {/* Mastercard SVG */}
                   <svg viewBox="0 0 36 24" width="24" height="16"><circle cx="12" cy="12" r="10" fill="#EB001B"/><circle cx="24" cy="12" r="10" fill="#F79E1B"/><path d="M18 21.16A9.97 9.97 0 0 0 21.6 12 9.97 9.97 0 0 0 18 2.84a9.97 9.97 0 0 0-3.6 9.16 9.97 9.97 0 0 0 3.6 9.16z" fill="#FF5F00"/></svg>
                 </div>
                 <div className="bg-white px-2 py-1.5 rounded w-11 h-8 flex items-center justify-center">
                   {/* PayPal fake */}
                   <span className="text-[#003087] font-bold text-[10px] italic">PayPal</span>
                 </div>
                 <div className="bg-white px-2 py-1.5 rounded w-11 h-8 flex items-center justify-center">
                   {/* Visa fake */}
                   <span className="text-[#1A1F71] font-bold text-[11px] font-serif">VISA</span>
                 </div>
                 <div className="bg-white px-2 py-1.5 rounded w-11 h-8 flex items-center justify-center">
                   {/* Apple Pay fake */}
                   <span className="text-black font-semibold text-[9px] flex items-center gap-0.5"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.05 2.53.68 3.14.68.65 0 1.95-.76 3.42-.64 1.48.05 2.82.68 3.58 1.84-3.08 1.86-2.58 5.6.43 6.84-.71 1.77-1.63 3.47-2.57 4.25zM12.03 7.25C11.95 4.3 14.15 2 16.63 1.95c.16 3.1-2.5 5.5-4.6 5.3z"/></svg>Pay</span>
                 </div>
              </div>

              {/* Social Icons + Flag */}
              <div className="flex items-center gap-8">
                  <div className="flex gap-5">
                    {/* FB */}
                    <a href="#" className="hover:opacity-80"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg></a>
                    {/* X (Twitter) */}
                    <a href="#" className="hover:opacity-80"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                    {/* IG */}
                    <a href="#" className="hover:opacity-80"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                    {/* Pinterest */}
                    <a href="#" className="hover:opacity-80"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.66 7.9 6.44 9.34-.09-.78-.18-1.98.04-2.84l1.45-6.15s-.37-.74-.37-1.84c0-1.73 1-3.02 2.25-3.02 1.06 0 1.57.8 1.57 1.75 0 1.07-.68 2.67-1.03 4.15-.3.124.62 2.25 1.84 2.25 2.2 0 3.9-2.32 3.9-5.67 0-2.98-2.14-5.07-5.2-5.07-3.5 0-5.56 2.63-5.56 5.34 0 1.07.41 2.22.93 2.84.1.13.12.23.09.34l-.3 1.25c-.04.16-.16.2-.33.12-1.22-.57-1.98-2.36-1.98-3.8 0-3.1 2.25-5.95 6.5-5.95 3.42 0 6.08 2.43 6.08 5.68 0 3.4-2.14 6.13-5.1 6.13-1 0-1.94-.52-2.26-1.14l-.62 2.35c-.22.85-.82 1.9-1.22 2.55C10.27 21.84 11.12 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg></a>
                  </div>

                  <div className="flex items-center cursor-pointer hover:opacity-80">
                     <span className="text-xl leading-none">🇺🇸</span> 
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
              </div>
           </div>
           
        </div>
      </div>
      
      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 bg-brand-yellow text-black font-bold py-2.5 px-5 rounded-full shadow-xl flex items-center gap-2 hover:bg-brand-orange transition-colors z-50 text-[15px]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path><circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1" fill="currentColor" stroke="none"/></svg>
        Chat with us
      </button>
    </footer>
  );
}
