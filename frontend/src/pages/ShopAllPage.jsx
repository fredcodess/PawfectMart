import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartContext } from "./context/CartProvider";
import { useProductStore } from "../store/product";
import ExpensiveCalculation from "./shared/ExpensiveCalculation";

const ShopAllPage = ({ a, b }) => {
  const { handleAddToCart } = useContext(CartContext);
  const { fetchProducts, products, isLoading, error } = useProductStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Filter products based on the search term
  useEffect(() => {
    if (products?.length > 0) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [products, searchTerm]);

  const handleClick = useCallback(() => {}, []);
  const handleMemo = memo(() => {});

  // Loading or error handling
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-bold text-red-500">
          Failed to load products.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Shop All Products
      </h1>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4 flex justify-center mb-6">
        <div className="relative w-full md:w-1/2">
          <input
            type="search"
            placeholder="Search products..."
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-brown-800 focus:border-brown-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id || product._id} // Ensure unique keys
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
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
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  {product.description}
                </p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  className="mt-4 w-full bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-900 transition"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No products found.
          </p>
        )}
      </div>
      <ExpensiveCalculation number={5} func={handleClick} />
    </div>
  );
};

export default ShopAllPage;
