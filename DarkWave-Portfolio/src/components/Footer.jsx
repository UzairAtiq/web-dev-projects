import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

/**
 * Footer Component - Bottom section with social links and copyright
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub />,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Email',
      icon: <FiMail />,
      url: 'mailto:your.email@example.com',
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-bracket">{'<'}</span>
          Uzair
          <span className="logo-bracket">{'/>'}</span>
        </div>

        <div className="footer-social">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="footer-text">
          <p>
            Designed & Built with <FiHeart className="heart-icon" /> by Uzair
          </p>
          <p className="copyright">© {currentYear} All rights reserved.</p>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="footer-gradient"></div>
    </footer>
  );
};

export default Footer;
