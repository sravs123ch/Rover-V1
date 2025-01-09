import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { groceryData } from "../constants/index.js";
import Image1 from "../../assets/Bannaer_Images/gorcery/grocery-store-sale-banner-template_23-2151089846.avif";
import Image2 from "../../assets/Bannaer_Images/gorcery/hand-drawn-supermarket-sale-background_23-2149406388.avif";
import Image3 from "../../assets/Bannaer_Images/gorcery/super-grocery-sale-social-media-banner-vector.jpg";
import { useNavigate } from 'react-router-dom';

const GroceryCat1 = require("../../assets/GroceryCat_Images/g1v1.jpg");
const GroceryCat2 = require("../../assets/GroceryCat_Images/g1v2.jpg");
const GroceryCat3 = require("../../assets/GroceryCat_Images/g1v3.jpg");
const GroceryCat4 = require("../../assets/GroceryCat_Images/g1v4.jpg");
const GroceryCat5 = require("../../assets/Gold_Banner_Imges/c-gold5.jpg");
const GroceryCat6 = require("../../assets/Gold_Banner_Imges/c-gold6.jpg");
const GroceryCat7 = require("../../assets/Gold_Banner_Imges/c-gold7.jpg");
const GroceryCat8 = require("../../assets/Gold_Banner_Imges/c-gold8.jpg");
const GroceryCat9 = require("../../assets/Gold_Banner_Imges/c-gold10.jpg");
const GroceryCat10 = require("../../assets/Gold_Banner_Imges/c-gold11.jpg");
const GroceryCat11 = require("../../assets/Gold_Banner_Imges/c-gold12.jpg");
const GroceryCat12 = require("../../assets/Gold_Banner_Imges/c-gold9.jpg");

const categories = [
  { name: "Fruits & Vegetables", image: GroceryCat1, route: "/fruits-vegetables" },
  { name: "Dairy & Bakery", image: GroceryCat2, route: "/dairy-bakery" },
  // { name: "Snacks & Beverages", image: GroceryCat3, route: "/snacks-beverages" },
  // { name: "Meat & Seafood", image: GroceryCat4, route: "/meat-seafood" },
  // { name: "Pantry Staples", image: GroceryCat5, route: "/pantry-staples" },
  { name: "Household Supplies", image: GroceryCat3, route: "/household-supplies" },
  // { name: "Personal Care", image: GroceryCat7, route: "/personal-care" },
  { name: "Health & Wellness", image: GroceryCat4},
  // { name: "Baby Care", image: GroceryCat9, route: "/baby-care" },
  // { name: "Pet Care", image: GroceryCat10, route: "/pet-care" },
];

const GroceryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
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
            src={Image1}
            alt="Promo 1"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
          />
          <img
            src={Image2}
            alt="Promo 2"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
          />
          <img
            src={Image3}
            alt="Promo 3"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
          />
        </Slider>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center mb-8 gap-4">
        {/* Category Buttons (similar to the original code) */}
      </div>
      <div className="flex justify-center space-x-6 mt-4 flex-wrap">
      {categories.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate(item.route)}
        >
          <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300 shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-2 text-sm font-semibold text-black">
            {item.name}
          </span>
        </div>
      ))}
    </div>

      {/* Cards for each grocery item */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg p-6">
            <Link to={`/grocery/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 sm:h-56 md:h-64 object-contain rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-4">
                  <span className="text-xl font-semibold text-red-500">
                    ₹{item.discountedPrice}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ₹{item.originalPrice}
                  </span>
                </div>
                <p className="text-sm bg-red-500 p-2 rounded-lg text-white">
                  {item.discount}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryPage;
