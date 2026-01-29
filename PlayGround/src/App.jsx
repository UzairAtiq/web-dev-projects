import { useRef } from 'react';
import { SidebarProvider, FavoritesProvider, SectionNavigationProvider, useSectionNavigation } from './context';
import { MainLayout } from './layouts';
import {
  HeroSection,
  PictureGallery,
  VideoStudio,
  MusicPlayer,
  GameZone,
  GoonSection,
} from './components/sections';
import { Footer } from './components/common';
import CollapsibleSection from './components/common/CollapsibleSection';
import { sections } from './data/sections';
import './styles/globals.css';

// Helper wrapper component to connect CollapsibleSection with navigation context
function CollapsibleSectionWrapper({ sectionId, children, ...props }) {
  const { registerSection } = useSectionNavigation();
  const sectionRef = useRef();

  return (
    <CollapsibleSection
      ref={(el) => {
        sectionRef.current = el;
        registerSection(sectionId, el);
      }}
      sectionId={sectionId}
      defaultCollapsed={true}
      {...props}
    >
      {children}
    </CollapsibleSection>
  );
}

/**
 * App Component
 * Root application component with providers and layout
 */
function App() {
  return (
    <SectionNavigationProvider>
      <FavoritesProvider>
        <SidebarProvider>
          <MainLayout>
            {/* Hero / Landing Section */}
            <HeroSection />
            
            {/* Collapsible Playground Sections */}
            <CollapsibleSectionWrapper
              sectionId={sections[0].id}
              title={sections[0].title}
              icon={sections[0].icon}
              gradient={sections[0].gradient}
            >
              <PictureGallery />
            </CollapsibleSectionWrapper>

            <CollapsibleSectionWrapper
              sectionId={sections[1].id}
              title={sections[1].title}
              icon={sections[1].icon}
              gradient={sections[1].gradient}
            >
              <VideoStudio />
            </CollapsibleSectionWrapper>

            <CollapsibleSectionWrapper
              sectionId={sections[2].id}
              title={sections[2].title}
              icon={sections[2].icon}
              gradient={sections[2].gradient}
            >
              <MusicPlayer />
            </CollapsibleSectionWrapper>

            <CollapsibleSectionWrapper
              sectionId={sections[3].id}
              title={sections[3].title}
              icon={sections[3].icon}
              gradient={sections[3].gradient}
            >
              <GameZone />
            </CollapsibleSectionWrapper>

            <CollapsibleSectionWrapper
              sectionId={sections[4].id}
              title={sections[4].title}
              icon={sections[4].icon}
              gradient={sections[4].gradient}
            >
              <GoonSection />
            </CollapsibleSectionWrapper>
            
            {/* Footer */}
            <Footer />
          </MainLayout>
        </SidebarProvider>
      </FavoritesProvider>
    </SectionNavigationProvider>
  );
}

export default App;

