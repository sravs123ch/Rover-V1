import React, { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo/shared image.jpg";
import { BsCart3 } from "react-icons/bs";
import Login from "../Login"; // Import your Login component here
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navbarColor, setNavbarColor] = useState("ffffff");
  const [navbarTextColor, setNavbarTextColor] = useState("#000000");
  const [showLoginModal, setShowLoginModal] = useState(false); // State for showing login modal
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setNavbarColor("#ffffff");
        setNavbarTextColor("#000000");
      } else {
        setNavbarColor("ffffff"); // Change this to your desired initial navbar color
        setNavbarTextColor("#000000");
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <nav
        className="flex justify-between items-center p-4 fixed w-full top-0 z-10 transition-all duration-300"
        style={{ backgroundColor: navbarColor }}
      >
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" className="logo_img w-12 h-8" />
          </Link>
        </div>

        {/* Menu Icon */}
        <div
          className="menu-icon lg:hidden"
          onClick={() => setClicked(!clicked)}
        >
          {clicked ? (
            <FaTimes className="text-2xl" style={{ color: "#000000" }} />
          ) : (
            <FaBarsStaggered
              className="text-2xl"
              style={{ color: "#000000" }}
            />
          )}
        </div>

        {/* Navbar Items */}
        <ul
          className={`lg:flex lg:items-center lg:gap-6 ${
            clicked ? "flex flex-col items-center" : "hidden"
          } lg:flex-row lg:static absolute w-full lg:w-auto left-0 lg:left-auto bg-white lg:bg-transparent top-16 lg:top-auto py-4 lg:py-0`}
          style={{ color: "#000000" }}
        >
          <li className="nav-item mx-2">
            <div onClick={() => navigate("/cart")} className="relative">
              <BsCart3 className="text-xl cursor-pointer" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {cartItems.length}
              </span>
            </div>
          </li>
          <li className="nav-item w-full ml-6 mr-6" style={{ width: "200px" }}>
            <div onClick={openLoginModal}>
              <span className="inline">Login | Signup</span>
            </div>
          </li>
        </ul>
      </nav>

      {/* Login Modal */}
      {showLoginModal && <Login onClose={closeLoginModal} />}
    </>
  );
};

export default Navbar;

