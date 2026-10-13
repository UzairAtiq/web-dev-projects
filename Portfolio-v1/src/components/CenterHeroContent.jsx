/**
 * CenterHeroContent.jsx - Center Hero Content
 * 
 * Personal information for Uzair Atiq.
 * Includes decorative CSS rings (no images).
 */

import './CenterHeroContent.css';

function CenterHeroContent() {
  return (
    <div className="center-hero-content">
      {/* Decorative Ring Elements */}
      <div className="decorative-rings" aria-hidden="true">
        <div className="ring ring-outer"></div>
        <div className="ring ring-middle"></div>
        <div className="ring ring-inner"></div>
      </div>
      
      {/* Main Content */}
      <div className="hero-text">
        {/* Role Label */}
        <span className="hero-label">+ ASPIRING FULL-STACK MERN DEVELOPER +</span>
        
        {/* Large Heading - Name */}
        <h1 className="hero-heading">
          <span className="heading-line">Uzair Atiq</span>
          <span className="heading-line heading-accent">20 Years Old</span>
        </h1>
        
        {/* Subtitle - Focus & Education */}
        <p className="hero-subtitle">
          AI Development & Full-Stack Engineering
          <br />
          BS in AI — Bahria University
        </p>
      </div>
    </div>
  );
}

export default CenterHeroContent;
