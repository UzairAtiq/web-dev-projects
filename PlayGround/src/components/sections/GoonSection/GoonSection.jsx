import { motion } from 'framer-motion';
import styles from './GoonSection.module.css';

/**
 * Goon Section
 * Placeholder for future features
 */
export const GoonSection = () => {
  return (
    <div className={styles.section}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.rocket}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          🚀
        </motion.div>

        <h2 className={styles.title}>Goon Section</h2>
        <p className={styles.subtitle}>Something amazing is coming soon...</p>

        <div className={styles.placeholder}>
          <motion.div
            className={styles.dot}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className={styles.dot}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div
            className={styles.dot}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
        </div>

        <motion.div
          className={styles.message}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>This space is reserved for something special.</p>
          <p>Stay tuned for updates!</p>
        </motion.div>
      </motion.div>

      <div className={styles.decorations}>
        <motion.div
          className={styles.star}
          style={{ top: '10%', left: '15%' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ⭐
        </motion.div>
        <motion.div
          className={styles.star}
          style={{ top: '70%', right: '20%' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          ✨
        </motion.div>
        <motion.div
          className={styles.star}
          style={{ bottom: '20%', left: '25%' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        >
          💫
        </motion.div>
      </div>
    </div>
  );
};

export default GoonSection;
