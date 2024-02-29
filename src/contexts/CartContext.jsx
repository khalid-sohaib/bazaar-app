import React, { createContext, useContext, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchCart, fetchProductById } from '../utils/Api';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { data: cartData, isLoading: cartLoading, isError: cartError, error: cartErrorMessage } = useQuery('cart', fetchCart);

  const [cart, setCart] = useState(cartData);

  // Products from the Cart
  const { data: products, isLoading: productsLoading, isError : productsError, error: productsErrorMessage } = useQuery(
      'products',
      async () => {
        if (cart && cart.products) {
          const fetchProductPromises = cart.products.map((product) => fetchProductById(product.productId));
          return await Promise.all(fetchProductPromises);
        }
        return [];
      },
      { enabled: !!cart } // Only fetch products if cart data is available
      );



  useEffect(() => {
    if (cartData) {
      setCart(cartData);
    }
  }, [cartData]);

  const AddtoCart =(newCart) => {
    setCart(newCart);
  };
  const contextValue = {
    cart,
    products,
    AddtoCart,
    
    cartLoading,
    cartError,
    cartErrorMessage

  };

  return (

    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
