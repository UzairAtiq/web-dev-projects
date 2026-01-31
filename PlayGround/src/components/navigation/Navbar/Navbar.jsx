import { motion } from 'framer-motion';
import { useSidebar, useSectionNavigation } from '../../../context';
import { useScrollPosition } from '../../../hooks';
import { cn } from '../../../utils';
import styles from './Navbar.module.css';
import LogoImage from '../../../assets/Logo.png';

/**
 * Navbar Component
 * Fixed top navigation with menu toggle and logo
 */
export const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const { isAtTop } = useScrollPosition();

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

      {/* Center - Logo */}
      <div className={styles.navbarCenter}>
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
          <img src={LogoImage} alt="Playground Logo" className={styles.logoImage} />
          <span className={styles.logoText}>Playground</span>
        </motion.a>
      </div>

      {/* Right - Empty for balance */}
      <div className={styles.navbarRight}>
      </div>
    </motion.nav>
  );
};
