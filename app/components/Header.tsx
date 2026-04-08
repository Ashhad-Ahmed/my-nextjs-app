'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-premium-black/95 backdrop-blur-md border-b border-gold-500/20 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="EEBBP Logo" 
            width={120} 
            height={50} 
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="nav-link text-white text-sm font-medium">HOME</Link>
          <Link href="/about" className="nav-link text-white text-sm font-medium">ABOUT</Link>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-white text-sm font-medium group transition-colors hover:text-gold-500">
              <span>SERVICES</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 text-gold-500" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-premium-dark border border-gold-500/20 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl overflow-hidden backdrop-blur-xl">
              <Link href="/branding" className="block px-4 py-2 text-xs text-gray-300 hover:bg-gold-500 hover:text-premium-black transition-colors">BRANDING & IDENTITY</Link>
              <Link href="/print" className="block px-4 py-2 text-xs text-gray-300 hover:bg-gold-500 hover:text-premium-black transition-colors">PRINT SOLUTIONS</Link>
              <Link href="/apparel" className="block px-4 py-2 text-xs text-gray-300 hover:bg-gold-500 hover:text-premium-black transition-colors">CUSTOM APPAREL</Link>
              <Link href="/publishing" className="block px-4 py-2 text-xs text-gray-300 hover:bg-gold-500 hover:text-premium-black transition-colors">PUBLISHING & DESIGN</Link>
            </div>
          </div>
          <Link href="/portfolio" className="nav-link text-white text-sm font-medium">PORTFOLIO</Link>
          <Link href="/shop" className="nav-link text-white text-sm font-medium">SHOP</Link>
          <Link href="/contact" className="nav-link text-white text-sm font-medium">CONTACT</Link>
          <Link href="/blog" className="nav-link text-white text-sm font-medium">BLOG</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <button className="text-gold-500 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <div className="relative">
            <button className="text-gold-500 hover:text-white transition-colors">
              <ShoppingCart size={20} />
            </button>
            <span className="absolute -top-2 -right-2 bg-gold-500 text-premium-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
          </div>
          <Link 
            href="/quote" 
            className="hidden sm:block px-6 py-2.5 bg-gold-500 text-premium-black text-xs font-bold rounded hover:bg-white hover:shadow-[0_0_20px_rgba(230,184,0,0.5)] transition-all duration-300 uppercase tracking-wider"
          >
            Request a Quote
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-gold-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[72px] bg-premium-black/95 backdrop-blur-xl transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-10">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white hover:text-gold-500 transition-colors">HOME</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white hover:text-gold-500 transition-colors">ABOUT</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white hover:text-gold-500 transition-colors">SERVICES</Link>
          <Link href="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white hover:text-gold-500 transition-colors">PORTFOLIO</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white hover:text-gold-500 transition-colors">CONTACT</Link>
          <Link 
            href="/quote" 
            onClick={() => setIsMenuOpen(false)}
            className="px-8 py-3 bg-gold-500 text-premium-black font-bold rounded-lg"
          >
            REQUEST A QUOTE
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
