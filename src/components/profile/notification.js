import React from 'react';

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      title: 'Order Shipped',
      description: 'Your order #12345 has been shipped and is on its way!',
      time: '2 hours ago',
      type: 'shipping', // This can be used for different types of notifications
    },
    {
      id: 2,
      title: 'New Coupon Available',
      description: 'Use code SAVE20 to get 20% off on your next purchase.',
      time: '1 day ago',
      type: 'promo',
    },
    {
      id: 3,
      title: 'Password Changed',
      description: 'Your password was successfully changed.',
      time: '3 days ago',
      type: 'security',
    },
    // Add more notifications as needed
  ];

  return (
    <div className="container mx-auto p-4 mt-0">
      <h1 className="text-3xl font-bold mb-8">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg shadow-lg flex items-start space-x-4 ${
              notification.type === 'shipping'
                ? 'bg-blue-50'
                : notification.type === 'promo'
                ? 'bg-green-50'
                : 'bg-yellow-50'
            }`}
          >
            <div className="flex-shrink-0">
              {/* You can add icons here depending on the notification type */}
              {notification.type === 'shipping' && (
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
              )}
              {notification.type === 'promo' && (
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
              )}
              {notification.type === 'security' && (
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
              )}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{notification.title}</h2>
              <p className="text-gray-700">{notification.description}</p>
              <p className="text-gray-500 text-sm">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
