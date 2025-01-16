import { NavLink } from "react-router-dom";
import storeLogo from "../assets/pawfectmartlogo.png";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";

function Navbar() {
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

        {/* Navbar Icons */}
        <div className="flex space-x-4">
          <NavLink to="/search" className="text-gray-900">
            <SearchIcon />
          </NavLink>
          <NavLink to="/cart" className="text-gray-900">
            <LocalMallIcon />
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
