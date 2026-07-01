import { motion } from 'framer-motion';
import './SpellsSection.css';

const spells = [
  { id: 1, title: 'Mana Manipulation', subtitle: '(Color Grading)' },
  { id: 2, title: 'Chronos Control', subtitle: '(Quick Cuts)' },
  { id: 3, title: 'Reality Alteration', subtitle: '(VFX & Motion Graphics)' },
];

const SpellsSection = () => {
  return (
    <section id="spells" className="spells-section">
      <h2 className="section-title">SPELLS (Services)</h2>
      <div className="spells-grid">
        {spells.map((spell, index) => (
          <motion.div
            key={spell.id}
            className="spell-card glass pixel-border"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="spell-title">{spell.title}</h3>
            <p className="spell-subtitle">{spell.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpellsSection;
