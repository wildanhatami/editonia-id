import { motion } from 'framer-motion';
import './Background.css';

const Background = () => {
  return (
    <div className="background-elements">
      <div className="gradient-overlay" />

      {/* Sphere 1 (Large Pink/Blue) */}
      <motion.div 
        className="shape-3d sphere sphere-1"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Sphere 2 (Small Bright) */}
      <motion.div 
        className="shape-3d sphere sphere-2"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
      />

      {/* Block 1 (Floating cube-like) */}
      <motion.div 
        className="shape-3d block block-1"
        animate={{ y: [0, -40, 0], rotate: [20, 35, 20] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Block 2 (Long bar) */}
      <motion.div 
        className="shape-3d bar bar-1"
        animate={{ y: [0, 30, 0], rotate: [-15, -5, -15] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Central Glow */}
      <div className="central-glow" />
    </div>
  );
};

export default Background;
