import React from 'react';
import './WeatherPage.css';
import { Search, Sun, Cloud, CloudRain, Wind, Droplets, Thermometer, SunDim } from 'lucide-react';

const WeatherPage = () => {
  return (
    <div className="weather-page fade-in">
      <div className="search-container">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search for cities" />
        </div>
      </div>

      <div className="weather-layout">
        <div className="main-weather-section">
          <div className="current-weather">
            <div className="city-info">
              <h1>Madrid</h1>
              <p>Chance of rain: 0%</p>
              <div className="temperature">31°</div>
            </div>
            <div className="weather-icon-large">
              <Sun size={150} color="var(--accent-yellow)" fill="var(--accent-yellow)" />
            </div>
          </div>

          <div className="forecast-card today-forecast">
            <h3>TODAY'S FORECAST</h3>
            <div className="hourly-list">
              {[
                { time: '6:00 AM', temp: '25°', icon: <Cloud /> },
                { time: '9:00 AM', temp: '28°', icon: <SunDim /> },
                { time: '12:00 PM', temp: '33°', icon: <Sun /> },
                { time: '3:00 PM', temp: '34°', icon: <Sun /> },
                { time: '6:00 PM', temp: '32°', icon: <Sun /> },
                { time: '9:00 PM', temp: '30°', icon: <SunDim /> },
              ].map((item, index) => (
                <div key={index} className="hourly-item">
                  <span>{item.time}</span>
                  <div className="icon-small">{item.icon}</div>
                  <span className="hour-temp">{item.temp}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="forecast-card air-conditions">
            <div className="card-header">
              <h3>AIR CONDITIONS</h3>
              <button className="see-more">See more</button>
            </div>
            <div className="conditions-grid">
              <div className="condition-item">
                <Thermometer size={20} className="cond-icon" />
                <div className="cond-content">
                  <p>Real Feel</p>
                  <h4>30°</h4>
                </div>
              </div>
              <div className="condition-item">
                <Wind size={20} className="cond-icon" />
                <div className="cond-content">
                  <p>Wind</p>
                  <h4>0.2 km/h</h4>
                </div>
              </div>
              <div className="condition-item">
                <Droplets size={20} className="cond-icon" />
                <div className="cond-content">
                  <p>Chance of rain</p>
                  <h4>0%</h4>
                </div>
              </div>
              <div className="condition-item">
                <SunDim size={20} className="cond-icon" />
                <div className="cond-content">
                  <p>UV Index</p>
                  <h4>3</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="side-forecast-section">
          <div className="forecast-card weekly-forecast">
            <h3>7-DAY FORECAST</h3>
            <div className="weekly-list">
              {[
                { day: 'Today', status: 'Sunny', high: '36', low: '22', icon: <Sun color="var(--accent-yellow)" /> },
                { day: 'Tue', status: 'Sunny', high: '37', low: '21', icon: <Sun color="var(--accent-yellow)" /> },
                { day: 'Wed', status: 'Sunny', high: '37', low: '21', icon: <Sun color="var(--accent-yellow)" /> },
                { day: 'Thu', status: 'Cloudy', high: '37', low: '21', icon: <Cloud /> },
                { day: 'Fri', status: 'Cloudy', high: '37', low: '21', icon: <Cloud /> },
                { day: 'Sat', status: 'Rainy', high: '37', low: '21', icon: <CloudRain /> },
                { day: 'Sun', status: 'Sunny', high: '37', low: '21', icon: <Sun color="var(--accent-yellow)" /> },
              ].map((day, idx) => (
                <div key={idx} className="weekly-item">
                  <span className="day-name">{day.day}</span>
                  <div className="day-status">
                    {day.icon}
                    <span>{day.status}</span>
                  </div>
                  <div className="day-temp">
                    <span className="high">{day.high}</span>
                    <span className="low">/{day.low}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
