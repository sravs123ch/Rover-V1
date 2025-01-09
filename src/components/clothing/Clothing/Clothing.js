// src/pages/Home.js
import React from "react";
import BannerCarousel from "../../caurosal/index"; // Adjust the import path as necessary
import ProductCarousel from "../../Products/productgrid"; // Adjust the import path as necessary

const  Clothing = () => {
  return (
    <div>
      <BannerCarousel />
      <ProductCarousel />
    </div>
  );
};

export default Clothing;
