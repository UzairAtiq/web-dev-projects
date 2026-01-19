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
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleUnit = (category, value) => {
    setUnits(prev => ({ ...prev, [category]: value }));
  };

  const toggleNotifications = () => setNotifications(!notifications);
  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <WeatherContext.Provider value={{ 
      units, 
      toggleUnit, 
      notifications, 
      toggleNotifications, 
      selectedCity, 
      setSelectedCity,
      theme,
      toggleTheme
    }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
