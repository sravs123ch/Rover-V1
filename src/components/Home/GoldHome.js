// src/pages/Home.js
import React from 'react';
import BannerCarousel from '../caurosal/gold'; // Adjust the import path as necessary
import GoldCarousel from '../../Gold/Goldgrid'; // Adjust the import path as necessary

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <GoldCarousel />
    </div>
  );
};

export default Home;
