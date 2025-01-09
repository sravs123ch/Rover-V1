// src/pages/Home.js
import React from 'react';
import BannerCarousel from './carosal'; // Adjust the import path as necessary
import ProductCarousel from './ProductsGrid'; // Adjust the import path as necessary

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <ProductCarousel />
    </div>
  );
};

export default Home;