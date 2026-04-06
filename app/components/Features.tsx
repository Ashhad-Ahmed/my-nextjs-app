import React from 'react';

export default function Features() {
  return (
    <section className="w-full border-b border-gray-200 py-6 font-sans bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        
        {/* Feature 1 */}
        <div className="flex items-center gap-4 px-4 justify-center md:justify-start">
          <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Free economy shipping</h4>
            <p className="text-gray-500 text-xs">On orders $100+</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-4 px-4 justify-center md:justify-start pt-4 md:pt-0">
          <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Flexible help when you need it</h4>
            <p className="text-gray-500 text-xs">We're here by phone, email & live chat</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-4 px-4 justify-center md:justify-start pt-4 md:pt-0">
          <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Over 4,700 5-star reviews</h4>
            <p className="text-gray-500 text-xs">Rated by Trustpilot users</p>
          </div>
        </div>

      </div>
    </section>
  );
}
