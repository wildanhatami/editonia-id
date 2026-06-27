import logoImg from '../assets/logo.png';
import userIconImg from '../assets/icon-user.png';
import './Footer.css';

const Footer = () => {
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
            Back to Top
          </a>
          <a href="#contact" className="footer-link contact-link">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
