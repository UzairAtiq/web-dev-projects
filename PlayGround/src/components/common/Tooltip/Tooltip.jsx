import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../../utils';
import styles from './Tooltip.module.css';

/**
 * Tooltip variants for animation
 */
const tooltipVariants = {
  top: {
    initial: { opacity: 0, y: 8, x: '-50%' },
    animate: { opacity: 1, y: 0, x: '-50%' },
    exit: { opacity: 0, y: 8, x: '-50%' },
  },
  bottom: {
    initial: { opacity: 0, y: -8, x: '-50%' },
    animate: { opacity: 1, y: 0, x: '-50%' },
    exit: { opacity: 0, y: -8, x: '-50%' },
  },
  left: {
    initial: { opacity: 0, x: 8, y: '-50%' },
    animate: { opacity: 1, x: 0, y: '-50%' },
    exit: { opacity: 0, x: 8, y: '-50%' },
  },
  right: {
    initial: { opacity: 0, x: -8, y: '-50%' },
    animate: { opacity: 1, x: 0, y: '-50%' },
    exit: { opacity: 0, x: -8, y: '-50%' },
  },
};

/**
 * Tooltip Component
 * Hover tooltip with multiple positions
 */
export const Tooltip = ({
  children,
  content,
  position = 'top',
  delay = 200,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    const id = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  if (!content) return children;

  return (
    <div
      className={cn(styles.tooltipWrapper, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={cn(styles.tooltip, styles[position])}
            variants={tooltipVariants[position]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.15 }}
            role="tooltip"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
