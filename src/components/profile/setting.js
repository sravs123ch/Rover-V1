import React from 'react';

const SettingsPage = () => {
  const settingsSections = [
    {
      id: 1,
      title: 'Personal Information',
      description: 'Update your name, email, and phone number.',
      fields: [
        { label: 'Full Name', type: 'text', placeholder: 'John Doe' },
        { label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
        { label: 'Phone Number', type: 'text', placeholder: '+1234567890' },
      ],
    },
    {
      id: 2,
      title: 'Password & Security',
      description: 'Change your password and manage security settings.',
      fields: [
        { label: 'Current Password', type: 'password', placeholder: '********' },
        { label: 'New Password', type: 'password', placeholder: '********' },
        { label: 'Confirm New Password', type: 'password', placeholder: '********' },
      ],
    },
    {
      id: 3,
      title: 'Address Information',
      description: 'Manage your delivery addresses.',
      fields: [
        { label: 'Street Address', type: 'text', placeholder: '123 Main St' },
        { label: 'City', type: 'text', placeholder: 'City Name' },
        { label: 'Postal Code', type: 'text', placeholder: '12345' },
      ],
    },
    {
      id: 4,
      title: 'Payment Methods',
      description: 'Add or remove payment methods.',
      fields: [
        { label: 'Credit Card Number', type: 'text', placeholder: 'XXXX-XXXX-XXXX-1234' },
        { label: 'Expiration Date', type: 'text', placeholder: 'MM/YY' },
        { label: 'CVV', type: 'text', placeholder: '***' },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-0">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="space-y-12">
        {settingsSections.map((section) => (
          <div key={section.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <form className="space-y-4">
              {section.fields.map((field, index) => (
                <div key={index}>
                  <label className="block text-gray-700 font-medium mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
              ))}
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Save Changes
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
