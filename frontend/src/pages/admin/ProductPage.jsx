import { useEffect } from "react";
import { useProductStore } from "../../store/product";
import toast from "react-hot-toast";
import { SquarePen, Trash2 } from "lucide-react";

const ProductPage = () => {
  const { fetchProducts, products, deleteProduct, updateProduct } =
    useProductStore();

  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id);
    if (success) {
      toast.success(message || "Product deleted successfully");
    } else {
      toast.error(message || "Failed to delete the product");
    }
  };

  const handleUpdateProduct = async (id, updatedData) => {
    const { success, message } = await updateProduct(id, updatedData);
    if (success) {
      toast.success("Product updated successfully");
    } else {
      toast.error(message || "Failed to update the product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {products?.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name || "Unnamed Product"}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">No Image Available</span>
                </div>
              )}

              {/* Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name || "Unnamed Product"}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  {product.description || "No description available."}
                </p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  ${product.price ? product.price.toLocaleString() : "N/A"}
                </p>
                <p className="text-gray-500 text-sm">
                  Category: {product.category || "N/A"}
                </p>
                <p className="text-gray-500 text-sm">
                  Sub-Category: {product.subCategory || "N/A"}
                </p>

                {/* Action Buttons */}
                <button
                  className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  <Trash2 />
                </button>
                <button
                  className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                  onClick={() => handleUpdateProduct(product._id, product)}
                >
                  <SquarePen />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
