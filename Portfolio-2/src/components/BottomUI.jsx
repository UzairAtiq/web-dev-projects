/**
 * BottomUI.jsx - Bottom UI Elements
 * 
 * Contains progress indicator bar and scroll hint.
 */

import './BottomUI.css';

function BottomUI() {
  return (
    <div className="bottom-ui">
      {/* Progress Indicator */}
      <div className="progress-container">
        <div className="progress-track" aria-label="Page Progress">
          <div className="progress-segments">
            <span className="progress-segment active"></span>
            <span className="progress-segment"></span>
            <span className="progress-segment"></span>
            <span className="progress-segment"></span>
          </div>
        </div>
        <span className="progress-label">01 / 04</span>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll for next</span>
        <span className="scroll-arrow" aria-hidden="true">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default BottomUI;
