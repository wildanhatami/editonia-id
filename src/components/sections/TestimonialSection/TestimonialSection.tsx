import { motion } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import { getTestimonials } from '../../../translations/data';
import './TestimonialSection.css';

// Data moved to translations/data.ts

const TestimonialSection = () => {
  const { t, language } = useLanguage();
  const testimonials = getTestimonials(language);

  return (
    <section className="testimonials-section">
      <h2 className="section-title glitched">{t('testi_title')}</h2>
      <p className="section-subtitle">{t('testi_subtitle')}</p>
      
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={testimonial.id}
            className="testimonial-card glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="stars">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star-icon">⭐</span>
              ))}
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">🧙‍♂️</div>
              <div>
                <div className="author-name">{testimonial.name}</div>
                <div className="author-role">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
