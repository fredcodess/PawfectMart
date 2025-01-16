import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState(() => {
    const items = localStorage.getItem("cart");
    return items ? JSON.parse(items) : [];
  });

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent setting quantity below 1
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const calculateTotal = () =>
    cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );

  return (
    <section className="py-8 antialiased bg-white md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="lg:w-2/3 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <img
                    className="h-20 w-20 object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity || 1}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="w-16 border border-gray-300 rounded-md text-center"
                    />
                    <p className="mt-2 text-lg font-semibold text-gray-900">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-sm text-red-600 hover:underline mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/3 space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Order Summary
              </h3>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    ${calculateTotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold text-gray-900">
                    ${(calculateTotal() * 0.1).toFixed(2)}{" "}
                    {/* Example 10% tax */}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">
                    Total
                  </span>
                  <span className="text-lg font-semibold text-gray-900">
                    ${(calculateTotal() * 1.1).toFixed(2)}{" "}
                    {/* Total with tax */}
                  </span>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
