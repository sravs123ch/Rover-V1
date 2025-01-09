// src/pages/Home.js
import React from 'react';
import BannerCarousel from '../caurosal/fmcg'; // Adjust the import path as necessary
import FMCGCarousel from '../FMCG/fmcglist'; // Adjust the import path as necessary

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <FMCGCarousel />
    </div>
  );
};

export default Home;
