import React from "react";

const Footer = () => {
  return (
    <footer className="bg-brown-800 text-white py-12 px-6">
      <div className="max-w-7xl bg-brown-800 mx-auto flex flex-col md:flex-row justify-between">
        {/* Links Section */}
        <div className="grid grid-cols-1 bg-brown-800 md:grid-cols-3 gap-6 text-sm">
          {/* Company */}
          <div className="bg-brown-800">
            <h3 className="font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wholesale
                </a>
              </li>
            </ul>
          </div>
          {/* Shop */}
          <div>
            <h3 className="font-bold mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Foods
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cats
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  All
                </a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Local Delivery Rates
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Newsletter Section */}
        <div className=" mt-12 md:mt-0 md:ml-12 text-center md:text-left">
          <h3 className="font-bold text-lg mb-4 text-gold-600">Newsletter</h3>
          <p className="text-sm mb-6">
            Get news, recipes and exclusive offers delivered to your inbox.
            We'll send you a 15% discount for your first order. Unsubscribe
            anytime.
          </p>
          <form className="flex items-center max-w-md mx-auto md:mx-0">
            <input
              type="email"
              placeholder="your-email@example.com"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-gold-600"
            />
            <button
              type="submit"
              className="bg-gold-600 text-white px-4 py-2 rounded-r hover:bg-gold-700 transition-colors"
            >
              →
            </button>
          </form>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="mt-12 flex justify-center space-x-6">
        <a href="#" className="text-white hover:text-gray-400">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <i className="fab fa-tiktok"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
