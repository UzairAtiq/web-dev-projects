import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
        <div className="dashboard-layout">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/weather" replace />} />
              <Route path="/weather" element={<WeatherPage />} />
              <Route path="/cities" element={<CitiesPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/weather" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
