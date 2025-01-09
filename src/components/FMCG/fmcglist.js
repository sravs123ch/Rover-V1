import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "../../components/Products/productgrid.css";
import Carousel from "react-multi-carousel";
import { FiChevronRight } from "react-icons/fi";

const FMCG1Image = require("../../assets/FMCG/FMCG-C1.png");
const FMCG2Image = require("../../assets/FMCG/FMCG-C2.png");
const FMCG3Image = require("../../assets/FMCG/FMCG-C3.png");
const FMCG4Image = require("../../assets/FMCG/FMCG-C4.png");
const FMCG5Image = require("../../assets/FMCG/FMCG-C5.png");
// const FMCG6Image = require("../../assets/FMCG_images/6.jpg");
const FMCG7Image = require("../../assets/FMCG/FMCG-C7.png");
const FMCG8Image = require("../../assets/FMCG/Skincare/skincare1.png");
const FMCG9Image = require("../../assets/FMCG/Skincare/skincare2.png");
const FMCG10Image = require("../../assets/FMCG/Skincare/skincare3.png");
const FMCG11Image = require("../../assets/FMCG/Skincare/skincare4.png");
const FMCG12Image = require("../../assets/FMCG/Skincare/skincare5.png");

const GoldCat1 = require("../../assets/Gold_Banner_Imges/c-gold1.jpg");
const GoldCat2 = require("../../assets/Gold_Banner_Imges/c-gold2.jpg");
const GoldCat3 = require("../../assets/Gold_Banner_Imges/c-gold3.jpg");
const GoldCat4 = require("../../assets/Gold_Banner_Imges/c-gold4.jpg");
const GoldCat5 = require("../../assets/Gold_Banner_Imges/c-gold5.jpg");
const GoldCat6 = require("../../assets/Gold_Banner_Imges/c-gold6.jpg");
const GoldCat7 = require("../../assets/Gold_Banner_Imges/c-gold7.jpg");
const GoldCat8 = require("../../assets/Gold_Banner_Imges/c-gold8.jpg");
const GoldCat9 = require("../../assets/Gold_Banner_Imges/c-gold10.jpg");
const GoldCat10 = require("../../assets/Gold_Banner_Imges/c-gold11.jpg");
const GoldCat11 = require("../../assets/Gold_Banner_Imges/c-gold12.jpg");
const GoldCat12 = require("../../assets/Gold_Banner_Imges/c-gold9.jpg");

export const goldProducts = [
  {
    id: 1,
    name: '22K Gold Wedding Ring',
    mainImage: FMCG1Image,
    // images: [Gold1Image, Gold3Image, Gold4Image],
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
    name: 'Baby Products',
    mainImage:FMCG2Image,
    // images: [Gold5Image, Gold7Image, Gold8Image],
    price: '₹499',
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
    name: 'Baby daycare, Baby clothes',
    mainImage: FMCG3Image,
    // images: [Gold9Image, Gold2Image, Gold3Image],
    price: '₹499',
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
    name: 'Set of accessories for the baby ',
    mainImage:FMCG4Image,
    // images: [Gold4Image, Gold6Image, Gold7Image],
    price: '₹99',
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
    name: 'Modern Science Revolutionize Baby Care ',
    mainImage: FMCG5Image,
    // images: [Gold8Image, Gold1Image, Gold2Image],
    price: '₹399',
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
    mainImage: FMCG8Image,
    // images: [Gold3Image, Gold5/Image, Gold6Image],
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
    mainImage: FMCG9Image,
    // images: [Gold9Image, Gold10Image, Gold6Image],
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
    name: 'mCaffeine Body Care Gift Set with Berries Body Wash',
    mainImage: FMCG10Image,
    // images: [Gold10Image, Gold10Image, Gold6Image],
    price: '₹299',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  }, {
    id: 9,
    name: 'Vaseline Cocoa Glow Serum In Lotion, 400 ml ',
    mainImage: FMCG11Image,
    // images: [Gold11Image, Gold10Image, Gold6Image],
    price: '₹99',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },{
    id: 10,
    name: 'Boroplus Body Lotion Provides 24Hrs Moisturisation',
    mainImage: FMCG12Image,
    // images: [Gold12Image, Gold1Image, Gold2Image],
    price: '₹199',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
   },
  // {
  //   id: 10,
  //   name: 'Gold Bracelet for Women',
  //   mainImage:FMCG13Image,
  //   // images: [Gold2Image, Gold6Image, Gold7Image],
  //   price: '₹65,999',
  //   discountPrice: '₹75,000',
  //   description: 'Elegant 22K gold bracelet for women with a delicate design.',
  //   karat: '22K',
  //   weight: '25 grams',
  //   designs: ['Delicate', 'Trendy'],
  //   sizes: ['6 inches', '7 inches', '8 inches']
  // },{
  //   id: 11,
  //   name: 'Gold Bracelet for Women',
  //   mainImage: FMCG1Image,
  //   // images: [Gold1Image, Gold2Image, Gold3Image],
  //   price: '₹65,999',
  //   discountPrice: '₹75,000',
  //   description: 'Elegant 22K gold bracelet for women with a delicate design.',
  //   karat: '22K',
  //   weight: '25 grams',
  //   designs: ['Delicate', 'Trendy'],
  //   sizes: ['6 inches', '7 inches', '8 inches']
  // }
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

const categories = [
  { name: "Electronics", image: FMCG1Image, route: "/electronics" },
  { name: "Skin Care", image:FMCG7Image, route: "/skin-care" },
  { name: "Baby Care", image:FMCG2Image, route: "/baby-care" },
  // { name: "Pantry Staples", image:FMCG2Image, route: "/pantry-staples" },
  // { name: "Household Supplies", image:FMCG3Image, route: "/household-supplies" },

];

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
  const navigate = useNavigate();
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

{rowIndex === 0 && (
      <div className="text-center mt-4 mb-8">
        {/* <h1 className="text-3xl font-bold text-black">Explore by Category</h1> */}
       
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
      </div>
    )}
      {/* Show filters only for the first row */}
      {/* {rowIndex === 0 && (
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
      )} */}
      <Carousel
        responsive={responsive}
        infinite={false}
        arrows={filteredRowProducts.length > 3}
        slidesToScroll={1}
      >
        {filteredRowProducts.map((product) => (
          <div key={product.id} className="border p-2 rounded">
            {/* <Link to={`/gold/${product.id}`}> */}
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
            {/* </Link> */}
          </div>
        ))}
       {row.viewAll && (
          <div className="flex justify-center items-center mt-32">
            <Link to="/skin-care" className="flex flex-col items-center">
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

