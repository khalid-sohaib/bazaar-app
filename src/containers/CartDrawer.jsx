import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import axios from 'axios';
import CartDrawer from '../layout/cartDrawer/CartDrawer'
import { fetchCart } from '../utils/Api';
import { CircularProgress } from '@mui/material';
import { useCart } from '../contexts/CartContext';

export default function CartDrawerContainer() {
    const {  
        cart,
        products,
         } = useCart();

    useEffect(() => {
      window.scrollTo(0, 0);
    },[cart])
    // console.log("Cart data in drawer ", cart);

      
    
  return (
    <CartDrawer
        products={products}
        cart={cart}
        
    />
  )
}
