import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound } from '../utils/audio';
import './LoadingScreen.css';

const LoadingScreen = ({ onEnter }: { onEnter: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    if (!isLoaded) return;
    playClickSound();
    setIsVisible(false);
    setTimeout(() => {
      onEnter();
    }, 800); // Wait for slide up animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="loading-screen"
          initial={{ y: 0 }}
          exit={{ y: '-100vh' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="loading-content">
            {!isLoaded ? (
              <div className="loading-phase">
                <h1 className="loading-text">NOW LOADING...</h1>
                <div className="loading-bar-container">
                  <motion.div 
                    className="loading-bar-fill"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, ease: "linear" }}
                  />
                </div>
              </div>
            ) : (
              <div className="start-phase">
                <button className="press-start-btn" onClick={handleStart}>
                  PRESS START TO ENTER REALM
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
