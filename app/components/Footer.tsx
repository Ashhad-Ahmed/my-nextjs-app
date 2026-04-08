import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-premium-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo and Contact */}
          <div className="space-y-8">
            <Image src="/logoo.png" alt="EEBBP" width={180} height={80} className="object-contain" />
            <div className="space-y-4">
              <a href="tel:4078836545" className="flex items-center space-x-4 text-gray-400 hover:text-gold-500 transition-colors group">
                <Phone size={18} className="text-gold-500" />
                <span className="text-sm">407-883-6545</span>
              </a>
              <a href="mailto:info@ebbp.com" className="flex items-center space-x-4 text-gray-400 hover:text-gold-500 transition-colors group">
                <Mail size={18} className="text-gold-500" />
                <span className="text-sm">order.ebbp@gmail.com</span>
              </a>
              <div className="flex items-center space-x-4 text-gray-400 group">
                <MapPin size={18} className="text-gold-500" />
                <span className="text-sm">Orlando, FL</span>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-sm">Useful Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Services</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Blog</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-sm">Social Media</h4>
            <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-300">
                    <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-300">
                    <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-300">
                    <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-gold-500/20 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-300">
                    <Youtube size={18} />
                </a>
            </div>
          </div>

          {/* JOIN THE ELITE / Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-sm">Join the Elite</h4>
            <p className="text-gray-400 text-xs mb-6 uppercase tracking-widest font-bold">Sign up to branding our newsletter</p>
            <form className="relative mb-8">
                <input 
                    type="email" 
                    placeholder="Enter your email..." 
                    className="w-full bg-premium-dark border border-white/10 rounded px-4 py-3 text-white text-xs focus:border-gold-500 outline-none transition-colors"
                />
                <button className="absolute right-1 top-1 bottom-1 px-4 bg-gold-500 text-premium-black rounded hover:bg-white transition-colors">
                    <ChevronDown size={14} className="-rotate-90 text-premium-black" />
                </button>
            </form>
            {/* Payment Icons Placeholder matching design */}
            <div className="flex items-center space-x-2 pt-2 grayscale opacity-50">
                <div className="px-2 py-1 bg-white rounded text-[10px] font-bold text-blue-900 italic">VISA</div>
                <div className="px-2 py-1 bg-white rounded flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-600"></div>
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                </div>
                <div className="px-2 py-1 bg-white rounded text-[10px] font-bold text-blue-600">PayPal</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase">
                © 2022 EEBBP Identity - Privacy Reserved
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
