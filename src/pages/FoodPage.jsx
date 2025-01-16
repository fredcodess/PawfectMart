import React, { useState } from "react";
import Box from "@mui/material/Box";
import Food from "../components/Food";
import products from "../products.json";

const FoodPage = () => {
  // Combine dog and cat food with a `type` field for filtering
  const foods = [
    ...products.products.foods.dogs.map((item) => ({ ...item, type: "dog" })),
    ...products.products.foods.cats.map((item) => ({ ...item, type: "cat" })),
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [foodList, setFoodList] = useState(foods);

  const handleSearch = () => {
    const filteredFoods = foods.filter(
      (food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedType === "all" || food.type === selectedType)
    );
    setFoodList(filteredFoods);
  };

  const handleFilterChange = (type) => {
    setSelectedType(type);
    const filteredFoods = foods.filter(
      (food) =>
        (type === "all" || food.type === type) &&
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFoodList(filteredFoods);
  };

  const handleAddToCart = (food) => {
    // Add food to localStorage cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(food);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${food.name} has been added to your cart!`);
  };

  const handleViewDetails = (food) => {
    alert(
      `Details for ${food.name}:\n\n${food.description}\nPrice: $${food.price}`
    );
  };

  return (
    <>
      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto p-4 flex flex-col gap-4 md:flex-row justify-between items-center">
        {/* Search Input */}
        <div className="relative w-full md:w-1/2">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-brown-500 focus:border-brown-500"
            placeholder="Search Food..."
            required
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="button"
            className="text-white absolute right-2.5 bottom-2.5 bg-brown-800 hover:bg-brown-500 focus:ring-4 focus:outline-none focus:ring-brown-300 font-medium rounded-lg text-sm px-4 py-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedType === "all"
                ? "bg-brown-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedType === "dog"
                ? "bg-brown-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleFilterChange("dog")}
          >
            Dog Food
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedType === "cat"
                ? "bg-brown-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleFilterChange("cat")}
          >
            Cat Food
          </button>
        </div>
      </div>

      {/* Food Items Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          p: 4,
        }}
      >
        {foodList.map((food) => (
          <div
            key={food.id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{food.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{food.description}</p>
            <p className="text-lg font-medium text-gray-900">
              ${food.price.toFixed(2)}
            </p>
            <div className="flex gap-4 mt-4">
              <button
                className="px-4 py-2 bg-brown-800 text-white rounded-lg hover:bg-brown-500"
                onClick={() => handleViewDetails(food)}
              >
                Details
              </button>
              <button
                className="px-4 py-2 bg-brown-800 text-white rounded-lg hover:bg-brown-500"
                onClick={() => handleAddToCart(food)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Box>
    </>
  );
};

export default FoodPage;
