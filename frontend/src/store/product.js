import { useMemo } from "react";
import { create } from "zustand";

export const useProductStore = create((set, get) => ({
  products: [],
  latestProducts: [], // Store the latest products separately
  setProducts: (products) => set({ products }),

  fetchLatestProducts: async () => {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();

      // Set all products
      set({ products: data.data });

      // Extract the last 4 products
      const latest = data.data.slice(-4).reverse(); // Get the 4 most recent
      set({ latestProducts: latest });
    } catch (error) {
      console.error("Error fetching latest products:", error.message);
      alert("Failed to load products. Please try again later.");
    }
  },

  createProduct: async (newProduct) => {
    if (
      !newProduct.name ||
      !newProduct.image ||
      !newProduct.description ||
      !newProduct.price ||
      !newProduct.category ||
      !newProduct.subCategory
    ) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();

      if (data.success) {
        set((state) => ({
          products: [...state.products, data.data],
        }));
        return { success: true, message: "Product created successfully." };
      } else {
        return {
          success: false,
          message: data.message || "Failed to create product.",
        };
      }
    } catch (error) {
      console.error("Error creating product:", error);
      return { success: false, message: "Server error. Please try again." };
    }
  },

  fetchProducts: async () => {
    if (get().products.length > 0) return;
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.data });
  },

  deleteProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      products: state.products.filter((product) => product._id !== pid),
    }));
    return { success: true, message: data.message };
  },

  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      products: state.products.map((product) =>
        product._id === pid ? data.data : product
      ),
    }));

    return { success: true, message: data.message };
  },

  handleCheckout: async (cartItems, customerEmail) => {
    try {
      const response = await fetch(
        "http://localhost:3000/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cartItems, customerEmail }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create checkout session.");
      }

      const data = await response.json();
      if (!data.url) {
        throw new Error("Stripe session URL is missing in the response.");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Error redirecting to Stripe Checkout:", error);
      alert("Failed to initiate checkout. Please try again.");
    }
  },
}));

export const useLatestProducts = () => {
  const products = useProductStore((state) => state.products);
  return useMemo(() => {
    return products.slice(-4).reverse(); // Get the 4 most recent products
  }, [products]);
};
