import React, { useState, useEffect, useContext } from "react";
import { useProductStore } from "../store/product";
import { CartContext } from "./context/CartProvider";

const FoodPage = () => {
  const { fetchProducts, products, isLoading, error } = useProductStore(); // Fetch products from the store
  const { handleAddToCart } = useContext(CartContext); // Handle adding items to the cart
  const [filteredFoods, setFilteredFoods] = useState([]); // Filtered products state
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [selectedType, setSelectedType] = useState("all"); // Filter type state

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Filter foods based on the category and search term
  useEffect(() => {
    if (products?.length > 0) {
      const foods = products.filter((product) => product.category === "Foods");

      const filtered = foods.filter(
        (food) =>
          food.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedType === "all" || food.type === selectedType)
      );

      setFilteredFoods(filtered);
    }
  }, [products, searchTerm, selectedType]);

  // Loading or error handling
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold text-gray-600">Loading foods...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold text-red-500">Failed to load foods.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Foods
      </h1>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto px-4 flex justify-center mb-6">
        <div className="relative w-full md:w-1/2">
          <input
            type="search"
            placeholder="Search accessories..."
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-brown-800 focus:border-brown-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mt-6">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <div
              key={food.id || food._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              {food.image ? (
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">No Image Available</span>
                </div>
              )}

              {/* Product Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {food.name}
                </h2>
                <p className="text-gray-600 text-sm mt-1">{food.description}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  ${food.price.toFixed(2)}
                </p>
                <button
                  className="mt-4 w-full bg-brown-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
                  onClick={() => handleAddToCart(food)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No foods available.
          </p>
        )}
      </div>
    </div>
  );
};

export default FoodPage;
