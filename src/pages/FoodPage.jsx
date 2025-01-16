import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Food from "../components/Food";
import products from "../products.json";

const rows = [
  { id: 1, name: "Green Iguana", description: "Soft, crunchy", price: 2.5 },
  { id: 2, name: "Blue Tiger", description: "Slippery, sour", price: 3 },
  { id: 3, name: "Yellow Buffalo", description: "Crunchy, mild", price: 2 },
  { id: 4, name: "Red Rhino", description: "Slippery, sweet", price: 3.5 },
  { id: 5, name: "Purple Leopard", description: "Crunchy, salty", price: 2.5 },
  { id: 6, name: "White Lion", description: "Slippery, sour", price: 3 },
];
const FoodPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [foodList, setFoodList] = useState(rows);

  const handleSearch = () => {
    // Implement search logic here
    console.log("Search term:", searchTerm);
    const filteredFoods = rows.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFoodList(filteredFoods);
  };
  return (
    <>
      <div className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="button"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
        {foodList.map((food) => (
          <Food key={food.id} {...food} />
        ))}
      </Box>
    </>
  );
};

export default FoodPage;
