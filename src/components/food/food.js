import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import tofu from '../../assets/images/food/tofu.jpg';
import Tempeh from '../../assets/images/food/Tempeh.jpg'
import Lentils from '../../assets/images/food/Lentils.jpg'
import Chickpeas from '../../assets/images/food/Chickpeas.jpg'
import ItalianPizza from '../../assets/images/food/Italian Pizza.jpg'
import ChineseNoodles from '../../assets/images/food/Chinese Noodles.jpg'
import IndianCurry from '../../assets/images/food/Indian-Curry-Chicken-2.jpg'
import Pancakes  from '../../assets/images/food/Pancakes.jpg'
import Waffles from '../../assets/images/food/Waffles.jpg'
import Omelets from '../../assets/images/food/Omelets.jpg'
import Burgers from '../../assets/images/food/Burgers.jpg'
import Pizza from '../../assets/images/food/Pizza.jpg'
import Fries from '../../assets/images/food/Fries.jpg'
import Superfoods from '../../assets/images/food/Superfoods.jpg'
import OrganicFoods from '../../assets/images/food/Organic Foods.jpg'
import Lowfat from '../../assets/images/food/Low-fat.jpg'

const FoodListPage = () => {
    const allProducts = [
        // Vegan & Vegetarian
        { id: 1, name: 'Tofu', price: '₹150', offer: '10% off', category: 'Vegan & Vegetarian', image: tofu },
        { id: 2, name: 'Tempeh', price: '₹200', offer: '15% off', category: 'Vegan & Vegetarian', image: Tempeh },
        { id: 3, name: 'Lentils', price: '₹50', offer: '5% off', category: 'Vegan & Vegetarian', image: Lentils },
        { id: 4, name: 'Chickpeas', price: '₹60', offer: '10% off', category: 'Vegan & Vegetarian', image: Chickpeas },
        // Ethnic Foods
        { id: 6, name: 'Italian Pizza', price: '₹500', offer: '10% off', category: 'Ethnic Foods', image: ItalianPizza },
        { id: 7, name: 'Chinese Noodles', price: '₹250', offer: '15% off', category: 'Ethnic Foods', image: ChineseNoodles },
        { id: 8, name: 'Indian Curry', price: '₹200', offer: '5% off', category: 'Ethnic Foods', image: IndianCurry },

        // Breakfast Foods
        { id: 11, name: 'Pancakes', price: '₹180', offer: '10% off', category: 'Breakfast Foods', image: Pancakes },
        { id: 12, name: 'Waffles', price: '₹200', offer: '15% off', category: 'Breakfast Foods', image: Waffles },
        { id: 13, name: 'Omelets', price: '₹150', offer: '5% off', category: 'Breakfast Foods', image: Omelets },

        // Fast Food
        { id: 16, name: 'Burgers', price: '₹250', offer: '10% off', category: 'Fast Food', image: Burgers },
        { id: 17, name: 'Pizza', price: '₹350', offer: '15% off', category: 'Fast Food', image: Pizza },
        { id: 18, name: 'Fries', price: '₹100', offer: '5% off', category: 'Fast Food', image: Fries },

        // Health Foods
        { id: 20, name: 'Superfoods', price: '₹400', offer: '10% off', category: 'Health Foods', image:Superfoods },
        { id: 21, name: 'Organic Foods', price: '₹250', offer: '15% off', category: 'Health Foods', image: OrganicFoods },
        { id: 22, name: 'Low-fat', price: '₹150', offer: '5% off', category: 'Health Foods', image: Lowfat },
       
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 16;

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const filteredProducts = selectedCategory === 'All'
        ? allProducts
        : allProducts.filter(product => product.category === selectedCategory);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mt-14 mx-auto p-10">
            <h1 className="text-4xl font-extrabold text-center text-black mt-8 mb-4">
                FOOD SAVINGS ZONE
            </h1>
            <h1 className="text-4xl font-normal text-center text-black mb-4">
                PREMIUM FOOD PRODUCTS
            </h1>

            {/* Category Filter Section */}
            <div className="text-center mb-8">
                <div className="flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => handleCategoryFilter('All')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'All' ? 'bg-red-600 text-white' : 'bg-white text-black border'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Vegan & Vegetarian')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Vegan & Vegetarian' ? 'bg-red-600 text-white' : 'bg-white text-black border'}`}
                    >
                        Vegan & Vegetarian
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Ethnic Foods')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Ethnic Foods' ? 'bg-red-600 text-white' : 'bg-white text-black border'}`}
                    >
                        Ethnic Foods
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Breakfast Foods')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Breakfast Foods' ? 'bg-red-600 text-white' : 'bg-white text-black border'}`}
                    >
                        Breakfast Foods
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Fast Food')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Fast Food' ? 'bg-red-600 text-white' : 'bg-white text-black border'}`}
                    >
                        Fast Food
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Health Foods')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Health Foods' ? 'bg-red-600 text-white' : 'bg-white text-black border'}`}
                    >
                        Health Foods
                    </button>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProducts.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow-md">
                        <Link to={`/foods/${product.id}`}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <h2 className="text-lg font-bold mb-2 text-center">{product.name}</h2>
                            <p className="text-gray-600 mb-2 text-center">{product.offer} <span className="font-bold">{product.price}</span></p>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-2 bg-red-600 text-white rounded disabled:opacity-50"
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 mx-2 ${currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-white text-black border'} rounded`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 mx-2 bg-red-600 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            {/* View All Button */}
            <div className="flex justify-center items-center mt-10">
                <Link to="/food-list" className="flex flex-col items-center">
                    <div className="relative flex items-center justify-center w-14 h-14 bg-white border border-red-600 rounded-full shadow-md">
                        <span className="text-2xl text-red-600">
                            <FiChevronRight />
                        </span>
                    </div>
                    <span className="mt-2 text-xl font-bold text-black">View All</span>
                </Link>
            </div>
        </div>
    );
};

export default FoodListPage;
