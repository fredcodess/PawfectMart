import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    // Simulate login logic
    localStorage.setItem("isLoggedIn", true);
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-brown-500 p-12 rounded-lg shadow-lg w-128 sm:w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <form className="space-y-6 mt-8">
          <div>
            <input
              id="email"
              type="email"
              name="email"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <input
              id="password"
              type="password"
              name="password"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Password"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 border border-gray-900 text-gray-900 rounded-md hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={handleRegister}
              className="font-semibold text-gray-900 hover:text-black/10"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
