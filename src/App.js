import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for ToastContainer
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import ProductDetails from "./components/Products/ProductDetails";
import AddToCartPage from "./components/addtocart"; // Import the AddToCartPage component
import CheckoutPage from "./components/Order/checkoutpage";
import ProductList from "./components/Products/productlist";
import Login from "./components/Login";
import OrderHistory from "./Component/OrderHistory";
import Register from "./Component/Register";
import NavbarCategory from "./components/Navbar/navbarcategories";
import Profile from "./components/Order/profile";
import GroceryPage from "./components/grocery/index"; // Make sure the path is correct
import Clothing from "./components/clothing/Clothing/Clothing";
import GroceryDetail from "./components/grocery/GroceryDetail";
import GoldList from './Gold/Goldlist';
import GoldDetails from './Gold/GoldDetails';
import GoldHome from './components/Home/GoldHome';
import CementListPage from './components/Pages/cementList';
import CementDetailsPage from './components/Pages/cementDetailsPage';
import BrickListPage from './components/Pages/bricksList';
import SandListPage from './components/Pages/sandList';
import BricksDetailsPage from './components/Pages/bricksdetails';
import SandDetailsPage from './components/Pages/sandDetails';
import ConstractionHome from '../src/components/constructionHome/Home'
import SoftDrinkListPage from "./components/SoftDrinks/softdrinklist";
import FoodListPage from './components/food/food';
import FoodDetailsPage from "./components/food/fooddetails";
import SoftDrinksDetailsPage from "./components/SoftDrinks/softdrinDetails";
import SilverList from './Gold/Silverlist';
import DiamondList from './Gold/Diamondlist';
import EarringsList from './Gold/Earringslist';
import RoldGold from './Gold/RoldGold';
import FruitsvegetablesList from './components/grocery/veg-fruitslist';
import BakeryList from './components/grocery/Bakery';
import HouseholdList from './components/grocery/Household';
import HealthList from './components/grocery/Healthlist';
import Fmcglist from '../src/components/Home/FMCGHome';
import BabyCare from '../src/components/FMCG/babycare';
import Electronics from '../src/components/FMCG/Electronics';
import SkinCare from '../src/components/FMCG/SkinCare';
import Dairy from './components/Dairy/Dairy';
import DairyDetailsPage from "./components/Dairy/dairyDeatail";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    let cart = [...cartItems, product];
    setCartItems(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleRemoveFromCart = (index) => {
    let cart = [...cartItems];
    cart.splice(index, 1);
    setCartItems(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleMoveToWishlist = (index) => {
    let cart = [...cartItems];
    cart.splice(index, 1);
    setCartItems(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Moved to wishlist");
  };

  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Router>
        <ScrollToTop />
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            exact
            path="/"
            element={<Home onAddToCart={handleAddToCart} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/clothing" element={<Clothing />} />

          <Route
            path="/product/:productId"
            element={<ProductDetails onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <AddToCartPage
                cartItems={cartItems}
                onAddToCart={handleAddToCart}
                onRemove={handleRemoveFromCart}
                onMoveToWishlist={handleMoveToWishlist}
              />
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/buynow" element={<CheckoutPage />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/profile/orderHistory" element={<OrderHistory />} />
          <Route
            path="/category/:gender/:type/:subtype"
            element={<NavbarCategory />}
          />
          <Route path="/groceries" element={<GroceryPage />} />
          <Route path="/groceries/:id" element={<GroceryDetail />} />
          <Route exact path="/gold" element={<GoldHome onAddToCart={handleAddToCart} />} />
          <Route path="/gold-list" element={<GoldList />} />
          <Route path="/gold/:goldId" element={<GoldDetails onAddToCart={handleAddToCart} />} />
          <Route path="/construction-material" element={<ConstractionHome />} />
          <Route path="/product-list/cement" element={<CementListPage />} />
          <Route path="/product-list/bricks" element={<BrickListPage />} />
          <Route path="/bricks/:id" element={<BricksDetailsPage />} />
          <Route path="/profile/orderHistory" element={<OrderHistory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product-list/sand" element={<SandListPage />} />
          <Route path="/sand/:id" element={<SandDetailsPage />} />
          <Route path="/category/:gender/:type/:subtype" element={<NavbarCategory />} />
          <Route path="/cement/:id" element={<CementDetailsPage />} />
          <Route path="/softDrinks" element={<SoftDrinkListPage />} />
          <Route path="/Food" element={<FoodListPage />} />
          <Route path="/foods/:id" element={<FoodDetailsPage />} />
          <Route path="/softdrinks/:id" element={<SoftDrinksDetailsPage />} />
          <Route path="/fruits-vegetables" element={<FruitsvegetablesList />} />
          <Route path="/dairy-bakery" element={<BakeryList />} />
          <Route path="/household-supplies" element={<HouseholdList />} />
          <Route path="/health-wellness" element={<HealthList />} />
          <Route exact path="/rold-gold" element={<RoldGold onAddToCart={handleAddToCart} />} />
          <Route path="/silver-list" element={<SilverList />} />
          <Route path="/diamond-list" element={<DiamondList />} />
          <Route path="/earrings-list" element={<EarringsList />} />
          <Route path="/FMCG" element={<Fmcglist />} />
          <Route path="/baby-care" element={<BabyCare/>} />
          <Route path="/electronics" element={<Electronics/>} />
          <Route path="/skin-care" element={<SkinCare/>} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/dairy/:id" element={<DairyDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
