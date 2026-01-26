import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils';
import styles from './Button.module.css';

/**
 * Button Component
 * Reusable button with multiple variants and sizes
 */
export const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  fullWidth = false,
  iconOnly = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}, ref) => {
  const buttonClasses = cn(
    styles.button,
    styles[variant],
    styles[size],
    isLoading && styles.loading,
    fullWidth && styles.fullWidth,
    iconOnly && styles.iconOnly,
    className
  );

  return (
    <motion.button
      ref={ref}
      className={buttonClasses}
      disabled={isDisabled || isLoading}
      whileHover={{ scale: isDisabled ? 1 : 1.02 }}
      whileTap={{ scale: isDisabled ? 1 : 0.98 }}
      {...props}
    >
      {isLoading && <span className={styles.spinner} />}
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </motion.button>
  );
});

Button.displayName = 'Button';
