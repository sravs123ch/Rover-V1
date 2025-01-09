import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import portlandCement from '../../assets/images/cementImages/portLandCement.jpg'
import portlandCement2 from '../../assets/images/cementImages/titan.jpg'
import whitecement from '../../assets/images/cementImages/whitecement.jpg'
import whiteCement2 from '../../assets/images/cementImages/brilliant-white-polymer-based-white-cement-1000x1000.jpg'
import RapidHardening from '../../assets/images/cementImages/rapid cement.jpg'
import Waterproof from '../../assets/images/cementImages/waterProof.jpg'
// import waterproof2 from '../../assets/images/cementImages/waterproof2.jpg'
import SulphateResisting from '../../assets/images/cementImages/sulphate1.jpg'
import LowHeat from '../../assets/images/cementImages/sulphate1.jpg'

const CementListPage = () => {
    const allProducts = [

        { id: 1, name: 'Portland', price: '₹400.00', offer: '10% off', image: portlandCement, category: 'Portland' },
        { id: 2, name: 'White Cement', price: '₹560.00', offer: '15% off', image: whiteCement2, category: 'White Cement' },
        { id: 3, name: 'Rapid Hardening', price: '₹640.00', offer: '5% off', image: RapidHardening, category: 'Rapid Hardening' },
        { id: 4, name: 'Waterproof', price: '₹480.00', offer: '20% off', image: Waterproof, category: 'Waterproof' },
        { id: 5, name: 'Sulphate Resisting', price: '₹720.00', offer: '25% off', image: SulphateResisting, category: 'Sulphate Resisting' },
        { id: 6, name: 'Low Heat', price: '₹800.00', offer: '30% off', image: LowHeat, category: 'Low Heat' },
        { id: 7, name: 'Titan', price: '₹880.00', offer: '12% off', image: portlandCement2, category: 'Portland' },
        { id: 8, name: 'White Cement', price: '₹960.00', offer: '8% off', image: whitecement, category: 'White Cement' },


        // Add more cement products as needed
    ];

    // State for selected category and pagination
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4; // You can adjust this to show more or fewer items per page

    // Function to handle category filtering
    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset page when a new filter is applied
    };

    // Filter products based on the selected category
    const filteredProducts = selectedCategory === 'All'
        ? allProducts
        : allProducts.filter(product => product.category === selectedCategory);

    // Pagination logic
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
                CEMENT SAVINGS ZONE
            </h1>
            <h1 className="text-4xl font-normal text-center text-black mb-4">
                PREMIUM CEMENT PRODUCTS
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
                        onClick={() => handleCategoryFilter('Portland')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Portland' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Portland
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('White Cement')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'White Cement' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        White Cement
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Rapid Hardening')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Rapid Hardening' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Rapid Hardening
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Waterproof')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Waterproof' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Waterproof
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Sulphate Resisting')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Sulphate Resisting' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Sulphate Resisting
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Low Heat')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Low Heat' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Low Heat
                    </button>
                </div>
            </div>


            {/* Product Display Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProducts.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow-md">
                        <Link to={`/cement/${product.id}`}>
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

            {/* Pagination Section */}
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

            {/* View All Button */}
            <div className="flex justify-center items-center mt-10">
                <Link to="/cement-list" className="flex flex-col items-center">
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

export default CementListPage;


