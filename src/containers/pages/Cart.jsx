import React from 'react'
import Cart from '../../pages/cart/Cart'
import { json } from 'react-router-dom';

import axios from 'axios';
import { useQuery } from 'react-query';
import { CircularProgress } from '@mui/material';
import { fetchCart, fetchProductById } from '../../utils/Api';

export default function CartContainer() {
    
    const queryKey= 'cart';
    const {data : cart, isLoading: cartLoading, isError: cartError, error: cartErrorMessage } = useQuery(queryKey, fetchCart);

   

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

  if (cartLoading || productsLoading) return <CircularProgress size="lg" />;
//    if (cartError || productsError) return <p>Error: {cartErrorMessage?.message || productsErrorMessage?.message}</p>;
if (cartError || cart == null) {
    console.error('Cart Error:', cartError);
    return <p>Error fetching cart: {cartErrorMessage?.message}</p>;
  }
  if (productsError || products == null) {
    console.error('Products Error:', productsError);
    return <p>Error fetching products: {productsErrorMessage?.message}</p>;
  }

  const prices = products.map((p)=> {
   return( p.price )
  } );

  const quantities = cart.products.map((p)=> (p.quantity));
  let TotalPrices = [];
for(let i=0; i < prices.length; i++ )
 {
    TotalPrices.push( prices[i] * quantities[i]);
    
 }
//  console.log(totalPriceSum);
 const totalPriceSum = TotalPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


 
  return (
    <Cart
        products={products}
        cart={cart}
        totalPriceSum={totalPriceSum}
    />
  )
}
