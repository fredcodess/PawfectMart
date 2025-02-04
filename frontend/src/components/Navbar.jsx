import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import storeLogo from "../assets/pawfectmartlogo.png";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { authStore } from "../store/authStore";
import { CartContext } from "../pages/context/CartProvider";

function Navbar() {
  const { cartItems, dispatch } = useContext(CartContext);
  const { authUser, logout, checkAuth, isCheckingAuth } = authStore(); // Get logout function
  const navigate = useNavigate(); // Use for redirecting after logout

  // Load cart items from localStorage
  useEffect(() => {
    dispatch({ type: "SET_CART_ITEMS" });
  }, [dispatch]);

  // Check user authentication on mount
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Handle logout
  const handleLogout = () => {
    logout(); // Call the logout function from authStore
    navigate("/login"); // Redirect the user to the login page
  };

  if (isCheckingAuth) {
    return (
      <nav className="bg-brown-500">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center py-4">
          <span className="text-gray-900 font-semibold text-lg">
            Loading...
          </span>
        </div>
      </nav>
    );
  }

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
          {authUser?.isAdmin ? (
            <>
              <NavLink
                to="/products"
                className="text-gray-900 hover:bg-black/10 px-3 py-2 rounded"
              >
                Products
              </NavLink>
              <NavLink
                to="/add-product"
                className="text-gray-900 hover:bg-black/10 px-3 py-2 rounded"
              >
                Add Product
              </NavLink>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>

        {/* Icons */}
        <div className="flex space-x-4 items-center">
          {/* Cart Icon with Badge */}
          {!authUser?.isAdmin && (
            <NavLink to="/cart" className="relative text-gray-900">
              <LocalMallIcon />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          )}

          {!authUser ? (
            <NavLink to="/login" className="text-gray-900">
              <PersonIcon />
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="text-gray-900 focus:outline-none"
            >
              <LogoutIcon />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
