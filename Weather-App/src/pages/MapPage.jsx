import React from 'react';
import './MapPage.css';
import { Search, Plus, Minus, Navigation, Sun, Cloud, CloudRain } from 'lucide-react';

const MapPage = () => {
  const mapCities = [
    { name: 'Bilbao', temp: '27°', icon: <CloudRain size={24} />, top: '15%', left: '30%' },
    { name: 'Barcelona', temp: '29°', icon: <Sun size={24} color="var(--accent-yellow)" />, top: '35%', left: '75%' },
    { name: 'Madrid', temp: '31°', icon: <Sun size={24} color="var(--accent-yellow)" />, top: '55%', left: '45%' },
    { name: 'Malaga', temp: '33°', icon: <Cloud size={24} />, top: '80%', left: '45%' },
  ];

  return (
    <div className="map-page fade-in">
      <div className="search-container">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Spain" />
        </div>
      </div>

      <div className="map-layout">
        <div className="map-view-container">
          <div className="map-visual">
            {/* Using a stylized SVG or DIV background for the map */}
            <div className="map-placeholder">
              {mapCities.map((city, idx) => (
                <div key={idx} className="map-marker" style={{ top: city.top, left: city.left }}>
                  <div className="marker-content">
                    <h4>{city.name}</h4>
                    {city.icon}
                    <span className="marker-temp">{city.temp}</span>
                    {city.name === 'Madrid' && <button className="see-detail-btn">See detail</button>}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="map-controls">
              <button><Plus size={20} /></button>
              <button><Minus size={20} /></button>
              <button className="nav-btn"><Navigation size={20} /></button>
            </div>
            <button className="done-btn">Done</button>
          </div>
        </div>

        <div className="map-sidebar">
          {mapCities.map((city, idx) => (
            <div key={idx} className="map-city-item">
              <div className="m-city-left">
                {city.icon}
                <div className="m-city-info">
                  <h4>{city.name}</h4>
                  <span>10:23</span>
                </div>
              </div>
              <span className="m-city-temp">{city.temp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
