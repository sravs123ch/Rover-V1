// import React from "react";

// const ProfileForm = () => {
//   return (
//     <form className="space-y-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-4">
//             First Name
//           </label>
//           <input
//             id="first-name"
//             type="text"
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-4">
//             Last Name
//           </label>
//           <input
//             id="last-name"
//             type="text"
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-4">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-4">
//             Phone Number
//           </label>
//           <input
//             id="phone-number"
//             type="tel"
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-4">
//             Date of Birth
//           </label>
//           <input
//             id="dob"
//             type="date"
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="alt-phone" className="block text-sm font-medium text-gray-700 mb-4">
//             Alternative Phone Number
//           </label>
//           <input
//             id="alt-phone"
//             type="tel"
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-4">
//             Gender
//           </label>
//           <div className="mt-1 flex items-center space-x-4">
//             <div className="flex items-center">
//               <input
//                 id="male"
//                 name="gender"
//                 type="radio"
//                 value="Male"
//                 className="h-4 w-4 border-gray-500 focus:ring-blue-500"
//               />
//               <label htmlFor="male" className="ml-2 text-sm text-gray-700">
//                 Male
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 id="female"
//                 name="gender"
//                 type="radio"
//                 value="Female"
//                 className="h-4 w-4 border-black focus:ring-blue-500"
//               />
//               <label htmlFor="female" className="ml-2 text-sm text-gray-700">
//                 Female
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 id="other"
//                 name="gender"
//                 type="radio"
//                 value="Other"
//                 className="h-4 w-4 border-black focus:ring-blue-500"
//               />
//               <label htmlFor="other" className="ml-2 text-sm text-gray-700">
//                 Other
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <button
//           type="submit"
//           className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full max-w-xs"
//         >
//           Save Details
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ProfileForm;

// import React, { useState, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";


// const ProfileForm = () => {
//   const [formData, setFormData] = useState({
//     FirstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     dob: "",
//     altPhone: "",
//     gender: "",
//   });

//   useEffect(() => {
//     // Assuming the token is stored in localStorage
//     const token = localStorage.getItem("token");
//     if (token) {
//       const decoded = jwtDecode(token); // Decode the token to get user details
//       setFormData({
//         FirstName: decoded.FirstName || "",
//         lastName: decoded.lastName || "",
//         email: decoded.email || "",
//         phoneNumber: decoded.phoneNumber || "",
//         dob: decoded.dob || "",
//         altPhone: decoded.altPhone || "",
//         gender: decoded.gender || "",
//       });
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log("Form data submitted:", formData);
//   };

//   return (
//     <form className="space-y-4" onSubmit={handleSubmit}>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-4">
//             First Name
//           </label>
//           <input
//             id="firstName"
//             type="text"
//             value={formData.FirstName}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-4">
//             Last Name
//           </label>
//           <input
//             id="lastName"
//             type="text"
//             value={formData.lastName}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-4">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-4">
//             Phone Number
//           </label>
//           <input
//             id="phoneNumber"
//             type="tel"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-4">
//             Date of Birth
//           </label>
//           <input
//             id="dob"
//             type="date"
//             value={formData.dob}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="altPhone" className="block text-sm font-medium text-gray-700 mb-4">
//             Alternative Phone Number
//           </label>
//           <input
//             id="altPhone"
//             type="tel"
//             value={formData.altPhone}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-4">
//             Gender
//           </label>
//           <div className="mt-1 flex items-center space-x-4">
//             <div className="flex items-center">
//               <input
//                 id="male"
//                 name="gender"
//                 type="radio"
//                 value="Male"
//                 checked={formData.gender === "Male"}
//                 onChange={handleChange}
//                 className="h-4 w-4 border-gray-500 focus:ring-blue-500"
//               />
//               <label htmlFor="male" className="ml-2 text-sm text-gray-700">
//                 Male
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 id="female"
//                 name="gender"
//                 type="radio"
//                 value="Female"
//                 checked={formData.gender === "Female"}
//                 onChange={handleChange}
//                 className="h-4 w-4 border-black focus:ring-blue-500"
//               />
//               <label htmlFor="female" className="ml-2 text-sm text-gray-700">
//                 Female
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 id="other"
//                 name="gender"
//                 type="radio"
//                 value="Other"
//                 checked={formData.gender === "Other"}
//                 onChange={handleChange}
//                 className="h-4 w-4 border-black focus:ring-blue-500"
//               />
//               <label htmlFor="other" className="ml-2 text-sm text-gray-700">
//                 Other
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <button
//           type="submit"
//           className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full max-w-xs"
//         >
//           Save Details
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ProfileForm;


// import React, { useState, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";

// const ProfileForm = () => {
//   const [formData, setFormData] = useState({
//     TenantID: "",
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     Password: "",
//     PhoneNumber: "",
//     AddressLine1: "",
//     AddressLine2: "",
//     CityID: "",
//     StateID: "",
//     CountryID: "",
//     Zipcode: "",
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         console.log("Decoded token:", decoded); // Debugging: Check the structure of the decoded token
//         setFormData({
//           TenantID: decoded?.TenantID || "",
//           FirstName: decoded?.FirstName || "",
//           LastName: decoded?.LastName || "",
//           Email: decoded?.Email || "",
//           Password: decoded?.Password || "",
//           PhoneNumber: decoded?.PhoneNumber || "",
//           AddressLine1: decoded?.Address?.AddressLine1 || "",
//           AddressLine2: decoded?.Address?.AddressLine2 || "",
//           CityID: decoded?.Address?.CityID || "",
//           StateID: decoded?.Address?.StateID || "",
//           CountryID: decoded?.Address?.CountryID || "",
//           Zipcode: decoded?.Address?.Zipcode || "",
//         });
//       } catch (error) {
//         console.error("Error decoding token:", error);
//       }
//     }
//   }, []);

// import React, { useState, useEffect, useContext } from "react";
// import { jwtDecode } from "jwt-decode";
// import { GlobalContext } from "../../context/GlobalContext";
// import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation

// const ProfileForm = () => {
//   const { getToken ,saveUserData} = useContext(GlobalContext);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     TenantID: 1,
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     Password: "",
//     ConfirmPassword: "",
//     PhoneNumber: "",
//     AddressLine1: "",
//     AddressLine2: "",
//     CityID: "",
//     StateID: "",
//     CountryID: "",
//     Zipcode: "",
//   });

//   useEffect(() => {
//     const token = getToken();
//     if (token) {
//       const decoded = jwtDecode(token);
//       try {
//         setFormData({
//           TenantID: decoded?.TenantID || "",
//           FirstName: decoded?.FirstName || "",
//           LastName: decoded?.LastName || "",
//           Email: decoded?.Email || "",
//           Password: decoded?.Password || "",
//           PhoneNumber: decoded?.PhoneNumber || "",
//           AddressLine1: decoded?.Address?.AddressLine1 || "",
//           AddressLine2: decoded?.Address?.AddressLine2 || "",
//           CityID: decoded?.Address?.CityID || "",
//           StateID: decoded?.Address?.StateID || "",
//           CountryID: decoded?.Address?.CountryID || "",
//           Zipcode: decoded?.Address?.Zipcode || "",
//         });
//       } catch (error) {
//         console.error("Error decoding token:", error);
//         navigate("/register");
//       }
//     } else {
//       navigate("/register"); // Redirect to login if no token is found
//     }
//   }, [getToken, navigate]);


//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data submitted:", formData);
//     saveUserData(formData);
//   };

import React, { useState, useEffect, useContext } from "react";
import {jwtDecode} from "jwt-decode";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const { getToken } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    AddressLine1: "",
    AddressLine2: "",
    CityID: "",
    StateID: "",
    CountryID: "",
    Zipcode: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const token = getToken();
   
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setFormData({
          FirstName: decoded?.FirstName || "",
          LastName: decoded?.LastName || "",
          Email: decoded?.Email || "",
          PhoneNumber: decoded?.PhoneNumber || "",
          AddressLine1: decoded?.Address?.AddressLine1 || "",
          AddressLine2: decoded?.Address?.AddressLine2 || "",
          CityID: decoded?.Address?.CityID || "",
          StateID: decoded?.Address?.StateID || "",
          CountryID: decoded?.Address?.CountryID || "",
          Zipcode: decoded?.Address?.Zipcode || "",
        });
      } catch (error) {
        console.error("Error decoding token:", error);
        navigate("/login");
      }
    } else {
      navigate("/login"); // Redirect to register if no token is found
    }
  // }, [getToken, navigate]);
}, [navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setIsEditing(false); // Stop editing mode after saving
  };

  const handleEditClick = () => {
    setIsEditing(true); // Enable editing mode
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700 mb-4">
            First Name
          </label>
          <input
            id="FirstName"
            type="text"
            value={formData.FirstName}
            onChange={handleChange}
            readOnly={!isEditing} // Make fields read-only if not editing
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 mb-4">
            Last Name
          </label>
          <input
            id="LastName"
            type="text"
            value={formData.LastName}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-4">
            Email
          </label>
          <input
            id="Email"
            type="email"
            value={formData.Email}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700 mb-4">
            Phone Number
          </label>
          <input
            id="PhoneNumber"
            type="tel"
            value={formData.PhoneNumber}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="AddressLine1" className="block text-sm font-medium text-gray-700 mb-4">
            Address Line 1
          </label>
          <input
            id="AddressLine1"
            type="text"
            value={formData.AddressLine1}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="AddressLine2" className="block text-sm font-medium text-gray-700 mb-4">
            Address Line 2
          </label>
          <input
            id="AddressLine2"
            type="text"
            value={formData.AddressLine2}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="CityID" className="block text-sm font-medium text-gray-700 mb-4">
            City ID
          </label>
          <input
            id="CityID"
            type="text"
            value={formData.CityID}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="StateID" className="block text-sm font-medium text-gray-700 mb-4">
            State ID
          </label>
          <input
            id="StateID"
            type="text"
            value={formData.StateID}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="CountryID" className="block text-sm font-medium text-gray-700 mb-4">
            Country ID
          </label>
          <input
            id="CountryID"
            type="text"
            value={formData.CountryID}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="Zipcode" className="block text-sm font-medium text-gray-700 mb-4">
            Zipcode
          </label>
          <input
            id="Zipcode"
            type="text"
            value={formData.Zipcode}
            onChange={handleChange}
            readOnly={!isEditing}
            className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${!isEditing ? 'bg-gray-100' : ''}`}
          />
        </div>
      </div>
      <div className="flex justify-between space-x-4 mt-4">
        <button
          type="button"
          onClick={handleEditClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;


// import React, { useState, useEffect, useContext } from "react";
// import {jwtDecode} from "jwt-decode"; // Corrected import
// import { GlobalContext } from "../../context/GlobalContext";
// import { useNavigate } from "react-router-dom";

// const ProfileForm = () => {
//   const { getToken } = useContext(GlobalContext);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     PhoneNumber: "",
//     AddressLine1: "",
//     AddressLine2: "",
//     CityID: "",
//     StateID: "",
//     CountryID: "",
//     Zipcode: "",
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     const token = getToken();

//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         console.log('Decoded Token:', decoded); // Inspect the decoded token
//         setFormData({
//           FirstName: decoded?.FirstName || "",
//           LastName: decoded?.LastName || "",
//           Email: decoded?.Email || "",
//           PhoneNumber: decoded?.PhoneNumber || "",
//           AddressLine1: decoded?.Address?.AddressLine1 || "",
//           AddressLine2: decoded?.Address?.AddressLine2 || "",
//           CityID: decoded?.Address?.CityID || "",
//           StateID: decoded?.Address?.StateID || "",
//           CountryID: decoded?.Address?.CountryID || "",
//           Zipcode: decoded?.Address?.Zipcode || "",
//         });
//       } catch (error) {
//         console.error("Error decoding token:", error);
//         navigate("/register");
//       }
//     } else {
//       navigate("/register"); // Redirect to register if no token is found
//     }
//   }, [getToken, navigate]);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data submitted:", formData);
//     setIsEditing(false); // Switch back to view mode after saving
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   return (
//     <form className="space-y-4" onSubmit={handleSubmit}>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {Object.keys(formData).map((key) => (
//           <div key={key}>
//             <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-2">
//               {key.replace(/([A-Z])/g, ' $1').trim()} {/* Converts camelCase to separate words */}
//             </label>
//             <input
//               id={key}
//               type="text"
//               value={formData[key]}
//               onChange={handleChange}
//               readOnly={!isEditing} // Make fields read-only when not editing
//               className={`mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12 ${isEditing ? '' : 'bg-gray-100'}`}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-end space-x-4 mt-4">
//         {isEditing ? (
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Save Changes
//           </button>
//         ) : (
//           <button
//             type="button"
//             onClick={handleEditClick}
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Edit
//           </button>
//         )}
//       </div>
//     </form>
//   );
// };

// export default ProfileForm;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; 

// const ProfileForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     TenantID: "",
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     Password: "", // Usually, passwords are not stored in localStorage, ensure security best practices
//     ConfirmPassword: "", // Consider removing this if not needed
//     PhoneNumber: "",
//     AddressLine1: "",
//     AddressLine2: "",
//     CityID: "",
//     StateID: "",
//     CountryID: "",
//     Zipcode: "",
//   });

//   useEffect(() => {
//     const storedDetails = localStorage.getItem("registeredDetails");
//     if (storedDetails) {
//       const parsedDetails = JSON.parse(storedDetails);
//       setFormData({
//         TenantID: parsedDetails?.TenantID || "",
//         FirstName: parsedDetails?.FirstName || "",
//         LastName: parsedDetails?.LastName || "",
//         Email: parsedDetails?.Email || "",
//         Password: "", // Password should not be stored in local storage
//         ConfirmPassword: "", // Consider removing this if not needed
//         PhoneNumber: parsedDetails?.PhoneNumber || "",
//         AddressLine1: parsedDetails?.AddressLine1 || "",
//         AddressLine2: parsedDetails?.AddressLine2 || "",
//         CityID: parsedDetails?.CityID || "",
//         StateID: parsedDetails?.StateID || "",
//         CountryID: parsedDetails?.CountryID || "",
//         Zipcode: parsedDetails?.Zipcode || "",
//       });
//     } else {
//       navigate("/register"); // Redirect to register if no details are found in local storage
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form data submitted:", formData);
//     // You may want to save the updated details back to local storage if needed
//     localStorage.setItem('registeredDetails', JSON.stringify(formData));
//   };

//   return (
//     <form className="space-y-4" onSubmit={handleSubmit}>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="TenantID" className="block text-sm font-medium text-gray-700 mb-4">
//             Tenant ID
//           </label>
//           <input
//             id="TenantID"
//             type="text"
//             value={formData.TenantID}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700 mb-4">
//             First Name
//           </label>
//           <input
//             id="FirstName"
//             type="text"
//             value={formData.FirstName}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 mb-4">
//             Last Name
//           </label>
//           <input
//             id="LastName"
//             type="text"
//             value={formData.LastName}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-4">
//             Email
//           </label>
//           <input
//             id="Email"
//             type="email"
//             value={formData.Email}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="Password" className="block text-sm font-medium text-gray-700 mb-4">
//             Password
//           </label>
//           <input
//             id="Password"
//             type="password"
//             value={formData.Password}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="PhoneNumber" className="block text-sm font-medium text-gray-700 mb-4">
//             Phone Number
//           </label>
//           <input
//             id="PhoneNumber"
//             type="tel"
//             value={formData.PhoneNumber}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="AddressLine1" className="block text-sm font-medium text-gray-700 mb-4">
//             Address Line 1
//           </label>
//           <input
//             id="AddressLine1"
//             type="text"
//             value={formData.AddressLine1}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="AddressLine2" className="block text-sm font-medium text-gray-700 mb-4">
//             Address Line 2
//           </label>
//           <input
//             id="AddressLine2"
//             type="text"
//             value={formData.AddressLine2}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="CityID" className="block text-sm font-medium text-gray-700 mb-4">
//             City ID
//           </label>
//           <input
//             id="CityID"
//             type="text"
//             value={formData.CityID}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="StateID" className="block text-sm font-medium text-gray-700 mb-4">
//             State ID
//           </label>
//           <input
//             id="StateID"
//             type="text"
//             value={formData.StateID}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="CountryID" className="block text-sm font-medium text-gray-700 mb-4">
//             Country ID
//           </label>
//           <input
//             id="CountryID"
//             type="text"
//             value={formData.CountryID}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//         <div>
//           <label htmlFor="Zipcode" className="block text-sm font-medium text-gray-700 mb-4">
//             Zipcode
//           </label>
//           <input
//             id="Zipcode"
//             type="text"
//             value={formData.Zipcode}
//             onChange={handleChange}
//             className="mt-1 block w-full max-w-md border-gray-500 border-2 rounded-md shadow-sm focus:ring-opacity-50 sm:text-sm py-3 px-4 h-12"
//           />
//         </div>
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Save Changes
//       </button>
//     </form>
//   );
// };

// export default ProfileForm;
