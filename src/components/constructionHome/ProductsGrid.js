import React from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "./productgrid.css";
import Carousel from "react-multi-carousel";
import { FiChevronRight } from "react-icons/fi";
import ClayBrick from '../../assets/images/cementImages/Clay Brick.jpg'
import RedBrick from '../../assets/images/cementImages/redBricks.jpg'
import ConcreteBrick from '../../assets/images/cementImages/Concrete Brick.jpg'
import FlyAshBrick from '../../assets/images/cementImages/Fly Ash Brick.jpg'
import EngineeringBrick from '../../assets/images/cementImages/engineering-bricks-178 (1).jpg'
import CalciumSilicateBrick from '../../assets/images/cementImages/Calcium Silicate Brick.jpg'
import portlandCement from '../../assets/images/cementImages/portLandCement.jpg'
import portlandCement2 from '../../assets/images/cementImages/titan.jpg'
import whitecement from '../../assets/images/cementImages/whitecement.jpg'
import whiteCement2 from '../../assets/images/cementImages/brilliant-white-polymer-based-white-cement-1000x1000.jpg'
import RapidHardening from '../../assets/images/cementImages/rapid cement.jpg'
import Waterproof from '../../assets/images/cementImages/waterProof.jpg'
// import waterproof2 from '../../assets/images/cementImages/waterproof2.jpg'
import SulphateResisting from '../../assets/images/cementImages/sulphate1.jpg'
import LowHeat from '../../assets/images/cementImages/sulphate1.jpg'
import DesertSand from '../../assets/images/sandImages/Desert Sand.jpg'
import RiverSand from '../../assets/images/sandImages/River Sand.jpg'
import MarineSand from '../../assets/images/sandImages/Marine Sand.jpg'
import PitSand from '../../assets/images/sandImages/Pit Sand.jpg'
import MasonSand from '../../assets/images/sandImages/Mason Sand.jpg'
import ConstructionSand from '../../assets/images/sandImages/constractionsand.jpg'
import ConstructionSand2 from '../../assets/images/sandImages/construtsand.jpg'
// Sample product data for each category
const brickProducts = [
    { id: 1, name: 'Red Brick', price: '₹0.50', offer: '10% off', image: RedBrick, category: 'Red Brick' },
    { id: 2, name: 'Clay Brick', price: '₹0.60', offer: '15% off', image: ClayBrick, category: 'Clay Brick' },
    { id: 3, name: 'Concrete Brick', price: '₹0.70', offer: '5% off', image: ConcreteBrick, category: 'Concrete Brick' },
    { id: 4, name: 'Fly Ash Brick', price: '₹0.80', offer: '20% off', image: FlyAshBrick, category: 'Fly Ash Brick' },
    { id: 5, name: 'Engineering Brick', price: '₹1.00', offer: '25% off', image: EngineeringBrick, category: 'Engineering Brick' },
    { id: 6, name: 'Calcium Silicate Brick', price: '₹1.20', offer: '30% off', image: CalciumSilicateBrick, category: 'Calcium Silicate Brick' },
];

const cementProducts = [
    { id: 1, name: 'Portland', price: '₹400.00', offer: '10% off', image: portlandCement, category: 'Portland' },
    { id: 2, name: 'White Cement', price: '₹560.00', offer: '15% off', image: whiteCement2, category: 'White Cement' },
    { id: 3, name: 'Rapid Hardening', price: '₹640.00', offer: '5% off', image: RapidHardening, category: 'Rapid Hardening' },
    { id: 4, name: 'Waterproof', price: '₹480.00', offer: '20% off', image: Waterproof, category: 'Waterproof' },
    { id: 5, name: 'Sulphate Resisting', price: '₹720.00', offer: '25% off', image: SulphateResisting, category: 'Sulphate Resisting' },
    { id: 6, name: 'Low Heat', price: '₹800.00', offer: '30% off', image: LowHeat, category: 'Low Heat' },
    { id: 7, name: 'Titan', price: '₹880.00', offer: '12% off', image: portlandCement2, category: 'Portland' },
    { id: 8, name: 'White Cement', price: '₹960.00', offer: '8% off', image: whitecement, category: 'White Cement' },
];

const sandProducts = [
    { id: 1, name: 'Construction Sand', price: '₹400.00', offer: '10% off', image: ConstructionSand, category: 'Construction Sand' },
    { id: 2, name: 'Desert Sand', price: '₹560.00', offer: '15% off', image: DesertSand, category: 'Desert Sand' },
    { id: 3, name: 'River Sand', price: '₹640.00', offer: '5% off', image: RiverSand, category: 'River Sand' },
    { id: 4, name: 'Marine Sand', price: '₹480.00', offer: '20% off', image: MarineSand, category: 'Marine Sand' },
    { id: 5, name: 'Pit Sand', price: '₹720.00', offer: '25% off', image: PitSand, category: 'Pit Sand' },
    { id: 6, name: 'Mason Sand', price: '₹800.00', offer: '30% off', image: MasonSand, category: 'Mason Sand' },
    { id: 7, name: 'Construction Sand', price: '₹880.00', offer: '12% off', image: ConstructionSand2, category: 'Construction Sand' },
    { id: 8, name: 'Desert Sand', price: '₹960.00', offer: '8% off', image: DesertSand, category: 'Desert Sand' }
];

const groupProductsIntoRows = (products, itemsPerRow) => {
  const rows = [];
  for (let i = 0; i < products.length; i += itemsPerRow) {
    const rowProducts = products.slice(i, i + itemsPerRow);
    rows.push({
      products: rowProducts,
      viewAll: true,
    });
  }
  return rows;
};
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4, // Ensure 4 items on desktop
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
const ProductCarousel = () => {
  const productRows = [
    { category: "bricks", products: brickProducts },
    { category: "cement", products: cementProducts },
    { category: "sand", products: sandProducts },
  ];

  return (
    <div className="container mx-auto p-10">
 <h1 className="text-4xl font-extrabold text-center text-black mt-8 mb-4">
  CONSTRUCTION SAVING ZONE
</h1>
  <h1 className="text-4xl font-normal text-center text-black mb-4">
    EVERYDAY CASUAL
  </h1>

  {productRows.map((row, rowIndex) => (
    <div key={rowIndex} className="mb-8">
      <h2 className="text-3xl font-bold text-center text-black mb-4">{row.category.toUpperCase()}</h2>

      <Carousel
        responsive={responsive}
        infinite={false}
        arrows={row.products.length > 3}
        slidesToScroll={1}
      >
        {row.products.map((product) => (
          <div key={product.id} className="border p-2 rounded">
            <Link to={`/product-list/${row.category}`} className="block">
              <img
                src={product.image}
                alt={product.name || "Product Image"}
                className="w-full h-64 object-cover mb-4 rounded"  // Set a fixed height (h-64) and ensure all images have the same width and height
              />
              {product.name && (
                <h2 className="text-lg font-bold mb-2 text-center">{product.name}</h2>
              )}
              {product.price && (
                <p className="text-gray-600 mb-2 text-center">
                  {product.offer}{" "}
                  <span className="font-bold">{product.price}</span>
                </p>
              )}
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  ))}

</div>

  );
};

export default ProductCarousel;

