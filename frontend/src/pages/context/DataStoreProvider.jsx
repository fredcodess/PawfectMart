import { createContext, useState } from "react";

// create a context
const DataStoreContext = createContext();
const initialState = {};
// create a provider component
const DataStoreProvider = ({ children }) => {
  const [data, setData] = useState(initialState);
  const [cartItems, setCartItems] = useState(() => {
    const items = localStorage.getItem("cart");
    return items ? JSON.parse(items) : [];
  });
  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const newFoodItem = {
      id: item.id,
      image: item.image,
      name: item.name,
      description: item.description,
      price: item.price,
    };
    cart.push(newFoodItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
  };

  return (
    <DataStoreContext.Provider
      value={{
        data,
        setData,
        cartItems,
        setCartItems,
        handleRemoveItem,
        handleQuantityChange,
        handleAddToCart,
      }}
    >
      {children}
    </DataStoreContext.Provider>
  );
};
export { DataStoreContext, DataStoreProvider };
