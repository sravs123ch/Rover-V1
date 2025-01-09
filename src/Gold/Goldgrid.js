import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "../components/Products/productgrid.css";
import Carousel from "react-multi-carousel";
import { FiChevronRight } from "react-icons/fi";

const Gold1Image = require("../assets/gold_images/1.jpg");
const Gold2Image = require("../assets/gold_images/2.jpg");
const Gold3Image = require("../assets/gold_images/3.jpg");
const Gold4Image = require("../assets/gold_images/4.jpg");
const Gold5Image = require("../assets/gold_images/5.jpg");
const Gold6Image = require("../assets/gold_images/6.jpg");
const Gold7Image = require("../assets/gold_images/7.jpg");
const Gold8Image = require("../assets/gold_images/8.jpg");
const Gold9Image = require("../assets/gold_images/9.jpg");
const Gold10Image = require("../assets/gold_images/10.jpg");
const Gold11Image = require("../assets/gold_images/11.jpg");
const Gold12Image = require("../assets/gold_images/12.jpg");


export const goldProducts = [
  {
    id: 1,
    name: '22K Gold Wedding Ring',
    mainImage: Gold1Image,
    images: [Gold1Image, Gold3Image, Gold4Image],
    price: '₹25,999',
    discountPrice: '₹30,000',
    description: 'Elegant 22K gold wedding ring with a smooth finish.',
    karat: '22K',
    weight: '10 grams',
    designs: ['Classic', 'Modern'],
    sizes: ['6', '7', '8', '9', '10'],
    category:'Classic',
  },
  {
    id: 2,
    name: 'Earrings with Diamonds',
    mainImage: Gold5Image,
    images: [Gold5Image, Gold7Image, Gold8Image],
    price: '₹15,499',
    discountPrice: '₹20,000',
    description: 'Beautiful 22K gold stud earrings featuring diamond accents.',
    karat: '22K',
    weight: '5 grams',
    designs: ['Floral', 'Geometric'],
    sizes: ['One Size'],
    category:'Modern'
  },
  {
    id: 3,
    name: 'Gold Chain Necklace',
    mainImage: Gold9Image,
    images: [Gold9Image, Gold2Image, Gold3Image],
    price: '₹45,999',
    discountPrice: '₹50,000',
    description: 'Stunning 22K gold chain necklace with a sleek design.',
    karat: '22K',
    weight: '20 grams',
    designs: ['Minimalist', 'Traditional'],
    sizes: ['16 inches', '18 inches', '20 inches'],
    category:'Modern'
  },
  {
    id: 4,
    name: 'Gold Bangle Set',
    mainImage: Gold4Image,
    images: [Gold4Image, Gold6Image, Gold7Image],
    price: '₹80,999',
    discountPrice: '₹95,000',
    description: '22K gold bangle set with intricate patterns.',
    karat: '22K',
    weight: '50 grams',
    designs: ['Traditional', 'Engraved'],
    sizes: ['2.4', '2.6', '2.8'],
    category:'Floral'
  },
  {
    id: 5,
    name: 'Gold Pendant with Ruby',
    mainImage: Gold8Image,
    images: [Gold8Image, Gold1Image, Gold2Image],
    price: '₹35,999',
    discountPrice: '₹40,000',
    description: '22K gold pendant with a vibrant ruby centerpiece.',
    karat: '22K',
    weight: '15 grams',
    designs: ['Contemporary', 'Classic'],
    sizes: ['One Size']
  },
  {
    id: 6,
    name: 'Gold Bracelet for Women',
    mainImage: Gold3Image,
    images: [Gold3Image, Gold5Image, Gold6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },
  {
    id: 7,
    name: 'Gold Bracelet for Women',
    mainImage: Gold9Image,
    images: [Gold9Image, Gold10Image, Gold6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },
  {
    id: 8,
    name: 'Gold Bracelet for Women',
    mainImage: Gold10Image,
    images: [Gold10Image, Gold10Image, Gold6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  }, {
    id: 9,
    name: 'Gold Bracelet for Women',
    mainImage: Gold11Image,
    images: [Gold11Image, Gold10Image, Gold6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },{
    id: 10,
    name: 'Gold Bracelet for Women',
    mainImage: Gold12Image,
    images: [Gold12Image, Gold1Image, Gold2Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },{
    id: 10,
    name: 'Gold Bracelet for Women',
    mainImage: Gold2Image,
    images: [Gold2Image, Gold6Image, Gold7Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },{
    id: 11,
    name: 'Gold Bracelet for Women',
    mainImage: Gold1Image,
    images: [Gold1Image, Gold2Image, Gold3Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4, // Ensure 4 items on desktop
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const groupProductsIntoRows = (products, itemsPerRow) => {
  const rows = [];
  for (let i = 0; i < products.length; i += itemsPerRow) {
    const rowProducts = products.slice(i, i + itemsPerRow);
    rows.push({
      products: rowProducts,
      viewAll: true,
    });
  }
  return rows;
};

const GoldCarousel = () => {
  const [selectedCategories, setSelectedCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");

  // const handleCategoryClick = (category, rowIndex) => {
  //   setSelectedCategories((prevCategories) => ({
  //     ...prevCategories,
  //     [rowIndex]: category,
  //   }));
  // };

  // const filterProducts = (goldProducts, category) => {
  //   return category
  //     ? goldProducts.filter((product) => product.designs.includes(category))
  //     : goldProducts;
  // };
  // const filterProducts = (goldProducts, category) => {
  //   if (category === "All" || !category) {
  //     return goldProducts;
  //   }
  //   return goldProducts.filter((product) => product.category === category);
  // };
  const filterProducts = (products, category) => {
    if (category === "All") {
      return products;
    }
    return products.filter((product) => product.category === category);
  };
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  
  

  const productRows = groupProductsIntoRows(goldProducts, 4);

return (
  <div className="container mx-auto p-10">
    
    {productRows.map((row, rowIndex) => {
  // Apply the selectedCategory filter to the first row only
  const filteredRowProducts =
    rowIndex === 0 ? filterProducts(row.products, selectedCategory) : row.products;

  return (
    <div key={rowIndex} className="mb-8">
      {/* Show filters only for the first row */}
      {rowIndex === 0 && (
        <div className="text-center mt-4 mb-8">
          <h1 className="text-3xl font-bold text-black">Filter by Categories</h1>
          <div className="flex justify-center space-x-4 mt-4">
            {["All", "Classic", "Modern", "Floral"].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`hover:text-white px-4 py-2 rounded-full hover:bg-blue-600 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "text-black border border-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      <Carousel
        responsive={responsive}
        infinite={false}
        arrows={filteredRowProducts.length > 3}
        slidesToScroll={1}
      >
        {filteredRowProducts.map((product) => (
          <div key={product.id} className="border p-2 rounded">
            <Link to={`/gold/${product.id}`}>
              <img
                src={product.mainImage}
                alt={product.name || "Product Image"}
                className="w-full h-60 object-cover mb-4 rounded-md"
              />
              {product.name && (
                <h2 className="text-lg font-bold mb-2 text-center">
                  {product.name}
                </h2>
              )}
              {product.price && (
                <p className="text-gray-600 mb-2 text-center">
                  {/* {product.discountPrice}{" "} */}
                  <span className="font-bold">{product.price}</span>
                </p>
              )}
            </Link>
          </div>
        ))}
        {row.viewAll && (
          <div className="flex justify-center items-center mt-32">
            <Link to="/gold-list" className="flex flex-col items-center">
              <div className="relative flex items-center justify-center w-10 h-10 bg-white border border-blue-600 rounded-full shadow-md">
                <span className="text-2xl text-blue-600">
                  <FiChevronRight />
                </span>
              </div>
              <span className="mt-2 text-sm font-bold text-black">View All</span>
            </Link>
          </div>
        )}
      </Carousel>
    </div>
  );
})}

  </div>
);

};


export default GoldCarousel;

