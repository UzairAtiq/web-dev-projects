import { motion, AnimatePresence } from 'framer-motion';
import styles from './Loader.module.css';

/**
 * Loader Component
 * Full-screen loading animation
 */
export const Loader = ({ isLoading = true, onComplete }) => {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isLoading && (
        <motion.div
          className={styles.loader}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: 'easeInOut' }
          }}
        >
          <motion.div 
            className={styles.loaderContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.loaderIcon}>🎮</span>
            <span className={styles.loaderText}>Loading Playground</span>
            <div className={styles.loaderBar}>
              <div className={styles.loaderProgress} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/**
 * LoaderDots Component
 * Simple dots loading indicator
 */
export const LoaderDots = () => {
  return (
    <div className={styles.loaderDots}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
};
