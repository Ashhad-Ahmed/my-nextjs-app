import React from 'react';

export default function PromoBlocks() {
  return (
    <section className="w-full py-6 md:py-12 bg-white font-sans">
      <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
        
        {/* Left Block: Launch your new business */}
        <div className="flex-1 relative bg-[#E1D1CA] overflow-hidden flex items-center justify-center group cursor-pointer mb-2 md:mb-0 md:mr-1">
          {/* Abstract Placeholder background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#E1D1CA] to-[#F1E9E4] z-0"></div>
          <div className="absolute left-10 bottom-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply opacity-20 group-hover:scale-110 transition-transform duration-700"></div>

          <div className="relative z-10 w-full p-8 md:p-12 flex h-full items-center">
            <div className="bg-[#F8F7F3] rounded-2xl p-8 max-w-sm shadow-xl">
              <p className="text-sm text-gray-600 mb-2">Launch your new business</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">You dream it, we help you start it</h2>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                We've got all the tools and products you need to start up your business – plus get 20% off your first order.
              </p>
              <p className="font-bold mb-6">Code: NEW20</p>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                Get started
              </button>
            </div>
          </div>
        </div>

        {/* Right Block: Free AI Logomaker */}
        <div className="flex-1 relative bg-[#ADD5F5] overflow-hidden flex items-center justify-center group cursor-pointer mt-2 md:mt-0 md:ml-1">
           {/* Abstract Placeholder background */}
           <div className="absolute inset-0 bg-gradient-to-tr from-[#ADD5F5] to-[#D5EBF9] z-0"></div>
           <div className="absolute right-10 top-10 w-72 h-72 bg-brand-blue rounded-full mix-blend-multiply opacity-20 group-hover:scale-110 transition-transform duration-700"></div>

          <div className="relative z-10 w-full p-8 md:p-12 flex h-full items-center justify-start md:justify-end">
            <div className="bg-[#F8F7F3] rounded-2xl p-8 max-w-sm shadow-xl mr-auto md:ml-10">
              <p className="text-sm text-gray-600 mb-2">Free AI Logomaker</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">Turn any idea into your dream logo, instantly.</h2>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                Create your free AI logo and print it on business cards, t-shirts or vibrant stickers starting at $10.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                Create your free logo
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
