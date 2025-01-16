import React, { useState } from "react";
import productsData from "../products.json";

const ShopAllPage = () => {
  const { foods, accessories } = productsData.products;

  const allProducts = [
    ...foods.dogs,
    ...foods.cats,
    ...accessories.dogs,
    ...accessories.cats,
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleFilterChange = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      setFilteredProducts(allProducts);
    } else if (category === "dogs") {
      setFilteredProducts([...foods.dogs, ...accessories.dogs]);
    } else if (category === "cats") {
      setFilteredProducts([...foods.cats, ...accessories.cats]);
    } else if (category === "foods") {
      setFilteredProducts([...foods.dogs, ...foods.cats]);
    } else if (category === "accessories") {
      setFilteredProducts([...accessories.dogs, ...accessories.cats]);
    }
  };

  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const newFoodItem = {
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
    };
    cart.push(newFoodItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} has been added to your cart!`);
  };

  const handleViewDetails = (item) => {
    alert(
      `Details for ${item.name}:\n\n${item.details}\n\nPrice: $${item.price}`
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Products
      </h1>

      {/* Filter Dropdown */}
      <div className="flex justify-center mb-8">
        <select
          className="p-2 border border-gray-300 rounded-lg shadow-sm"
          value={selectedCategory}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="all">All Products</option>
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
          <option value="foods">Foods</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-4">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-lg font-semibold text-gray-900 mt-2">
              ${item.price}
            </p>
            <div className="flex justify-between mt-4">
              {/* Details Button */}
              <button
                onClick={() => handleViewDetails(item)}
                className="bg-brown-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-brown-500"
              >
                Details
              </button>
              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-brown-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-brown-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopAllPage;
