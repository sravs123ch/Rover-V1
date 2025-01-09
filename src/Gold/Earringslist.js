
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

// Assuming product images are stored in the assets folder
const earrings1Image = require("../assets/earrings_images/e1.jpg");
const earrings2Image = require("../assets/earrings_images/e2.jpg");
const earrings3Image = require("../assets/earrings_images/e3.jpg");
const earrings4Image = require("../assets/earrings_images/e4.jpg");
const earrings5Image = require("../assets/earrings_images/e5.jpg");
const earrings6Image = require("../assets/earrings_images/e6.jpg");
const earrings7Image = require("../assets/earrings_images/e7.jpg");


export const earringsProducts = [
    {
      id: 1,
      name: '22K Gold Hoop Earrings',
      mainImage: earrings1Image,
      images: [earrings1Image, earrings3Image, earrings4Image],
      price: '₹25,999',
      discountPrice: '₹30,000',
      description: 'Timeless 22K gold hoop earrings with a polished finish, perfect for everyday elegance.',
      karat: '22K',
      weight: '10 grams',
      designs: ['Classic', 'Modern'],
      sizes: ['Small', 'Medium', 'Large']
    },
    {
      id: 2,
      name: 'Stud Earrings with Floral Design',
      mainImage: earrings2Image,
      images: [earrings5Image, earrings7Image, earrings1Image],
      price: '₹15,499',
      discountPrice: '₹20,000',
      description: 'Delicate gold stud earrings featuring intricate floral patterns for a feminine touch.',
      karat: '22K',
      weight: '5 grams',
      designs: ['Floral', 'Geometric'],
      sizes: ['One Size']
    },
    {
      id: 3,
      name: '22K Dangle Chain Earrings',
      mainImage: earrings3Image,
      images: [earrings1Image, earrings2Image, earrings3Image],
      price: '₹45,999',
      discountPrice: '₹50,000',
      description: 'Elegant dangle chain earrings with a sleek design, ideal for formal occasions.',
      karat: '22K',
      weight: '20 grams',
      designs: ['Minimalist', 'Traditional'],
      sizes: ['Long', 'Medium']
    },
    {
      id: 4,
      name: '22K Gold Chandbali Earrings',
      mainImage: earrings4Image,
      images: [earrings4Image, earrings6Image, earrings7Image],
      price: '₹80,999',
      discountPrice: '₹95,000',
      description: 'Beautiful 22K gold chandbali earrings with intricate patterns and traditional charm.',
      karat: '22K',
      weight: '50 grams',
      designs: ['Traditional', 'Engraved'],
      sizes: ['Large', 'Medium']
    },
    {
      id: 5,
      name: 'Ruby Studded Gold Earrings',
      mainImage: earrings5Image,
      price: '₹35,999',
      discountPrice: '₹40,000',
      description: 'Elegant 22K gold earrings with a vibrant ruby centerpiece, exuding sophistication.',
      karat: '22K',
      weight: '15 grams',
      designs: ['Contemporary', 'Classic'],
      sizes: ['One Size']
    },
    {
      id: 6,
      name: 'Gold Drop Earrings',
      mainImage: earrings6Image,
      price: '₹65,999',
      discountPrice: '₹75,000',
      description: 'Exquisite 22K gold drop earrings with a delicate design for a trendy look.',
      karat: '22K',
      weight: '25 grams',
      designs: ['Delicate', 'Trendy'],
      sizes: ['Short', 'Medium']
    },
    {
      id: 7,
      name: 'Gold Hoop Earrings',
      mainImage: earrings7Image,
      price: '₹65,999',
      discountPrice: '₹75,000',
      description: 'Chic 22K gold hoop earrings with a sleek finish, perfect for any occasion.',
      karat: '22K',
      weight: '25 grams',
      designs: ['Delicate', 'Trendy'],
      sizes: ['Small', 'Medium', 'Large']
    },
    {
      id: 8,
      name: 'Pearl Drop Earrings',
      mainImage: earrings1Image,
      price: '₹65,999',
      discountPrice: '₹75,000',
      description: 'Graceful 22K gold earrings with a pearl drop, combining elegance and charm.',
      karat: '22K',
      weight: '25 grams',
      designs: ['Delicate', 'Trendy'],
      sizes: ['One Size']
    },
    {
      id: 9,
      name: 'Gold Stud Earrings',
      mainImage: earrings3Image,
      price: '₹65,999',
      discountPrice: '₹75,000',
      description: 'Sophisticated 22K gold stud earrings with a minimalistic and trendy design.',
      karat: '22K',
      weight: '25 grams',
      designs: ['Minimalist', 'Classic'],
      sizes: ['One Size']
    },
    {
      id: 10,
      name: 'Elegant Gold Earrings',
      mainImage: earrings2Image,
      price: '₹65,999',
      discountPrice: '₹75,000',
      description: 'Beautifully crafted 22K gold earrings, perfect for adding a touch of luxury.',
      karat: '22K',
      weight: '25 grams',
      designs: ['Delicate', 'Classic'],
      sizes: ['One Size']
    }
  ];
  
const sizes = ['Small', 'Medium', 'Large'];
const categories = ['T-shirt', 'Jeans'];

const ProductList = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const filteredProducts =earringsProducts.filter((earrings) => {
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
        <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-12 mb-4">Our Best Earrings Prodution</h1>
  
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

