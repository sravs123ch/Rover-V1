import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import DesertSand from '../../assets/images/sandImages/Desert Sand.jpg'
import RiverSand from '../../assets/images/sandImages/River Sand.jpg'
import MarineSand from '../../assets/images/sandImages/Marine Sand.jpg'
import PitSand from '../../assets/images/sandImages/Pit Sand.jpg'
import MasonSand from '../../assets/images/sandImages/Mason Sand.jpg'
import ConstructionSand from '../../assets/images/sandImages/constractionsand.jpg'
import ConstructionSand2 from '../../assets/images/sandImages/construtsand.jpg'
const SandListPage = () => {
    const allProducts = [
        { id: 1, name: 'Construction Sand', price: '₹400.00', offer: '10% off', image: ConstructionSand, category: 'Construction Sand' },
        { id: 2, name: 'Desert Sand', price: '₹560.00', offer: '15% off', image: DesertSand, category: 'Desert Sand' },
        { id: 3, name: 'River Sand', price: '₹640.00', offer: '5% off', image: RiverSand, category: 'River Sand' },
        { id: 4, name: 'Marine Sand', price: '₹480.00', offer: '20% off', image: MarineSand, category: 'Marine Sand' },
        { id: 5, name: 'Pit Sand', price: '₹720.00', offer: '25% off', image: PitSand, category: 'Pit Sand' },
        { id: 6, name: 'Mason Sand', price: '₹800.00', offer: '30% off', image: MasonSand, category: 'Mason Sand' },
        { id: 7, name: 'Construction Sand', price: '₹880.00', offer: '12% off', image: ConstructionSand2, category: 'Construction Sand' },
        { id: 8, name: 'Desert Sand', price: '₹960.00', offer: '8% off', image: DesertSand, category: 'Desert Sand' }
    ];
    


    // State for selected category and pagination
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    // Function to handle category filtering
    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
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
                SAND SAVINGS ZONE
            </h1>
            <h1 className="text-4xl font-normal text-center text-black mb-4">
                PREMIUM SAND PRODUCTS
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
                        onClick={() => handleCategoryFilter('Construction Sand')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Construction Sand' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Construction Sand
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Desert Sand')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Desert Sand' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Desert Sand
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('River Sand')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'River Sand' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        River Sand
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Marine Sand')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Marine Sand' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Marine Sand
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Pit Sand')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Pit Sand' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Pit Sand
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Mason Sand')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Mason Sand' ? 'bg-blue-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Mason Sand
                    </button>
                </div>
            </div>


            {/* Product Display Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProducts.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow-md">
                        <Link to={`/sand/${product.id}`}>
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
                <Link to="/sand-list" className="flex flex-col items-center">
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

export default SandListPage;
