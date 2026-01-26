import { createContext, useContext, useState, useCallback } from 'react';

/**
 * Sidebar Context
 * Manages sidebar open/close state globally
 */
const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = useCallback(() => setIsOpen(true), []);
  const closeSidebar = useCallback(() => setIsOpen(false), []);
  const toggleSidebar = useCallback(() => setIsOpen(prev => !prev), []);

  const value = {
    isOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};

/**
 * Hook to use sidebar context
 * @returns {Object} Sidebar state and actions
 */
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
