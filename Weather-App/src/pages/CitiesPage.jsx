import React, { useState } from 'react';
import './CitiesPage.css';
import { Search, Sun, Cloud, Thermometer, Wind, Eye, Droplets, MapPin } from 'lucide-react';

const CitiesPage = () => {
  const [selectedCity, setSelectedCity] = useState('Madrid');

  const cities = [
    { name: 'Madrid', country: 'Spain', temp: '31', time: '10:23', icon: <Sun color="var(--accent-yellow)" /> },
    { name: 'Vienna', country: 'Austria', temp: '27', time: '11:23', icon: <Cloud /> },
    { name: 'Athens', country: 'Greece', temp: '33', time: '12:23', icon: <Sun color="var(--accent-yellow)" /> },
  ];

  return (
    <div className="cities-page fade-in">
      <div className="search-container">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search for cities" />
        </div>
      </div>

      <div className="cities-layout">
        <div className="cities-list">
          {cities.map((city, index) => (
            <div 
              key={index} 
              className={`city-card ${selectedCity === city.name ? 'active' : ''}`}
              onClick={() => setSelectedCity(city.name)}
            >
              <div className="city-card-left">
                <div className="city-icon-wrapper">
                  {city.icon}
                </div>
                <div className="city-name-info">
                  <h3>{city.name} <MapPin size={14} className="pin-icon" /></h3>
                  <span>{city.time}</span>
                </div>
              </div>
              <div className="city-card-right">
                <span className="city-temp">{city.temp}°</span>
              </div>
            </div>
          ))}
        </div>

        <div className="city-detail-section">
          <div className="city-detail-header">
            <div className="city-title-group">
              <h2>{selectedCity}</h2>
              <p>Chance of rain: 0%</p>
              <div className="detail-temp">31°</div>
            </div>
            <Sun size={120} color="var(--accent-yellow)" fill="var(--accent-yellow)" />
          </div>

          <div className="detail-forecast">
            <h3>TODAY'S FORECAST</h3>
            <div className="detail-hourly">
              {['6:00 AM', '9:00 AM', '12:00 PM'].map((time, i) => (
                <div key={i} className="detail-hour-item">
                  <span>{time}</span>
                  <Sun size={24} color="var(--accent-yellow)" />
                  <strong>{i === 0 ? '25°' : i === 1 ? '28°' : '33°'}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-forecast">
            <h3>3-DAY FORECAST</h3>
            <div className="detail-weekly">
              {['Today', 'Tue', 'Wed'].map((day, i) => (
                <div key={i} className="detail-day-item">
                  <span>{day}</span>
                  <div className="day-status-small">
                    <Sun size={20} color="var(--accent-yellow)" />
                    <span>Sunny</span>
                  </div>
                  <span><strong>37</strong>/21</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitiesPage;
