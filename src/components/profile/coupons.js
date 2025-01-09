import React from 'react';

const CouponsPage = () => {
  const coupons = [
    {
      id: 1,
      code: 'SAVE20',
      description: 'Get 20% off on your next purchase',
      expiry: 'Expires on 31st August, 2024',
      discount: '20%',
    },
    {
      id: 2,
      code: 'FREESHIP',
      description: 'Free shipping on orders over $50',
      expiry: 'Expires on 30th September, 2024',
      discount: 'Free Shipping',
    },
    {
      id: 3,
      code: 'BUY1GET1',
      description: 'Buy one, get one free on select items',
      expiry: 'Expires on 15th October, 2024',
      discount: 'BOGO',
    },
    // Add more coupons as needed
  ];

  return (
    <div className="container mx-auto p-4 mt-0">
      <h1 className="text-3xl font-bold mb-8">Available Coupons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon) => (
          <div key={coupon.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{coupon.code}</h2>
              <p className="text-gray-700 mb-4">{coupon.description}</p>
              <p className="text-gray-500 mb-4">{coupon.expiry}</p>
              <p className="text-lg font-bold text-green-600 mb-4">{coupon.discount}</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Apply Coupon
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponsPage;
