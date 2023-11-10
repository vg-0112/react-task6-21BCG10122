import React from 'react';
import './App.css';
import profileImage from './photo.jpg';

function App() {
  return (
    <div className="portfolio">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h1>Vedang Gupta</h1>
      <p>City: Delhi, India</p>
      <p>College Reg No: 21BCG10122</p>
      <p>Email: vedanggupta@gmail.com</p>
      <p>Mobile: +91 9999999999</p>
      <div className="social-links">
        <a href="https://github.com/vg-0112" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/vedang--gupta/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  );
}

export default App;