import React from 'react';

export default function Newsletter() {
  return (
    <section className="w-full bg-[#f4f5f5] py-16 font-sans border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center relative overflow-hidden px-6">
        
        {/* Decorative graphic (Left side) */}
        <div className="w-full md:w-1/2 h-64 md:h-auto rounded-tl-3xl rounded-bl-3xl bg-blue-900 absolute left-0 top-0 bottom-0 overflow-hidden hidden md:block">
           <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-800 rounded-full mix-blend-multiply opacity-50 transform -translate-y-1/2"></div>
           <div className="absolute text-yellow-400 font-bold text-6xl bottom-10 left-10">LUXA</div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 md:ml-auto md:pl-20 py-10 z-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">It's good to be on the list.</h2>
          <p className="text-xl font-medium text-gray-900 mb-6">Get 15% off your order when you sign up for our emails</p>

          <form className="flex w-full mb-4 max-w-xl mx-auto md:mx-0">
            <input 
              type="email" 
              placeholder="Subscription email" 
              className="flex-1 border border-gray-400 rounded-l-lg py-3 px-4 focus:outline-none focus:border-black placeholder-gray-500"
            />
            <button 
              type="button" 
              className="bg-gray-200 text-gray-400 font-bold px-8 py-3 rounded-r-lg cursor-not-allowed border-t border-r border-b border-gray-300"
            >
              Submit
            </button>
          </form>

          <p className="text-xs text-gray-600 max-w-xl">
            Yes, I'd like to receive special offer emails from VistaPrint, as well as news about products, services and more. I can manage my preferences and unsubscribe at any time.
          </p>
        </div>
        
      </div>
    </section>
  );
}
