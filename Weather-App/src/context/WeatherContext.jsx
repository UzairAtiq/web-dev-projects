import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [units, setUnits] = useState({
    temperature: 'Celsius',
    windSpeed: 'km/h',
    pressure: 'mm',
    precipitation: 'Milimeters',
    distance: 'Kilometers',
  });

  const [notifications, setNotifications] = useState(true);
  const [selectedCity, setSelectedCity] = useState('Madrid');

  const toggleUnit = (category, value) => {
    setUnits(prev => ({ ...prev, [category]: value }));
  };

  const toggleNotifications = () => setNotifications(!notifications);

  return (
    <WeatherContext.Provider value={{ 
      units, 
      toggleUnit, 
      notifications, 
      toggleNotifications, 
      selectedCity, 
      setSelectedCity 
    }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
