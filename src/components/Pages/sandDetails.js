import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import DesertSand from '../../assets/images/sandImages/Desert Sand.jpg'
import RiverSand from '../../assets/images/sandImages/River Sand.jpg'
import MarineSand from '../../assets/images/sandImages/Marine Sand.jpg'
import PitSand from '../../assets/images/sandImages/Pit Sand.jpg'
import MasonSand from '../../assets/images/sandImages/Mason Sand.jpg'
import ConstructionSand from '../../assets/images/sandImages/constractionsand.jpg'
import ConstructionSand2 from '../../assets/images/sandImages/construtsand.jpg'

const SandDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = {
    id: id,
    name: 'Construction Sand',
    price: '₹400.00',
    offer: '15% off',
    description: 'Premium quality sand suitable for construction, landscaping, and other applications. Offers great consistency and durability.',
    specifications: {
      weight: '40 kg',
      color: 'Golden',
      usage: 'Construction and Landscaping',
      type: 'Construction Sand',
    },
    image: ConstructionSand,
    rating: 4.0,
    reviews: [
      { id: 1, name: 'Michael Lee', review: 'Very good sand for construction. Highly recommend.', rating: 5 },
      { id: 2, name: 'Sarah Green', review: 'Good quality, but a little more expensive compared to others.', rating: 4 },
    ],
    relatedProducts: [
      { id: 2, name: 'River Sand', image: DesertSand, price: '₹700.00' },
      { id: 3, name: 'Marine Sand', image: MasonSand, price: '₹800.00' },
    ],
  };

  const [quantity, setQuantity] = useState(1);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  const navigateToListView = (relatedId) => {
    navigate(`/products/${relatedId}`);
  };

  return (
    <div className="container mx-auto p-10 mt-28">
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded shadow-lg" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <p className="text-xl font-bold text-blue-600">{product.price}</p>
            <span className="ml-2 text-sm text-red-500">{product.offer}</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">Specifications</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Weight: {product.specifications.weight}</li>
            <li>Color: {product.specifications.color}</li>
            <li>Usage: {product.specifications.usage}</li>
            <li>Type: {product.specifications.type}</li>
          </ul>
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-4 font-semibold">Quantity:</label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-20 p-2 border rounded"
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Ratings and Reviews */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Ratings & Reviews</h2>
        <div className="flex items-center mb-4">
          <p className="text-3xl font-bold text-yellow-500">{product.rating}</p>
          <span className="ml-2 text-gray-600">/ 5</span>
          <div className="ml-4 flex">{renderStars(product.rating)}</div>
        </div>
        <ul className="space-y-4">
          {product.reviews.map((review) => (
            <li key={review.id} className="border p-4 rounded shadow-sm">
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-gray-600">{review.review}</p>
              <div className="flex">{renderStars(review.rating)}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Related Products */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.relatedProducts.map((related) => (
            <div
              key={related.id}
              className="border p-4 rounded shadow-sm cursor-pointer hover:shadow-lg"
              onClick={() => navigateToListView(related.id)}
            >
              <img
                src={related.image}
                alt={related.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="font-semibold text-lg">{related.name}</h3>
              <p className="text-gray-600">{related.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SandDetailsPage;
