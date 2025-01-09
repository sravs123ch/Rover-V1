import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import Cola from '../../assets/images/softDrinks/cola.jpg';
import Lemonade from '../../assets/images/softDrinks/Lemonade.jpg';
import OrangeSoda from '../../assets/images/softDrinks/OrangeSoda.jpg';
import GingerAle from '../../assets/images/softDrinks/GingerAle.jpg';
import RootBeer from '../../assets/images/softDrinks/rootBear.jpg';
import SparklingWater from '../../assets/images/softDrinks/SparklingWater.jpg';

const SoftDrinkListPage = () => {
    const allProducts = [
        { id: 1, name: 'Cola', price: '₹50', offer: '10% off', image: Cola, category: 'Cola' },
        { id: 2, name: 'Lemonade', price: '₹40', offer: '15% off', image: Lemonade, category: 'Lemonade' },
        { id: 3, name: 'Orange Soda', price: '₹45', offer: '5% off', image: OrangeSoda, category: 'Orange Soda' },
        { id: 4, name: 'Ginger Ale', price: '₹60', offer: '20% off', image: GingerAle, category: 'Ginger Ale' },
        { id: 5, name: 'Root Beer', price: '₹70', offer: '25% off', image: RootBeer, category: 'Root Beer' },
        { id: 6, name: 'Sparkling Water', price: '₹30', offer: '30% off', image: SparklingWater, category: 'Sparkling Water' },
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

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
                SOFT DRINK SAVINGS ZONE
            </h1>
            <h1 className="text-4xl font-normal text-center text-black mb-4">
                PREMIUM SOFT DRINK PRODUCTS
            </h1>

            {/* Category Filter Section */}
            <div className="text-center mb-8">
                <div className="flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => handleCategoryFilter('All')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Cola')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Cola' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Cola
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Lemonade')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Lemonade' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Lemonade
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Orange Soda')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Orange Soda' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Orange Soda
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Ginger Ale')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Ginger Ale' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Ginger Ale
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Root Beer')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Root Beer' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Root Beer
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Sparkling Water')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Sparkling Water' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Sparkling Water
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProducts.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow-md">
                        <Link to={`/softdrinks/${product.id}`}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover mb-4 rounded"
                            />
                            <h2 className="text-lg font-bold mb-2 text-center">{product.name}</h2>
                            <p className="text-gray-600 mb-2 text-center">{product.offer} <span className="font-bold">{product.price}</span></p>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-2 bg-blue-600 text-white rounded disabled:opacity-50"
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 mx-2 ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-white text-black border'} rounded`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 mx-2 bg-blue-600 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            <div className="flex justify-center items-center mt-10">
                <Link to="/softdrink-list" className="flex flex-col items-center">
                    <div className="relative flex items-center justify-center w-14 h-14 bg-white border border-blue-600 rounded-full shadow-md">
                        <span className="text-2xl text-blue-600">
                            <FiChevronRight />
                        </span>
                    </div>
                    <span className="mt-2 text-xl font-bold text-black">View All</span>
                </Link>
            </div>
        </div>
    );
};

export default SoftDrinkListPage;
