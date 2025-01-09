
// import React, { createContext, useState } from 'react';

// export const GlobalContext = createContext();

// export const GlobalProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const products = [
//     { id: 1, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 2, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 3, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 4, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 5, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 6, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 8, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 9, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 10, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 11, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 12, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     // Add more products as needed
//   ];
//   const [buyNow, setBuyNow] = useState();

//   const addToCart = (item) => {
//     const existingItemIndex = cartItems.findIndex(
//       (cartItem) =>
//         cartItem.id === item.id &&
//         cartItem.color === item.color &&
//         cartItem.size === item.size
//     );

//     let updatedCartItems;

//     if (existingItemIndex !== -1) {
//       // Item with same id, color, and size exists, increase quantity
//       updatedCartItems = cartItems.map((cartItem, index) =>
//         index === existingItemIndex
//           ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//           : cartItem
//       );
//     } 
//     else {
//       // Item does not exist, add it to cart
//       updatedCartItems = [...cartItems, item];
//     }

//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//   };

//   const buyNowCheckout = (id) => {
//     setBuyNow(id);
//   };

//   const updateCart = (newCart) => {
//     setCartItems(newCart);
//   };

//   const getProductById = (id) => {
//     return products.find(product => product.id === id);
//   };

//   return (
//     <GlobalContext.Provider value={{ cartItems, addToCart, updateCart, setCartItems, buyNow, buyNowCheckout, products, getProductById }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [buyNow, setBuyNow] = useState();

  const products = [
    { id: 1, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 2, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 3, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 4, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 5, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 6, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 8, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 9, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 10, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 11, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    { id: 12, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
    // Add more products as needed
  ];

  // Function to get JWT token from local storage
  const getToken = () => {
    return localStorage.getItem('jwtToken');
  };

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.color === item.color &&
        cartItem.size === item.size
    );

    let updatedCartItems;

    if (existingItemIndex !== -1) {
      // Item with same id, color, and size exists, increase quantity
      updatedCartItems = cartItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
    } else {
      // Item does not exist, add it to cart
      updatedCartItems = [...cartItems, item];
    }

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const buyNowCheckout = (id) => {
    setBuyNow(id);
  };

  const updateCart = (newCart) => {
    setCartItems(newCart);
  };

  const getProductById = (id) => {
    return products.find(product => product.id === id);
  };

  return (
    <GlobalContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCart,
        setCartItems,
        buyNow,
        buyNowCheckout,
        products,
        getProductById,
        getToken, // Expose the function to get JWT token
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


// import React, { createContext, useState } from 'react';

// export const GlobalContext = createContext();

// export const GlobalProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [buyNow, setBuyNow] = useState();
//   const [userData, setUserData] = useState({});

//   const products = [
//     { id: 1, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 2, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 3, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 4, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 5, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 6, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 8, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 9, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 10, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 11, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     { id: 12, name: 'Navy and Orange Striped Polo T-Shirt For Men' },
//     // Add more products as needed
//   ];

//   // Function to get JWT token from local storage
//   const getToken = () => {
//     return localStorage.getItem('jwtToken');
//   };

//   const addToCart = (item) => {
//     const existingItemIndex = cartItems.findIndex(
//       (cartItem) =>
//         cartItem.id === item.id &&
//         cartItem.color === item.color &&
//         cartItem.size === item.size
//     );

//     let updatedCartItems;

//     if (existingItemIndex !== -1) {
//       // Item with same id, color, and size exists, increase quantity
//       updatedCartItems = cartItems.map((cartItem, index) =>
//         index === existingItemIndex
//           ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
//           : cartItem
//       );
//     } else {
//       // Item does not exist, add it to cart
//       updatedCartItems = [...cartItems, item];
//     }

//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//   };

//   const buyNowCheckout = (id) => {
//     setBuyNow(id);
//   };

//   const updateCart = (newCart) => {
//     setCartItems(newCart);
//   };

//   const getProductById = (id) => {
//     return products.find(product => product.id === id);
//   };

//   const saveUserData = (data) => {
//     console.log("Saving user data:", data);
//     setUserData(data);
//     localStorage.setItem('userData', JSON.stringify(data));
//   };
  

//   return (
//     <GlobalContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         updateCart,
//         setCartItems,
//         buyNow,
//         buyNowCheckout,
//         products,
//         getProductById,
//         getToken, // Expose the function to get JWT token
//         userData, // Expose userData
//         saveUserData, // Expose function to save user data
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };
