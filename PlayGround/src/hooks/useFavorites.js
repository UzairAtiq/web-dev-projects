import { useState, useEffect, useCallback } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';
import { MAX_FAVORITES } from '../data/sections';

const FAVORITES_KEY = 'favorites';

/**
 * Custom hook to manage favorite sections
 * Persists to localStorage
 * @returns {Object} Favorites state and actions
 */
export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    return getStorageItem(FAVORITES_KEY, []);
  });

  // Sync to localStorage whenever favorites change
  useEffect(() => {
    setStorageItem(FAVORITES_KEY, favorites);
  }, [favorites]);

  /**
   * Add section to favorites
   * @param {string} sectionId - Section ID to add
   * @returns {boolean} Success status
   */
  const addFavorite = useCallback((sectionId) => {
    if (favorites.length >= MAX_FAVORITES) {
      console.warn(`Maximum favorites (${MAX_FAVORITES}) reached`);
      return false;
    }
    if (favorites.includes(sectionId)) {
      return false;
    }
    setFavorites(prev => [...prev, sectionId]);
    return true;
  }, [favorites]);

  /**
   * Remove section from favorites
   * @param {string} sectionId - Section ID to remove
   */
  const removeFavorite = useCallback((sectionId) => {
    setFavorites(prev => prev.filter(id => id !== sectionId));
  }, []);

  /**
   * Toggle section favorite status
   * @param {string} sectionId - Section ID to toggle
   * @returns {boolean} New favorite status
   */
  const toggleFavorite = useCallback((sectionId) => {
    if (favorites.includes(sectionId)) {
      removeFavorite(sectionId);
      return false;
    } else {
      return addFavorite(sectionId);
    }
  }, [favorites, addFavorite, removeFavorite]);

  /**
   * Check if section is a favorite
   * @param {string} sectionId - Section ID to check
   * @returns {boolean} Is favorite
   */
  const isFavorite = useCallback((sectionId) => {
    return favorites.includes(sectionId);
  }, [favorites]);

  /**
   * Reorder favorites
   * @param {string[]} newOrder - New order of section IDs
   */
  const reorderFavorites = useCallback((newOrder) => {
    setFavorites(newOrder);
  }, []);

  /**
   * Check if can add more favorites
   * @returns {boolean} Can add
   */
  const canAddFavorite = favorites.length < MAX_FAVORITES;

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    reorderFavorites,
    canAddFavorite,
    maxFavorites: MAX_FAVORITES,
  };
};
