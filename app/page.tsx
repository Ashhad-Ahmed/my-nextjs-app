'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import CoreServices from './components/CoreServices';
import Community from './components/Community';
import Portfolio from './components/Portfolio';
import LatestBlog from './components/LatestBlog';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-premium-black selection:bg-gold-500 selection:text-premium-black">
      <Header />
      <Hero />
      <CoreServices />
      <Community />
      <Portfolio />
      <LatestBlog />
      <Footer />
    </main>
  );
}
