import React, { useState } from "react";
import productsData from "../products.json"; // Assuming JSON file is stored in src/products.json

const AccessoriesPage = () => {
  const accessories = [
    ...productsData.products.accessories.dogs.map((item) => ({
      ...item,
      type: "dog",
    })),
    ...productsData.products.accessories.cats.map((item) => ({
      ...item,
      type: "cat",
    })),
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [accessoriesList, setAccessoriesList] = useState(accessories);

  const handleSearch = () => {
    const filteredAccessories = accessories.filter(
      (accessory) =>
        accessory.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedType === "all" || accessory.type === selectedType)
    );
    setAccessoriesList(filteredAccessories);
  };

  const handleFilterChange = (type) => {
    setSelectedType(type);
    const filteredAccessories = accessories.filter(
      (accessory) =>
        (type === "all" || accessory.type === type) &&
        accessory.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setAccessoriesList(filteredAccessories);
  };

  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} has been added to your cart!`);
  };

  const handleViewDetails = (item) => {
    alert(
      `Details for ${item.name}:\n\n${
        item.details
      }\nPrice: $${item.price.toFixed(2)}`
    );
  };

  return (
    <>
      {/* Search and Filter */}
      <div className="max-w-4xl mx-auto p-4 flex flex-col gap-4 md:flex-row justify-between items-center">
        <div className="relative w-full md:w-1/2">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-brown-500 focus:border-brown-500"
            placeholder="Search Accessories..."
            required
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="button"
            className="text-white absolute right-2.5 bottom-2.5 bg-brown-800 hover:bg-brown-500 hover:text-brown-800 focus:ring-4 focus:outline-none focus:ring-brown-300 font-medium rounded-lg text-sm px-4 py-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

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
            Dog Accessories
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedType === "cat"
                ? "bg-brown-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleFilterChange("cat")}
          >
            Cat Accessories
          </button>
        </div>
      </div>

      {/* Accessories Grid */}
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {accessoriesList.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
              >
                <img
                  alt={product.imageAlt}
                  src={product.image}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex gap-4 mt-4">
                  {/* Details Button */}
                  <button
                    onClick={() => handleViewDetails(product)}
                    className="bg-brown-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-brown-500"
                  >
                    Details
                  </button>
                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-brown-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-brown-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessoriesPage;
