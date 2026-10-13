/**
 * App.jsx - Root Component
 * Main entry point that renders HeroSection and ProjectsSection
 */

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import './App.css';

function App() {
  return (
    <main className="app">
      {/* Hero Section - Full viewport */}
      <HeroSection />
      
      {/* Projects Section - Below hero */}
      <ProjectsSection />
    </main>
  );
}

export default App;
