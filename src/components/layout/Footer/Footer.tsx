import logoImg from '../../../assets/logo.png';
import userIconImg from '../../../assets/icon-user.png';
import { useLanguage } from '../../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logoImg} alt="Editonia Logo" className="crystal-logo-small" />
          <div className="logo-text-footer">EDITONIA.ID</div>
        </div>
        
        <div className="footer-actions">
          <a href="#top" className="footer-link">
            <img src={userIconImg} alt="Wizard Profile" className="cat-icon-small" />
            {t('footer_top')}
          </a>
          <a href="https://wa.me/6289650866388" target="_blank" rel="noopener noreferrer" className="footer-link contact-link">
            {t('footer_contact')}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
