import { useEffect, useCallback } from 'react';

/**
 * useKeyPress Hook
 * Detect key presses with modifier support
 * 
 * @param {string|string[]} targetKey - Key(s) to listen for
 * @param {function} callback - Function to call on key press
 * @param {object} options - Configuration options
 * @param {boolean} options.ctrl - Require Ctrl/Cmd key
 * @param {boolean} options.shift - Require Shift key
 * @param {boolean} options.alt - Require Alt key
 * @param {boolean} options.enabled - Enable/disable the listener
 * 
 * @example
 * // Close on Escape
 * useKeyPress('Escape', () => closeModal());
 * 
 * // Ctrl+S to save
 * useKeyPress('s', () => save(), { ctrl: true });
 */
export const useKeyPress = (
  targetKey,
  callback,
  { ctrl = false, shift = false, alt = false, enabled = true } = {}
) => {
  const handleKeyDown = useCallback((event) => {
    const keys = Array.isArray(targetKey) ? targetKey : [targetKey];
    const keyMatches = keys.some(key => 
      event.key.toLowerCase() === key.toLowerCase()
    );

    if (!keyMatches) return;

    // Check modifiers
    const ctrlMatches = ctrl ? (event.ctrlKey || event.metaKey) : true;
    const shiftMatches = shift ? event.shiftKey : true;
    const altMatches = alt ? event.altKey : true;

    if (ctrlMatches && shiftMatches && altMatches) {
      if (ctrl || shift || alt) {
        event.preventDefault();
      }
      callback(event);
    }
  }, [targetKey, callback, ctrl, shift, alt]);

  useEffect(() => {
    if (!enabled) return;

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, enabled]);
};

export default useKeyPress;
