import React, { useState } from 'react';
import './WeatherPage.css';
import { Search, Sun, Cloud, CloudRain, Wind, Droplets, Thermometer, SunDim } from 'lucide-react';
import { useWeather } from '../context/WeatherContext';
import { motion } from 'framer-motion';

const WeatherPage = () => {
  const { units, selectedCity } = useWeather();
  const [showMore, setShowMore] = useState(false);

  const convertTemp = (temp) => {
    if (units.temperature === 'Fahrenheit') {
      return Math.round((temp * 9/5) + 32);
    }
    return temp;
  };

  return (
    <div className="weather-page fade-in">
      <div className="weather-layout">
        <div className="main-weather-section">
          <div className="current-weather">
            <div className="city-info">
              <h1>{selectedCity}</h1>
              <p>Chance of rain: 0%</p>
              <div className="temperature">{convertTemp(31)}°</div>
            </div>
            <div className="weather-icon-large">
              <Sun size={150} color="var(--accent-yellow)" fill="var(--accent-yellow)" />
            </div>
          </div>

          <div className="forecast-card today-forecast glass-card">
            <h3>TODAY'S FORECAST</h3>
            <div className="hourly-list">
              {[
                { time: '6:00 AM', temp: 25, icon: <Cloud /> },
                { time: '9:00 AM', temp: 28, icon: <SunDim /> },
                { time: '12:00 PM', temp: 33, icon: <Sun /> },
                { time: '3:00 PM', temp: 34, icon: <Sun /> },
                { time: '6:00 PM', temp: 32, icon: <Sun /> },
                { time: '9:00 PM', temp: 30, icon: <SunDim /> },
              ].map((item, index) => (
                <div key={index} className="hourly-item">
                  <span>{item.time}</span>
                  <div className="icon-small">{item.icon}</div>
                  <span className="hour-temp">{convertTemp(item.temp)}°</span>
                </div>
              ))}
            </div>
          </div>

          <div className="forecast-card air-conditions glass-card">
            <div className="card-header">
              <h3>AIR CONDITIONS</h3>
              <button className="see-more" onClick={() => setShowMore(prev => !prev)}>{showMore ? 'See less' : 'See more'}</button>
            </div>
            {showMore && (
  <motion.div
    className="conditions-grid"
    layout
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="condition-item">
      <Thermometer size={20} className="cond-icon" />
      <div className="cond-content">
        <p>Real Feel</p>
        <h4>{convertTemp(30)}°</h4>
      </div>
    </div>
    <div className="condition-item">
      <Wind size={20} className="cond-icon" />
      <div className="cond-content">
        <p>Wind</p>
        <h4>{units.windSpeed === 'km/h' ? '0.2 km/h' : units.windSpeed === 'm/s' ? '0.05 m/s' : '0.1 knots'}</h4>
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
  </motion.div>
)}
          </div>
        </div>

        <div className="side-forecast-section">
          <div className="forecast-card weekly-forecast glass-card">
            <h3>7-DAY FORECAST</h3>
            <div className="weekly-list">
              {[
                { day: 'Today', status: 'Sunny', high: 36, low: 22, icon: <Sun color="var(--accent-yellow)" /> },
                { day: 'Tue', status: 'Sunny', high: 37, low: 21, icon: <Sun color="var(--accent-yellow)" /> },
                { day: 'Wed', status: 'Sunny', high: 37, low: 21, icon: <Sun color="var(--accent-yellow)" /> },
                { day: 'Thu', status: 'Cloudy', high: 37, low: 21, icon: <Cloud /> },
                { day: 'Fri', status: 'Cloudy', high: 37, low: 21, icon: <Cloud /> },
                { day: 'Sat', status: 'Rainy', high: 37, low: 21, icon: <CloudRain /> },
                { day: 'Sun', status: 'Sunny', high: 37, low: 21, icon: <Sun color="var(--accent-yellow)" /> },
              ].map((day, idx) => (
                <div key={idx} className="weekly-item">
                  <span className="day-name">{day.day}</span>
                  <div className="day-status">
                    {day.icon}
                    <span>{day.status}</span>
                  </div>
                  <div className="day-temp">
                    <span className="high">{convertTemp(day.high)}</span>
                    <span className="low">/{convertTemp(day.low)}</span>
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
