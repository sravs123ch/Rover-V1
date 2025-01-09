import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Cola from '../../assets/images/softDrinks/cola.jpg';
import Lemonade from '../../assets/images/softDrinks/Lemonade.jpg';
import OrangeSoda from '../../assets/images/softDrinks/OrangeSoda.jpg';

const SoftDrinksDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = {
    id: id,
    name: 'Cola Drink',
    price: '₹50.00',
    offer: '15% off',
    description: 'Refreshing cola drink with a great taste. Perfect for quenching your thirst.',
    specifications: {
      volume: '500 ml',
      flavor: 'Cola',
      type: 'Carbonated Drink',
    },
    image: Cola,
    rating: 4.2,
    reviews: [
      { id: 1, name: 'Alice Cooper', review: 'Great taste, refreshing!', rating: 5 },
      { id: 2, name: 'Bob Marley', review: 'Good cola, but a bit too sweet for me.', rating: 3.5 },
    ],
    relatedProducts: [
      { id: 2, name: 'Lemonade', image: Lemonade, price: '₹45.00' },
      { id: 3, name: 'OrangeSoda', image: OrangeSoda, price: '₹55.00' },
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
    navigate(`/softdrinks/${relatedId}`);
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
            <li>Volume: {product.specifications.volume}</li>
            <li>Flavor: {product.specifications.flavor}</li>
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

export default SoftDrinksDetailsPage;
