import { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeroStatsSection from './components/HeroStatsSection';
import PortfolioGrid from './components/PortfolioGrid';
import SpellsSection from './components/SpellsSection';
import SkillTreeSection from './components/SkillTreeSection';
import TestimonialSection from './components/TestimonialSection';
import PricelistSection from './components/PricelistSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Background from './components/Background';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  // Prevent scrolling when loading screen is active
  useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [hasEntered]);

  return (
    <div className="app-container" id="top">
      {!hasEntered && <LoadingScreen onEnter={() => setHasEntered(true)} />}
      
      <Background />
      <Cursor />
      
      <div className="content-wrapper">
        <Navbar />
        <HeroSection />
        <HeroStatsSection />
        <PortfolioGrid />
        <SpellsSection />
        <SkillTreeSection />
        <TestimonialSection />
        <PricelistSection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
