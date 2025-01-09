
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

// Assuming product images are stored in the assets folder
const electronics1Image = require("../../assets/FMCG/Skincare/skincare1.png");
const electronics2Image = require("../../assets/FMCG/Skincare/skincare2.png");
const electronics3Image = require("../../assets/FMCG/Skincare/skincare3.png");
const electronics4Image = require("../../assets/FMCG/Skincare/skincare4.png");
const electronics5Image = require("../../assets/FMCG/Skincare/skincare5.png");
const electronics6Image = require("../../assets/FMCG/Skincare/skincare6.png");
const electronics7Image = require("../../assets/FMCG/Skincare/skincare7.png");

export const earringsProducts = [
    {
      id: 1,
      name: 'mCaffeine Body Care Gift Set with Berries Body Wash',
      mainImage: electronics1Image,
    //   images: [earrings1Image, earrings3Image, earrings4Image],
      price: '₹299',
      discountPrice: '₹30,000',
      description: 'Timeless 22K gold hoop earrings with a polished finish, perfect for everyday elegance.',
      karat: '22K',
      weight: '10 grams',
      designs: ['Classic', 'Modern'],
      sizes: ['Small', 'Medium', 'Large']
    },
    {
      id: 2,
      name: 'Vaseline Cocoa Glow Serum In Lotion, 400 ml ',
      mainImage: electronics2Image,
    //   images: [earrings5Image, earrings7Image, earrings1Image],
      price: '₹199',
      discountPrice: '₹20,000',
      description: 'Delicate gold stud earrings featuring intricate floral patterns for a feminine touch.',
      karat: '22K',
      weight: '5 grams',
      designs: ['Floral', 'Geometric'],
      sizes: ['One Size']
    },
    {
      id: 3,
      name: 'Kozicare Kojic Acid Soap & Glutathione Soap | Bath Soap for Men & Women',
      mainImage: electronics3Image,
      price: '₹79',
      discountPrice: '₹50,000',
      description: 'Elegant dangle chain earrings with a sleek design, ideal for formal occasions.',
      karat: '22K',
      weight: '20 grams',
      designs: ['Minimalist', 'Traditional'],
      sizes: ['Long', 'Medium']
    },
    {
      id: 4,
      name: 'Lux Body Wash Fragrant Skin Black Orchid Scent',
      mainImage: electronics4Image,
    //   images: [earrings4Image, earrings6Image, earrings7Image],
      price: '₹99',
      discountPrice: '₹95,000',
      description: 'Beautiful 22K gold chandbali earrings with intricate patterns and traditional charm.',
      karat: '22K',
      weight: '50 grams',
      designs: ['Traditional', 'Engraved'],
      sizes: ['Large', 'Medium']
    },
    {
      id: 5,
      name: 'Boroplus Body Lotion Provides 24Hrs Moisturisation 100% Ayurvedic Lotion',
      mainImage: electronics5Image,
      price: '₹199',
      discountPrice: '₹40,000',
      description: 'Elegant 22K gold earrings with a vibrant ruby centerpiece, exuding sophistication.',
      karat: '22K',
      weight: '15 grams',
      designs: ['Contemporary', 'Classic'],
      sizes: ['One Size']
    },
    {
      id: 6,
      name: 'The Face Shop Rice Water Bright Foaming Face Wash 50ml, Face Wash for Glowing Skin.',
      mainImage: electronics6Image,
      price: '₹249',
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
        <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-12 mb-4">Our Best SkinCare Prodution</h1>
  
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

