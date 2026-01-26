import { motion, AnimatePresence } from 'framer-motion';
import { useSidebar, useFavoritesContext } from '../../../context';
import { useScrollPosition } from '../../../hooks';
import { scrollToSection, cn } from '../../../utils';
import { popIn, fadeIn } from '../../../animations';
import styles from './Navbar.module.css';

/**
 * Navbar Component
 * Fixed top navigation with menu toggle, favorites, and logo
 */
export const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const { getFavoriteSections, removeFavorite } = useFavoritesContext();
  const { isAtTop } = useScrollPosition();

  const favoriteSections = getFavoriteSections();

  const handleFavoriteClick = (sectionId, e) => {
    // If clicking the remove button, don't scroll
    if (e.target.closest(`.${styles.favoritePillRemove}`)) {
      return;
    }
    scrollToSection(sectionId);
  };

  const handleRemoveFavorite = (e, sectionId) => {
    e.stopPropagation();
    removeFavorite(sectionId);
  };

  return (
    <motion.nav
      className={cn(styles.navbar, !isAtTop && styles.navbarScrolled)}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Left - Menu Toggle */}
      <div className={styles.navbarLeft}>
        <motion.button
          className={styles.menuToggle}
          onClick={toggleSidebar}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <div className={cn(styles.hamburger, isOpen && styles.hamburgerOpen)}>
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </div>
        </motion.button>
      </div>

      {/* Center - Favorites */}
      <div className={styles.navbarCenter}>
        <motion.div 
          className={styles.favoritesContainer}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {favoriteSections.length > 0 ? (
              favoriteSections.map((section) => (
                <motion.button
                  key={section.id}
                  className={styles.favoritePill}
                  onClick={(e) => handleFavoriteClick(section.id, e)}
                  variants={popIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  layoutId={`favorite-${section.id}`}
                  style={{
                    '--pill-color': section.color,
                  }}
                >
                  <span className={styles.favoritePillIcon}>{section.emoji}</span>
                  <span>{section.shortTitle}</span>
                  <span 
                    className={styles.favoritePillRemove}
                    onClick={(e) => handleRemoveFavorite(e, section.id)}
                    role="button"
                    aria-label={`Remove ${section.title} from favorites`}
                  >
                    ✕
                  </span>
                </motion.button>
              ))
            ) : (
              <motion.span 
                className={styles.emptyFavorites}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
              >
                ⭐ Add favorites from sidebar
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Right - Logo */}
      <div className={styles.navbarRight}>
        <motion.a
          href="#"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={styles.logoIcon}>🎮</span>
          <span className={styles.logoText}>Playground</span>
        </motion.a>
      </div>
    </motion.nav>
  );
};
