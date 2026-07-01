import { motion } from 'framer-motion';
import { useState } from 'react';
import { playClickSound } from '../../../utils/audio';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    questClass: 'video-editing',
    budget: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    // For now, redirect to a generic mailto link.
    const subject = `Quest Request: ${formData.questClass} from ${formData.name}`;
    const body = `Adventurer Name: ${formData.name}%0D%0AContact Scroll: ${formData.contact}%0D%0ABudget: ${formData.budget} Gold%0D%0A%0D%0AQuest Details:%0D%0A${formData.details}`;
    window.location.href = `mailto:hello@editonia.id?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div 
        className="quest-board glass"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="quest-board-header">
          <h2>Post a Quest</h2>
          <p>Seek the wizard's aid for your video editing needs.</p>
        </div>

        <form onSubmit={handleSubmit} className="quest-form">
          <div className="form-group">
            <label htmlFor="name">Adventurer Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="E.g., Kirito" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Scroll (Email/Discord)</label>
            <input 
              type="text" 
              id="contact" 
              name="contact" 
              placeholder="adventurer@guild.com" 
              value={formData.contact} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="questClass">Quest Class</label>
              <select 
                id="questClass" 
                name="questClass" 
                value={formData.questClass} 
                onChange={handleChange}
              >
                <option value="video-editing">Video Editing</option>
                <option value="vfx">VFX & Magic</option>
                <option value="motion-graphics">Motion Graphics</option>
                <option value="other">Other Magic</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="budget">Budget (Gold Coins)</label>
              <input 
                type="text" 
                id="budget" 
                name="budget" 
                placeholder="E.g., 500G or $500" 
                value={formData.budget} 
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="details">Quest Details</label>
            <textarea 
              id="details" 
              name="details" 
              rows={4} 
              placeholder="Describe the monster you need me to slay (project details)..." 
              value={formData.details} 
              onChange={handleChange} 
              required 
            />
          </div>

          <button type="submit" className="submit-quest-btn">
            Send to Guild
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
