/**
 * Animation Variants - Barrel Export
 * All Framer Motion animation variants in one place
 */

// Fade animations
export { 
  fadeIn, 
  fadeInUp, 
  fadeInDown, 
  fadeInLeft, 
  fadeInRight 
} from './variants/fade';

// Slide animations
export { 
  slideInLeft, 
  slideInRight, 
  slideInUp, 
  slideInDown 
} from './variants/slide';

// Scale animations
export { 
  scaleIn, 
  scaleInBounce, 
  popIn, 
  buttonScale, 
  cardHover 
} from './variants/scale';

// Stagger containers
export { 
  staggerContainer, 
  staggerContainerFast, 
  staggerContainerSlow,
  navStagger,
  cardGridStagger 
} from './variants/stagger';

// Enhanced animations
export * from './variants/enhanced';

/**
 * Common transition presets
 */
export const transitions = {
  spring: {
    type: 'spring',
    stiffness: 300,
    damping: 25,
  },
  springBouncy: {
    type: 'spring',
    stiffness: 500,
    damping: 15,
  },
  springSmooth: {
    type: 'spring',
    stiffness: 200,
    damping: 30,
  },
  easeOut: {
    type: 'tween',
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.5,
  },
  easeInOut: {
    type: 'tween',
    ease: [0.65, 0, 0.35, 1],
    duration: 0.5,
  },
};

/**
 * Duration presets
 */
export const durations = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
};

