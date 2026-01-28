/**
 * LocalStorage Utilities
 * Safe localStorage operations with error handling
 */

const STORAGE_PREFIX = 'playground_';

/**
 * Get item from localStorage
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if key doesn't exist
 * @returns {*} Parsed value or default
 */
export const getStorageItem = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(STORAGE_PREFIX + key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error reading from localStorage: ${key}`, error);
    return defaultValue;
  }
};

/**
 * Set item in localStorage
 * @param {string} key - Storage key
 * @param {*} value - Value to store (will be JSON stringified)
 * @returns {boolean} Success status
 */
export const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`Error writing to localStorage: ${key}`, error);
    return false;
  }
};

/**
 * Remove item from localStorage
 * @param {string} key - Storage key
 * @returns {boolean} Success status
 */
export const removeStorageItem = (key) => {
  try {
    localStorage.removeItem(STORAGE_PREFIX + key);
    return true;
  } catch (error) {
    console.warn(`Error removing from localStorage: ${key}`, error);
    return false;
  }
};

/**
 * Clear all playground-related items from localStorage
 */
export const clearPlaygroundStorage = () => {
  try {
    Object.keys(localStorage)
      .filter(key => key.startsWith(STORAGE_PREFIX))
      .forEach(key => localStorage.removeItem(key));
    return true;
  } catch (error) {
    console.warn('Error clearing localStorage', error);
    return false;
  }
};

/**
 * Storage API object for convenient access
 */
export const storage = {
  get: getStorageItem,
  set: setStorageItem,
  remove: removeStorageItem,
  clear: clearPlaygroundStorage,
};
