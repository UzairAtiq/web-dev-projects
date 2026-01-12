/**
 * TopNav.jsx - Top Navigation Component
 * 
 * Positioned absolutely over the hero image.
 * Contains logo placeholder on left, icons on right.
 */

import './TopNav.css';

function TopNav() {
  return (
    <nav className="top-nav" aria-label="Main Navigation">
      {/* Left: Logo */}
      <div className="nav-left">
        <a href="/" className="nav-logo">
          <span className="logo-text">PORTFOLIO</span>
          <span className="logo-dot">.</span>
        </a>
      </div>
      
      {/* Right: Icons */}
      <div className="nav-right">
        {/* Search Icon Placeholder */}
        <button className="nav-icon-btn" aria-label="Search">
          <svg 
            className="nav-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
        
        {/* Hamburger Menu Placeholder */}
        <button className="nav-icon-btn nav-hamburger" aria-label="Menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
}

export default TopNav;
