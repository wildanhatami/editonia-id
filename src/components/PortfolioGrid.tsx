import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { playClickSound } from '../utils/audio';
import './PortfolioGrid.css';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
};

const portfolioItems: Project[] = [
  { id: 1, title: "Dragon's Breath Intro", category: "Isekai Character", description: "A fiery, magical intro sequence fit for a dragon tamer." },
  { id: 2, title: "YouTube Intro Clip", category: "YouTube Intro", description: "High-energy 8-bit style intro for gaming streams." },
  { id: 3, title: "Commercial Spot", category: "YouTube Intro", description: "A cinematic teaser for a new fantasy game release." },
  { id: 4, title: "Magic Duel VFX", category: "VFX & Magic", description: "Added spell-casting effects and glowing auras to a live-action duel." },
  { id: 5, title: "Tavern Ambience", category: "Motion Graphics", description: "Looping tavern background with animated fire and patrons." },
  { id: 6, title: "Guild Recruitment", category: "Commercial", description: "Fast-paced montage to recruit new members to the guild." },
  { id: 7, title: "Level Up Animation", category: "Motion Graphics", description: "Custom level-up screen with particle explosions." },
  { id: 8, title: "Boss Fight Montage", category: "YouTube Intro", description: "Synced edits to an epic boss fight soundtrack." },
];

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

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  const openModal = (project: Project) => {
    playClickSound();
    setSelectedProject(project);
  };

  const closeModal = () => {
    playClickSound();
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">Portfolio Grimoire</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <VideoCard key={item.id} item={item} onClick={() => openModal(item)} />
        ))}
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
