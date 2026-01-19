import React from 'react';
import './SettingsPage.css';
import { Search, ChevronRight } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="settings-page fade-in">
      <div className="search-container">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search for cities" />
        </div>
      </div>

      <div className="settings-layout">
        <div className="settings-main">
          <section className="settings-section">
            <h3>Units</h3>
            <div className="unit-card">
              <div className="unit-row">
                <span>TEMPERATURE</span>
                <div className="toggle-group">
                  <button className="active">Celsius</button>
                  <button>Fahrenheit</button>
                </div>
              </div>
              <div className="unit-row">
                <span>WIND SPEED</span>
                <div className="toggle-group">
                  <button className="active">km/h</button>
                  <button>m/s</button>
                  <button>Knots</button>
                </div>
              </div>
              <div className="unit-row">
                <span>PRESSURE</span>
                <div className="toggle-group">
                  <button>hPa</button>
                  <button>Inches</button>
                  <button>kPa</button>
                  <button className="active">mm</button>
                </div>
              </div>
              <div className="unit-row">
                <span>PRECIPITATION</span>
                <div className="toggle-group">
                  <button className="active">Milimeters</button>
                  <button>Inches</button>
                </div>
              </div>
              <div className="unit-row">
                <span>DISTANCE</span>
                <div className="toggle-group">
                  <button className="active">Kilometers</button>
                  <button>Miles</button>
                </div>
              </div>
            </div>
          </section>

          <section className="settings-section">
            <h3>Notifications</h3>
            <div className="unit-card">
              <div className="notification-row">
                <div className="notif-text">
                  <span>Notifications</span>
                  <p>Be aware of the weather</p>
                </div>
                <div className="switch active"></div>
              </div>
            </div>
          </section>

          <section className="settings-section">
            <h3>General</h3>
            <div className="unit-card">
              <div className="general-row">
                <span>Language</span>
                <div className="select-value">English <ChevronRight size={16} /></div>
              </div>
            </div>
          </section>
        </div>

        <div className="settings-sidebar">
          <div className="advanced-card">
            <h2>Advanced</h2>
            <h3>Get new experience</h3>
            <ul>
              <li>• Ad free</li>
              <li>• Health activities overview</li>
              <li>• Severe weather notifications</li>
            </ul>
            <div className="price-tag">
              <span>$5.99</span>/month
            </div>
          </div>

          <div className="umbrella-card">
            <h3>Never forget your umbrella!</h3>
            <p>Sign up for our daily weather newsletter personalized just for you.</p>
            <button className="signup-btn">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
