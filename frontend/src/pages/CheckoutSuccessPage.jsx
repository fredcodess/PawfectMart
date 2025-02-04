import React, { useEffect, useContext } from "react";
import { CartContext } from "./context/CartProvider";
import { useNavigate } from "react-router-dom";

const CheckoutSuccessPage = () => {
  const { dispatch } = useContext(CartContext); // Access the context to clear the cart
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the cart
    dispatch({ type: "CLEAR_CART" });

    // Optional: Redirect the user to the homepage after 5 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch, navigate]);

  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-600">
        Thank you for your purchase. You will be redirected shortly.
      </p>
    </div>
  );
};

export default CheckoutSuccessPage;
