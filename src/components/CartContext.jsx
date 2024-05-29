import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const removedItems = prevCart.filter(cartItem => cartItem.id !== item.id);
      const removedItemsTotalPrice = removedItems.reduce((total, removedItem) => total + (removedItem.price * removedItem.quantity), 0);
      setTotalPrice(removedItemsTotalPrice);
      return removedItems;
    });
  };


  const increaseQuantity = (itemId) => {
    setCart((prevCart) => {
      return prevCart.map(cartItem =>
        cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
    });
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
      setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
    }
  };

  const decreaseQuantity = (itemId) => {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item && item.quantity > 1) {
      setCart((prevCart) =>
        prevCart.map(cartItem =>
          cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      );
      setTotalPrice((prevTotalPrice) => prevTotalPrice - item.price);
    } else if (item && item.quantity === 1) {
      removeFromCart(item);
    }
  };



  return (
    <CartContext.Provider value={{ cart, addToCart, totalPrice, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
