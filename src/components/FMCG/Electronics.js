
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

// Assuming product images are stored in the assets folder
const electronics1Image = require("../../assets/FMCG/Electronics/ele1.png");
const electronics2Image = require("../../assets/FMCG/Electronics/ele2.png");
const electronics3Image = require("../../assets/FMCG/Electronics/ele3.png");
const electronics4Image = require("../../assets/FMCG/Electronics/ele4.png");
const electronics5Image = require("../../assets/FMCG/Electronics/ele5.png");
const electronics6Image = require("../../assets/FMCG/Electronics/ele6.png");
const electronics7Image = require("../../assets/FMCG/Electronics/ele7.png");


    export const electronicsProducts = [
        {
          id: 1,
          name: 'Smartphone X100 Pro',
          mainImage: electronics1Image,
          price: '₹25,999',
          discountPrice: '₹30,000',
          description: 'High-performance smartphone with advanced features, stunning display, and long battery life.',
          specifications: ['6.5-inch display', '128GB Storage', 'Quad Camera'],
          colors: ['Black', 'Silver', 'Blue'],
        },
        {
          id: 2,
          name: 'Vega T-Comfort VHTH-07 Trimmer',
          mainImage: electronics2Image,
          price: '₹499',
          discountPrice: '₹20,000',
          description: 'Compact and stylish wireless earbuds with superior sound quality and noise cancellation.',
          specifications: ['Bluetooth 5.0', 'Water-resistant', '20 Hours Playtime'],
          colors: ['White', 'Black'],
        },
        {
          id: 3,
          name: '2 Girls, 1 Router.',
          mainImage: electronics3Image,
          price: '₹5,999',
          discountPrice: '₹50,000',
          description: 'Ultra HD 4K Smart TV with vibrant colors, smart features, and a sleek design.',
          specifications: ['55-inch display', 'Built-in Apps', 'Voice Control'],
          colors: ['Black', 'Gray'],
        },
        {
          id: 4,
          name: 'Electromagnetic Spectrum',
          mainImage: electronics4Image,
          price: '₹80,999',
          discountPrice: '₹95,000',
          description: 'Powerful gaming laptop with high-end graphics and a lightning-fast processor.',
          specifications: ['Intel i7', '16GB RAM', '512GB SSD'],
          colors: ['Black', 'Red'],
        },
        {
          id: 5,
          name: 'Smartwatch Elite 3',
          mainImage: electronics5Image,
          price: '₹35,999',
          discountPrice: '₹40,000',
          description: 'Stylish smartwatch with fitness tracking, customizable watch faces, and voice assistance.',
          specifications: ['Heart Rate Monitor', 'GPS', '5-Day Battery'],
          colors: ['Silver', 'Gold', 'Black'],
        },
        {
          id: 6,
          name: 'Bluetooth Speaker BoomBox',
          mainImage: electronics6Image,
          price: '₹65,999',
          discountPrice: '₹75,000',
          description: 'Portable Bluetooth speaker with powerful sound, deep bass, and long battery life.',
          specifications: ['360° Sound', 'Waterproof', '24-Hour Playtime'],
          colors: ['Black', 'Blue', 'Green'],
        },
      ];
    
  
const sizes = ['Small', 'Medium', 'Large'];
const categories = ['T-shirt', 'Jeans'];

const ProductList = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const filteredProducts =electronicsProducts.filter((earrings) => {
    return (
      (selectedColor === '' || earrings.color === selectedColor) &&
      (selectedSize === '' || earrings.size === selectedSize) &&
      (selectedCategory === '' || earrings.category === selectedCategory)
    );
  });

  const clearFilters = () => {
    setSelectedColor('');
    setSelectedSize('');
    setSelectedCategory('');
    setIsFilterVisible(false);
  };

  const isAnyFilterApplied = selectedColor || selectedSize || selectedCategory;
  return (
    <div className="container mx-auto p-10 mt-10 flex flex-col lg:flex-row justify-center max-w-screen-2xl">
      <div className="w-full lg:w-4/5">
        <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-12 mb-4">Our Best Electronics Prodution</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((earrings) => (
            <div key={earrings.id} className="border p-4 rounded-lg shadow-md">
              {/* <Link to={`/earrings/${earrings.id}`}> */}
                <img src={earrings.mainImage} alt={earrings.name} className="w-full h-60 object-cover mb-4 rounded-lg" />
                <h2 className="text-lg font-bold mb-2 text-center">{earrings.name}</h2>
                <p className="text-gray-600 mb-2 text-center">{earrings.price}</p>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default ProductList;

