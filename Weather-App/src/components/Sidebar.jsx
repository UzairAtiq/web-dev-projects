import React from 'react';
import { NavLink } from 'react-router-dom';
import { CloudRain, List, Map, Settings } from 'lucide-react';
import umbrellaImg from '../assets/umbrella.png';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={umbrellaImg} alt="Logo" />
      </div>
      
      <nav className="sidebar-nav">
        <NavLink to="/weather" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <CloudRain size={24} />
          <span>Weather</span>
        </NavLink>
        
        <NavLink to="/cities" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <List size={24} />
          <span>Cities</span>
        </NavLink>
        
        <NavLink to="/map" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Map size={24} />
          <span>Map</span>
        </NavLink>
        
        <NavLink to="/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Settings size={24} />
          <span>Settings</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
