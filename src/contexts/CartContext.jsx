// CartContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

const CartContext = createContext();

const fetchCart = async () => {
  const response = await axios.get('https://fakestoreapi.com/carts/7');
  return response.data;
};

const updateCart = async (newCart) => {
  const response = await axios.put('https://fakestoreapi.com/carts/7', newCart);
  return response.data;
};

const CartProvider = ({ children }) => {
  const { data: cart, refetch } = useQuery('cart', fetchCart);

  const updateCartMutation = useMutation(updateCart, {
    onSuccess: () => {
      refetch();
    },
  });

  const addToCart = async (productId, quantity) => {
    const existingProduct = cart.products.find((product) => product.productId === productId);

    if (existingProduct) {
      const updatedCart = {
        ...cart,
        products: cart.products.map((product) =>
          product.productId === productId ? { ...product, quantity: product.quantity + quantity } : product
        ),
      };

      updateCartMutation.mutate(updatedCart);
    } else {
      const newCart = {
        ...cart,
        products: [...cart.products, { productId, quantity }],
      };

      updateCartMutation.mutate(newCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
