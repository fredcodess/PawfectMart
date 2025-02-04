import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartProvider";
import { NavLink } from "react-router-dom";
import { useProductStore } from "../store/product";

const CartPage = () => {
  const { cartItems, handleRemoveItem, handleQuantityChange, dispatch } =
    useContext(CartContext);

  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const { handleCheckout } = useProductStore();

  const [errors, setErrors] = useState({});

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const calculateTax = () => calculateSubtotal() * 0.1; // Example 10% tax
  const calculateTotal = () => calculateSubtotal() + calculateTax();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails({ ...deliveryDetails, [name]: value });
  };

  const validateDeliveryDetails = () => {
    const newErrors = {};
    if (!deliveryDetails.name.trim()) newErrors.name = "Name is required.";
    if (!deliveryDetails.address.trim())
      newErrors.address = "Address is required.";
    if (!deliveryDetails.city.trim()) newErrors.city = "City is required.";
    if (!deliveryDetails.state.trim()) newErrors.state = "State is required.";
    if (!deliveryDetails.zip.trim()) newErrors.zip = "ZIP code is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Cart Items Section */}
          <div>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div className="flex-grow">
                    <h3 className="font-bold">{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item._id, Number(e.target.value))
                    }
                    className="w-16 text-center border rounded"
                  />
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="ml-4 text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center">
                <p className="text-gray-600">Your cart is empty.</p>
                <NavLink
                  to="/shop-all"
                  className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Shop Now
                </NavLink>
              </div>
            )}
          </div>

          {/* Order Summary Section */}
          <div>
            <h3 className="font-bold">Order Summary</h3>
            <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
            <p>Tax: ${calculateTax().toFixed(2)}</p>
            <p>Total: ${calculateTotal().toFixed(2)}</p>
            <form className="mt-6 space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={deliveryDetails.name}
                  onChange={handleInputChange}
                  className={`w-full border p-2 rounded ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={deliveryDetails.address}
                  onChange={handleInputChange}
                  className={`w-full border p-2 rounded ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.address && (
                  <p className="text-sm text-red-500">{errors.address}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={deliveryDetails.city}
                  onChange={handleInputChange}
                  className={`w-full border p-2 rounded ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.city && (
                  <p className="text-sm text-red-500">{errors.city}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={deliveryDetails.state}
                    onChange={handleInputChange}
                    className={`w-full border p-2 rounded ${
                      errors.state ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.state && (
                    <p className="text-sm text-red-500">{errors.state}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="zip"
                    placeholder="ZIP Code"
                    value={deliveryDetails.zip}
                    onChange={handleInputChange}
                    className={`w-full border p-2 rounded ${
                      errors.zip ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.zip && (
                    <p className="text-sm text-red-500">{errors.zip}</p>
                  )}
                </div>
              </div>
            </form>
            <button
              onClick={() => handleCheckout(cartItems, "customer@example.com")}
              disabled={!cartItems.length}
              className={`mt-4 w-full py-2 rounded ${
                cartItems.length
                  ? "bg-blue-500 text-white"
                  : "bg-gray-400 text-gray-800 cursor-not-allowed"
              }`}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
