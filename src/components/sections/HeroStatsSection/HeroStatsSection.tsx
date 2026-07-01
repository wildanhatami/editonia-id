import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import './HeroStatsSection.css';

const AnimatedCounter = ({ value, label, prefix = '', suffix = '' }: { value: number, label: string, prefix?: string, suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: 3000
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  // Using a separate state to render the changing number
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    return springValue.onChange((latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number-wrapper">
        <span className="stat-prefix">{prefix}</span>
        <span className="stat-number" ref={displayRef}>0</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const HeroStatsSection = () => {
  return (
    <section className="hero-stats-section">
      <motion.div 
        className="stats-container glass"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <AnimatedCounter value={150} suffix="+" label="Quests Completed" />
        <div className="stat-divider" />
        <AnimatedCounter value={5000} suffix="+" label="Hours in the Forge" />
        <div className="stat-divider" />
        <AnimatedCounter value={45} suffix="+" label="Guilds Satisfied" />
      </motion.div>
    </section>
  );
};

export default HeroStatsSection;
