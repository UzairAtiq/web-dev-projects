import React, { useState } from 'react';
import { citiesData } from '../data/cities';
import { useWeather } from '../context/WeatherContext';
import './CitySearchBar.css';

const CitySearchBar = () => {
  const { setSelectedCity } = useWeather();
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCities = citiesData.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="city-search-bar glass-card">
      <input
        type="text"
        placeholder="Search cities"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {searchTerm && (
        <ul className="search-results">
          {filteredCities.map(city => (
            <li
              key={city.name}
              onClick={() => {
                setSelectedCity(city.name);
                setSearchTerm('');
              }}
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearchBar;
