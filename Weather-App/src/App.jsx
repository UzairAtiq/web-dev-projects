import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WeatherPage from './pages/WeatherPage';
import CitiesPage from './pages/CitiesPage';
import MapPage from './pages/MapPage';
import SettingsPage from './pages/SettingsPage';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/*"
            element={
              <div className="dashboard-layout">
                <Sidebar />
                <main className="main-content">
                  <Routes>
                    <Route path="/weather" element={<WeatherPage />} />
                    <Route path="/cities" element={<CitiesPage />} />
                    <Route path="/map" element={<MapPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                  </Routes>
                </main>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
