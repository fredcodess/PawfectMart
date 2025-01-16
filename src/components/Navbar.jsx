import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import storeLogo from "../assets/pawfectmartlogo.png";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  // Update cart count from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  return (
    <nav className="bg-brown-500">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={storeLogo} alt="Pawfect Mart" className="w-70 h-20" />
          <span className="text-xl font-semibold text-gray-900">
            PawfectMart
          </span>
        </NavLink>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className="text-gray-900 hover:bg-black/10 px-3 py-2 rounded"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop-all"
            className="text-gray-900 hover:bg-black/10 px-3 py-2 rounded"
          >
            Shop All
          </NavLink>
          <NavLink
            to="/food"
            className="text-gray-900 hover:bg-black/10 px-3 py-2 rounded"
          >
            Foods
          </NavLink>
          <NavLink
            to="/accessories"
            className="text-gray-900 hover:bg-black/10 px-3 py-2 rounded"
          >
            Accessories
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-gray-900 hover:bg-black/10 px-3 py-2 rounded"
          >
            About
          </NavLink>
        </div>

        {/* Icons */}
        <div className="flex space-x-4 items-center">
          {/* Cart Icon with Badge */}
          <NavLink to="/cart" className="relative text-gray-900">
            <LocalMallIcon />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>

          <NavLink to="/login" className="text-gray-900">
            <PersonIcon />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
