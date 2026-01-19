import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import umbrellaImg from '../assets/umbrella.png';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <motion.div 
          className="landing-card"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={umbrellaImg} alt="Umbrella" className="large-umbrella" />
        </motion.div>

        <motion.div 
          className="landing-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="logo-section">
            <img src={umbrellaImg} alt="Breeze Logo" className="small-logo" />
          </div>
          <h1 className="landing-title">Breeze</h1>
          <p className="landing-subtitle">Weather App</p>
          
          <button 
            className="get-started-btn"
            onClick={() => navigate('/weather')}
          >
            Get started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
