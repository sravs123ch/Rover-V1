import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import ClayBrick from '../../assets/images/cementImages/Clay Brick.jpg'
import RedBrick from '../../assets/images/cementImages/redBricks.jpg'
import ConcreteBrick from '../../assets/images/cementImages/Concrete Brick.jpg'
import FlyAshBrick from '../../assets/images/cementImages/Fly Ash Brick.jpg'
import EngineeringBrick from '../../assets/images/cementImages/engineering-bricks-178 (1).jpg'
import CalciumSilicateBrick from '../../assets/images/cementImages/Calcium Silicate Brick.jpg'


const BrickListPage = () => {
    const allProducts = [
        { id: 1, name: 'Red Brick', price: '₹0.50', offer: '10% off', image: RedBrick, category: 'Red Brick' },
        { id: 2, name: 'Clay Brick', price: '₹0.60', offer: '15% off', image: ClayBrick, category: 'Clay Brick' },
        { id: 3, name: 'Concrete Brick', price: '₹0.70', offer: '5% off', image: ConcreteBrick, category: 'Concrete Brick' },
        { id: 4, name: 'Fly Ash Brick', price: '₹0.80', offer: '20% off', image: FlyAshBrick, category: 'Fly Ash Brick' },
        { id: 5, name: 'Engineering Brick', price: '₹1.00', offer: '25% off', image: EngineeringBrick, category: 'Engineering Brick' },
        { id: 6, name: 'Calcium Silicate Brick', price: '₹1.20', offer: '30% off', image: CalciumSilicateBrick, category: 'Calcium Silicate Brick' },
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
                BRICK SAVINGS ZONE
            </h1>
            <h1 className="text-4xl font-normal text-center text-black mb-4">
                PREMIUM BRICK PRODUCTS
            </h1>

            {/* Category Filter Section */}
            <div className="text-center mb-8">
                <div className="flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => handleCategoryFilter('All')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'All' ? 'bg-red-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Red Brick')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Red Brick' ? 'bg-red-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Red Brick
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Clay Brick')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Clay Brick' ? 'bg-red-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Clay Brick
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Concrete Brick')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Concrete Brick' ? 'bg-red-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Concrete Brick
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Fly Ash Brick')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Fly Ash Brick' ? 'bg-red-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Fly Ash Brick
                    </button>
                    <button
                        onClick={() => handleCategoryFilter('Engineering Brick')}
                        className={`px-4 py-2 rounded-full ${selectedCategory === 'Engineering Brick' ? 'bg-red-600 text-white' : 'bg-white text-black border'
                            }`}
                    >
                        Engineering Brick
                    </button>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProducts.map((product) => (
                    <div key={product.id} className="border p-4 rounded shadow-md">
                        <Link to={`/bricks/${product.id}`}>
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

            <div className="flex justify-center items-center mt-10">
                <Link to="/brick-list" className="flex flex-col items-center">
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

export default BrickListPage;
