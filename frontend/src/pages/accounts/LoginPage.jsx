import React, { useState } from "react";
import { authStore } from "../../store/authStore";

import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoggingIn, authUser, isAdmin } = authStore();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    login(formData);
    if (authUser?.isAdmin) {
      navigate("/add-product"); // Admin-specific route
    } else {
      navigate("/"); // General user dashboard
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-brown-500 p-12 rounded-lg shadow-lg w-128 sm:w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <form className="space-y-6 mt-8" onSubmit={handleLogin}>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
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
          <div className="relative">
            {/* Lock Icon */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>

            {/* Password Input */}
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="mt-2 p-3 w-full pl-10 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Password"
              value={formData.password}
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            {/* Toggle Visibility Button */}
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 border border-gray-900 text-gray-900 rounded-md hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
