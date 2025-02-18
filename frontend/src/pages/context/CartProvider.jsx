import React, { createContext, useReducer, useEffect } from "react";

const initialState = [];
export const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CART_ITEMS": {
      const items = localStorage.getItem("cart");
      return items ? JSON.parse(items) : [];
    }
    case "ADD_TO_CART": {
      const existingItemIndex = state.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingItemIndex > -1) {
        const updatedState = [...state];
        updatedState[existingItemIndex] = {
          ...state[existingItemIndex],
          quantity: state[existingItemIndex].quantity + 1,
        };
        localStorage.setItem("cart", JSON.stringify(updatedState));
        return updatedState;
      }

      const updatedState = [...state, { ...action.payload, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    }
    case "REMOVE_ITEM": {
      const updatedState = state.filter((item) => item._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    }
    case "UPDATE_QUANTITY": {
      const updatedState = state.map((item) =>
        item._id === action.payload.id
          ? { ...item, quantity: action.payload.newQuantity }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;
    }
    case "CLEAR_CART": {
      localStorage.removeItem("cart");
      return [];
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(reducer, initialState);

  const handleAddToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const handleQuantityChange = (id, newQuantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, newQuantity } });
  };

  useEffect(() => {
    dispatch({ type: "SET_CART_ITEMS" });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        handleRemoveItem,
        handleQuantityChange,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
