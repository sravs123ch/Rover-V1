import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import Milk from '../../assets/images/Milk/milk.jpg';
import Cheese from '../../assets/images/Milk/cheese.jpg';
import Butter from '../../assets/images/Milk/Butter.jpg';
import Yogurt from '../../assets/images/Milk/yogurt.jpg';
import Cream from '../../assets/images/Milk/Cream.jpeg';
import IceCream from '../../assets/images/Milk/ice-cream.jpg';

const DairyListPage = () => {
    const allProducts = [
        { id: 1, name: 'Milk', price: '₹30', offer: '5% off', image: Milk, category: 'Milk' },
        { id: 2, name: 'Cheese', price: '₹150', offer: '10% off', image: Cheese, category: 'Cheese' },
        { id: 3, name: 'Butter', price: '₹120', offer: '15% off', image: Butter, category: 'Butter' },
        { id: 4, name: 'Yogurt', price: '₹50', offer: '20% off', image: Yogurt, category: 'Yogurt' },
        { id: 5, name: 'Cream', price: '₹100', offer: '10% off', image: Cream, category: 'Cream' },
        { id: 6, name: 'Ice Cream', price: '₹200', offer: '25% off', image: IceCream, category: 'Ice Cream' },
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

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
                DAIRY DELIGHTS ZONE
            </h1>
            <h1 className="text-4xl font-normal text-center text-black mb-4">
                PREMIUM DAIRY PRODUCTS
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
                        onClick={() => handleCategoryFilter('Milk')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Milk' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Milk
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Cheese')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Cheese' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Cheese
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Butter')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Butter' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Butter
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Yogurt')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Yogurt' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Yogurt
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Cream')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Cream' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Cream
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Ice Cream')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Ice Cream' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Ice Cream
                    </button>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProducts.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow-md">
                        <Link to={`/dairy/${product.id}`}>
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

            {/* Pagination */}
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

            {/* View All Link */}
            <div className="flex justify-center items-center mt-10">
                <Link to="/dairy-list" className="flex flex-col items-center">
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

export default DairyListPage;
