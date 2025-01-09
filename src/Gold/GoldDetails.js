// import React, { useState, useEffect, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// // import Comments from '../comments';
// import { GlobalContext } from '../context/GlobalContext' ; 
// // Sample products array

// const goldProducts = [
//   {
//     id: 1,
//     name: '22K Gold Wedding Ring',
//     mainImage: require('../assets/gold_images/1.jpg'), // Use the correct path to the image
//     images: [
//       require('../assets/gold_images/2.jpg'),
//       require('../assets/gold_images/3.jpg'),
//       require('../assets/gold_images/4.jpg'),
//     ],
//     price: '₹25,999',
//     discountPrice: '₹29,999',
//     description: 'Elegant 22K gold wedding ring, perfect for your special day.',
//     weight: '10g',
//     purity: '22K',
//     sizes: ['6', '7', '8', '9', '10'],
//   },
//   {
//     id: 2,
//     name: 'Gold Stud Earrings',
//     mainImage: require('../assets/gold_images/1.jpg'),
//     images: [
//       require('../assets/gold_images/2.jpg'),
//       require('../assets/gold_images/3.jpg'),
//     ],
//     price: '₹15,499',
//     discountPrice: '₹17,999',
//     description: 'Beautiful 22K gold stud earrings, a timeless accessory.',
//     weight: '5g',
//     purity: '22K',
//     sizes: ['One Size'],
//   },
//   {
//     id: 3,
//     name: 'Gold Necklace Set',
//     mainImage: require('../assets/gold_images/1.jpg'),
//     images: [
//       require('../assets/gold_images/2.jpg'),
//       require('../assets/gold_images/3.jpg'),
//     ],
//     price: '₹79,999',
//     discountPrice: '₹89,999',
//     description: 'Exquisite gold necklace set with intricate designs.',
//     weight: '50g',
//     purity: '22K',
//     sizes: ['One Size'],
//   },
//   {
//     id: 4,
//     name: '22K Gold Bracelet',
//     mainImage: require('../assets/gold_images/6.jpg'),
//     images: [
//       require('../assets/gold_images/6.jpg'),
//       require('../assets/gold_images/7.jpg'),
//     ],
//     price: '₹35,999',
//     discountPrice: '₹39,999',
//     description: 'Stylish gold bracelet with modern and classic elements.',
//     weight: '15g',
//     purity: '22K',
//     sizes: ['Small', 'Medium', 'Large'],
//   },
//   {
//     id: 5,
//     name: 'Gold Pendant Set',
//     mainImage: require('../assets/gold_images/1.jpg'),
//     images: [
//       require('../assets/gold_images/2.jpg'),
//       require('../assets/gold_images/3.jpg'),
//     ],
//     price: '₹18,999',
//     discountPrice: '₹22,999',
//     description: 'Charming gold pendant set, ideal for casual or formal wear.',
//     weight: '8g',
//     purity: '22K',
//     sizes: ['One Size'],
//   },
// ];

// const responsive = {
//   mobile: {
//     breakpoint: { max: 768, min: 0 },
//     items: 1,
//   },
// };

// const ProductDetails = () => {
//   const { goldId } = useParams();
//   const navigate = useNavigate();

//   const [goldProducts, setGoldProducts] = useState(null);
//   const [selectedImage, setSelectedImage] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const { addToCart } = useContext(GlobalContext); 
//   const { buyNowCheckout } = useContext(GlobalContext);

//   useEffect(() => {
//     const foundProduct = goldProducts.find(p => p.id === parseInt(goldId));
//     setGoldProducts(foundProduct);
//     if (foundProduct) {
//       setSelectedImage(foundProduct.mainImage);
//       setSelectedColor(foundProduct.colors[0]);
//       setSelectedSize(foundProduct.sizes[0]);
//     }
//   }, [goldId]);

//   if (!goldProducts) {
//     return <div>Product not found</div>;
//   }

//   const handleAddToCart = () => {
//     const productToAdd = { 
//       ...goldProducts, 
//       quantity, 
//       color: selectedColor, 
//       size: selectedSize
//     };
//     console.log('Product to add to cart:', productToAdd); // Debugging line
//     addToCart(productToAdd);
//   };
  

//   const handleBuyNow = (id) => {
//     console.log('Product ID:', id);
//     console.log('Product:', goldProducts);
//     buyNowCheckout(id)
//     localStorage.setItem('Buynow', JSON.stringify([goldProducts]));
//     navigate('/checkout/buynow');
//   };
  
//   return (
//     <div>
// <div className="container mx-auto p-4 mt-24 flex justify-center">
//       <div className="flex flex-col items-center md:flex-row max-w-4xl w-full">
//         <div className="block md:hidden w-full">
//           <Carousel responsive={responsive}>
//             {goldProducts.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`${goldProducts.name} ${index + 1}`}
//                 className="w-full object-cover rounded-md mb-2"
//                 onClick={() => setSelectedImage(image)}
//               />
//             ))}
//           </Carousel>
//         </div>
      
//         <div className="hidden md:flex flex-col md:flex-row items-center">
//           <div className="flex flex-col items-end mr-2 md:w-1/4 md:mt-2 lg:w-1/4 lg:mb-16 md:mb-16">
//             {goldProducts.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`${goldProducts.name} ${index + 1}`}
//                 className={`w-16 md:w-[75px] lg:w-20 object-cover rounded-md mb-2 cursor-pointer ${selectedImage === image ? 'border-2 border-blue-500' : 'border'}`}
//                 onClick={() => setSelectedImage(image)}
//               />
//             ))}
//           </div>
//           <img src={selectedImage} alt={goldProducts.name} className="w-full md:w-3/4 lg:w-2/3 h-auto object-contain rounded-md mb-16" />
//         </div>


//           <div className="md:ml-8 text-center md:text-left">
//             <h1 className="text-2xl font-bold">{goldProducts.name}</h1>
//             <div className="flex items-center justify-center md:justify-start mt-2">
//               <span className="text-2xl font-bold text-green-600">{goldProducts.price}</span>
//               <span className="text-xl text-gray-400 line-through ml-2">{goldProducts.discountPrice}</span>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-lg font-bold">Color:</h3>
//               <div className="flex justify-center md:justify-start mt-2">
//                 {goldProducts.colors && goldProducts.colors.length > 0 ? goldProducts.colors.map((color, index) => (
//                   <div
//                     key={index}
//                     className={`w-8 h-8 rounded-full mr-2 ${selectedColor === color ? 'border-4 border-blue-600' : 'border'} cursor-pointer`}
//                     style={{ backgroundColor: color }}
//                     onClick={() => setSelectedColor(color)}
//                   ></div>
//                 )) : <div>No colors available</div>}
//               </div>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-lg font-bold">Size:</h3>
//               <div className="flex justify-center md:justify-start mt-2">
//                 {goldProducts.sizes && goldProducts.sizes.length > 0 ? goldProducts.sizes.map((size, index) => (
//                   <div
//                     key={index}
//                     className={`rounded p-3 border mr-4 cursor-pointer ${selectedSize === size ? 'border-blue-600' : 'border-gray-300'}`}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </div>
//                 )) : <div>No sizes available</div>}
//               </div>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-lg font-bold">Qty:</h3>
//               <div className="flex items-center justify-center md:justify-start mt-2">
//                 <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className="p-2 border">-</button>
//                 <span className="mx-2">{quantity}</span>
//                 <button onClick={() => setQuantity(quantity + 1)} className="p-2 border">+</button>
//               </div>
//             </div>
//             <div className="mt-4 flex justify-center md:justify-start space-x-4">
//               <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
//                 Add to Cart
//               </button>
//               <button onClick={() => handleBuyNow(goldProducts.id)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
      
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { GlobalContext } from '../context/GlobalContext';

// const goldProducts = [
//   {
//     id: 1,
//     name: '22K Gold Wedding Ring',
//     mainImage: require('../assets/gold_images/1.jpg'),
//     images: [require('../assets/gold_images/2.jpg'), require('../assets/gold_images/3.jpg')],
//     price: '₹25,999',
//     discountPrice: '₹29,999',
//     description: 'Elegant 22K gold wedding ring.',
//     weight: '10g',
//     purity: '22K',
//     sizes: ['6', '7', '8', '9'],
//   },
// ];

// Assuming product images are stored in the assets folder
const Gold1Image = require("../assets/gold_images/1.jpg");
const Gold2Image = require("../assets/gold_images/2.jpg");
const Gold3Image = require("../assets/gold_images/3.jpg");
const Gold4Image = require("../assets/gold_images/4.jpg");
const Gold5Image = require("../assets/gold_images/5.jpg");
const Gold6Image = require("../assets/gold_images/6.jpg");
const Gold7Image = require("../assets/gold_images/7.jpg");
const Gold8Image = require("../assets/gold_images/8.jpg");
const Gold9Image = require("../assets/gold_images/9.jpg");
const Gold10Image = require("../assets/gold_images/10.jpg");
const Gold11Image = require("../assets/gold_images/11.jpg");
const Gold12Image = require("../assets/gold_images/12.jpg");


export const goldProducts = [
  {
    id: 1,
    name: '22K Gold Wedding Ring',
    mainImage: Gold1Image,
    images: [Gold1Image, Gold3Image, Gold4Image],
    price: '₹25,999',
    discountPrice: '₹30,000',
    description: 'Elegant 22K gold wedding ring with a smooth finish.',
    karat: '22K',
    weight: '10 grams',
    designs: ['Classic', 'Modern'],
    sizes: ['6', '7', '8', '9', '10']
  },
  {
    id: 2,
    name: 'Gold Stud Earrings with Diamonds',
    mainImage: Gold5Image,
    images: [Gold5Image, Gold7Image, Gold8Image],
    price: '₹15,499',
    discountPrice: '₹20,000',
    description: 'Beautiful 22K gold stud earrings featuring diamond accents.',
    karat: '22K',
    weight: '5 grams',
    designs: ['Floral', 'Geometric'],
    sizes: ['One Size']
  },
  {
    id: 3,
    name: 'Gold Chain Necklace',
    mainImage: Gold9Image,
    images: [Gold9Image, Gold2Image, Gold3Image],
    price: '₹45,999',
    discountPrice: '₹50,000',
    description: 'Stunning 22K gold chain necklace with a sleek design.',
    karat: '22K',
    weight: '20 grams',
    designs: ['Minimalist', 'Traditional'],
    sizes: ['16 inches', '18 inches', '20 inches']
  },
  {
    id: 4,
    name: 'Gold Bangle Set',
    mainImage: Gold4Image,
    images: [Gold4Image, Gold6Image, Gold7Image],
    price: '₹80,999',
    discountPrice: '₹95,000',
    description: '22K gold bangle set with intricate patterns.',
    karat: '22K',
    weight: '50 grams',
    designs: ['Traditional', 'Engraved'],
    sizes: ['2.4', '2.6', '2.8']
  },
  {
    id: 5,
    name: 'Gold Pendant with Ruby',
    mainImage: Gold8Image,
    images: [Gold8Image, Gold1Image, Gold2Image],
    price: '₹35,999',
    discountPrice: '₹40,000',
    description: '22K gold pendant with a vibrant ruby centerpiece.',
    karat: '22K',
    weight: '15 grams',
    designs: ['Contemporary', 'Classic'],
    sizes: ['One Size']
  },
  {
    id: 6,
    name: 'Gold Bracelet for Women',
    mainImage: Gold3Image,
    images: [Gold3Image, Gold5Image, Gold6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },
  {
    id: 7,
    name: 'Gold Bracelet for Women',
    mainImage: Gold9Image,
    images: [Gold9Image, Gold10Image, Gold6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },
  {
    id: 8,
    name: 'Gold Bracelet for Women',
    mainImage: Gold10Image,
    images: [Gold10Image, Gold10Image, Gold6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  }, {
    id: 9,
    name: 'Gold Bracelet for Women',
    mainImage: Gold11Image,
    images: [Gold11Image, Gold10Image, Gold6Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  },{
    id: 9,
    name: 'Gold Bracelet for Women',
    mainImage: Gold12Image,
    images: [Gold12Image, Gold1Image, Gold2Image],
    price: '₹65,999',
    discountPrice: '₹75,000',
    description: 'Elegant 22K gold bracelet for women with a delicate design.',
    karat: '22K',
    weight: '25 grams',
    designs: ['Delicate', 'Trendy'],
    sizes: ['6 inches', '7 inches', '8 inches']
  }
];
const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const GoldDetails = () => {
  const { goldId } = useParams();
  const navigate = useNavigate();
  const { addToCart, buyNowCheckout } = useContext(GlobalContext);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = goldProducts.find(p => p.id === parseInt(goldId));
    if (foundProduct) {
      setSelectedProduct(foundProduct);
      setSelectedImage(foundProduct.mainImage || '');
      setSelectedColor(foundProduct.colors?.[0] || '');
      setSelectedSize(foundProduct.sizes?.[0] || '');
    } else {
      setSelectedProduct(null); // Fallback for invalid product ID
    }
  }, [goldId]);

  if (!selectedProduct) {
    return <div className="text-center mt-20">Product not found</div>;
  }

  const handleAddToCart = () => {
    const productToAdd = {
      ...selectedProduct,
      quantity,
      color: selectedColor,
      size: selectedSize,
    };
    addToCart(productToAdd);
  };

  const handleBuyNow = () => {
    buyNowCheckout(selectedProduct.id);
    localStorage.setItem('Buynow', JSON.stringify([selectedProduct]));
    navigate('/checkout/buynow');
  };

  return (
    <div className="container mx-auto p-4 mt-24 flex justify-center">
      <div className="flex flex-col items-center md:flex-row max-w-4xl w-full">
        {/* Image Section */}
        <div className="block md:hidden w-full">
          <Carousel responsive={responsive}>
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedProduct.name} ${index + 1}`}
                className="w-full object-cover rounded-md mb-2"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </Carousel>
        </div>

        <div className="hidden md:flex flex-row items-center">
          <div className="flex flex-col items-end mr-2">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedProduct.name} ${index + 1}`}
                className={`w-16 md:w-[75px] lg:w-20 object-cover rounded-md mb-2 cursor-pointer ${
                  selectedImage === image ? 'border-2 border-blue-500' : 'border'
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          {/* <img
            src={selectedImage}
            alt={selectedProduct.name}
            className="w-full md:w-3/4 lg:w-2/3 h-auto object-contain rounded-md"
          /> */}
          {/* <div className="flex justify-center items-center p-2 border w-full md:w-3/4 lg:w-2/3 mx-auto">
  <img
    src={selectedImage}
    alt={selectedProduct.name}
    className="w-full h-60 object-cover rounded-md"
  />
</div> */}
<div className="flex justify-center items-center p-2 border w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
  <img
    src={selectedImage}
    alt={selectedProduct.name}
    className="w-full h-60 object-cover rounded-md"
  />
</div>


        </div>

        {/* Details Section */}
        <div className="md:ml-8 text-center md:text-left">
          <h1 className="text-2xl font-bold">{selectedProduct.name}</h1>
          <div className="flex items-center mt-2">
            <span className="text-2xl font-bold text-green-600">{selectedProduct.price}</span>
            <span className="text-xl text-gray-400 line-through ml-2">{selectedProduct.discountPrice}</span>
          </div>

          {/* Size */}
          {/* {selectedProduct.sizes?.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-bold">Size:</h3>
              <div className="flex mt-2">
                {selectedProduct.sizes.map((size, index) => (
                  <div
                    key={index}
                    className={`rounded p-3 border mr-4 cursor-pointer ${
                      selectedSize === size ? 'border-blue-600' : 'border-gray-300'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          )} */}

          {/* Quantity */}
          <div className="mt-4">
            <h3 className="text-lg font-bold">Qty:</h3>
            <div className="flex items-center mt-2">
              <button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
                className="p-2 border"
              >
                -
              </button>
              <span className="mx-2">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2 border">
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldDetails;
