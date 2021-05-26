import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Unlimited movies, TV shows.</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      
      </div>
    </div>
  );
}

export default HeroSection;
