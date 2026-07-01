import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../../../contexts/LanguageContext';
import { getPortfolioItems } from '../../../translations/data';
import './PortfolioGrid.css';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
};

// Data moved to translations/data.ts

const VideoCard = ({ item, onClick }: { item: Project; onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="video-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className={`video-thumbnail ${isHovered ? 'glowing-border' : ''}`}>
        <div className="thumbnail-placeholder" />
        <div className="play-button-container">
          <FaPlay className={`play-icon ${isHovered ? 'play-icon-active' : ''}`} />
        </div>
        {isHovered && <div className="running-glow" />}
      </div>
      
      <div className="card-info">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-category">{item.category}</p>
      </div>
    </motion.div>
  );
};

const PortfolioGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, language } = useLanguage();
  const portfolioItems = getPortfolioItems(language);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title glitched">{t('portfolio_title')}</h2>
      <div className={`portfolio-grid ${!isExpanded ? 'mobile-collapsed' : 'mobile-expanded'}`}>
        {portfolioItems.map((item) => (
          <VideoCard key={item.id} item={item} onClick={() => openModal(item)} />
        ))}
      </div>

      <div className="show-more-container">
        {!isExpanded ? (
          <button className="show-more-btn" onClick={() => setIsExpanded(true)}>
            {t('portfolio_btn_show')}
          </button>
        ) : (
          <button className="show-more-btn hide-btn" onClick={() => setIsExpanded(false)}>
            {t('portfolio_btn_hide')}
          </button>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <motion.div 
              className="modal-content glass"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the card
            >
              <button className="close-btn" onClick={closeModal}>
                <FaTimes />
              </button>
              
              <div className="modal-video-placeholder">
                <FaPlay className="modal-play-icon" />
                <span>Video Preview Unavailable in Tome</span>
              </div>
              
              <div className="modal-info">
                <div className="modal-badge">Quest Completed</div>
                <h2>{selectedProject.title}</h2>
                <div className="modal-category">{selectedProject.category}</div>
                <p>{selectedProject.description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGrid;
