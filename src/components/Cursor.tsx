import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Cursor.css';

interface Trail {
  id: number;
  x: number;
  y: number;
}

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Trail[]>([]);

  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Add a new trail particle
      setTrail((prev) => [
        ...prev.slice(-10), // Keep max 10 particles
        { id: Date.now(), x: e.clientX, y: e.clientY }
      ]);
    };

    window.addEventListener('mousemove', updateMousePos);
    return () => window.removeEventListener('mousemove', updateMousePos);
  }, []);

  return (
    <>
      <div 
        className="custom-cursor"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />
      <AnimatePresence>
        {trail.map((t) => (
          <motion.div
            key={t.id}
            className="mana-dust"
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ left: `${t.x}px`, top: `${t.y}px` }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default Cursor;
