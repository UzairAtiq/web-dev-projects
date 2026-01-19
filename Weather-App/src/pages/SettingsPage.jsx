import React from 'react';
import './SettingsPage.css';
import { Search, ChevronRight } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';

const SettingsPage = () => {
  const { units, toggleUnit, notifications, toggleNotifications } = useWeather();

  const renderUnitRow = (label, category, options) => (
    <div className="unit-row">
      <span>{label}</span>
      <div className="toggle-group">
        {options.map(opt => (
          <button 
            key={opt}
            className={units[category] === opt ? 'active' : ''}
            onClick={() => toggleUnit(category, opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

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
              {renderUnitRow('TEMPERATURE', 'temperature', ['Celsius', 'Fahrenheit'])}
              {renderUnitRow('WIND SPEED', 'windSpeed', ['km/h', 'm/s', 'Knots'])}
              {renderUnitRow('PRESSURE', 'pressure', ['hPa', 'Inches', 'kPa', 'mm'])}
              {renderUnitRow('PRECIPITATION', 'precipitation', ['Milimeters', 'Inches'])}
              {renderUnitRow('DISTANCE', 'distance', ['Kilometers', 'Miles'])}
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
                <div 
                  className={`switch ${notifications ? 'active' : ''}`}
                  onClick={toggleNotifications}
                ></div>
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
