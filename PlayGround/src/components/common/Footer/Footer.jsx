import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../../../hooks';
import { scrollToSection } from '../../../utils';
import { sections } from '../../../data';
import { fadeInUp } from '../../../animations';
import styles from './Footer.module.css';

/**
 * Footer Component
 * Site footer with navigation and scroll-to-top button
 */
export const Footer = () => {
  const { isAtTop } = useScrollPosition();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  return (
    <>
      <footer className={styles.footer}>
        <motion.div 
          className={styles.footerContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {/* Logo */}
          <motion.div className={styles.footerLogo} variants={fadeInUp}>
            <span className={styles.footerLogoIcon}>🎮</span>
            <span className={styles.footerLogoText}>Playground</span>
          </motion.div>

          {/* Tagline */}
          <motion.p className={styles.footerTagline} variants={fadeInUp}>
            A personal sandbox for experiments, creativity, and endless fun. 
            Built with love for exploration.
          </motion.p>

          {/* Navigation */}
          <motion.nav className={styles.footerNav} variants={fadeInUp}>
            {sections.map((section) => (
              <button
                key={section.id}
                className={styles.footerNavLink}
                onClick={() => handleNavClick(section.id)}
              >
                {section.emoji} {section.shortTitle}
              </button>
            ))}
          </motion.nav>

          <motion.div className={styles.footerDivider} variants={fadeInUp} />

          {/* Bottom */}
          <motion.div className={styles.footerBottom} variants={fadeInUp}>
            <p className={styles.footerCopyright}>
              Made with <span className={styles.footerHeart}>♥</span> for fun
            </p>
            <div className={styles.footerTech}>
              <span className={styles.footerTechItem}>⚛️ React</span>
              <span className={styles.footerTechItem}>⚡ Vite</span>
              <span className={styles.footerTechItem}>🎭 Framer Motion</span>
            </div>
          </motion.div>
        </motion.div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {!isAtTop && (
          <motion.button
            className={`${styles.scrollTopButton} ${!isAtTop ? styles.scrollTopButtonVisible : ''}`}
            onClick={handleScrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
