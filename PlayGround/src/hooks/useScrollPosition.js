import { useState, useEffect } from 'react';
import { throttle } from '../utils/helpers';

/**
 * Custom hook to track scroll position
 * @param {number} throttleMs - Throttle time in ms (default: 100)
 * @returns {Object} Scroll position data
 */
export const useScrollPosition = (throttleMs = 100) => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    direction: null,
    isAtTop: true,
    isAtBottom: false,
    progress: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? currentScrollY / docHeight : 0;

      setScrollPosition({
        x: currentScrollX,
        y: currentScrollY,
        direction,
        isAtTop: currentScrollY < 50,
        isAtBottom: currentScrollY >= docHeight - 50,
        progress,
      });

      lastScrollY = currentScrollY;
    }, throttleMs);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [throttleMs]);

  return scrollPosition;
};
