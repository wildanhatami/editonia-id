import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { useLanguage } from '../../../contexts/LanguageContext';
import { getPricingTiers } from '../../../translations/data';
import './PricelistSection.css';

// Data moved to translations/data.ts

const PricelistSection = () => {
  const { t, language } = useLanguage();
  const pricingTiers = getPricingTiers(language);

  return (
    <section id="pricelist" className="pricelist-section">
      <h2 className="section-title glitched">{t('price_title')}</h2>
      <p className="section-subtitle">{t('price_subtitle')}</p>
      <div className="pricelist-grid">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            className={`pricing-card glass ${tier.highlighted ? 'highlighted-card' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="tier-name">{tier.name}</h3>
            <div className="tier-price">{tier.price}</div>
            <ul className="tier-features">
              {tier.features.map((feature, i) => (
                <li key={i}><FaCheck className="check-icon" /> {feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricelistSection;
