import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils';
import { cardHover } from '../../../animations';
import styles from './Card.module.css';

/**
 * Card Component
 * Flexible card container with multiple variants
 */
export const Card = forwardRef(({
  children,
  variant = 'default',
  padding = 'default',
  as = 'div',
  className,
  animate = true,
  ...props
}, ref) => {
  const Component = animate ? motion[as] || motion.div : as;

  const cardClasses = cn(
    styles.card,
    styles[variant],
    padding === 'none' && styles.noPadding,
    padding === 'small' && styles.smallPadding,
    padding === 'large' && styles.largePadding,
    className
  );

  const animationProps = animate && variant === 'interactive' ? {
    initial: 'rest',
    whileHover: 'hover',
    variants: cardHover,
  } : {};

  return (
    <Component
      ref={ref}
      className={cardClasses}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  );
});

Card.displayName = 'Card';

/**
 * Card Header
 */
export const CardHeader = ({ children, className, ...props }) => (
  <div className={cn(styles.cardHeader, className)} {...props}>
    {children}
  </div>
);

/**
 * Card Title
 */
export const CardTitle = ({ children, className, ...props }) => (
  <h3 className={cn(styles.cardTitle, className)} {...props}>
    {children}
  </h3>
);

/**
 * Card Description
 */
export const CardDescription = ({ children, className, ...props }) => (
  <p className={cn(styles.cardDescription, className)} {...props}>
    {children}
  </p>
);

/**
 * Card Body
 */
export const CardBody = ({ children, className, ...props }) => (
  <div className={cn(styles.cardBody, className)} {...props}>
    {children}
  </div>
);

/**
 * Card Footer
 */
export const CardFooter = ({ children, className, ...props }) => (
  <div className={cn(styles.cardFooter, className)} {...props}>
    {children}
  </div>
);
