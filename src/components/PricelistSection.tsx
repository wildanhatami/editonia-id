import { motion } from 'framer-motion';
import { playClickSound } from '../utils/audio';
import './PricelistSection.css';

const pricingTiers = [
  {
    id: 1,
    name: 'Novice Editor',
    price: '$50',
    features: ['Basic Cuts & Trims', 'Simple Transitions', '1 Revision', 'Delivery in 3 days'],
  },
  {
    id: 2,
    name: 'Master Wizard',
    price: '$150',
    features: ['Color Grading', 'Motion Graphics', 'Audio Mixing', '3 Revisions', 'Delivery in 5 days'],
    highlighted: true,
  },
  {
    id: 3,
    name: 'Grandmaster',
    price: '$300',
    features: ['Full VFX & 3D Elements', 'Custom Sound Design', 'Unlimited Revisions', 'Priority Support'],
  }
];

const PricelistSection = () => {
  return (
    <section id="pricelist" className="pricelist-section">
      <h2 className="section-title">Pricing & Quests</h2>
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
            {tier.highlighted && <div className="popular-badge">Most Popular</div>}
            <h3 className="tier-name">{tier.name}</h3>
            <div className="tier-price">{tier.price}</div>
            <ul className="tier-features">
              {tier.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button 
              className="summon-btn"
              onClick={() => {
                playClickSound();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Summon Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricelistSection;
