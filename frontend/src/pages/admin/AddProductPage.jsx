import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../../store/product";

const AddProductPage = ({ id }) => {
  const [newProduct, setNewProduct] = useState({
    id: id,
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    subCategory: "",
  });

  const navigate = useNavigate();

  const categories = [
    { name: "Foods", subCategories: ["Dogs", "Cats"] },
    { name: "Accessories", subCategories: ["Dogs", "Cats"] },
  ];

  const { createProduct } = useProductStore();

  const handleAddProduct = async (e) => {
    e.preventDefault(); // Prevent form default submission
    const { success, message } = await createProduct(newProduct);
    if (success) {
      alert(message);
      navigate("/shop-all");
    } else {
      alert(message); // Show error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-brown-500 p-12 shadow-lg w-128 sm:w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Add Product
        </h2>
        <form className="space-y-6 mt-8" onSubmit={handleAddProduct}>
          <div>
            <input
              type="text"
              name="name"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Name"
              required
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="text"
              name="description"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Description"
              required
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="number"
              name="price"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Price"
              required
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="text"
              name="image"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Image"
              required
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
          </div>

          <div>
            <select
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  category: e.target.value,
                  subCategory: "", // Reset subCategory when category changes
                })
              }
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              value={newProduct.subCategory}
              onChange={(e) =>
                setNewProduct({ ...newProduct, subCategory: e.target.value })
              }
              required
              disabled={!newProduct.category}
            >
              <option value="" disabled>
                Select Subcategory
              </option>
              {categories
                .find((cat) => cat.name === newProduct.category)
                ?.subCategories.map((subCategory) => (
                  <option key={subCategory} value={subCategory}>
                    {subCategory}
                  </option>
                ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 border border-gray-900 text-gray-900 rounded-md hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
