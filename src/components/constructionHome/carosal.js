// src/components/BannerCarousel.js
import React,{useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import banner_1 from "../../assets/images/BaneerImages/banner_building_material_web.png";
import banner_2 from "../../assets/images/BaneerImages/banner_building_material_web.png";
import banner_3 from "../../assets/images/BaneerImages/banner_building_material_web.png";
import { Link } from "react-router-dom"; // Import Link for navigation
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { groceryData } from "../constants/index.js";

const BannerCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const imageCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };

  const filteredItems =
    selectedCategory === "All"
      ? groceryData
      : groceryData.filter((item) => item.category === selectedCategory);

  return (
    <div className="mx-auto pt-32 px-4">
      {/* Carousel */}
      <div className="mb-8">
        <Slider {...imageCarouselSettings}>
          <img
            src={ banner_1}
            alt="Promo 1"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
          />
          <img
            src={banner_2}
            alt="Promo 2"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
          />
          <img
            src={banner_3}
            alt="Promo 3"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
          />
        </Slider>
      </div>
      </div>
  );
};

export default BannerCarousel;


