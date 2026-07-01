import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClickSound } from '../../../utils/audio';
import { useLanguage } from '../../../contexts/LanguageContext';
import { getFaqs } from '../../../translations/data';
import './FaqSection.css';

// Data moved to translations/data.ts

const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const { t, language } = useLanguage();
  const faqs = getFaqs(language);

  const toggleAccordion = (id: number) => {
    playClickSound();
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <h2 className="section-title glitched">{t('faq_title')}</h2>
      <p className="section-subtitle">{t('faq_subtitle')}</p>
      
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
