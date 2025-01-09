import React, { useState, useEffect } from "react";
import {
  FaArrowUp,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import Logo_google from "../../assets/logo/google_appstore.png";
import "./index.css";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update every minute to catch year change
    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  const companyMailId = "redtortue@ecommerce.com";
  const companyNumber = 9847567845;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-b2y">
          {/* <Link to="/">
            <img src={Logo} alt="logo" className="logo_img" />
          </Link> */}
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="w-24 h-auto md:w-32 lg:w-40"
            />
          </Link>

          <p>
            Discover a Different Kind of Shopping Experience at Redtortue. We
            offer unique products you won't find anywhere else, along with
            exceptional customer service.
          </p>
          <div className="footer-social-links">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <FaFacebookF className="social_icons" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <FaInstagram className="social_icons" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <FaLinkedinIn className="social_icons" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              <FaTwitter className="social_icons" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube"
            >
              <IoLogoYoutube className="social_icons white" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              <FaWhatsapp className="social_icons white" />
            </a>
          </div>
        </div>

        <div className="footer-company">
          <h1> </h1>
          <Link to="#">
            <p onClick={handleScrollToTop}>Our Products</p>
          </Link>
          <Link to="#">
            <p onClick={handleScrollToTop}>Shipping Policy</p>
          </Link>
          <Link to="#">
            <p onClick={handleScrollToTop}>Cancellation Policy</p>
          </Link>
          <Link to="#">
            <p onClick={handleScrollToTop}>Return & Exchange Policy</p>
          </Link>
          <Link to="#">
            <p onClick={handleScrollToTop}> Terms of Service</p>
          </Link>
          <Link to="#">
            <p onClick={handleScrollToTop}> Privacy Policy</p>
          </Link>
        </div>

        <div className="footer-support">
          <h1>SUPPORT</h1>
          <a href={`mailto:${companyMailId}`}>contact@roverinco.com</a>
          <a href={`tel:${companyNumber}`}>+91 9888684444</a>
          <img src={Logo_google} alt="lo" className="w-auto h-26" />
        </div>
        <div className="footer-address">
          <h1>Operational Address </h1>
          <address>
            301/302, 3rd Floor, Saket Callipolis,
            <br />
            Vanasthali Puram,
            <br />L B Nagar, Hyderabad, Telangana
          </address>
        </div>
        <button className="arrow-up" onClick={handleScrollToTop}>
          <FaArrowUp />
        </button>
      </div>

      {/* <div className="copy-rights">
        &copy; {currentYear} All rights reserved. Developed by{" "}
        <span>Redtortue Ecommerce Solutions Pvt. Ltd.</span>
      </div> */}
    </div>
  );
};

export default Footer;
