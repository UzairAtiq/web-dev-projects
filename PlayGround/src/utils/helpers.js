/**
 * General Helper Functions
 */

/**
 * Smooth scroll to element by ID
 * @param {string} elementId - Target element ID
 * @param {number} offset - Optional offset from top (default: 80 for navbar)
 */
export const scrollToSection = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
};

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in ms
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Generate a unique ID
 * @returns {string} Unique ID string
 */
export const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

/**
 * Clamp a number between min and max
 * @param {number} num - Number to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
export const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

/**
 * Check if user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Format class names (filter out falsy values)
 * @param {...string} classes - Class names
 * @returns {string} Joined class names
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
