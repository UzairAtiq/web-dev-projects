/**
 * HeroSection.jsx - Hero Container Component
 * 
 * Full-viewport hero section with background image.
 * Contains all overlay UI components layered on top.
 * 
 * IMPORTANT: Replace HERO_IMAGE with your actual image path/URL
 */

import TopNav from './TopNav';
import LeftSidebar from './LeftSidebar';
import CenterHeroContent from './CenterHeroContent';
import LeftOverlayPanel from './LeftOverlayPanel';
import RightOverlayPanel from './RightOverlayPanel';
import BottomUI from './BottomUI';
import './HeroSection.css';

// ═══════════════════════════════════════════════════════════
// HERO IMAGE - Replace this with your actual image path/URL
// ═══════════════════════════════════════════════════════════
const HERO_IMAGE = "REPLACE_WITH_YOUR_IMAGE";

function HeroSection() {
  return (
    <section 
      className="hero-section"
      style={{ 
        backgroundImage: HERO_IMAGE !== "REPLACE_WITH_YOUR_IMAGE" 
          ? `url(${HERO_IMAGE})` 
          : 'linear-gradient(135deg, var(--color-base) 0%, var(--color-secondary) 50%, var(--color-panel) 100%)'
      }}
      aria-label="Hero Section"
    >
      {/* Dark overlay for better text readability */}
      <div className="hero-overlay" aria-hidden="true" />
      
      {/* Top Navigation Bar */}
      <TopNav />
      
      {/* Left Vertical Sidebar */}
      <LeftSidebar />
      
      {/* Center Hero Content */}
      <CenterHeroContent />
      
      {/* Left Overlay Panel */}
      <LeftOverlayPanel />
      
      {/* Right Overlay Panel */}
      <RightOverlayPanel />
      
      {/* Bottom UI Elements */}
      <BottomUI />
    </section>
  );
}

export default HeroSection;
