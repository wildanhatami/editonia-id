import { motion } from 'framer-motion';
import { useState } from 'react';
import { playClickSound } from '../../../utils/audio';
import { useLanguage } from '../../../contexts/LanguageContext';
import './ContactSection.css';

const ContactSection = () => {
  const { t, language } = useLanguage();
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
          <h2>{t('contact_title')}</h2>
          <p>{t('contact_sub')}</p>
        </div>

        <form onSubmit={handleSubmit} className="quest-form">
          <div className="form-group">
            <label htmlFor="name">{t('contact_name')}</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder={t('contact_name_ph')} 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">{t('contact_contact')}</label>
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
              <label htmlFor="questClass">{t('contact_class')}</label>
              <select 
                id="questClass" 
                name="questClass" 
                value={formData.questClass} 
                onChange={handleChange}
              >
                <option value="video-editing">{language === 'id' ? 'Video Editing' : 'Video Editing'}</option>
                <option value="vfx">{language === 'id' ? 'VFX & Sihir' : 'VFX & Magic'}</option>
                <option value="motion-graphics">{language === 'id' ? 'Motion Graphics' : 'Motion Graphics'}</option>
                <option value="other">{language === 'id' ? 'Sihir Lainnya' : 'Other Magic'}</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="budget">{t('contact_budget')}</label>
              <input 
                type="text" 
                id="budget" 
                name="budget" 
                placeholder={t('contact_budget_ph')} 
                value={formData.budget} 
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="details">{t('contact_details')}</label>
            <textarea 
              id="details" 
              name="details" 
              rows={4} 
              placeholder={t('contact_details_ph')} 
              value={formData.details} 
              onChange={handleChange} 
              required 
            />
          </div>

          <button type="submit" className="submit-quest-btn">
            {t('contact_btn')}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
