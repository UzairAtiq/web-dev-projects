/**
 * Scale Animation Variants
 * Pop-in/pop-out effects for cards, modals, and interactive elements
 */

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
};

export const scaleInBounce = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.2,
    },
  },
};

export const popIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.15,
    },
  },
};

// Hover and tap states for interactive elements
export const buttonScale = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const cardHover = {
  rest: { 
    scale: 1,
    y: 0,
  },
  hover: { 
    scale: 1.02,
    y: -5,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 20,
    },
  },
};
