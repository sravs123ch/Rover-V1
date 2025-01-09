
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

// Assuming product images are stored in the assets folder
const Silver1Image = require("../assets/Silver_Images/s1.jpg");
const Silver2Image = require("../assets/Silver_Images/s2.jpg");
const Silver3Image = require("../assets/Silver_Images/s3.jpg");
const Silver4Image = require("../assets/Silver_Images/s4.jpg");
const Silver5Image = require("../assets/Silver_Images/s5.jpg");
const Silver6Image = require("../assets/Silver_Images/s6.jpg");
const Silver7Image = require("../assets/Silver_Images/s7.jpg");


export const SilverProducts = [
  {
    id: 1,
    name: '22K Silver Wedding Ring',
    mainImage: Silver1Image,
    images: [Silver1Image, Silver3Image, Silver4Image],
    price: '₹25,999',
    discountPrice: '₹30,000',
    description: 'Elegant 22K Silver wedding ring with a smooth finish.',
    karat: '22K',
    weight: '10 grams',
    designs: ['Classic', 'Modern'],
    sizes: ['6', '7', '8', '9', '10']
  },
  {
    id: 2,
    name: 'Silver Stud Earrings with Diamonds',
    mainImage: Silver5Image,
    images: [Silver5Image, Silver7Image, Silver1Image],
    price: '₹15,499',
    discountPrice: '₹20,000',
    description: 'Beautiful 22K Silver stud earrings featuring diamond accents.',
    karat: '22K',
    weight: '5 grams',
    designs: ['Floral', 'Geometric'],
    sizes: ['One Size']
  },
  {
    id: 3,
    name: 'Silver Chain Necklace',
    mainImage: Silver1Image,
    images: [Silver1Image, Silver2Image, Silver3Image],
    price: '₹45,999',
    discountPrice: '₹50,000',
    description: 'Stunning 22K Silver chain necklace with a sleek design.',
    karat: '22K',
    weight: '20 grams',
    designs: ['Minimalist', 'Traditional'],
    sizes: ['16 inches', '18 inches', '20 inches']
  },
  {
    id: 4,
    name: 'Silver Bangle Set',
    mainImage: Silver4Image,
    images: [Silver4Image, Silver6Image, Silver7Image],
    price: '₹80,999',
    discountPrice: '₹95,000',
    description: '22K Silver bangle set with intricate patterns.',
    karat: '22K',
    weight: '50 grams',
    designs: ['Traditional', 'Engraved'],
    sizes: ['2.4', '2.6', '2.8']
  },
  {
    id: 5,
    name: 'Silver Pendant with Ruby',
    mainImage: Silver4Image,
    images: [Silver4Image, Silver7Image, Silver6Image],
    price: '₹35,999',
    discountPrice: '₹40,000',
    description: '22K Silver pendant with a vibrant ruby centerpiece.',
    karat: '22K',
    weight: '15 grams',
    designs: ['Contemporary', 'Classic'],
    sizes: ['One Size']
  },
  {
    id: 6,
    name: 'Silver Bracelet for Women',
    mainImage: Silver3Image,
    images: [Silver3Image, Silver5Image, Silver6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K Silver bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },
  {
    id: 7,
    name: 'Silver Bracelet for Women',
    mainImage: Silver7Image,
    images: [Silver7Image, Silver6Image, Silver5Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K Silver bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },
  {
    id: 8,
    name: 'Silver Bracelet for Women',
    mainImage: Silver2Image,
    images: [Silver2Image, Silver1Image, Silver6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K Silver bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  }, {
    id: 9,
    name: 'Silver Bracelet for Women',
    mainImage: Silver6Image,
    images: [Silver6Image, Silver1Image, Silver5Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K Silver bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  }
];


const sizes = ['Small', 'Medium', 'Large'];
const categories = ['T-shirt', 'Jeans'];

const ProductList = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const filteredProducts =SilverProducts.filter((Silver) => {
    return (
      (selectedColor === '' || Silver.color === selectedColor) &&
      (selectedSize === '' || Silver.size === selectedSize) &&
      (selectedCategory === '' || Silver.category === selectedCategory)
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
        <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-12 mb-4">Our Best Silver Prodution</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((Silver) => (
            <div key={Silver.id} className="border p-4 rounded-lg shadow-md">
              {/* <Link to={`/Silver/${Silver.id}`}> */}
                <img src={Silver.mainImage} alt={Silver.name} className="w-full h-60 object-cover mb-4 rounded-lg" />
                <h2 className="text-lg font-bold mb-2 text-center">{Silver.name}</h2>
                <p className="text-gray-600 mb-2 text-center">{Silver.price}</p>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default ProductList;

