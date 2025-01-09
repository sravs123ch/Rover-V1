
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

// Assuming product images are stored in the assets folder
const Baby1Image = require("../../assets/FMCG/Babycare/b1.png");
const Baby2Image = require("../../assets/FMCG/Babycare/b2.png");
const Baby3Image = require("../../assets/FMCG/Babycare/b3.png");
const Baby4Image = require("../../assets/FMCG/Babycare/b4.png");
const Baby5Image = require("../../assets/FMCG/Babycare/b5.png");
const Baby6Image = require("../../assets/FMCG/Babycare/b6.png");

export const earringsProducts = [
    {
      id: 1,
      name: 'Baby Products',
      mainImage: Baby1Image,
    //   images: [earrings1Image, earrings3Image, earrings4Image],
      price: '₹199',
      discountPrice: '₹30,000',
      description: 'Timeless 22K gold hoop earrings with a polished finish, perfect for everyday elegance.',
      karat: '22K',
      weight: '10 grams',
      designs: ['Classic', 'Modern'],
      sizes: ['Small', 'Medium', 'Large']
    },
    {
      id: 2,
      name: 'Baby daycare, Baby clothes',
      mainImage: Baby2Image,
    //   images: [earrings5Image, earrings7Image, earrings1Image],
      price: '₹99',
      discountPrice: '₹20,000',
      description: 'Delicate gold stud earrings featuring intricate floral patterns for a feminine touch.',
      karat: '22K',
      weight: '5 grams',
      designs: ['Floral', 'Geometric'],
      sizes: ['One Size']
    },
    {
      id: 3,
      name: 'Set of accessories for the baby ',
      mainImage: Baby3Image,
      price: '₹499',
      discountPrice: '₹50,000',
      description: 'Elegant dangle chain earrings with a sleek design, ideal for formal occasions.',
      karat: '22K',
      weight: '20 grams',
      designs: ['Minimalist', 'Traditional'],
      sizes: ['Long', 'Medium']
    },
    {
      id: 4,
      name: 'Baby Products',
      mainImage: Baby4Image,
    //   images: [earrings4Image, earrings6Image, earrings7Image],
      price: '₹499',
      discountPrice: '₹95,000',
      description: 'Beautiful 22K gold chandbali earrings with intricate patterns and traditional charm.',
      karat: '22K',
      weight: '50 grams',
      designs: ['Traditional', 'Engraved'],
      sizes: ['Large', 'Medium']
    },
    {
      id: 5,
      name: 'Modern Science Revolutionize Baby Care ',
      mainImage: Baby5Image,
      price: '₹399',
      discountPrice: '₹40,000',
      description: 'Elegant 22K gold earrings with a vibrant ruby centerpiece, exuding sophistication.',
      karat: '22K',
      weight: '15 grams',
      designs: ['Contemporary', 'Classic'],
      sizes: ['One Size']
    },
    {
      id: 6,
      name: 'Baby Products',
      mainImage: Baby1Image,
      price: '2999',
      discountPrice: '₹75,000',
      description: 'Exquisite 22K gold drop earrings with a delicate design for a trendy look.',
      karat: '22K',
      weight: '25 grams',
      designs: ['Delicate', 'Trendy'],
      sizes: ['Short', 'Medium']
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
        <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-12 mb-4">Our Best Child Prodution</h1>
  
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

