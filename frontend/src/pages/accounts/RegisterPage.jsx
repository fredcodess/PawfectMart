import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authStore } from "../../store/authStore";

import toast from "react-hot-toast";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const { signup, isSigningUp } = authStore();

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      toast.error("First name is required");
      return false;
    }
    if (!formData.lastName.trim()) {
      toast.error("Last name is required");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!formData.password) {
      toast.error("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) {
      signup(formData);
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-brown-500 p-12 shadow-lg w-128 sm:w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Register
        </h2>
        <form className="space-y-6 mt-8" onSubmit={handleRegister}>
          <div>
            <input
              type="text"
              name="firstname"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="text"
              name="lastname"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              name="password"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isSigningUp}
            className={`w-full py-3 mt-4 border border-gray-900 text-gray-900 rounded-md ${
              isSigningUp
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-black/10"
            }`}
          >
            {isSigningUp ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={handleLogin}
              className="font-semibold text-gray-900 hover:text-black/10"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
