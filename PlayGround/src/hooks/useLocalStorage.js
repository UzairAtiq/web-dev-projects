import { useState, useEffect, useCallback } from 'react';
import { storage } from '../utils';

/**
 * useLocalStorage Hook
 * Persists state to localStorage with automatic sync
 * 
 * @param {string} key - Storage key
 * @param {any} initialValue - Default value if key doesn't exist
 * @returns {[any, function, function]} - [value, setValue, removeValue]
 */
export const useLocalStorage = (key, initialValue) => {
  // Get initial value from storage or use provided default
  const [storedValue, setStoredValue] = useState(() => {
    const item = storage.get(key);
    return item !== null ? item : initialValue;
  });

  // Update localStorage when state changes
  useEffect(() => {
    storage.set(key, storedValue);
  }, [key, storedValue]);

  // Set value with callback support
  const setValue = useCallback((value) => {
    setStoredValue(prev => {
      const newValue = typeof value === 'function' ? value(prev) : value;
      return newValue;
    });
  }, []);

  // Remove value from storage
  const removeValue = useCallback(() => {
    storage.remove(key);
    setStoredValue(initialValue);
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
};
