import { motion } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import { getSpells } from '../../../translations/data';
import './SpellsSection.css';

// Data moved to translations/data.ts

const SpellsSection = () => {
  const { t, language } = useLanguage();
  const spells = getSpells(language);

  return (
    <section id="spells" className="spells-section">
      <h2 className="section-title glitched">{t('spells_title')}</h2>
      <p className="section-subtitle">{t('spells_subtitle')}</p>
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
