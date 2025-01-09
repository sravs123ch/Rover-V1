

// import React,{useState} from "react";
// import { useParams, Link } from "react-router-dom";
// import product1Image from "../../assets/product_images/1.jpg";
// import product2Image from "../../assets/product_images/2.jpg";
// import product3Image from "../../assets/product_images/3.jpg";
// import product4Image from "../../assets/product_images/4.jpg";
// import product5Image from "../../assets/product_images/5.jpg";
// import product6Image from "../../assets/product_images/6.jpg";
// import product7Image from "../../assets/product_images/7.jpg";
// import product8Image from "../../assets/product_images/8.jpg";
// import product9Image from "../../assets/product_images/9.jpg";
// import product10Image from "../../assets/product_images/10.jpg";
// import product11Image from "../../assets/product_images/11.jpg";
// import product12Image from "../../assets/product_images/12.jpg";

// const products = [
//   // Men Products
//   {
//     id: 1,
//     name: "Blue and orange Polo T-shirt",
//     image: product1Image,
//     price: "799",
//     color: "blue",
//     size: "M",
//     gender: "men",
//     featured: "casual",
//     collection: "Core",
//     brands: "Full Nelson",
//     Categories: "Artwork Tees",
//   },
//   {
//     id: 2,
//     name: "Black Flat Knit Men's Polo T-Shirt",
//     image: product2Image,
//     price: "999",
//     color: "black",
//     size: "L",
//     gender: "men",
//     featured: "casual",
//     collection: "New Arrivals",
//     brands: "My Way",
//     Categories: "Pants",
//   },
//   {
//     id: 3,
//     name: "Orange Flat Knit Men's Polo T-Shirt",
//     image: product3Image,
//     price: "999",
//     color: "orange",
//     size: "S",
//     gender: "men",
//     featured: "boxers",
//     collection: "Sale",
//     brands: "Re-Arranged",
//     Categories: "Accessories",
//   },
//   {
//     id: 4,
//     name: "Orange Flat Knit Men's Polo T-Shirt",
//     image: product4Image,
//     price: "999",
//     color: "orange",
//     size: "M",
//     gender: "men",
//     featured: "outdoors",
//     collection: "Everything",
//     brands: "Counterfeit",
//     Categories: "Boxers",
//   },
//   {
//     id: 5,
//     name: "Red Flat Men's Polo T-Shirt",
//     image: product5Image,
//     price: "999",
//     color: "red",
//     size: "L",
//     gender: "men",
//     featured: "outdoors",
//     collection: "Core",
//     brands: "Significant Other",
//     Categories: "Basic Tees",
//   },
//   {
//     id: 6,
//     name: "Blue Flat Men's Polo T-Shirt",
//     image: product6Image,
//     price: "899",
//     color: "blue",
//     size: "S",
//     gender: "men",
//     featured: "casual",
//     collection: "New Arrivals",
//     brands: "Full Nelson",
//     Categories: "Artwork Tees",
//   },

//   // Women Products
//   {
//     id: 7,
//     name: "Orange Flat Knit Women's Polo Jeans",
//     image: product7Image,
//     price: "699",
//     color: "orange",
//     size: "M",
//     gender: "women",
//     featured: "sleep",
//     collection: "Sale",
//     brands: "My Way",
//     Categories: "Basic Tees",
//   },
//   {
//     id: 8,
//     name: "Red Flat Knit Women's Polo Jeans",
//     image: product8Image,
//     price: "899",
//     color: "red",
//     size: "L",
//     gender: "women",
//     featured: "swimwear",
//     collection: "Everything",
//     brands: "Re-Arranged",
//     Categories: "Artwork Tees",
//   },
//   {
//     id: 9,
//     name: "Green Flat Knit Women's Polo Jeans",
//     image: product9Image,
//     price: "999",
//     color: "green",
//     size: "S",
//     gender: "women",
//     featured: "tops",
//     collection: "Core",
//     brands: "Counterfeit",
//     Categories: "bottoms",
//   },
//   {
//     id: 10,
//     name: "Blue Flat Knit Women's Polo Jeans",
//     image: product10Image,
//     price: "1299",
//     color: "blue",
//     size: "M",
//     gender: "women",
//     featured: "underwear",
//     collection: "New Arrivals",
//     brands: "Significant Other",
//     Categories: "Artwork Tees",
//   },
//   {
//     id: 11,
//     name: "Orange Flat Knit Kids Polo T-Shirt",
//     image: product11Image,
//     price: "1399",
//     color: "orange",
//     size: "L",
//     gender: "women",
//     featured: "sleep",
//     brands: "Full Nelson",
//     collection: "Sale",
//     Categories: "Tops",
//   },
//   {
//     id: 12,
//     name: "Yellow Flat Knit Kids Polo T-Shirt",
//     image: product12Image,
//     price: "1099",
//     color: "yellow",
//     size: "M",
//     gender: "women",
//     featured: "swimwear",
//     brands: "My Way",
//     collection: "Everything",
//     Categories: "Accessories",
//   },
// ];

// function NavbarCategory() {
//   const { gender, type, subtype } = useParams();

//   const [selectedColor, setSelectedColor] = useState('');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [isFilterVisible, setIsFilterVisible] = useState(false);

//   const extraFilteredProducts = products.filter((product) => {
//     return (
//       (selectedColor === '' || product.color === selectedColor) &&
//       (selectedSize === '' || product.size === selectedSize) &&
//       (selectedCategory === '' || product.category === selectedCategory)
//     );
//   });

//   // Filtered products based on params
//   const filteredProducts = products.filter(
//     (product) =>
//       product.gender.toLowerCase() === gender.toLowerCase() &&
//       (type === "featured" && product.featured?.toLowerCase() === subtype.toLowerCase() ||
//       type === "collection" && product.collection?.toLowerCase() === subtype.toLowerCase() ||
//       type === "categories" && product.Categories?.toLowerCase() === subtype.toLowerCase() ||
//       type === "brands" && product.brands?.toLowerCase() === subtype.toLowerCase())
//   );
// // Combine filtered products with extra filtered products
// const finalFilteredProducts = filteredProducts.filter(product =>
//   extraFilteredProducts.some(extraProduct => extraProduct.id === product.id)
// );
//   // Debugging params
//   console.log("Gender:", gender);
//   console.log("Type:", type);
//   console.log("Subtype:", subtype);
//   const clearFilters = () => {
//     setSelectedColor('');
//     setSelectedSize('');
//     setSelectedCategory('');
//     setIsFilterVisible(false); // Close filter dialog in mobile view
//   };

//   const isAnyFilterApplied = selectedColor || selectedSize || selectedCategory;

//   return (

// <div className="container mx-auto p-10 mt-10 flex flex-col lg:flex-row justify-center">

// <div
//   className={`w-full lg:w-1/4 lg:pr-5 ${isFilterVisible ? 'fixed bottom-0 left-0 h-1/2 bg-white z-50 p-5 shadow-2xl lg:static lg:h-auto lg:shadow-none lg:p-0 lg:block' : 'hidden'} lg:block transition-transform transform ${isFilterVisible ? 'translate-y-0' : 'translate-y-full lg:translate-y-0'}`}
// >
//   <h2 className="text-2xl font-bold mb-4 mt-12">Filters</h2>
//   <div className="mb-4">
//     <label className="block font-bold mb-2">Color</label>
//     <select
//       value={selectedColor}
//       onChange={(e) => setSelectedColor(e.target.value)}
//       className="w-full border p-2 rounded"
//     >
//       <option value="">All</option>
//       <option value="blue">Blue</option>
//       <option value="black">Black</option>
//       <option value="orange">Orange</option>
//       <option value="red">Red</option>
//       <option value="green">Green</option>
//       <option value="yellow">Yellow</option>
//     </select>
//   </div>
//   <div className="mb-4">
//     <label className="block font-bold mb-2">Size</label>
//     <select
//       value={selectedSize}
//       onChange={(e) => setSelectedSize(e.target.value)}
//       className="w-full border p-2 rounded"
//     >
//       <option value="">All</option>
//       <option value="S">Small</option>
//       <option value="M">Medium</option>
//       <option value="L">Large</option>
//     </select>
//   </div>
//   <div className="mb-4">
//     <label className="block font-bold mb-2">Category</label>
//     <select
//       value={selectedCategory}
//       onChange={(e) => setSelectedCategory(e.target.value)}
//       className="w-full border p-2 rounded"
//     >
//       <option value="">All</option>
//       <option value="T-shirt">T-shirt</option>
//       <option value="Jeans">Jeans</option>
//     </select>
//   </div>
//   {isAnyFilterApplied && (
//     <button
//       onClick={clearFilters}
//       className="bg-red-500 text-white w-full py-2 rounded lg:hidden"
//     >
//       Remove Filter
//     </button>
//   )}
//   <button
//     onClick={() => setIsFilterVisible(false)}
//     className="bg-blue-500 text-white w-full py-2 rounded lg:hidden"
//   >
//     Apply
//   </button>
// </div>
// <div className="w-full lg:w-3/4 ">
//   <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-12 mb-4">
//     {subtype.charAt(0).toUpperCase() + subtype.slice(1)}
//   </h1>
//   {isAnyFilterApplied && (
//     <button
//       onClick={clearFilters}
//       className="bg-red-500 text-white py-2 px-4 rounded mb-4 lg:inline-block lg:mb-0 hidden"
//     >
//       Remove Filter
//     </button>
//   )}
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//     {finalFilteredProducts.length > 0 ? (
//       finalFilteredProducts.map((product) => (
//         <div
//           key={product.id}
//           className="border p-2 rounded"
//         >
//           <Link to={`/product/${product.id}`}>
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-90 object-cover mb-4 rounded"
//             />
//             <h2 className="text-lg font-bold mb-2 text-center">{product.name}</h2>
//             <p className="text-gray-600 mb-2 text-center">{product.price}</p>
//           </Link>
//         </div>
//       ))
//     ) : (
//       <p>No products available for this category or filters.</p>
//     )}
//   </div>
// </div>
// <div className="fixed bottom-0 left-0 w-full lg:hidden flex justify-between p-4 bg-white border-t">
//   <button
//     onClick={() => setIsFilterVisible(true)}
//     className="bg-white text-black border border-gray-300 px-4 py-2 rounded"
//   >
//     Filter
//   </button>
//   <button
//     onClick={() => setIsFilterVisible(false)}
//     className="bg-white text-black border border-gray-300 px-4 py-2 rounded"
//   >
//     Apply
//   </button>
// </div>
// </div>
// );
// }

// export default NavbarCategory;



import { useParams,Link } from 'react-router-dom';
import { useState } from 'react';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

import product1Image from "../../assets/product_images/1.jpg";
import product2Image from "../../assets/product_images/2.jpg";
import product3Image from "../../assets/product_images/3.jpg";
import product4Image from "../../assets/product_images/4.jpg";
import product5Image from "../../assets/product_images/5.jpg";
import product6Image from "../../assets/product_images/6.jpg";
import product7Image from "../../assets/product_images/7.jpg";
import product8Image from "../../assets/product_images/8.jpg";
import product9Image from "../../assets/product_images/9.jpg";
import product10Image from "../../assets/product_images/10.jpg";
import product11Image from "../../assets/product_images/11.jpg";
import product12Image from "../../assets/product_images/12.jpg";

const products = [
  // Men Products
  {
    id: 1,
    name: "Blue and orange Polo T-shirt",
    image: product1Image,
    price: "799",
    color: "blue",
    size: "M",
    gender: "men",
    featured: "casual",
    collection: "Core",
    brands: "Full Nelson",
    Categories: "Artwork Tees",
  },
  {
    id: 2,
    name: "Black Flat Knit Men's Polo T-Shirt",
    image: product2Image,
    price: "999",
    color: "black",
    size: "L",
    gender: "men",
    featured: "casual",
    collection: "New Arrivals",
    brands: "My Way",
    Categories: "Pants",
  },
  {
    id: 3,
    name: "Orange Flat Knit Men's Polo T-Shirt",
    image: product3Image,
    price: "999",
    color: "orange",
    size: "S",
    gender: "men",
    featured: "boxers",
    collection: "Sale",
    brands: "Re-Arranged",
    Categories: "Accessories",
  },
  {
    id: 4,
    name: "Orange Flat Knit Men's Polo T-Shirt",
    image: product4Image,
    price: "999",
    color: "orange",
    size: "M",
    gender: "men",
    featured: "outdoors",
    collection: "Everything",
    brands: "Counterfeit",
    Categories: "Boxers",
  },
  {
    id: 5,
    name: "Red Flat Men's Polo T-Shirt",
    image: product5Image,
    price: "999",
    color: "red",
    size: "L",
    gender: "men",
    featured: "outdoors",
    collection: "Core",
    brands: "Significant Other",
    Categories: "Basic Tees",
  },
  {
    id: 6,
    name: "Blue Flat Men's Polo T-Shirt",
    image: product6Image,
    price: "899",
    color: "blue",
    size: "S",
    gender: "men",
    featured: "casual",
    collection: "New Arrivals",
    brands: "Full Nelson",
    Categories: "Artwork Tees",
  },

  // Women Products
  {
    id: 7,
    name: "Orange Flat Knit Women's Polo Jeans",
    image: product7Image,
    price: "699",
    color: "orange",
    size: "M",
    gender: "women",
    featured: "sleep",
    collection: "Sale",
    brands: "My Way",
    Categories: "Basic Tees",
  },
  {
    id: 8,
    name: "Red Flat Knit Women's Polo Jeans",
    image: product8Image,
    price: "899",
    color: "red",
    size: "L",
    gender: "women",
    featured: "swimwear",
    collection: "Everything",
    brands: "Re-Arranged",
    Categories: "Artwork Tees",
  },
  {
    id: 9,
    name: "Green Flat Knit Women's Polo Jeans",
    image: product9Image,
    price: "999",
    color: "green",
    size: "S",
    gender: "women",
    featured: "tops",
    collection: "Core",
    brands: "Counterfeit",
    Categories: "bottoms",
  },
  {
    id: 10,
    name: "Blue Flat Knit Women's Polo Jeans",
    image: product10Image,
    price: "1299",
    color: "blue",
    size: "M",
    gender: "women",
    featured: "underwear",
    collection: "New Arrivals",
    brands: "Significant Other",
    Categories: "Artwork Tees",
  },
  {
    id: 11,
    name: "Orange Flat Knit Kids Polo T-Shirt",
    image: product11Image,
    price: "1399",
    color: "orange",
    size: "L",
    gender: "women",
    featured: "sleep",
    brands: "Full Nelson",
    collection: "Sale",
    Categories: "Tops",
  },
  {
    id: 12,
    name: "Yellow Flat Knit Kids Polo T-Shirt",
    image: product12Image,
    price: "1099",
    color: "yellow",
    size: "M",
    gender: "women",
    featured: "swimwear",
    brands: "My Way",
    collection: "Everything",
    Categories: "Accessories",
  },
];



function NavbarCategory() {
  const { gender, type, subtype } = useParams();

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const colors = ['Blue', 'Black', 'Orange', 'Red', 'Green', 'Yellow'];
  const sizes = ['Small', 'Medium', 'Large'];
  const categories = ['T-shirt', 'Jeans'];

  const extraFilteredProducts = products.filter((product) => {
    return (
      (selectedColor === '' || product.color === selectedColor) &&
      (selectedSize === '' || product.size === selectedSize) &&
      (selectedCategory === '' || product.category === selectedCategory)
    );
  });

  const filteredProducts = products.filter(
    (product) =>
      product.gender.toLowerCase() === gender.toLowerCase() &&
      (type === "featured" && product.featured?.toLowerCase() === subtype.toLowerCase() ||
      type === "collection" && product.collection?.toLowerCase() === subtype.toLowerCase() ||
      type === "categories" && product.Categories?.toLowerCase() === subtype.toLowerCase() ||
      type === "brands" && product.brands?.toLowerCase() === subtype.toLowerCase())
  );

  const finalFilteredProducts = filteredProducts.filter(product =>
    extraFilteredProducts.some(extraProduct => extraProduct.id === product.id)
  );

  const clearFilters = () => {
    setSelectedColor('');
    setSelectedSize('');
    setSelectedCategory('');
    setIsFilterVisible(false);
  };

  const isAnyFilterApplied = selectedColor || selectedSize || selectedCategory;

  return (
    // <div className="container mx-auto p-10 mt-10 flex flex-col lg:flex-row justify-center">
    //   <div
    //     className={`w-full lg:w-1/4 lg:pr-5 ${isFilterVisible ? 'fixed bottom-0 left-0 h-1/2 bg-white z-50 p-5 shadow-2xl lg:static lg:h-auto lg:shadow-none lg:p-0 lg:block' : 'hidden'} lg:block transition-transform transform ${isFilterVisible ? 'translate-y-0' : 'translate-y-full lg:translate-y-0'}`}
    //   >
    //     <h2 className="text-2xl font-bold mb-4 mt-12">Filters</h2>
        
    //     {/* Color Filter */}
    //     <div className="mb-4">
    //       <label className="block font-bold mb-2">Color</label>
    //       <Combobox value={selectedColor} onChange={setSelectedColor}>
    //         <div className="relative mt-2">
    //           <ComboboxInput
    //             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             onChange={(event) => setSelectedColor(event.target.value)}
    //             displayValue={(color) => color}
    //             placeholder="Select Color"
    //           />
    //           <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
    //             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
    //           </ComboboxButton>
    //           <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
    //             {colors.map((color) => (
    //               <ComboboxOption
    //                 key={color}
    //                 value={color}
    //                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
    //               >
    //                 <span className="block truncate group-data-[selected]:font-semibold">{color}</span>
    //                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
    //                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
    //                 </span>
    //               </ComboboxOption>
    //             ))}
    //           </ComboboxOptions>
    //         </div>
    //       </Combobox>
    //     </div>

    //     {/* Size Filter */}
    //     <div className="mb-4">
    //       <label className="block font-bold mb-2">Size</label>
    //       <Combobox value={selectedSize} onChange={setSelectedSize}>
    //         <div className="relative mt-2">
    //           <ComboboxInput
    //             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             onChange={(event) => setSelectedSize(event.target.value)}
    //             displayValue={(size) => size}
    //             placeholder="Select Size"
    //           />
    //           <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
    //             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
    //           </ComboboxButton>
    //           <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
    //             {sizes.map((size) => (
    //               <ComboboxOption
    //                 key={size}
    //                 value={size}
    //                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
    //               >
    //                 <span className="block truncate group-data-[selected]:font-semibold">{size}</span>
    //                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
    //                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
    //                 </span>
    //               </ComboboxOption>
    //             ))}
    //           </ComboboxOptions>
    //         </div>
    //       </Combobox>
    //     </div>

    //     {/* Category Filter */}
    //     <div className="mb-4">
    //       <label className="block font-bold mb-2">Category</label>
    //       <Combobox value={selectedCategory} onChange={setSelectedCategory}>
    //         <div className="relative mt-2">
    //           <ComboboxInput
    //             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             onChange={(event) => setSelectedCategory(event.target.value)}
    //             displayValue={(category) => category}
    //             placeholder="Select Category"
    //           />
    //           <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
    //             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
    //           </ComboboxButton>
    //           <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
    //             {categories.map((category) => (
    //               <ComboboxOption
    //                 key={category}
    //                 value={category}
    //                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
    //               >
    //                 <span className="block truncate group-data-[selected]:font-semibold">{category}</span>
    //                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
    //                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
    //                 </span>
    //               </ComboboxOption>
    //             ))}
    //           </ComboboxOptions>
    //         </div>
    //       </Combobox>
    //     </div>

    //     {isAnyFilterApplied && (
    //       <button
    //         onClick={clearFilters}
    //         className="bg-red-500 text-white w-full py-2 rounded lg:hidden"
    //       >
    //         Remove Filter
    //       </button>
    //     )}
    //     <button
    //       onClick={() => setIsFilterVisible(false)}
    //       className="bg-blue-500 text-white w-full py-2 rounded lg:hidden"
    //     >
    //       Apply
    //     </button>
    //   </div>

    //   <div className="w-full lg:w-3/4">
    //     <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-12 mb-4">
    //       {subtype.charAt(0).toUpperCase() + subtype.slice(1)}
    //     </h1>
    //     {isAnyFilterApplied && (
    //       <button
    //         onClick={clearFilters}
    //         className="bg-red-500 text-white py-2 px-4 rounded mb-4 lg:inline-block lg:mb-0 hidden"
    //       >
    //         Remove Filter
    //       </button>
    //     )}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    //       {finalFilteredProducts.length > 0 ? (
    //         finalFilteredProducts.map((product) => (
    //           <div
    //             key={product.id}
    //             className="border p-2 rounded"
    //           >
    //             <Link to={`/product/${product.id}`}>
    //               <img
    //                 src={product.image}
    //                 alt={product.name}
    //                 className="w-full h-90 object-cover mb-4 rounded"
    //               />
    //               <h2 className="text-lg font-bold mb-2 text-center">{product.name}</h2>
    //               <p className="text-gray-600 mb-2 text-center">{product.price}</p>
    //             </Link>
    //           </div>
    //         ))
    //       ) : (
    //         <p>No products available for this category or filters.</p>
    //       )}
    //     </div>
    //   </div>

    //   <div className="fixed bottom-0 left-0 w-full lg:hidden flex justify-between p-4 bg-white border-t">
    //     <button
    //       onClick={() => setIsFilterVisible(true)}
    //       className="bg-white text-black border border-gray-300 px-4 py-2 rounded"
    //     >
    //       Filter
    //     </button>
    //     <button
    //       onClick={() => setIsFilterVisible(false)}
    //       className="bg-white text-black border border-gray-300 px-4 py-2 rounded"
    //     >
    //       Apply
    //     </button>
    //   </div>
    // </div>

    <div className="container mx-auto p-10 mt-10 flex flex-col lg:flex-row justify-center">
  <div
    className={`w-full lg:w-1/4 lg:pr-5 ${isFilterVisible ? 'fixed bottom-0 left-0 h-1/2 bg-white z-50 p-5 shadow-2xl lg:static lg:h-auto lg:shadow-none lg:p-0 lg:block' : 'hidden'} lg:block transition-transform transform ${isFilterVisible ? 'translate-y-0' : 'translate-y-full lg:translate-y-0'}`}
  >
    <h2 className="text-2xl font-bold mb-4 mt-12">Filters</h2>
    
    {/* Color Filter */}
    <div className="mb-4">
      <label className="block font-bold mb-2">Color</label>
      <Combobox value={selectedColor} onChange={setSelectedColor}>
        <div className="relative mt-2">
          <ComboboxInput
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(event) => setSelectedColor(event.target.value)}
            displayValue={(color) => color}
            placeholder="Select Color"
          />
          <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </ComboboxButton>
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {colors.map((color) => (
              <ComboboxOption
                key={color}
                value={color}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
              >
                <span className="block truncate group-data-[selected]:font-semibold">{color}</span>
                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </div>
      </Combobox>
    </div>

    {/* Size Filter */}
    <div className="mb-4">
      <label className="block font-bold mb-2">Size</label>
      <Combobox value={selectedSize} onChange={setSelectedSize}>
        <div className="relative mt-2">
          <ComboboxInput
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(event) => setSelectedSize(event.target.value)}
            displayValue={(size) => size}
            placeholder="Select Size"
          />
          <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </ComboboxButton>
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {sizes.map((size) => (
              <ComboboxOption
                key={size}
                value={size}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
              >
                <span className="block truncate group-data-[selected]:font-semibold">{size}</span>
                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </div>
      </Combobox>
    </div>

    {/* Category Filter */}
    <div className="mb-4">
      <label className="block font-bold mb-2">Category</label>
      <Combobox value={selectedCategory} onChange={setSelectedCategory}>
        <div className="relative mt-2">
          <ComboboxInput
            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(event) => setSelectedCategory(event.target.value)}
            displayValue={(category) => category}
            placeholder="Select Category"
          />
          <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </ComboboxButton>
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {categories.map((category) => (
              <ComboboxOption
                key={category}
                value={category}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
              >
                <span className="block truncate group-data-[selected]:font-semibold">{category}</span>
                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </div>
      </Combobox>
    </div>

    {/* Remove Filter Button */}
    {isAnyFilterApplied && (
      <button
        onClick={clearFilters}
        className="bg-red-500 text-white w-full py-2 rounded mb-4 mt-6"
      >
        Remove Filter
      </button>
    )}

    <button
      onClick={() => setIsFilterVisible(false)}
      className="bg-blue-500 text-white w-full py-2 rounded lg:hidden"
    >
      Apply
    </button>
  </div>

  <div className="w-full lg:w-3/4">
    <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-12 mb-4">
      {subtype.charAt(0).toUpperCase() + subtype.slice(1)}
    </h1>
    {/* {isAnyFilterApplied && (
      <button
        onClick={clearFilters}
        className="bg-red-500 text-white py-2 px-4 rounded mb-4 lg:inline-block lg:mb-0 hidden"
      >
        Remove Filter
      </button>
    )} */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {finalFilteredProducts.length > 0 ? (
        finalFilteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-2 rounded"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-90 object-cover mb-4 rounded"
              />
              <h2 className="text-lg font-bold mb-2 text-center">{product.name}</h2>
              <p className="text-gray-600 mb-2 text-center">{product.price}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>No products available for this category or filters.</p>
      )}
    </div>
  </div>

  <div className="fixed bottom-0 left-0 w-full lg:hidden flex justify-between p-4 bg-white border-t">
    <button
      onClick={() => setIsFilterVisible(true)}
      className="bg-white text-black border border-gray-300 px-4 py-2 rounded"
    >
      Filter
    </button>
    <button
      onClick={() => setIsFilterVisible(false)}
      className="bg-white text-black border border-gray-300 px-4 py-2 rounded"
    >
      Apply
    </button>
  </div>
</div>


  );
}

export default NavbarCategory;
