import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CollapsibleSection.module.css';

/**
 * Collapsible Section Wrapper
 * Allows sections to be collapsed/expanded with beautiful animations
 */
const CollapsibleSection = forwardRef(({ 
  title, 
  icon, 
  gradient, 
  children, 
  defaultCollapsed = true,
  sectionId
}, ref) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  useImperativeHandle(ref, () => ({
    expand: () => setIsCollapsed(false),
    collapse: () => setIsCollapsed(true),
    toggle: () => setIsCollapsed(!isCollapsed),
  }));

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <motion.div
      id={sectionId}
      className={styles.wrapper}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className={styles.header}
        onClick={toggleCollapse}
        style={{ background: gradient }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className={styles.headerContent}>
          {typeof icon === 'string' && icon.startsWith('/') || icon.startsWith('data:') || icon.startsWith('http') ? (
            <img src={icon} alt={title} className={styles.iconImage} />
          ) : typeof icon === 'string' ? (
            <span className={styles.icon}>{icon}</span>
          ) : (
            <img src={icon} alt={title} className={styles.iconImage} />
          )}
          <motion.h2 
            className={styles.title}
            animate={isCollapsed ? {
              scale: [1, 1.03, 1],
              textShadow: [
                '0 2px 10px rgba(0, 0, 0, 0.3)',
                '0 4px 20px rgba(255, 255, 255, 0.5)',
                '0 2px 10px rgba(0, 0, 0, 0.3)'
              ]
            } : {
              scale: 1,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
            }}
            transition={isCollapsed ? {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            } : {
              duration: 0.3
            }}
          >
            {title}
          </motion.h2>
        </div>
        <motion.div
          className={styles.toggleIcon}
          animate={{ rotate: isCollapsed ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            className={styles.content}
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.2 }
              }
            }}
            style={{ overflow: 'hidden' }}
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

export default CollapsibleSection;
