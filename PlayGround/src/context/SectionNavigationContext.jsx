import { createContext, useContext, useRef } from 'react';
import { scrollToSection } from '../utils';

const SectionNavigationContext = createContext(null);

export const SectionNavigationProvider = ({ children }) => {
  const sectionRefs = useRef({});

  const navigateToSection = (sectionId) => {
    // Expand the section first if it has a ref
    if (sectionRefs.current[sectionId]) {
      sectionRefs.current[sectionId].expand();
    }
    
    // Then scroll to it with a slight delay to allow expansion animation
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  };

  const registerSection = (sectionId, ref) => {
    sectionRefs.current[sectionId] = ref;
  };

  return (
    <SectionNavigationContext.Provider value={{ navigateToSection, registerSection, sectionRefs }}>
      {children}
    </SectionNavigationContext.Provider>
  );
};

export const useSectionNavigation = () => {
  const context = useContext(SectionNavigationContext);
  if (!context) {
    throw new Error('useSectionNavigation must be used within SectionNavigationProvider');
  }
  return context;
};
