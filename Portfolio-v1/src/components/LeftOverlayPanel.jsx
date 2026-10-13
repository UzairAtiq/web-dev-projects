/**
 * LeftOverlayPanel.jsx - Left Overlay Panel
 * 
 * Positioned mid-left, floating above hero image.
 * Contains section title and metadata placeholders.
 */

import './LeftOverlayPanel.css';

function LeftOverlayPanel() {
  return (
    <div className="left-overlay-panel">
      {/* Panel Header */}
      <div className="panel-header">
        <span className="panel-number">01</span>
        <span className="panel-divider" aria-hidden="true"></span>
        <span className="panel-title">SELECTED WORKS</span>
      </div>
      
      {/* Panel Content - Metadata List */}
      <ul className="panel-list">
        <li className="panel-list-item">
          <span className="item-label">Project Type</span>
          <span className="item-value">Web Development</span>
        </li>
        <li className="panel-list-item">
          <span className="item-label">Expertise</span>
          <span className="item-value">UI/UX Design</span>
        </li>
        <li className="panel-list-item">
          <span className="item-label">Year</span>
          <span className="item-value">2024 — Present</span>
        </li>
      </ul>
    </div>
  );
}

export default LeftOverlayPanel;
