import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound } from '../../../utils/audio';
import './FaqSection.css';

const faqs = [
  {
    id: 1,
    question: "How many revisions do I get?",
    answer: "Each tier includes a specific number of revisions. Novice gets 1, Master gets 3, and Grandmaster gets unlimited revisions to ensure the magic is exactly right."
  },
  {
    id: 2,
    question: "What software do you use to forge your edits?",
    answer: "I primarily wield Adobe Premiere Pro and After Effects for most video quests, supplemented with DaVinci Resolve for color grading enchantments."
  },
  {
    id: 3,
    question: "How long does a quest (video edit) take?",
    answer: "Delivery time varies by the quest complexity. Simple cuts take about 2-3 days, while heavy VFX or Grandmaster-level edits can take a week or more."
  },
  {
    id: 4,
    question: "How do I pay my bounty (payment method)?",
    answer: "I accept gold coins via Bank Transfer, PayPal, and major crypto scrolls. A 50% deposit is required before the quest begins."
  }
];

const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    playClickSound();
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <h2 className="section-title">Tome of Wisdom</h2>
      <p className="section-subtitle">Answers to the most frequently asked questions</p>
      
      <div className="faq-container">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item glass">
            <button 
              className={`faq-question ${openId === faq.id ? 'active' : ''}`}
              onClick={() => toggleAccordion(faq.id)}
            >
              <span>{faq.question}</span>
              <motion.span 
                className="faq-icon"
                animate={{ rotate: openId === faq.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </button>
            
            <AnimatePresence>
              {openId === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-answer-wrapper"
                >
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
