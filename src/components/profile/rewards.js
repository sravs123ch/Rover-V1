import React from 'react';

const product12Image = require("../../assets/product_images/12.jpg");
const product13Image = require("../../assets/product_images/13.jpg");
const product14Image = require("../../assets/product_images/14.jpg");

const RewardsPage = () => {
  const rewards = [
    {
      id: 1,
      title: '10% Off on Next Purchase',
      pointsRequired: 100,
      description: 'Redeem this reward to get 10% off on your next purchase.',
    //   image: 'https://via.placeholder.com/150',
    
    image: product13Image,
    },
    {
      id: 2,
      title: 'Free Shipping on Orders Over $50',
      pointsRequired: 200,
      description: 'Use this reward to get free shipping on orders over $50.',
    //   image: 'https://via.placeholder.com/150',
    image: product12Image,
    },
    {
      id: 3,
      title: '$5 Discount on Any Purchase',
      pointsRequired: 300,
      description: 'Redeem this reward for a $5 discount on any purchase.',
    //   image: 'https://via.placeholder.com/150',
    image: product14Image,
    },
    // Add more rewards as needed
  ];

  return (
    <div className="container mx-auto p-4 mt-0">
      <h1 className="text-3xl font-bold mb-8">My Rewards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <div key={reward.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={reward.image} alt={reward.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{reward.title}</h2>
              <p className="text-gray-700 mb-4">{reward.description}</p>
              <p className="text-gray-500 mb-4">Points Required: {reward.pointsRequired}</p>
              <button className="w-full text-white py-2 rounded bg-blue-600 hover:bg-blue-700">
                Redeem Reward
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsPage;
