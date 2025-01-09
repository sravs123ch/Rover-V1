

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

// Assuming product images are stored in the assets folder
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
    sizes: ['6', '7', '8', '9', '10']
  },
  {
    id: 2,
    name: 'Gold Stud Earrings with Diamonds',
    mainImage: Gold5Image,
    images: [Gold5Image, Gold7Image, Gold8Image],
    price: '₹15,499',
    discountPrice: '₹20,000',
    description: 'Beautiful 22K gold stud earrings featuring diamond accents.',
    karat: '22K',
    weight: '5 grams',
    designs: ['Floral', 'Geometric'],
    sizes: ['One Size']
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
    sizes: ['16 inches', '18 inches', '20 inches']
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
    sizes: ['2.4', '2.6', '2.8']
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
    images: [Gold10Image, Gold1Image, Gold6Image],
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
    id: 9,
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
  }
];


const sizes = ['Small', 'Medium', 'Large'];
const categories = ['T-shirt', 'Jeans'];

const ProductList = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const filteredProducts =goldProducts.filter((gold) => {
    return (
      (selectedColor === '' || gold.color === selectedColor) &&
      (selectedSize === '' || gold.size === selectedSize) &&
      (selectedCategory === '' || gold.category === selectedCategory)
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
        <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-12 mb-4">Our Best Jewellery Prodution</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((gold) => (
            <div key={gold.id} className="border p-4 rounded-lg shadow-md">
              <Link to={`/gold/${gold.id}`}>
                <img src={gold.mainImage} alt={gold.name} className="w-full h-60 object-cover mb-4 rounded-lg" />
                <h2 className="text-lg font-bold mb-2 text-center">{gold.name}</h2>
                <p className="text-gray-600 mb-2 text-center">{gold.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default ProductList;

