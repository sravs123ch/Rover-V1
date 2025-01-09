
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isForgotPassword, setForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Add form validation or local logic here if needed

    // Simulate login success
    localStorage.setItem("jwtToken", "dummyToken");
    console.log("Login simulated");
    navigate("/Dashboard");
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Navigate to reset password page
    navigate("/ResetPassword");
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden">
      <div className="hidden md:block md:col-start-1">
        <img
          src="image1.png"
          alt="Description"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 md:col-start-2">
        <div className="flex flex-col items-center">
        <div className="logo-circle flex items-center justify-center w-24 h-24 rounded-full mb-4">
  <img
    src="logo.png"
    alt="Logo"
    className="w-16 h-16 object-contain"
  />
</div>


          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Welcome to REDTORTUE
          </h2>
          <p className="mt-2 text-center text-sm leading-5 tracking-tight text-gray-600">
            Welcome back! Login with your data that you entered during registration
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {!isForgotPassword ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="text-red-600 text-sm text-center">{error}</div>
              )}
              <div>
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="Email"
                    name="Email"
                    type="email"
                    required
                    autoComplete="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <button
                      type="button"
                      onClick={() => setForgotPassword(true)}
                      className="font-semibold text-black hover:text-black"
                    >
                      Forgot Password?
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="Password"
                    name="Password"
                    type="password"
                    required
                    autoComplete="current-password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#17252A] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#17252A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleForgotPasswordSubmit} className="space-y-6">
              {error && (
                <div className="text-red-600 text-sm text-center">{error}</div>
              )}
              <div>
                <label
                  htmlFor="forgotEmail"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                 Email or Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="forgotEmail"
                    name="forgotEmail"
                    type="email"
                    required
                    autoComplete="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#17252A] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#17252A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Reset Password
                </button>
              </div>

              <div className="text-sm">
                <button
                  type="button"
                  onClick={() => setForgotPassword(false)}
                  className="font-semibold text-black hover:text-black"
                >
                  Back to Login
                </button>
              </div>
            </form>
          )}
          <div className="ending-tag-form flex justify-center items-center mt-36">
            <p className="p3 text-sm sm:text-xs md:text-sm text-gray-600">
              Don't have an account{" "}
              <a href="/Register" className="text-black">
                Register?
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
