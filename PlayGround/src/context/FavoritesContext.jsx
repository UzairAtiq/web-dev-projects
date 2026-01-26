import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';
import { MAX_FAVORITES, getSectionById } from '../data/sections';

/**
 * Favorites Context
 * Manages favorite sections globally with persistence
 */
const FavoritesContext = createContext(null);

const FAVORITES_KEY = 'favorites';

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    return getStorageItem(FAVORITES_KEY, []);
  });

  // Persist to localStorage
  useEffect(() => {
    setStorageItem(FAVORITES_KEY, favorites);
  }, [favorites]);

  const addFavorite = useCallback((sectionId) => {
    if (favorites.length >= MAX_FAVORITES) {
      return false;
    }
    if (favorites.includes(sectionId)) {
      return false;
    }
    setFavorites(prev => [...prev, sectionId]);
    return true;
  }, [favorites]);

  const removeFavorite = useCallback((sectionId) => {
    setFavorites(prev => prev.filter(id => id !== sectionId));
  }, []);

  const toggleFavorite = useCallback((sectionId) => {
    if (favorites.includes(sectionId)) {
      removeFavorite(sectionId);
      return false;
    }
    return addFavorite(sectionId);
  }, [favorites, addFavorite, removeFavorite]);

  const isFavorite = useCallback((sectionId) => {
    return favorites.includes(sectionId);
  }, [favorites]);

  // Get full section data for favorites
  const getFavoriteSections = useCallback(() => {
    return favorites
      .map(id => getSectionById(id))
      .filter(Boolean);
  }, [favorites]);

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    getFavoriteSections,
    canAddFavorite: favorites.length < MAX_FAVORITES,
    maxFavorites: MAX_FAVORITES,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

/**
 * Hook to use favorites context
 * @returns {Object} Favorites state and actions
 */
export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavoritesContext must be used within a FavoritesProvider');
  }
  return context;
};
