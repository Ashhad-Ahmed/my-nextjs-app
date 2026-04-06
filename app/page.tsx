import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import Collections from './components/Collections';
import PromoBlocks from './components/PromoBlocks';
import NewArrivals from './components/NewArrivals';
import ToolsSection from './components/ToolsSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Categories />
      <Collections />
      <PromoBlocks />
      <NewArrivals />
      <ToolsSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
