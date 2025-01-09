
import React, { useState } from 'react';

// Example bakery images
const Image1 = require("../../assets/Bakery/b1.jpg");
const Image2 = require("../../assets/Bakery/b2.jpg");
const Image3 = require("../../assets/Bakery/b3.jpg");
const Image4 = require("../../assets/Bakery/b4.jpg");
const Image5 = require("../../assets/Bakery/b5.jpg");
const Image6 = require("../../assets/Bakery/b6.jpg");

export const BakeryItems = [
  {
    id: 1,
    name: 'Chocolate Cake',
    mainImage: Image1,
    price: '₹499',
    description: 'Rich and moist chocolate cake topped with creamy frosting.',
  },
  {
    id: 2,
    name: 'Blueberry Muffin',
    mainImage: Image2,
    price: '₹149',
    description: 'Soft muffin bursting with blueberry flavor.',
  },
  {
    id: 3,
    name: 'Croissant',
    mainImage: Image3,
    price: '₹79',
    description: 'Flaky and buttery croissant, perfect for breakfast.',
  },
  {
    id: 4,
    name: 'Cheesecake',
    mainImage: Image4,
    price: '₹599',
    description: 'Creamy cheesecake with a crunchy biscuit base.',
  },
  {
    id: 5,
    name: 'Cinnamon Roll',
    mainImage: Image5,
    price: '₹129',
    description: 'Delicious cinnamon roll glazed with icing.',
  },
  {
    id: 6,
    name: 'Macarons',
    mainImage: Image6,
    price: '₹349',
    description: 'Assorted colorful macarons with delightful flavors.',
  },
];

const BakeryList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const filteredProducts = BakeryItems.filter((item) => {
    return (
      selectedCategory === '' || item.category === selectedCategory
    );
  });

  const clearFilters = () => {
    setSelectedCategory('');
    setIsFilterVisible(false);
  };

  return (
    <div className="container mx-auto p-10 mt-10 flex flex-col lg:flex-row justify-center max-w-screen-2xl">
      <div className="w-full lg:w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-md">
              <img
                src={item.mainImage}
                alt={item.name}
                className="w-full h-60 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-lg font-bold mb-2 text-center">{item.name}</h2>
              <p className="text-gray-600 mb-2 text-center">{item.price}</p>
              <p className="text-sm text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BakeryList;
