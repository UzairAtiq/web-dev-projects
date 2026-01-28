/**
 * Enhanced Animation Variants
 * Additional animation presets for collapsible sections and transitions
 */

export const collapseVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.25 }
    }
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.35, delay: 0.1 }
    }
  }
};

export const headerVariants = {
  collapsed: { 
    borderRadius: '24px',
    transition: { duration: 0.3 }
  },
  expanded: { 
    borderRadius: '24px 24px 0 0',
    transition: { duration: 0.3 }
  }
};

export const contentSlideIn = {
  hidden: { 
    y: -30, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
};

export const pulseGlow = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(139, 92, 246, 0.3)',
      '0 0 40px rgba(139, 92, 246, 0.6)',
      '0 0 20px rgba(139, 92, 246, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export const rotateIn = {
  hidden: {
    opacity: 0,
    rotate: -180,
    scale: 0
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15
    }
  }
};

export const slideFromLeft = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
};

export const slideFromRight = {
  hidden: {
    x: 100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
};

export const bounceIn = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      bounce: 0.6
    }
  }
};

export const cardHoverEffect = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
  },
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  }
};

export const glowPulse = (color) => ({
  animate: {
    filter: [
      `drop-shadow(0 0 10px ${color}33)`,
      `drop-shadow(0 0 30px ${color}66)`,
      `drop-shadow(0 0 10px ${color}33)`,
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
});
