import React, { useEffect } from "react";
import wallpaper from "../assets/wallpaper2.jpg";
import { useProductStore, useLatestProducts } from "../store/product";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const { fetchLatestProducts } = useProductStore(); // Get latest products
  const latestProducts = useLatestProducts();
  // useEffect(() => {
  //   fetchLatestProducts(); // Fetch latest products on component mount
  // }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${wallpaper})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white px-4">
          <h3 className="text-sm tracking-widest font-semibold mb-2">
            YOUR PET'S FAVORITE STORE
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Quality Products for Happy Pets
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/shop-all")}
              className="px-6 py-3 bg-gold-600 text-white text-sm uppercase font-medium rounded-md shadow-md hover:bg-gold-700"
            >
              Shop Now
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 bg-white text-brown-800 text-sm uppercase font-medium rounded-md shadow-md hover:bg-gray-100"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Latest Products Section */}
      <section>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Latest Products, Check them out at our{" "}
            <a href="/shop-all" className="text-gold-600">
              Shop All
            </a>{" "}
            section
          </h2>
          {latestProducts.length === 0 ? (
            <p className="text-center text-gray-600">Loading products...</p>
          ) : (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {latestProducts.map((product) => (
                <div key={product._id} className="group">
                  <img
                    alt={product.name}
                    src={product.image}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover xl:aspect-[7/8]"
                  />
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
