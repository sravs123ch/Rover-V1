
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

// Assuming product images are stored in the assets folder
const Diamond1Image = require("../assets/Diamond_Images/d1.jpg");
const Diamond2Image = require("../assets/Diamond_Images/d2.jpg");
const Diamond3Image = require("../assets/Diamond_Images/d3.jpg");
const Diamond4Image = require("../assets/Diamond_Images/d4.jpg");
const Diamond5Image = require("../assets/Diamond_Images/d5.jpg");
const Diamond6Image = require("../assets/Diamond_Images/d6.jpg");
const Diamond7Image = require("../assets/Diamond_Images/d7.jpg");


export const DiamondProducts = [
  {
    id: 1,
    name: 'Regal Diamond Necklace',
    mainImage: Diamond1Image,
    images: [Diamond1Image, Diamond3Image, Diamond4Image],
    price: '₹25,999',
    discountPrice: '₹30,000',
    description: 'Elegant 22K Diamond wedding ring with a smooth finish.',
    karat: '22K',
    weight: '10 grams',
    designs: ['Classic', 'Modern'],
    sizes: ['6', '7', '8', '9', '10']
  },
  {
    id: 2,
    name: ' Bridal Long Diamond Necklace Set for Women',
    mainImage: Diamond2Image,
    images: [Diamond5Image, Diamond7Image, Diamond1Image],
    price: '₹15,499',
    discountPrice: '₹20,000',
    description: 'Beautiful 22K Diamond stud earrings featuring diamond accents.',
    karat: '22K',
    weight: '5 grams',
    designs: ['Floral', 'Geometric'],
    sizes: ['One Size']
  },
  {
    id: 3,
    name: 'Real Diamond',
    mainImage: Diamond3Image,
    images: [Diamond1Image, Diamond2Image, Diamond3Image],
    price: '₹45,999',
    discountPrice: '₹50,000',
    description: 'Stunning 22K Diamond chain necklace with a sleek design.',
    karat: '22K',
    weight: '20 grams',
    designs: ['Minimalist', 'Traditional'],
    sizes: ['16 inches', '18 inches', '20 inches']
  },
  {
    id: 4,
    name: 'Real Diamonds Pear Festoon Diamond Necklace Set',
    mainImage: Diamond4Image,
    images: [Diamond4Image, Diamond6Image, Diamond7Image],
    price: '₹80,999',
    discountPrice: '₹95,000',
    description: '22K Diamond bangle set with intricate patterns.',
    karat: '22K',
    weight: '50 grams',
    designs: ['Traditional', 'Engraved'],
    sizes: ['2.4', '2.6', '2.8']
  },
  {
    id: 5,
    name: 'Diamond Pendant with Ruby',
    mainImage: Diamond5Image,
    // images: [Diamond8Image, Diamond1Image, Diamond2Image],
    price: '₹35,999',
    discountPrice: '₹40,000',
    description: '22K Diamond pendant with a vibrant ruby centerpiece.',
    karat: '22K',
    weight: '15 grams',
    designs: ['Contemporary', 'Classic'],
    sizes: ['One Size']
  },
  {
    id: 6,
    name: 'Diamond',
    mainImage: Diamond6Image,
    // images: [Diamond3Image, Diamond5Image, Diamond6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K Diamond bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },
  {
    id: 7,
    name: 'Diamond Necklace Set for Women',
    mainImage: Diamond7Image,
    // images: [Diamond9Image, Diamond10Image, Diamond6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K Diamond bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },
  {
    id: 8,
    name: 'Diamond Bracelet for Women',
    mainImage: Diamond1Image,
    // images: [Diamond10Image, Diamond1Image, Diamond6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K Diamond bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  }, {
    id: 9,
    name: 'Diamond Bracelet for Women',
    mainImage: Diamond3Image,
    // images: [Diamond11Image, Diamond10Image, Diamond6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K Diamond bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },{
    id: 9,
    name: 'Diamond Bracelet for Women',
    mainImage: Diamond2Image,
    // images: [Diamond12Image, Diamond1Image, Diamond2Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K Diamond bracelet for women with a delicate design.',
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

  const filteredProducts =DiamondProducts.filter((Diamond) => {
    return (
      (selectedColor === '' || Diamond.color === selectedColor) &&
      (selectedSize === '' || Diamond.size === selectedSize) &&
      (selectedCategory === '' || Diamond.category === selectedCategory)
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
        <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-12 mb-4">Our Best Diamond Prodution</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((Diamond) => (
            <div key={Diamond.id} className="border p-4 rounded-lg shadow-md">
              {/* <Link to={`/Diamond/${Diamond.id}`}> */}
                <img src={Diamond.mainImage} alt={Diamond.name} className="w-full h-60 object-cover mb-4 rounded-lg" />
                <h2 className="text-lg font-bold mb-2 text-center">{Diamond.name}</h2>
                <p className="text-gray-600 mb-2 text-center">{Diamond.price}</p>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default ProductList;

