import { motion } from 'framer-motion';
import { playClickSound } from '../utils/audio';
import './SkillTreeSection.css';

const skills = [
  {
    id: 1,
    name: 'Adobe Premiere Pro',
    level: 'Lvl 99',
    rarity: 'Legendary',
    rarityColor: '#fbbf24', // Gold
    progress: 95
  },
  {
    id: 2,
    name: 'Adobe After Effects',
    level: 'Lvl 85',
    rarity: 'Epic',
    rarityColor: '#c084fc', // Purple
    progress: 80
  },
  {
    id: 3,
    name: 'DaVinci Resolve',
    level: 'Lvl 70',
    rarity: 'Rare',
    rarityColor: '#60a5fa', // Blue
    progress: 70
  },
  {
    id: 4,
    name: 'Adobe Photoshop',
    level: 'Lvl 90',
    rarity: 'Epic',
    rarityColor: '#c084fc', // Purple
    progress: 85
  }
];

const SkillTreeSection = () => {
  return (
    <section className="skilltree-section">
      <h2 className="section-title">Arcane Arsenal</h2>
      <p className="section-subtitle">The software spells in my inventory</p>
      
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.id}
            className="skill-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={playClickSound}
          >
            <div className="skill-header">
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">{skill.level}</div>
            </div>
            
            <div className="skill-rarity" style={{ color: skill.rarityColor, border: `1px solid ${skill.rarityColor}` }}>
              {skill.rarity}
            </div>

            <div className="exp-bar-container">
              <div className="exp-bar-bg">
                <motion.div 
                  className="exp-bar-fill"
                  style={{ background: skill.rarityColor }}
                  initial={{ width: '0%' }}
                  whileInView={{ width: `${skill.progress}%` }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                />
              </div>
              <div className="exp-text">EXP: {skill.progress}%</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillTreeSection;
