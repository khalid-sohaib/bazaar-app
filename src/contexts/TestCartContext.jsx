import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();

export default function TestCartContext({children}) {
    const {cartData, setCartData} = useState([]);

    const value = {
        cartData, setCartData
    }
  return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
    return useContext(CartContext);
}