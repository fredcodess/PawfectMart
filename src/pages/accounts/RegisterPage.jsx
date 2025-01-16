import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ id }) => {
  const [userId, setUserId] = useState(id);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    const user = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { id: userId, firstName, lastName, email, password };
    user.push(newUser);
    localStorage.setItem("users", JSON.stringify(user));
    handleLogin();
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-brown-500 p-12 shadow-lg w-128 sm:w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Register
        </h2>
        <form className="space-y-6 mt-8">
          <div>
            <input
              id="firstname"
              type="text"
              name="firstname"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <input
              id="lastname"
              type="text"
              name="lastname"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <input
              id="email"
              type="email"
              name="email"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 border border-gray-900 text-gray-900 rounded-md hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
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
