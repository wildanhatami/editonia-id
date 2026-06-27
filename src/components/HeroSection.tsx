import { useState } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
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
        <h1 className="main-title">
          <span className="text-purple">Wielding Video Magic</span>
          <br />
          <span className="text-pink">for Your Realm</span>
        </h1>
        <p className="subtitle">
          Professional Video Editing with an Isekai Twist.
        </p>

        <motion.button 
          className="quest-btn"
          onMouseEnter={() => setIsCharging(true)}
          onMouseLeave={() => setIsCharging(false)}
          onClick={() => {
            playClickSound();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
