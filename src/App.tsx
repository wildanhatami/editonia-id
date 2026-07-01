import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import HeroSection from './components/sections/HeroSection/HeroSection';
import HeroStatsSection from './components/sections/HeroStatsSection/HeroStatsSection';
import PortfolioGrid from './components/sections/PortfolioGrid/PortfolioGrid';
import SpellsSection from './components/sections/SpellsSection/SpellsSection';
import SkillTreeSection from './components/sections/SkillTreeSection/SkillTreeSection';
import TestimonialSection from './components/sections/TestimonialSection/TestimonialSection';
import PricelistSection from './components/sections/PricelistSection/PricelistSection';
import QuestSection from './components/sections/QuestSection/QuestSection';
import FaqSection from './components/sections/FaqSection/FaqSection';
import Footer from './components/layout/Footer/Footer';
import LoadingScreen from './components/ui/LoadingScreen/LoadingScreen';
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
      
      <div className="content-wrapper">
        <Navbar />
        <HeroSection />
        <HeroStatsSection />
        <PortfolioGrid />
        <SpellsSection />
        <SkillTreeSection />
        <TestimonialSection />
        <PricelistSection />
        <QuestSection />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
