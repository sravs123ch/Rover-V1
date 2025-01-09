import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { groceryData } from "../constants/index.js";
import { useNavigate } from 'react-router-dom';

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
      {/* Cards for each grocery item */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredItems
          .filter((item) => item.id <= 20) // Only include items with id <= 20
          .map((item) => (
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
