import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import './HeroSection.css';

const HeroSection = () => {
  const { t } = useLanguage();
  const [isCharging, setIsCharging] = useState(false);

  const playClickSound = () => {
    // In a real app, this would be an actual Audio object
    // const audio = new Audio('/sounds/8bit-click.mp3');
    // audio.play();
    console.log("Play 8-bit sound");
  };

  return (
    <section className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >

        <div className="stars-decor">
          <span className="star star-1">✨</span>
          <span className="star star-2">✨</span>
        </div>
        <h1 className="hero-title pixel-text glitched">
          {t('hero_title')}
        </h1>
        <p className="hero-subtitle">
          {t('hero_subtitle')}
        </p>

        <div className="hero-buttons">
          <a href="#quests" className="btn-primary">
            {t('hero_btn_start')}
          </a>
        </div>

        <motion.a 
          href="https://wa.me/6289650866388"
          target="_blank"
          rel="noopener noreferrer"
          className="quest-btn"
          style={{ textDecoration: 'none', display: 'inline-block' }}
          onMouseEnter={() => setIsCharging(true)}
          onMouseLeave={() => setIsCharging(false)}
          onClick={() => {
            playClickSound();
          }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="btn-content">START YOUR EDIT QUEST</div>
          {/* Mana bar effect */}
          <motion.div 
            className="mana-bar"
            initial={{ width: '0%' }}
            animate={{ width: isCharging ? '100%' : '0%' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
