import React, { useEffect } from 'react'
import Cart from '../../pages/cart/Cart'

import { useQuery } from 'react-query';
import { fetchCart, fetchProductById } from '../../utils/Api';
import { useCart } from '../../contexts/CartContext';
import { CircularProgress } from '@mui/material';
import { useCartContext } from '../../contexts/TestCartContext';



export default function CartContainer() {

  const {  
      cart,
      products,
      cartLoading,
      cartError,
      cartErrorMessage } = useCart();

      // console.log("Cart data ", cart);

  useEffect(() => {
    
  }, [products, cart])
  

  const prices = products?.map((p)=> {
   return( p.price )
  } );

  const quantities = cart?.map((p)=> (p.quantity));
  let TotalPrices = [];
for(let i=0; i < prices?.length; i++ )
 {
    TotalPrices.push( prices[i] * quantities[i]);
    
 }
//  console.log(totalPriceSum);
 const totalPriceSum = TotalPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


 
  return (
    <Cart
        products={products}
        cart={cart ||  []}
        totalPriceSum={totalPriceSum}
    />
  )
}
