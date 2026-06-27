import { motion } from 'framer-motion';
import './TestimonialSection.css';

const testimonials = [
  {
    id: 1,
    name: 'Arthur Pendragon',
    role: 'Guild Master',
    rating: 5,
    text: '"The visual effects added to my quest logs were nothing short of legendary. Truly magical video editing!"'
  },
  {
    id: 2,
    name: 'Elara Moonwhisper',
    role: 'Elf Ranger',
    rating: 5,
    text: '"Fast delivery and crisp cuts! The pacing of my archery montage was perfect. Highly recommended to any adventurer."'
  },
  {
    id: 3,
    name: 'Kaelen',
    role: 'Rogue Streamer',
    rating: 5,
    text: '"Editonia brought my stream highlights to life! The motion graphics are top-tier and the transitions are seamless."'
  }
];

const TestimonialSection = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">Tavern Whispers</h2>
      <p className="section-subtitle">What other adventurers say about our magic</p>
      
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
