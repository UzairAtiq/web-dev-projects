import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Anime UI</h1>
        <div className="about-content">
          <p>
            Welcome to Anime UI - your ultimate destination for anime and manga content! 
            We're passionate about bringing you the best anime experience with a beautiful, 
            modern interface.
          </p>
          <div className="features">
            <div className="feature-item">
              <div className="feature-icon">🎬</div>
              <h3>Vast Collection</h3>
              <p>Browse through thousands of anime titles from classic to latest releases.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📚</div>
              <h3>Manga Library</h3>
              <p>Read your favorite manga series with our comfortable reading interface.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <h3>Community</h3>
              <p>Connect with fellow anime enthusiasts and share your thoughts.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⭐</div>
              <h3>Personalized</h3>
              <p>Get recommendations based on your viewing history and preferences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
