import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiSend } from 'react-icons/fi';
import './Contact.css';

/**
 * Contact Component - Contact information and social links
 * Includes contact form and social media profiles
 */
const Contact = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub />,
      url: 'https://github.com/yourusername',
      color: '#333',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/in/yourusername',
      color: '#0077b5',
    },
    {
      name: 'Twitter',
      icon: <FiTwitter />,
      url: 'https://twitter.com/yourusername',
      color: '#1da1f2',
    },
    {
      name: 'Email',
      icon: <FiMail />,
      url: 'mailto:your.email@example.com',
      color: '#ea4335',
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend /> Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            className="contact-info"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="info-card">
              <h3>Let's Connect!</h3>
              <p>
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </p>

              <div className="contact-details">
                <div className="detail-item">
                  <FiMail className="detail-icon" />
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:your.email@example.com">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="detail-item">
                  <FiGithub className="detail-icon" />
                  <div>
                    <h4>GitHub</h4>
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @yourusername
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={link.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="contact-bg">
        <div className="bg-element element-1"></div>
        <div className="bg-element element-2"></div>
      </div>
    </section>
  );
};

export default Contact;
