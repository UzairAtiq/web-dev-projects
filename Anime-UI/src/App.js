import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Quote from './components/Quote';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [profileImage, setProfileImage] = useState(null);

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'quote':
        return <Quote />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="App">
      <Header profileImage={profileImage} setProfileImage={setProfileImage} />
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
    </div>
  );
}

export default App;
