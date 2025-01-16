import React from "react";
import wallpaper from "../assets/wallpaper2.jpg";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

const HomePage = () => {
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
            <button className="px-6 py-3 bg-gold-600 text-white text-sm uppercase font-medium rounded-md shadow-md hover:bg-gold-700">
              Shop Now
            </button>
            <button className="px-6 py-3 bg-white text-brown-800 text-sm uppercase font-medium rounded-md shadow-md hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="bg-brown-100 py-16">
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-brown-800 px-4 max-w-4xl mx-auto">
          <h3 className="text-lg tracking-wide font-semibold mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            reiciendis, sunt nam quo aliquam modi voluptatibus assumenda ipsam
            veniam inventore voluptatem, praesentium nisi. Necessitatibus nisi
            illum ab alias fugiat minus!
          </h3>
          <div className="flex space-x-4">
            <button className="px-8 py-3 bg-brown-800 text-white text-sm uppercase font-medium rounded-md shadow-md hover:bg-brown-700 hover:shadow-lg transition-all duration-300">
              Shop All Products
            </button>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                  />
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
