import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Hero />
    </div>
  );
}

export default App;
