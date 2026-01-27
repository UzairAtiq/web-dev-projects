import React from 'react';
import './Header.css';
import ProfileUpload from './ProfileUpload';

const Header = ({ profileImage, setProfileImage }) => {
  return (
    <header className="header">
      <div className="logo">Anime UI</div>
      <div className="header-right">
        <div className="search-bar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input type="text" placeholder="Search" />
        </div>
        <button className="notification-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="user-profile">
          <ProfileUpload profileImage={profileImage} setProfileImage={setProfileImage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
