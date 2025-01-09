// src/components/BannerCarousel.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner_1 from "../../assets/Bannaer_Images/bhuvan-banner-desktop-view124357.jpg";
import banner_2 from "../../assets/Bannaer_Images/cargo-banner-desktop-view.jpg";
import banner_3 from "../../assets/Bannaer_Images/Plain-T-Shirts-banner-desktop-view-home-page.jpg";

const BannerCarousel = () => {
  return (
    <div className="mt-24">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src={banner_1} alt="Banner 1" />
        </div>
        <div>
          <img src={banner_2} alt="Banner 2" />
        </div>
        <div>
          <img src={banner_3} alt="Banner 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
