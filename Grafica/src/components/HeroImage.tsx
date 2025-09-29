import React from 'react';
import './HeroImage.css';


import MealsImage from '../assets/meals.jpg'; 

const HeroImage: React.FC = () => (
  <div className="hero-image-wrapper">
    <img src={MealsImage} alt="Buffet di piatti" className="hero-image" />
  </div>
);

export default HeroImage;
