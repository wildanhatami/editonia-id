import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImg from '../../../assets/logo.png';
import userIconImg from '../../../assets/icon-user.png';
import { useLanguage } from '../../../contexts/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
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
            <span className="nav-link-title">{t('nav_portfolio')}</span>
          </a>
          <a href="#spells" className="nav-link" onClick={closeMobileMenu}>
            <span className="nav-link-title">{t('nav_spells')}</span>
            <span className="nav-link-sub">{t('nav_spells_sub')}</span>
          </a>
          <a href="#pricelist" className="nav-link" onClick={closeMobileMenu}>
            <span className="nav-link-title">{t('nav_pricelist')}</span>
            <span className="nav-link-sub">{t('nav_pricelist_sub')}</span>
          </a>
          <a href="#quests" className="nav-link" onClick={closeMobileMenu}>
            <span className="nav-link-title">{t('nav_quests')}</span>
            <span className="nav-link-sub">{t('nav_quests_sub')}</span>
          </a>
          <a href="https://wa.me/6289650866388" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={closeMobileMenu}>
            <span className="nav-link-title">{t('nav_summon')}</span>
            <span className="nav-link-sub">{t('nav_summon_sub')}</span>
          </a>
        </div>

        <button 
          className="lang-toggle-btn" 
          onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
        >
          {language === 'en' ? 'ID' : 'EN'}
        </button>

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
        <div className="wizard-label">{t('nav_profile')}</div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
