import React, { useRef,useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { groceryData } from "../constants/index";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Importing imagesimport React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/home_banner/WhatsApp Image 2025-01-08 at 15.29.49_44be3ee5.jpg";
import image2 from "../../assets/home_banner/WhatsApp Image 2025-01-08 at 15.33.26_e5075cc5.jpg";
import image3 from "../../assets/home_banner/WhatsApp Image 2025-01-08 at 16.09.49_776a7a4f.jpg";
import Waterproof from '../../assets/images/cementImages/waterProof.jpg';
import EngineeringBrick from '../../assets/images/cementImages/engineering-bricks-178 (1).jpg';
import ConstructionSand from '../../assets/images/sandImages/constractionsand.jpg';
import Steel from '../../assets/images/steelrods.jpg'
import Gold7Image from '../../assets/gold_images/7.jpg';
import GoldBangle from '../../assets/gold_images/4.jpg';
import GoldBracelet from '../../assets/gold_images/6.jpg';
import GoldPendant from '../../assets/gold_images/5.jpg';
import Cola from '../../assets/images/softDrinks/cola.jpg';
import Lemonade from '../../assets/images/softDrinks/Lemonade.jpg';
import OrangeSoda from '../../assets/images/softDrinks/OrangeSoda.jpg';
import GingerAle from '../../assets/images/softDrinks/GingerAle.jpg';
import RootBeer from '../../assets/images/softDrinks/rootBear.jpg';
import SparklingWater from '../../assets/images/softDrinks/SparklingWater.jpg';
import tofu from '../../assets/images/food/tofu.jpg';

import ItalianPizza from '../../assets/images/food/Italian Pizza.jpg'

import Pancakes  from '../../assets/images/food/Pancakes.jpg'

import Burgers from '../../assets/images/food/Burgers.jpg'
import Wood from '../../assets/images/wood.jpg'
import Superfoods from '../../assets/images/food/Superfoods.jpg'


const images = [image1, image2, image3];
// Sample data for construction materials
const constructionData = [
  {
    id: 1,
    name: "Cement",
    image: Waterproof, // Replace with actual image path
    discountedPrice: 300,
    originalPrice: 350,
    discount: "15% Off",
  },
  {
    id: 2,
    name: "Bricks",
    image: EngineeringBrick, // Replace with actual image path
    discountedPrice: 5000,
    originalPrice: 5500,
    discount: "10% Off",
  },
  {
    id: 3,
    name: "sand",
    image: ConstructionSand, // Replace with actual image path
    discountedPrice: 700,
    originalPrice: 800,
    discount: "12% Off",
  },
  {
    id: 3,
    name: "Steel Rods",
    image: Steel, // Replace with actual image path
    discountedPrice: 700,
    originalPrice: 1000,
    discount: "12% Off",
  },
  {
    id: 3,
    name: "Wood",
    image: Wood, // Replace with actual image path
    discountedPrice: 700,
    originalPrice: 1000,
    discount: "12% Off",
  },
];

// Sample data for gold
const goldData = [
  {
    id: 1,
    name: "Gold Necklace",
    image: Gold7Image, // Replace with actual image path
    discountedPrice: 50000,
    originalPrice: 55000,
    discount: "9% Off",
  },
  {
    id: 2,
    name: "Gold Bangle Set",
    image: GoldBangle, // Replace with actual image path
    discountedPrice: 10000,
    originalPrice: 11000,
    discount: "8% Off",
  },
  {
    id: 3,
    name: "Gold Bracelet",
    image: GoldBracelet, // Replace with actual image path
    discountedPrice: 20000,
    originalPrice: 22000,
    discount: "10% Off",
  },
  {
    id: 4,
    name: "Gold Pendant with Ruby",
    image: GoldPendant, // Replace with actual image path
    discountedPrice: 20000,
    originalPrice: 42000,
    discount: "20% Off",
  },
  
];
const softDrinks=[
  { 
    id: 1, 
    name: 'Cola', 
    image: Cola, // Replace with actual image path 
    discountedPrice: 50, 
    originalPrice: 55, 
    discount: '10% off'
  },
  { 
    id: 2, 
    name: 'Lemonade', 
    image: Lemonade, // Replace with actual image path 
    discountedPrice: 40, 
    originalPrice: 47, 
    discount: '15% off'
  },
  { 
    id: 3, 
    name: 'Orange Soda', 
    image: OrangeSoda, // Replace with actual image path 
    discountedPrice: 45, 
    originalPrice: 50, 
    discount: '5% off'
  },
  { 
    id: 4, 
    name: 'Ginger Ale', 
    image: GingerAle, // Replace with actual image path 
    discountedPrice: 60, 
    originalPrice: 75, 
    discount: '20% off'
  },
  { 
    id: 5, 
    name: 'Sparkling Water', 
    image: SparklingWater, // Replace with actual image path 
    discountedPrice: 60, 
    originalPrice: 75, 
    discount: '20% off'
  }
];
const Food = [
  { 
    id: 1, 
    name: 'Vegan & Vegetarian', 
    price: '₹150', 
    discount: '10% off', 
    category: 'Vegan & Vegetarian', 
    image: tofu, 
    discountedPrice: 135, // ₹150 - 10% off 
    originalPrice: 150 
  },

  { 
    id: 6, 
    name: 'Ethnic Foods', 
    price: '₹500', 
    discount: '10% off', 
    category: 'Ethnic Foods', 
    image: ItalianPizza, 
    discountedPrice: 450, // ₹500 - 10% off 
    originalPrice: 500 
  },

  { 
    id: 11, 
    name: 'Breakfast Foods', 
    price: '₹180', 
    discount: '10% off', 
    category: 'Breakfast Foods', 
    image: Pancakes, 
    discountedPrice: 162, // ₹180 - 10% off 
    originalPrice: 180 
  },
  { 
    id: 16, 
    name: 'Burgers', 
    price: '₹250', 
    discount: '10% off', 
    category: 'Fast Food', 
    image: Burgers, 
    discountedPrice: 225, // ₹250 - 10% off 
    originalPrice: 250 
  },
  { 
    id: 20, 
    name: 'Superfoods', 
    price: '₹400', 
    discount: '10% off', 
    category: 'Health Foods', 
    image: Superfoods, 
    discountedPrice: 360, // ₹400 - 10% off 
    originalPrice: 400 
  },
];


const Home = () => {
  const navigate = useNavigate(); // Hook for navigation
  const scrollRef = useRef(null);
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
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      if (direction === "left") {
        scrollRef.current.scrollBy({
          left: -300,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        scrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }
  };

  const handleProductClick = (product, category) => {
    let route = "";

    // Determine route based on category
    if (category === "gold") {
      route = "/gold";
    } else if (category === "groceries") {
      route = "/groceries";
    }  else if (category === "softDrinks") {
      route = "/softDrinks";
    } else if (category === "Food") {
      route = "/food";
    } 
    else {
      const formattedName = product.name.toLowerCase().replace(/\s+/g, "-"); // Format name for URL
      route = `/product-list/${formattedName}`;
    }

    navigate(route, { state: product });
  };

  const renderProductCards = (data, category) =>
    data.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-lg shadow-lg p-6 cursor-pointer w-80 flex-shrink-0 border border-gray-300 mb-4"
        onClick={() => handleProductClick(item, category)} // Pass category
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-contain rounded-md mb-4"
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
      </div>
    ));

  return (
    <div className="pt-34">
      {/* Carousel
      <div className="w-full h-[800px] overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`carousel-${index}`}
                className="object-cover w-full"
              />
            </div>
          ))}
        </Slider>
      </div> */}
      <div className="mb-8">
        <Slider {...imageCarouselSettings}>
          <img
            src={image1}
            alt="Promo 1"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
          />
          <img
            src={image2}
            alt="Promo 2"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
          />
          <img
            src={image3}
            alt="Promo 3"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
          />
        </Slider>
      </div>

      {/* Cards below the carousel */}
      <div className="container mx-auto relative">
        {/* Construction Materials Heading */}
        <h1 className="mx-auto py-6 text-4xl font-semibold">Construction Materials</h1>

        {/* Construction Materials Section */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar scrolling-touch">
          {renderProductCards(constructionData, "construction")}
        </div>

        {/* Gold Heading */}
        <h1 className="mx-auto py-6 text-4xl font-semibold">Gold</h1>

        {/* Gold Section */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar scrolling-touch">
          {renderProductCards(goldData, "gold")}
        </div>

        {/* Groceries Section */}
        <h1 className="mx-auto py-6 text-4xl font-semibold">Groceries</h1>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar scrolling-touch">
          {renderProductCards(groceryData, "groceries")}
        </div>
          {/* Groceries Section */}
          <h1 className="mx-auto py-6 text-4xl font-semibold">Soft Drinks</h1>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar scrolling-touch">
          {renderProductCards(softDrinks, "softDrinks")}
        </div>
        <h1 className="mx-auto py-6 text-4xl font-semibold">Food</h1>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar scrolling-touch">
          {renderProductCards(Food, "Food")}
        </div>
      </div>
    </div>
  );
};

export default Home;

