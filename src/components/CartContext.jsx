import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log(item.id)
    setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(updatedCart);
    setTotalPrice(updatedCart.reduce((prev, curr) => prev + curr.price, 0));
  };

  const addQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setTotalPrice((prevTotalPrice) => prevTotalPrice + cart.find((item) => item.id === itemId).price);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, totalPrice, removeFromCart, quantity, addQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
