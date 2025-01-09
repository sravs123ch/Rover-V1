// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Login from "../components/Login";

// function Register() {
//   const [formData, setFormData] = useState({
//     FirstName: '',
//     LastName: '',
//     Email: '',
//     PhoneNumber: '',
//     Password: '',
//     ConfirmPassword: '',
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let valid = true;
//     let newErrors = {};

//     // Confirm Password validation
//     if (formData.Password !== formData.ConfirmPassword) {
//       newErrors.ConfirmPassword = 'Passwords do not match';
//       valid = false;
//     }

//     if (valid) {
//       console.log('Form submitted:', formData);

//       // Simulate successful registration and navigate to login
//       navigate('/login');
//     } else {
//       console.log('Form validation failed');
//     }
//   };

//   const [loginOpen, setLoginOpen] = useState(false);

//   const handleOpen = (e) => {
//     e.preventDefault();
//     setLoginOpen(true);
//   };

//   const handleClose = () => {
//     setLoginOpen(false);
//   };

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen relative overflow-hidden">
// <div className="hidden md:block overflow-hidden relative top-14 ">
//   <img
//     src="image.png"
//     alt="Description"
//     className="object-contain w-full max-h-screen md:max-h-screen lg:max-h-screen"
//   />
// </div>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-6 relative overflow-hidden">
//         <div className="flex flex-col items-center">
//           <div className="flex items-center justify-center mb-5 mt-16">
//           <div className="flex items-center justify-center w-24 h-24 rounded-full mb-4">
//   <img
//     src="B2Y_Logo.png"
//     alt="Logo"
//     className="w-16 h-16 object-contain"
//   />
// </div>
//           </div>

//           <h2 className="-mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-sans">
//             Welcome to B2Y
//           </h2>
//           <p className="mt-2 text-center text-sm leading-5 tracking-tight text-gray-600  font-sans">
//             Welcome back! Login with your data that you entered during registration
//           </p>
//         </div>

//         <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form
//             action="#"
//             method="POST"
//             className="space-y-6"
//             onSubmit={handleSubmit}
//           >
//             <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

//               <div>
//                 <label
//                   htmlFor="FirstName"
//                   className="block text-sm font-medium leading-6 text-gray-900  font-sans"
//                 >
//                   First Name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="FirstName"
//                     name="FirstName"
//                     type="text"
//                     value={formData.FirstName}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.FirstName && (
//                     <p className="text-red-600">{errors.FirstName}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="LastName"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Last Name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="LastName"
//                     name="LastName"
//                     type="text"
//                     value={formData.LastName}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.LastName && (
//                     <p className="text-red-600">{errors.LastName}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="PhoneNumber"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Phone Number
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="PhoneNumber"
//                     name="PhoneNumber"
//                     type="text"
//                     value={formData.PhoneNumber}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.PhoneNumber && (
//                     <p className="text-red-600">{errors.PhoneNumber}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="Email"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Email Address
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="Email"
//                     name="Email"
//                     type="email"
//                     value={formData.Email}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.Email && (
//                     <p className="text-red-600">{errors.Email}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="Password"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="Password"
//                     name="Password"
//                     type="password"
//                     value={formData.Password}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.Password && (
//                     <p className="text-red-600">{errors.Password}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="ConfirmPassword"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Confirm Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="ConfirmPassword"
//                     name="ConfirmPassword"
//                     type="password"
//                     value={formData.ConfirmPassword}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.ConfirmPassword && (
//                     <p className="text-red-600">{errors.ConfirmPassword}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//               >
//                 Register
//               </button>
//             </div>
//           </form>
//             <div className="text-sm flex justify-center mt-10 font-sans">
//         <p className="text-gray-600">Already have an account?</p>
//         <a
//           href="/login"
//           onClick={handleOpen}
//           className="font-semibold text-[#2B7A78] pl-1 font-sans"
//         >
//           Sign In
//         </a>
//       </div>

//       {loginOpen && (
//         <Login isOpen={loginOpen} onClose={handleClose} />
//       )}

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Register;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Login from "../components/Login";

// function Register() {
//   const [formData, setFormData] = useState({
//     FirstName: '',
//     LastName: '',
//     Email: '',
//     PhoneNumber: '',
//     Password: '',
//     ConfirmPassword: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [apiError, setApiError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     let valid = true;
//     let newErrors = {};

//     // Confirm Password validation
//     if (formData.Password !== formData.ConfirmPassword) {
//       newErrors.ConfirmPassword = 'Passwords do not match';
//       valid = false;
//     }

//     if (valid) {
//       try {
//         const response = await axios.post('https://ecommerce-backend-5vf7.onrender.com/api/userTenantSignup', {
//           firstName: formData.FirstName,
//           lastName: formData.LastName,
//           email: formData.Email,
//           phone: formData.PhoneNumber,
//           password: formData.Password,
//         });

//         console.log('Registration successful:', response.data);
//         // Navigate to login page after successful registration
//         navigate('/login');
//       } catch (error) {
//         console.error('Registration failed:', error);
//         setApiError('Registration failed. Please try again.');
//       }
//     } else {
//       console.log('Form validation failed');
//       setErrors(newErrors);
//     }
//   };

//   const [loginOpen, setLoginOpen] = useState(false);

//   const handleOpen = (e) => {
//     e.preventDefault();
//     setLoginOpen(true);
//   };

//   const handleClose = () => {
//     setLoginOpen(false);
//   };

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen relative overflow-hidden">
//       <div className="hidden md:block overflow-hidden relative top-14">
//         <img
//           src="image.png"
//           alt="Description"
//           className="object-contain w-full max-h-screen md:max-h-screen lg:max-h-screen"
//         />
//       </div>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-6 relative overflow-hidden">
//         <div className="flex flex-col items-center">
//           <div className="flex items-center justify-center mb-5 mt-16">
//             <div className="flex items-center justify-center w-24 h-24 rounded-full mb-4">
//               <img
//                 src="B2Y_Logo.png"
//                 alt="Logo"
//                 className="w-16 h-16 object-contain"
//               />
//             </div>
//           </div>

//           <h2 className="-mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-sans">
//             Welcome to B2Y
//           </h2>
//           <p className="mt-2 text-center text-sm leading-5 tracking-tight text-gray-600 font-sans">
//             Welcome back! Login with your data that you entered during registration
//           </p>
//         </div>

//         <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form
//             action="#"
//             method="POST"
//             className="space-y-6"
//             onSubmit={handleSubmit}
//           >
//             <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="FirstName"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   First Name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="FirstName"
//                     name="FirstName"
//                     type="text"
//                     value={formData.FirstName}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.FirstName && (
//                     <p className="text-red-600">{errors.FirstName}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="LastName"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Last Name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="LastName"
//                     name="LastName"
//                     type="text"
//                     value={formData.LastName}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.LastName && (
//                     <p className="text-red-600">{errors.LastName}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="PhoneNumber"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Phone Number
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="PhoneNumber"
//                     name="PhoneNumber"
//                     type="text"
//                     value={formData.PhoneNumber}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.PhoneNumber && (
//                     <p className="text-red-600">{errors.PhoneNumber}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="Email"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Email Address
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="Email"
//                     name="Email"
//                     type="email"
//                     value={formData.Email}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.Email && (
//                     <p className="text-red-600">{errors.Email}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="Password"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="Password"
//                     name="Password"
//                     type="password"
//                     value={formData.Password}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.Password && (
//                     <p className="text-red-600">{errors.Password}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="ConfirmPassword"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Confirm Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="ConfirmPassword"
//                     name="ConfirmPassword"
//                     type="password"
//                     value={formData.ConfirmPassword}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.ConfirmPassword && (
//                     <p className="text-red-600">{errors.ConfirmPassword}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {apiError && (
//               <div className="text-red-600 text-sm mt-2">{apiError}</div>
//             )}

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
//               >
//                 Register
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div>
//         {loginOpen && (
//           <div className="absolute inset-0 flex items-center justify-center z-50">
//             <div className="fixed inset-0 bg-black opacity-25"></div>
//             <div className="relative z-10">
//               <button
//                 onClick={handleClose}
//                 className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//               <Login />
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default Register;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Login from "../components/Login";

// function Register() {
//   const [formData, setFormData] = useState({
//     FirstName: "",
//     LastName: "",
//     Email: "",
//     PhoneNumber: "",
//     Password: "",
//     ConfirmPassword: "",
//     AddressLine1: "",
//     AddressLine2: "",
//     CityID: "",
//     StateID: "",
//     CountryID: "",
//     Zipcode: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [apiError, setApiError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     let valid = true;
//     let newErrors = {};

//     // Confirm Password validation
//     if (formData.Password !== formData.ConfirmPassword) {
//       newErrors.ConfirmPassword = "Passwords do not match";
//       valid = false;
//     }

//     if (valid) {
//       try {
//         const response = await axios.post(
//           "https://ecommerce-backend-5vf7.onrender.com/api/customerSignup",
//           {
//             FirstName: formData.FirstName,
//             LastName: formData.LastName,
//             Email: formData.Email,
//             PhoneNumber: formData.PhoneNumber,
//             Password: formData.Password,
//             Address: {
//               AddressLine1: formData.AddressLine1,
//               AddressLine2: formData.AddressLine2,
//               CityID: formData.CityID,
//               StateID: formData.StateID,
//               CountryID: formData.CountryID,
//               Zipcode: formData.Zipcode,
//             },
//           }
//         );

//         console.log("Registration successful:", response.data);
//         navigate("/login");
//       } catch (error) {
//         console.error("Registration failed:", error);
//         setApiError("Registration failed. Please try again.");
//       }
//     } else {
//       console.log("Form validation failed");
//       setErrors(newErrors);
//     }
//   };

//   const [loginOpen, setLoginOpen] = useState(false);

//   const handleOpen = (e) => {
//     e.preventDefault();
//     setLoginOpen(true);
//   };

//   const handleClose = () => {
//     setLoginOpen(false);
//   };

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen relative overflow-hidden">
//       <div className="hidden md:block overflow-hidden relative top-14">
//         <img
//           src="image.png"
//           alt="Description"
//           className="object-contain w-full max-h-screen md:max-h-screen lg:max-h-screen"
//         />
//       </div>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-6 relative overflow-hidden">
//         <div className="flex flex-col items-center">
//           <div className="flex items-center justify-center mb-5 mt-16">
//             <div className="flex items-center justify-center w-24 h-24 rounded-full mb-4">
//               <img
//                 src="B2Y_Logo.png"
//                 alt="Logo"
//                 className="w-16 h-16 object-contain"
//               />
//             </div>
//           </div>

//           <h2 className="-mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-sans">
//             Welcome to B2Y
//           </h2>
//           <p className="mt-2 text-center text-sm leading-5 tracking-tight text-gray-600 font-sans">
//             Welcome back! Login with your data that you entered during
//             registration
//           </p>
//         </div>

//         <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form
//             action="#"
//             method="POST"
//             className="space-y-6"
//             onSubmit={handleSubmit}
//           >
//             <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="FirstName"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   First Name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="FirstName"
//                     name="FirstName"
//                     type="text"
//                     value={formData.FirstName}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.FirstName && (
//                     <p className="text-red-600">{errors.FirstName}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="LastName"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Last Name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="LastName"
//                     name="LastName"
//                     type="text"
//                     value={formData.LastName}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.LastName && (
//                     <p className="text-red-600">{errors.LastName}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="PhoneNumber"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Phone Number
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="PhoneNumber"
//                     name="PhoneNumber"
//                     type="text"
//                     value={formData.PhoneNumber}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.PhoneNumber && (
//                     <p className="text-red-600">{errors.PhoneNumber}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="Email"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Email Address
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="Email"
//                     name="Email"
//                     type="email"
//                     value={formData.Email}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.Email && (
//                     <p className="text-red-600">{errors.Email}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="Password"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="Password"
//                     name="Password"
//                     type="password"
//                     value={formData.Password}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.Password && (
//                     <p className="text-red-600">{errors.Password}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="ConfirmPassword"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Confirm Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="ConfirmPassword"
//                     name="ConfirmPassword"
//                     type="password"
//                     value={formData.ConfirmPassword}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.ConfirmPassword && (
//                     <p className="text-red-600">{errors.ConfirmPassword}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label
//                   htmlFor="AddressLine1"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Address Line 1
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="AddressLine1"
//                     name="AddressLine1"
//                     type="text"
//                     value={formData.AddressLine1}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.AddressLine1 && (
//                     <p className="text-red-600">{errors.AddressLine1}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="AddressLine2"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Address Line 2
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="AddressLine2"
//                     name="AddressLine2"
//                     type="text"
//                     value={formData.AddressLine2}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.AddressLine2 && (
//                     <p className="text-red-600">{errors.AddressLine2}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="CityID"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   City
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="CityID"
//                     name="CityID"
//                     type="text"
//                     value={formData.CityID}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.CityID && (
//                     <p className="text-red-600">{errors.CityID}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="StateID"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   State
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="StateID"
//                     name="StateID"
//                     type="text"
//                     value={formData.StateID}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.StateID && (
//                     <p className="text-red-600">{errors.StateID}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="CountryID"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Country
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="CountryID"
//                     name="CountryID"
//                     type="text"
//                     value={formData.CountryID}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.CountryID && (
//                     <p className="text-red-600">{errors.CountryID}</p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="Zipcode"
//                   className="block text-sm font-medium leading-6 text-gray-900 font-sans"
//                 >
//                   Zipcode
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="Zipcode"
//                     name="Zipcode"
//                     type="text"
//                     value={formData.Zipcode}
//                     onChange={handleChange}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
//                   />
//                   {errors.Zipcode && (
//                     <p className="text-red-600">{errors.Zipcode}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {apiError && <p className="text-red-600">{apiError}</p>}

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black font-sans"
//               >
//                 Register
//               </button>
//             </div>

//             <div className="text-center">
//               <p className="text-sm text-gray-600 font-sans">
//                 Already have an account?
//                 <button
//                   onClick={handleOpen}
//                   className="pl-1 font-medium text-black hover:underline focus:outline-none"
//                 >
//                   Login
//                 </button>
//               </p>
//             </div>
//           </form>
//         </div>
//         {loginOpen && <Login onClose={handleClose} />}
//       </div>
//     </section>
//   );
// }

// export default Register;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Login from "../components/Login";

function Register() {
  const [formData, setFormData] = useState({
    TenantID: 1,
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    PhoneNumber: "",
    AddressLine1: "",
    AddressLine2: "",
    CityID: "",
    StateID: "",
    CountryID: "",
    Zipcode: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let valid = true;
    let newErrors = {};

    // Validate fields
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = `Enter ${key}`;
        valid = false;
      }
    }
    // Confirm Password validation
    if (formData.Password !== formData.ConfirmPassword) {
      newErrors.ConfirmPassword = "Passwords do not match";
      valid = false;
    }
    setErrors(newErrors);
    if (valid) {
      
      try {
      //     // Log the registered details to the console
      // console.log("Registered details:", formData);
      // Log the registered details to the console
console.log("Registered details:", formData);

// // Store the registered details in local storage
// localStorage.setItem('registeredDetails', JSON.stringify(formData));

        
        const response = await axios.post(
          "https://ecommerce-backend-5vf7.onrender.com/api/customerSignup",
          {
            TenantID: formData.TenantID,
            FirstName: formData.FirstName,
            LastName: formData.LastName,
            Email: formData.Email,
            Password: formData.Password,
            PhoneNumber: formData.PhoneNumber,
            Address: {
              TenantID: formData.TenantID,
              AddressLine1: formData.AddressLine1,
              AddressLine2: formData.AddressLine2,
              CityID: formData.CityID,
              StateID: formData.StateID,
              CountryID: formData.CountryID,
              Zipcode: formData.Zipcode,
              // CreatedBy: "admin", // This is hardcoded as per your JSON format
            },
            // CreatedBy: "admin", // This is hardcoded as per your JSON format
          }
        );

        console.log("Registration successful:", response.data);
        navigate("/login");
      } catch (error) {
        console.error("Registration failed:", error);
        setApiError("Registration failed. Please try again.");
      }
    } else {
      console.log("Form validation failed");
      setErrors(newErrors);
    }
  };
  

  const [loginOpen, setLoginOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setLoginOpen(true);
  };

  const handleClose = () => {
    setLoginOpen(false);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen relative overflow-hidden">
      <div className="hidden md:block overflow-hidden relative top-14">
        <img
          src="image.png"
          alt="Description"
          className="object-contain w-full max-h-screen md:max-h-screen lg:max-h-screen"
        />
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-6 relative overflow-hidden">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-5 mt-16">
            <div className="flex items-center justify-center w-24 h-24 rounded-full mb-4">
              <img
                src="B2Y_Logo.png"
                alt="Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>

          <h2 className="-mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-sans">
            Welcome to B2Y
          </h2>
          <p className="mt-2 text-center text-sm leading-5 tracking-tight text-gray-600 font-sans">
            Welcome back! Login with your data that you entered during
            registration
          </p>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium leading-6 text-gray-900 font-sans"
                >
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="FirstName"
                    name="FirstName"
                    type="text"
                    value={formData.FirstName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                  {errors.FirstName && (
                    <p className="text-red-600">{errors.FirstName}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium leading-6 text-gray-900 font-sans"
                >
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    id="LastName"
                    name="LastName"
                    type="text"
                    value={formData.LastName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                  {errors.LastName && (
                    <p className="text-red-600">{errors.LastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="PhoneNumber"
                  className="block text-sm font-medium leading-6 text-gray-900 font-sans"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    id="PhoneNumber"
                    name="PhoneNumber"
                    type="text"
                    value={formData.PhoneNumber}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                  {errors.PhoneNumber && (
                    <p className="text-red-600">{errors.PhoneNumber}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium leading-6 text-gray-900 font-sans"
                >
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="Email"
                    name="Email"
                    type="email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                  {errors.Email && (
                    <p className="text-red-600">{errors.Email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium leading-6 text-gray-900 font-sans"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="Password"
                    name="Password"
                    type="password"
                    value={formData.Password}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                  {errors.Password && (
                    <p className="text-red-600">{errors.Password}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="ConfirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900 font-sans"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="ConfirmPassword"
                    name="ConfirmPassword"
                    type="password"
                    value={formData.ConfirmPassword}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                  {errors.ConfirmPassword && (
                    <p className="text-red-600">{errors.ConfirmPassword}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div>
                <label
                  htmlFor="AddressLine1"
                  className="block text-sm font-medium leading-6 text-gray-900 font-sans"
                >
                  Address Line 1
                </label>
                <div className="mt-1">
                  <input
                    id="AddressLine1"
                    name="AddressLine1"
                    type="text"
                    value={formData.AddressLine1}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                  {errors.AddressLine1 && (
                    <p className="text-red-600">{errors.AddressLine1}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="AddressLine2"
                  className="block text-sm font-medium leading-6 text-gray-900 font-sans"
                >
                  Address Line 2
                </label>
                <div className="mt-1">
                  <input
                    id="AddressLine2"
                    name="AddressLine2"
                    type="text"
                    value={formData.AddressLine2}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                  {errors.AddressLine2 && (
                    <p className="text-red-600">{errors.AddressLine2}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="CityID"
                  className="block text-sm font-medium leading-6 text-gray-900 font-sans"
                >
                  City ID
                </label>
                <div className="mt-1">
                  <input
                    id="CityID"
                    name="CityID"
                    type="text"
                    value={formData.CityID}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                  {errors.CityID && (
                    <p className="text-red-600">{errors.CityID}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="StateID"
                  className="block text-sm font-medium leading-6 text-gray-900 font-sans"
                >
                  State ID
                </label>
                <div className="mt-1">
                  <input
                    id="StateID"
                    name="StateID"
                    type="text"
                    value={formData.StateID}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                  {errors.StateID && (
                    <p className="text-red-600">{errors.StateID}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="CountryID"
                  className="block text-sm font-medium leading-6 text-gray-900 font-sans"
                >
                  Country ID
                </label>
                <div className="mt-1">
                  <input
                    id="CountryID"
                    name="CountryID"
                    type="text"
                    value={formData.CountryID}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                  {errors.CountryID && (
                    <p className="text-red-600">{errors.CountryID}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="Zipcode"
                  className="block text-sm font-medium leading-6 text-gray-900 font-sans"
                >
                  Zipcode
                </label>
                <div className="mt-1">
                  <input
                    id="Zipcode"
                    name="Zipcode"
                    type="text"
                    value={formData.Zipcode}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                  {errors.Zipcode && (
                    <p className="text-red-600">{errors.Zipcode}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
              >
                Sign up
              </button>
            </div>

            <div className="flex justify-center">
              <span className="text-sm font-sans">Already have an account?</span>
              <div className="text-sm font-semibold leading-6 text-sky-700 pl-2 font-sans">
                <button onClick={handleOpen}>Login</button>
              </div>
              {loginOpen && <Login onClose={handleClose} />}
            </div>

            {apiError && <p className="text-red-600 mt-4">{apiError}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
