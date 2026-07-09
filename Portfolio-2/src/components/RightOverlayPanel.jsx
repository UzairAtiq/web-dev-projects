/**
 * RightOverlayPanel.jsx - Right Overlay Panel
 * 
 * Positioned mid-right, floating above hero image.
 * Contains large symbol, title, and description.
 */

import './RightOverlayPanel.css';

function RightOverlayPanel() {
  return (
    <div className="right-overlay-panel">
      {/* Large Symbol/Number */}
      <div className="panel-symbol" aria-hidden="true">
        ◆
      </div>
      
      {/* Panel Content */}
      <div className="panel-content">
        <h3 className="panel-heading">ABOUT</h3>
        <p className="panel-description">
          Passionate creator focused on 
          building memorable digital 
          experiences that inspire.
        </p>
      </div>
      
      {/* Accent Line */}
      <div className="panel-accent-line" aria-hidden="true"></div>
    </div>
  );
}

export default RightOverlayPanel;
