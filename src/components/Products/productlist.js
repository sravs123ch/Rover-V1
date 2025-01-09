

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

// Assuming product images are stored in the assets folder
const product1Image = require('../../assets/product_images/1.jpg');
const product2Image = require('../../assets/product_images/2.jpg');
const product3Image = require('../../assets/product_images/5.jpg');
const product4Image = require('../../assets/product_images/4.jpg');
const product5Image = require('../../assets/product_images/3.jpg');
const product6Image = require('../../assets/product_images/6.jpg');
const product7Image = require('../../assets/product_images/7.jpg');
const product8Image = require('../../assets/product_images/8.jpg');
const product9Image = require('../../assets/product_images/9.jpg');
const product10Image = require('../../assets/product_images/10.jpg');
const product11Image = require('../../assets/product_images/11.jpg');
const product12Image = require('../../assets/product_images/12.jpg');
const product13Image = require('../../assets/product_images/13.jpg');
const product14Image = require('../../assets/product_images/14.jpg');
const product15Image = require('../../assets/product_images/15.jpg');
const product16Image = require('../../assets/product_images/16.jpg');
const product17Image = require('../../assets/product_images/17.jpg');
const product18Image = require('../../assets/product_images/18.jpg');
const product19Image = require('../../assets/product_images/19.jpg');
const product20Image = require('../../assets/product_images/20.jpg');
const product21Image = require('../../assets/product_images/21.jpg');
const product22Image = require('../../assets/product_images/22.jpg');
const product23Image = require('../../assets/product_images/23.jpg');
const product24Image = require('../../assets/product_images/24.jpg');
const product25Image = require('../../assets/product_images/25.jpg');
const product26Image = require('../../assets/product_images/26.jpg');
const product27Image = require('../../assets/product_images/27.jpg');
const product28Image = require('../../assets/product_images/28.jpg');
const product29Image = require('../../assets/product_images/29.jpg');
const product30Image = require('../../assets/product_images/30.jpg');
const product31Image = require('../../assets/product_images/31.jpg');
const product32Image = require('../../assets/product_images/32.jpg');


const products = [
  { id: 1, name: 'Blue and orange Polo T-shirt', image: product1Image, price: '799', color: 'blue', size: 'M', category: 'T-shirt' },
  { id: 2, name: 'Black Flat Knit Men s Polo T-Shirt', image: product2Image, price: '999', color: 'black', size: 'L', category: 'T-shirt' },
  { id: 3, name: 'Orange Flat Knit Mens Polo T-Shirt', image: product3Image, price: '999', color: 'orange', size: 'S', category: 'T-shirt' },
  { id: 4, name: 'Orange Flat Knit Mens Polo T-Shirt', image: product4Image, price: '999', color: 'orange', size: 'M', category: 'T-shirt' },
  { id: 5, name: 'Red Flat Mens Polo T-Shirt', image: product5Image, price: '999', color: 'red', size: 'L', category: 'T-shirt' },
  { id: 6, name: 'Blue Flat Mens Polo T-Shirt', image: product6Image, price: '899', color: 'blue', size: 'S', category: 'T-shirt' },
  { id: 7, name: 'Orange Flat Knit Mens Polo Jeans', image: product7Image, price: '699', color: 'orange', size: 'M', category: 'Jeans' },
  { id: 8, name: 'Red Flat Knit Mens Polo Jeans', image: product8Image, price: '899', color: 'red', size: 'L', category: 'Jeans' },
  { id: 9, name: 'Green Flat Knit Mens Polo Jeans', image: product9Image, price: '999', color: 'green', size: 'S', category: 'Jeans' },
  { id: 10, name: 'Blue Flat Knit Mens Polo Jeans', image: product10Image, price: '1299', color: 'blue', size: 'M', category: 'Jeans' },
  { id: 11, name: 'Orange Flat Knit Mens Polo T-Shirt', image: product11Image, price: '1399', color: 'orange', size: 'L', category: 'T-shirt' },
  { id: 12, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product12Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 13, name: 'Plain T-Shirts', image: product13Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 14, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product14Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 15, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product15Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 16, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product16Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 17, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product17Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 18, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product18Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 19, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product19Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 20, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product20Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 21, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product21Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 22, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product22Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 23, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product23Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 24, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product24Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 25, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product25Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 26, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product26Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 27, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product27Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 28, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product28Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 29, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product29Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 30, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product30Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 31, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product31Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
  { id: 32, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product32Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
];

const colors = ['Blue', 'Black', 'Orange', 'Red', 'Green', 'Yellow'];
const sizes = ['Small', 'Medium', 'Large'];
const categories = ['T-shirt', 'Jeans'];

const ProductList = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const filteredProducts = products.filter((product) => {
    return (
      (selectedColor === '' || product.color === selectedColor) &&
      (selectedSize === '' || product.size === selectedSize) &&
      (selectedCategory === '' || product.category === selectedCategory)
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
    <div className="container mx-auto p-10 mt-10 flex flex-col lg:flex-row justify-center">
      <div className={`w-full lg:w-1/4 lg:pr-5 ${isFilterVisible ? 'fixed bottom-0 left-0 h-1/2 bg-white z-50 p-5 shadow-2xl lg:static lg:h-auto lg:shadow-none lg:p-0 lg:block' : 'hidden'} lg:block transition-transform transform ${isFilterVisible ? 'translate-y-0' : 'translate-y-full lg:translate-y-0'}`}>
        <h2 className="text-2xl font-bold mb-4 mt-12">Filters</h2>

        {/* Color Filter */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Color</label>
          <Combobox value={selectedColor} onChange={setSelectedColor}>
            <div className="relative">
              <ComboboxInput
                className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(event) => setSelectedColor(event.target.value)}
                displayValue={(color) => color}
                placeholder="Select a color"
              />
              <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </ComboboxButton>
              {colors.length > 0 && (
                <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {colors.map((color, index) => (
                    <ComboboxOption key={index} value={color} className="cursor-default select-none relative py-2 pl-3 pr-9">
                      <span className={`block truncate ${selectedColor === color ? 'font-semibold' : 'font-normal'}`}>{color}</span>
                      {selectedColor === color && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              )}
            </div>
          </Combobox>
        </div>

        {/* Size Filter */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Size</label>
          <Combobox value={selectedSize} onChange={setSelectedSize}>
            <div className="relative">
              <ComboboxInput
                className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(event) => setSelectedSize(event.target.value)}
                displayValue={(size) => size}
                placeholder="Select a size"
              />
              <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </ComboboxButton>
              {sizes.length > 0 && (
                <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {sizes.map((size, index) => (
                    <ComboboxOption key={index} value={size} className="cursor-default select-none relative py-2 pl-3 pr-9">
                      <span className={`block truncate ${selectedSize === size ? 'font-semibold' : 'font-normal'}`}>{size}</span>
                      {selectedSize === size && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              )}
            </div>
          </Combobox>
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Category</label>
          <Combobox value={selectedCategory} onChange={setSelectedCategory}>
            <div className="relative">
              <ComboboxInput
                className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(event) => setSelectedCategory(event.target.value)}
                displayValue={(category) => category}
                placeholder="Select a category"
              />
              <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </ComboboxButton>
              {categories.length > 0 && (
                <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {categories.map((category, index) => (
                    <ComboboxOption key={index} value={category} className="cursor-default select-none relative py-2 pl-3 pr-9">
                      <span className={`block truncate ${selectedCategory === category ? 'font-semibold' : 'font-normal'}`}>{category}</span>
                      {selectedCategory === category && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              )}
            </div>
          </Combobox>
        </div>
        {isAnyFilterApplied && (
      <button
        onClick={clearFilters}
        className="bg-red-500 text-white w-full py-2 rounded mb-4 mt-6"
      >
        Remove Filter
      </button>
    )}
        <button
          onClick={() => setIsFilterVisible(false)}
          className="bg-blue-500 text-white w-full py-2 rounded lg:hidden"
        >
          Apply
        </button>
      </div>
      <div className="w-full lg:w-3/4">
        <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-12 mb-4">Our Best Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-2 rounded">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="w-full h-90 object-cover mb-4 rounded" />
                <h2 className="text-lg font-bold mb-2 text-center">{product.name}</h2>
                <p className="text-gray-600 mb-2 text-center">{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full lg:hidden flex justify-between p-4 bg-white border-t">
        <button
          onClick={() => setIsFilterVisible(true)}
          className="bg-white text-black border border-gray-300 px-4 py-2 rounded"
        >
          Filter
        </button>
        <button
          onClick={() => setIsFilterVisible(false)}
          className="bg-white text-black border border-gray-300 px-4 py-2 rounded"
        >
          Apply
        </button>
      </div>
    </div>
  
  );
};

export default ProductList;

