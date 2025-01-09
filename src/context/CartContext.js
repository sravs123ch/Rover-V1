

import React, { createContext, useState } from 'react';

// Create a context object
const CartContext = createContext();


// Create a provider component
const CartProvider = ({ children }) => {
  // Initialize cart items from local storage or empty array
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  const products = [
    {
      id: 1,
      name: 'Navy and Orange Striped Polo T-Shirt For Men',
      mainImage: require('../assets/product_images/1.jpg'),
      images: [
        require('../assets/product_images/5.jpg'),
        require('../assets/product_images/2.jpg'),
        require('../assets/product_images/3.jpg'),
        require('../assets/product_images/4.jpg')
      ],
      price: '799',
      discountPrice: '1999',
      description: 'Solid Polos',
      colors: ['#173F5F', '#F6D55C'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 2,
      name: 'Navy and Orange Striped Polo T-Shirt For Men',
      mainImage: require('../assets/product_images/2.jpg'),
      images: [
        require('../assets/product_images/Product_cat/pro_2.3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg'),
        require('../assets/product_images/Product_cat/Pro_3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg')
      ],
      price: '799',
      discountPrice: '1999',
      description: 'Solid Polos',
      colors: ['#173F5F', '#F6D55C'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 3,
      name: 'Navy and Orange Striped Polo T-Shirt For Men',
      mainImage: require('../assets/product_images/2.jpg'),
      images: [
        require('../assets/product_images/Product_cat/pro_2.3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg'),
        require('../assets/product_images/Product_cat/Pro_3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg')
      ],
      price: '799',
      discountPrice: '1999',
      description: 'Solid Polos',
      colors: ['#173F5F', '#F6D55C'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 4,
      name: 'Navy and Orange Striped Polo T-Shirt For Men',
      mainImage: require('../assets/product_images/2.jpg'),
      images: [
        require('../assets/product_images/Product_cat/pro_2.3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg'),
        require('../assets/product_images/Product_cat/Pro_3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg')
      ],
      price: '799',
      discountPrice: '1999',
      description: 'Solid Polos',
      colors: ['#173F5F', '#F6D55C'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 5,
      name: 'Navy and Orange Striped Polo T-Shirt For Men',
      mainImage: require('../assets/product_images/2.jpg'),
      images: [
        require('../assets/product_images/Product_cat/pro_2.3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg'),
        require('../assets/product_images/Product_cat/Pro_3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg')
      ],
      price: '799',
      discountPrice: '1999',
      description: 'Solid Polos',
      colors: ['#173F5F', '#F6D55C'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 6,
      name: 'Navy and Orange Striped Polo T-Shirt For Men',
      mainImage: require('../assets/product_images/2.jpg'),
      images: [
        require('../assets/product_images/Product_cat/pro_2.3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg'),
        require('../assets/product_images/Product_cat/Pro_3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg')
      ],
      price: '799',
      discountPrice: '1999',
      description: 'Solid Polos',
      colors: ['#173F5F', '#F6D55C'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 7,
      name: 'Navy and Orange Striped Polo T-Shirt For Men',
      mainImage: require('../assets/product_images/2.jpg'),
      images: [
        require('../assets/product_images/Product_cat/pro_2.3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg'),
        require('../assets/product_images/Product_cat/Pro_3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg')
      ],
      price: '799',
      discountPrice: '1999',
      description: 'Solid Polos',
      colors: ['#173F5F', '#F6D55C'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
      {
        id: 8,
        name: 'Navy and Orange Striped Polo T-Shirt For Men',
        mainImage: require('../assets/product_images/2.jpg'),
        images: [
          require('../assets/product_images/Product_cat/pro_2.3.jpg'),
          require('../assets/product_images/Product_cat/Pro_2.jpg'),
          require('../assets/product_images/Product_cat/Pro_3.jpg'),
          require('../assets/product_images/Product_cat/Pro_2.jpg')
        ],
        price: '799',
        discountPrice: '1999',
        description: 'Solid Polos',
        colors: ['#173F5F', '#F6D55C'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
      },
    {
      id: 9,
      name: 'Navy and Orange Striped Polo T-Shirt For Men',
      mainImage: require('../assets/product_images/2.jpg'),
      images: [
        require('../assets/product_images/Product_cat/pro_2.3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg'),
        require('../assets/product_images/Product_cat/Pro_3.jpg'),
        require('../assets/product_images/Product_cat/Pro_2.jpg')
      ],
      price: '799',
      discountPrice: '1999',
      description: 'Solid Polos',
      colors: ['#173F5F', '#F6D55C'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 10,
      name: 'Navy and Orange Striped Polo T-Shirt For Men',
      mainImage: require('../assets/product_images/1.jpg'),
      images: [
        require('../assets/product_images/5.jpg'),
        require('../assets/product_images/2.jpg'),
        require('../assets/product_images/3.jpg'),
        require('../assets/product_images/4.jpg')
      ],
      price: '799',
      discountPrice: '1999',
      description: 'Solid Polos',
      colors: ['#173F5F', '#F6D55C'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 11,
      name: 'Navy and Orange Striped Polo T-Shirt For Men',
      mainImage: require('../assets/product_images/1.jpg'),
      images: [
        require('../assets/product_images/5.jpg'),
        require('../assets/product_images/2.jpg'),
        require('../assets/product_images/3.jpg'),
        require('../assets/product_images/4.jpg')
      ],
      price: '799',
      discountPrice: '1999',
      description: 'Solid Polos',
      colors: ['#173F5F', '#F6D55C'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 12,
      name: 'Navy and Orange Striped Polo T-Shirt For Men',
      mainImage: require('../assets/product_images/1.jpg'),
      images: [
        require('../assets/product_images/5.jpg'),
        require('../assets/product_images/2.jpg'),
        require('../assets/product_images/3.jpg'),
        require('../assets/product_images/4.jpg')
      ],
      price: '799',
      discountPrice: '1999',
      description: 'Solid Polos',
      colors: ['#173F5F', '#F6D55C'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
  ];
    
  const [buyNow , setBuyNow] = useState();

  const buyNowCheckout = (id) =>{
    setBuyNow(id);
  }

  const clearCart = () => {
    setCartItems([]);
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    // localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateCart = (newCart) => {
    setCartItems(newCart);
    // localStorage.setItem('cart', JSON.stringify(newCart));
  };

  


  // Provide cart items and addToCart function to child components
  return (
    <CartContext.Provider value={{ cartItems, addToCart ,updateCart, setCartItems, clearCart ,buyNow, buyNowCheckout ,products}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };