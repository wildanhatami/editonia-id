import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';
import userIconImg from '../assets/icon-user.png';
import bgmFile from '../assets/bgm.mp3';
import { playClickSound, playAchievementSound } from '../utils/audio';
import './Navbar.css';

const Navbar = () => {
  const [isHoveringCat, setIsHoveringCat] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    playClickSound();
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const handleProfileClick = () => {
    if (showAchievement) return;
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount === 5) {
      playAchievementSound();
      setShowAchievement(true);
      // Hide achievement after 5 seconds
      setTimeout(() => {
        setShowAchievement(false);
        setClickCount(0); // Reset for replayability
      }, 5000);
    } else {
      playClickSound(); // Normal click sound
    }
  };

  return (
    <>
      {/* Easter Egg Achievement Banner */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div 
            className="achievement-banner glass"
            initial={{ x: "-50%", y: -100, opacity: 0 }}
            animate={{ x: "-50%", y: 20, opacity: 1 }}
            exit={{ x: "-50%", y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="achievement-icon">🏆</div>
            <div className="achievement-text">
              <h4>Achievement Unlocked!</h4>
              <p>The Curious Adventurer</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="navbar">
      <div className="logo-container">
        <motion.div 
          className="logo-icon"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <img src={logoImg} alt="Editonia Logo" className="crystal-logo-img" />
        </motion.div>
        <div className="logo-text">EDITONIA.ID</div>
      </div>

      <div className="nav-actions">
        <button className="music-toggle-btn" onClick={toggleMusic} title="Toggle BGM">
          {isMusicPlaying ? '🔊' : '🔇'}
        </button>

        <div className="nav-links">
          <a href="#portfolio" className="nav-link">
            <span className="nav-link-title">PORTFOLIO</span>
          </a>
          <a href="#spells" className="nav-link">
            <span className="nav-link-title">SPELLS</span>
            <span className="nav-link-sub">(Services)</span>
          </a>
          <a href="#pricelist" className="nav-link">
            <span className="nav-link-title">PRICELIST</span>
            <span className="nav-link-sub">(Tiers)</span>
          </a>
          <a href="#quests" className="nav-link">
            <span className="nav-link-title">QUESTS</span>
            <span className="nav-link-sub">(About)</span>
          </a>
          <a href="#summon" className="nav-link">
            <span className="nav-link-title">SUMMON US</span>
            <span className="nav-link-sub">(Contact)</span>
          </a>
        </div>
      </div>

      <div 
        className="wizard-profile"
        onMouseEnter={() => setIsHoveringCat(true)}
        onMouseLeave={() => setIsHoveringCat(false)}
        onClick={handleProfileClick}
        style={{ cursor: 'pointer' }}
      >
        <div className="cat-icon-container">
          <motion.div 
            className="cat-placeholder"
            animate={isHoveringCat ? { y: -5, scale: 1.1 } : { y: 0, scale: 1 }}
          >
            <img src={userIconImg} alt="Wizard Profile" className="user-icon-img" />
          </motion.div>
          {isHoveringCat && (
            <motion.div 
              className="sparkles"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✨✨
            </motion.div>
          )}
        </div>
        <div className="wizard-label">WIZARD PROFILE</div>
      </div>

      {/* Hidden audio element for background music */}
      <audio ref={audioRef} src={bgmFile} loop />
    </nav>
    </>
  );
};

export default Navbar;
