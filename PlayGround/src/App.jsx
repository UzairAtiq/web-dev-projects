import { SidebarProvider, FavoritesProvider } from './context';
import { MainLayout } from './layouts';
import {
  HeroSection,
  CreativeLab,
  MotionStudio,
  SoundWaves,
  GameZone,
  CodeVault,
} from './components/sections';
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
          
          {/* Playground Sections */}
          <CreativeLab />
          <MotionStudio />
          <SoundWaves />
          <GameZone />
          <CodeVault />
        </MainLayout>
      </SidebarProvider>
    </FavoritesProvider>
  );
}

export default App;
