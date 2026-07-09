import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="hero-title-line">IMMERSE IN</span>
            <span className="hero-title-line">ANIME <span className="japanese">軍</span></span>
            <span className="hero-title-line">MANGA</span>
          </h1>
        </div>

        <div className="hero-center">
          <div className="character-image">
            {/* Character illustration would go here */}
            <div className="character-placeholder"></div>
          </div>
        </div>
      </div>

      <div className="cards-container">
        <div className="card explore-card">
          <div className="card-content">
            <h2 className="card-title">
              Explore, Read, and<br />
              <span className="fancy-text">ENJOY</span>
            </h2>
            <button className="card-btn">
              Let's Explore
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15L15 5M15 5H5M15 5v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="card progress-card">
          <div className="card-content">
            <div className="progress-badge">Complete</div>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">120</span>
                <span className="stat-label">Episodes</span>
              </div>
              <button className="arrow-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15L15 5M15 5H5M15 5v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="card watch-card">
          <div className="card-content">
            <h2 className="card-title">
              Stream Anime and<br />
              <span className="fancy-text">ENJOY</span>
            </h2>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">350</span>
                <span className="stat-label">Chapters Read</span>
              </div>
              <button className="arrow-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15L15 5M15 5H5M15 5v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <button className="card-btn">
              Watch
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15L15 5M15 5H5M15 5v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <svg className="decorative-circle circle-1" width="400" height="400" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="190" fill="none" stroke="#f4a261" strokeWidth="2" opacity="0.3"/>
      </svg>
      <svg className="decorative-circle circle-2" width="600" height="600" viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="290" fill="none" stroke="#e76f51" strokeWidth="2" opacity="0.2"/>
      </svg>
    </div>
  );
};

export default Hero;
