import { motion, AnimatePresence } from 'framer-motion';
import { useSidebar, useFavoritesContext } from '../../../context';
import { sections } from '../../../data';
import { scrollToSection, cn } from '../../../utils';
import { slideInLeft, fadeIn, navStagger, fadeInLeft } from '../../../animations';
import styles from './Sidebar.module.css';

/**
 * Sidebar Component
 * Animated slide-out panel with navigation and favorite management
 */
export const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();
  const { toggleFavorite, isFavorite, canAddFavorite } = useFavoritesContext();

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    closeSidebar();
  };

  const handleFavoriteClick = (e, sectionId) => {
    e.stopPropagation();
    if (!isFavorite(sectionId) && !canAddFavorite) {
      // Could show a toast here
      return;
    }
    toggleFavorite(sectionId);
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
              <div className={styles.sidebarTitle}>
                <span className={styles.sidebarTitleIcon}>🧭</span>
                <span>Navigate</span>
              </div>
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
                    {section.emoji}
                  </div>
                  <div className={styles.navItemContent}>
                    <div className={styles.navItemTitle}>{section.title}</div>
                    <div className={styles.navItemDescription}>
                      {section.description}
                    </div>
                  </div>
                  <motion.button
                    className={cn(
                      styles.favoriteButton,
                      isFavorite(section.id) && styles.favoriteButtonActive
                    )}
                    onClick={(e) => handleFavoriteClick(e, section.id)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={
                      isFavorite(section.id)
                        ? `Remove ${section.title} from favorites`
                        : `Add ${section.title} to favorites`
                    }
                  >
                    {isFavorite(section.id) ? '★' : '☆'}
                  </motion.button>
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
