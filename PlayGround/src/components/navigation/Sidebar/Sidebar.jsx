import { motion, AnimatePresence } from 'framer-motion';
import { useSidebar, useSectionNavigation } from '../../../context';
import { sections } from '../../../data';
import { slideInLeft, fadeIn, navStagger, fadeInLeft } from '../../../animations';
import styles from './Sidebar.module.css';

/**
 * Sidebar Component
 * Animated slide-out panel with navigation
 */
export const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();
  const { navigateToSection } = useSectionNavigation();

  const handleNavClick = (sectionId) => {
    navigateToSection(sectionId);
    closeSidebar();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.sidebarOverlay}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeSidebar}
          />

          {/* Sidebar Panel */}
          <motion.aside
            className={styles.sidebar}
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className={styles.sidebarHeader}>
              <motion.button
                className={styles.closeButton}
                onClick={closeSidebar}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close sidebar"
              >
                ✕
              </motion.button>
            </div>

            {/* Navigation List */}
            <motion.nav
              className={styles.navList}
              variants={navStagger}
              initial="hidden"
              animate="visible"
            >
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  className={styles.navItem}
                  onClick={() => handleNavClick(section.id)}
                  variants={fadeInLeft}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div 
                    className={styles.navItemIcon}
                    style={{ background: `${section.color}20` }}
                  >
                    <img src={section.icon} alt={section.title} className={styles.navItemIconImage} />
                  </div>
                  <div className={styles.navItemContent}>
                    <div className={styles.navItemTitle}>{section.title}</div>
                    <div className={styles.navItemDescription}>
                      {section.description}
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.nav>

            {/* Footer */}
            <div className={styles.sidebarFooter}>
              <p className={styles.footerText}>
                Made with <span className={styles.footerHeart}>♥</span> for fun
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
