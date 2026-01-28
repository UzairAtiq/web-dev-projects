import { SidebarProvider, FavoritesProvider } from './context';
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

/**
 * App Component
 * Root application component with providers and layout
 */
function App() {
  return (
    <FavoritesProvider>
      <SidebarProvider>
        <MainLayout>
          {/* Hero / Landing Section */}
          <HeroSection />
          
          {/* Collapsible Playground Sections */}
          <CollapsibleSection
            title={sections[0].title}
            icon={sections[0].icon}
            gradient={sections[0].gradient}
            defaultCollapsed={true}
          >
            <PictureGallery />
          </CollapsibleSection>

          <CollapsibleSection
            title={sections[1].title}
            icon={sections[1].icon}
            gradient={sections[1].gradient}
            defaultCollapsed={true}
          >
            <VideoStudio />
          </CollapsibleSection>

          <CollapsibleSection
            title={sections[2].title}
            icon={sections[2].icon}
            gradient={sections[2].gradient}
            defaultCollapsed={true}
          >
            <MusicPlayer />
          </CollapsibleSection>

          <CollapsibleSection
            title={sections[3].title}
            icon={sections[3].icon}
            gradient={sections[3].gradient}
            defaultCollapsed={true}
          >
            <GameZone />
          </CollapsibleSection>

          <CollapsibleSection
            title={sections[4].title}
            icon={sections[4].icon}
            gradient={sections[4].gradient}
            defaultCollapsed={true}
          >
            <GoonSection />
          </CollapsibleSection>
          
          {/* Footer */}
          <Footer />
        </MainLayout>
      </SidebarProvider>
    </FavoritesProvider>
  );
}

export default App;

