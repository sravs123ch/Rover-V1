import React from 'react';

const HelpCenterPage = () => {
  const helpTopics = [
    {
      id: 1,
      title: 'Shipping & Delivery',
      description: 'Learn more about our shipping methods, delivery times, and costs.',
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h1l3 9h11l3-9h1M5 6h14l1.5 6H3.5L5 6z"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Returns & Refunds',
      description: 'Find out how to return an item and the refund process.',
      icon: (
        <svg
          className="w-8 h-8 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6M9 16h6M7 8h10M5 20h14M3 4h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2z"
          ></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Account Settings',
      description: 'Manage your account information, address, and password.',
      icon: (
        <svg
          className="w-8 h-8 text-yellow-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11v-4m0 8h.01M20.354 4.646a9 9 0 11-16.708 0M12 2.253a10 10 0 100 19.494"
          ></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Payment Methods',
      description: 'Learn about the payment methods we accept and how to add a new one.',
      icon: (
        <svg
          className="w-8 h-8 text-purple-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h1l3 9h11l3-9h1M5 6h14l1.5 6H3.5L5 6z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-0">
      <h1 className="text-3xl font-bold mb-8">Help Center</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {helpTopics.map((topic) => (
          <div key={topic.id} className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4">
            <div className="flex-shrink-0">{topic.icon}</div>
            <div>
              <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
              <p className="text-gray-700">{topic.description}</p>
              <button className="mt-4 text-blue-500 hover:underline">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenterPage;
