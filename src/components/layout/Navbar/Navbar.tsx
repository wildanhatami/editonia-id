import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImg from '../../../assets/logo.png';
import userIconImg from '../../../assets/icon-user.png';
import './Navbar.css';

const Navbar = () => {
  const [isHoveringCat, setIsHoveringCat] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
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
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#portfolio" className="nav-link" onClick={closeMobileMenu}>
            <span className="nav-link-title">PORTFOLIO</span>
          </a>
          <a href="#spells" className="nav-link" onClick={closeMobileMenu}>
            <span className="nav-link-title">SPELLS</span>
            <span className="nav-link-sub">(Services)</span>
          </a>
          <a href="#pricelist" className="nav-link" onClick={closeMobileMenu}>
            <span className="nav-link-title">PRICELIST</span>
            <span className="nav-link-sub">(Tiers)</span>
          </a>
          <a href="#quests" className="nav-link" onClick={closeMobileMenu}>
            <span className="nav-link-title">QUESTS</span>
            <span className="nav-link-sub">(About)</span>
          </a>
          <a href="https://wa.me/6289650866388" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={closeMobileMenu}>
            <span className="nav-link-title">SUMMON US</span>
            <span className="nav-link-sub">(Contact)</span>
          </a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div 
        className="user-profile"
        onMouseEnter={() => setIsHoveringCat(true)}
        onMouseLeave={() => setIsHoveringCat(false)}
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
    </nav>
    </>
  );
};

export default Navbar;
