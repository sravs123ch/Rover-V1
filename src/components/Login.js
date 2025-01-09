
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginImage from '../assets/logo/Login_1.png'; // Update the path to your image

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({
    Email: '',
    Password: '',
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
    setLoginError('');
  };

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!formData.Email) {
      errors.Email = 'Enter your email';
      valid = false;
    }

    if (!formData.Password) {
      errors.Password = 'Enter your password';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) {
  //     return;
  //   }

  //   try {
  //     const response = await fetch('https://ecommerce-backend-5vf7.onrender.com/api/customerLogin', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log('Login successful:', data);
  //       // Handle successful login (e.g., store tokens, etc.)
        
  //       navigate('/home'); // Navigate to the home page
  //       onClose();
  //       localStorage.setItem('jwtToken', data.token);
  //     } else {
  //       console.error('Login failed');
  //       setLoginError('Please check your email and password.');
  //     }
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //     setLoginError('An error occurred. Please try again later.');
  //   }

  // };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="bg-cover bg-full h-32 rounded-t-lg"
            style={{ backgroundImage: `url(${LoginImage})` }}
          >
            <h2 className="text-2xl font-bold text-white text-center py-8">Login</h2>
          </div>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="border px-4 py-2 w-full rounded"
                placeholder="Enter your email"
              />
              {errors.Email && (
                <p className="text-red-500 text-sm mt-1">{errors.Email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                className="border px-4 py-2 w-full rounded"
                placeholder="Enter your password"
              />
              {errors.Password && (
                <p className="text-red-500 text-sm mt-1">{errors.Password}</p>
              )}
            </div>
            {loginError && (
              <p className="text-red-500 text-sm mt-2 text-center">{loginError}</p>
            )}
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded w-full"
            >
              Login
            </button>
            <div className="text-center mt-4">
              <p className="text-gray-600">or</p>
              <button
                onClick={onClose}
                className="text-blue-500 hover:underline mt-2"
              >
                Continue as Guest
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
