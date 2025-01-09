// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaUser,
//   FaShoppingBag,
//   FaHeart,
//   FaTag,
//   FaTrophy,
//   FaBell,
//   FaQuestionCircle,
//   FaCog,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import image1 from "../../assets/profile_images/image1.svg";

// const Profile = () => {
//   return (
//     <div className="min-h-screen mt-14 ">
//       <main className="container mx-auto p-6 mt-24">
//          {/* Profile details */}
//  <div className="p-2 mb-8">
//   <div className="flex items-center space-x-4">
//     <div className="flex-shrink-0">
//       <img src={image1} alt="Profile" className="w-10 h-10 rounded-full border" />
//     </div>
//     <div className="flex flex-col">
//       <h6 className="text-sm font-bold text-gray-900">John Doe</h6>
//       <p className="text-sm text-gray-600">john.doe@example.com</p>
//     </div>
//   </div>
// </div>

//         {/* Profile details and sidebar */}
//         <div className=" p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Sidebar with profile icons and labels */}
//           <div className="space-y-6 md:col-span-1">
//             <Link
//               to="/profile"
//               className="flex items-center space-x-4 text-gray-500 hover:text-blue-600"
//             >
//               <FaUser className="text-xl" />
//               <span>Profile</span>
//             </Link>
//             <Link
//               to="/orderHistory"
//               className="flex items-center space-x-4 text-gray-500 hover:text-blue-600"
//             >
//               <FaShoppingBag className="text-xl" />
//               <span>Orders</span>
//             </Link>
//             <Link
//               to="/wishlist"
//               className="flex items-center space-x-4 text-gray-500 hover:text-blue-600"
//             >
//               <FaHeart className="text-xl" />
//               <span>Wishlist</span>
//             </Link>
//             <Link
//               to="/coupons"
//               className="flex items-center space-x-4 text-gray-500 hover:text-blue-600"
//             >
//               <FaTag className="text-xl" />
//               <span>Coupons</span>
//             </Link>
//             <Link
//               to="/rewards"
//               className="flex items-center space-x-4 text-gray-500 hover:text-blue-600"
//             >
//               <FaTrophy className="text-xl" />
//               <span>Rewards</span>
//             </Link>
//             <Link
//               to="/notifications"
//               className="flex items-center space-x-4 text-gray-500 hover:text-blue-600"
//             >
//               <FaBell className="text-xl" />
//               <span>Notifications</span>
//             </Link>
//             <Link
//               to="/help-center"
//               className="flex items-center space-x-4 text-gray-500 hover:text-blue-600"
//             >
//               <FaQuestionCircle className="text-xl" />
//               <span>Help Center</span>
//             </Link>
//             <Link
//               to="/settings"
//               className="flex items-center space-x-4 text-gray-500 hover:text-blue-600"
//             >
//               <FaCog className="text-xl" />
//               <span>Settings</span>
//             </Link>
//             <Link
//               to="/"
//               className="flex items-center space-x-4 text-gray-500 hover:text-blue-600"
//             >
//               <FaSignOutAlt className="text-xl" />
//               <span>Logout</span>
//             </Link>
//           </div>

//           {/* Profile details form */}
//           <div className="md:col-span-2">
//   <form className="space-y-4">
  
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//   <div>
//     <label
//       htmlFor="first-name"
//       className="block text-sm font-medium text-gray-700 mb-4"
//     >
//       First Name
//     </label>
//     <input
//       id="first-name"
//       type="text"
//       className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//     />
//   </div>


//       <div>
//         <label
//           htmlFor="last-name"
//           className="block text-sm font-medium text-gray-700 mb-4"
//         >
//           Last Name
//         </label>
//         <input
//           id="last-name"
//           type="text"
//           className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//         />
//       </div>
//       <div>
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-700 mb-4"
//         >
//           Email
//         </label>
//         <input
//           id="email"
//           type="email"
//           className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//         />
//       </div>
//       <div>
//         <label
//           htmlFor="phone-number"
//           className="block text-sm font-medium text-gray-700 mb-4"
//         >
//           Phone Number
//         </label>
//         <input
//           id="phone-number"
//           type="tel"
//           className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//         />
//       </div>
//       <div>
//         <label
//           htmlFor="dob"
//           className="block text-sm font-medium text-gray-700 mb-4"
//         >
//           Date of Birth
//         </label>
//         <input
//           id="dob"
//           type="date"
//           className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//         />
//       </div>
//       <div>
//         <label
//           htmlFor="alt-phone"
//           className="block text-sm font-medium text-gray-700 mb-4"
//         >
//           Alternative Phone Number
//         </label>
//         <input
//           id="alt-phone"
//           type="tel"
//           className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//         />
//       </div>
//       <div>
//   <label
//     htmlFor="gender"
//     className="block text-sm font-medium text-gray-700 mb-4"
//   >
//     Gender
//   </label>
//   <div className="mt-1 flex items-center space-x-4">
//     <div className="flex items-center">
//       <input
//         id="male"
//         name="gender"
//         type="radio"
//         value="Male"
//         className="h-4 w-4 border-gray-500 focus:ring-blue-500"
//       />
//       <label htmlFor="male" className="ml-2 text-sm text-gray-700">
//         Male
//       </label>
//     </div>
//     <div className="flex items-center">
//       <input
//         id="female"
//         name="gender"
//         type="radio"
//         value="Female"
//         className="h-4 w-4 border-black focus:ring-blue-500"
//       />
//       <label htmlFor="female" className="ml-2 text-sm text-gray-700">
//         Female
//       </label>
//     </div>
//     <div className="flex items-center">
//       <input
//         id="other"
//         name="gender"
//         type="radio"
//         value="Other"
//         className="h-4 w-4 border-black focus:ring-blue-500"
//       />
//       <label htmlFor="other" className="ml-2 text-sm text-gray-700">
//         Other
//       </label>
//     </div>
//   </div>
// </div>

//     </div>
  
//     <div className="flex justify-center">
//   <button
//     type="submit"
//     className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full max-w-xs"
//   >
//     Save Details
//   </button>
// </div>

//   </form>
// </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  FaUser,
  FaShoppingBag,
  FaHeart,
  FaTag,
  FaTrophy,
  FaBell,
  FaQuestionCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import image1 from "../../assets/profile_images/image1.svg";

// Separate components for Profile and Orders
import ProfileForm from "../../components/profile/profileform";
import OrderHistory from '../../Component/OrderHistory';
import WishlistPage from '../../components/profile/wishlist';
import CouponsPage from '../../components/profile/coupons';
import RewardsPage from '../../components/profile/rewards';
import NotificationsPage from '../../components/profile/notification';
import HelpCenterPage from '../../components/profile/helpcenter';
import SettingsPage from '../../components/profile/setting';

const Profile = () => {
  // State to keep track of the active section
  const [activeSection, setActiveSection] = useState('profile');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Perform any logout logic here if needed
    // Clear local storage
  localStorage.clear();
    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="min-h-screen mt-14">
      <main className="container mx-auto p-6 mt-24">
        {/* Profile details */}
        <div className="p-2 mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img src={image1} alt="Profile" className="w-10 h-10 rounded-full border" />
            </div>
            <div className="flex flex-col">
              <h6 className="text-sm font-bold text-gray-900">John Doe</h6>
              <p className="text-sm text-gray-600">john.doe@example.com</p>
            </div>
          </div>
        </div>

        {/* Profile details and sidebar */}
        <div className="p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar with profile icons and labels */}
          <div className="space-y-6 md:col-span-1">
            <button
              onClick={() => setActiveSection('profile')}
              className={`flex items-center space-x-4 ${activeSection === 'profile' ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}
            >
              <FaUser className="text-xl" />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveSection('orders')}
              className={`flex items-center space-x-4 ${activeSection === 'orders' ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}
            >
              <FaShoppingBag className="text-xl" />
              <span>Orders</span>
            </button>
            <button
              onClick={() => setActiveSection('wishlist')}
              className={`flex items-center space-x-4 ${activeSection === 'wishlist' ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}
            >
              <FaHeart className="text-xl" />
              <span>Wishlist</span>
            </button>
            <button
              onClick={() => setActiveSection('coupons')}
              className={`flex items-center space-x-4 ${activeSection === 'coupons' ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}
            >
              <FaTag className="text-xl" />
              <span>Coupons</span>
            </button>
            <button
              onClick={() => setActiveSection('rewards')}
              className={`flex items-center space-x-4 ${activeSection === 'rewards' ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}
            >
              <FaTrophy className="text-xl" />
              <span>Rewards</span>
            </button>
            <button
              onClick={() => setActiveSection('notifications')}
              className={`flex items-center space-x-4 ${activeSection === 'notifications' ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}
            >
              <FaBell className="text-xl" />
              <span>Notifications</span>
            </button>
            <button
              onClick={() => setActiveSection('help-center')}
              className={`flex items-center space-x-4 ${activeSection === 'help-center' ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}
            >
              <FaQuestionCircle className="text-xl" />
              <span>Help Center</span>
            </button>
            <button
              onClick={() => setActiveSection('settings')}
              className={`flex items-center space-x-4 ${activeSection === 'settings' ? "text-blue-600" : "text-gray-500"} hover:text-blue-600`}
            >
              <FaCog className="text-xl" />
              <span>Settings</span>
            </button>
            <button
              // onClick={() => console.log('Logout')}
              onClick={handleLogout}
              className="flex items-center space-x-4 text-gray-500 hover:text-blue-600"
            >
              <FaSignOutAlt className="text-xl" />
              <span>Logout</span>
            </button>
          </div>

          {/* Conditional Rendering of Content Based on Active Section */}
          <div className="md:col-span-2">
            {activeSection === 'profile' && <ProfileForm />}
            {activeSection === 'orders' && <OrderHistory />}
            {activeSection === 'wishlist' && <WishlistPage />}
            {activeSection === 'coupons' && <CouponsPage />}
            {activeSection === 'rewards' && <RewardsPage />}
            {activeSection === 'notifications' && <NotificationsPage />}
            {activeSection === 'help-center' && <HelpCenterPage />}
            {activeSection === 'settings' && <SettingsPage />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
