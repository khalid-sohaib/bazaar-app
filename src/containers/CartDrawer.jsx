import React from 'react';
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
        cartLoading,
        cartError,
        cartErrorMessage } = useCart();
        // console.log("Cart data in drawer ", cart);
    // const queryKey= 'cart';
    // const {data : cart, isLoading: cartLoading, isError: cartError, error: cartErrorMessage } = useQuery(queryKey, fetchCart);


    // const fetchProduct = async (productId) => {
    //     const response = await axios(`https://fakestoreapi.com/products/${productId}`);                
    //         return response.data;
    //     };
    
    // const { data: products, isLoading: productsLoading, isError : productsError, error: productsErrorMessage } = useQuery(
    // 'products',
    // async () => {
    //     if (cart && cart.products) {
    //     const fetchProductPromises = cart.products.map((product) => fetchProduct(product.productId));
    //     return await Promise.all(fetchProductPromises);
    //     }
    //     return [];
    // },
    // { enabled: !!cart } // Only fetch products if cart data is available
    // );
    
    // if (cartLoading || productsLoading) return <CircularProgress size="lg" />;
    // //    if (cartError || productsError) return <p>Error: {cartErrorMessage?.message || productsErrorMessage?.message}</p>;
    // if (cartError || cart == null) {
    //     console.error('Cart Error:', cartError);
    //     return <p>Error fetching cart: {cartErrorMessage?.message}</p>;
    //   }
    //   if (productsError || products == null) {
    //     console.error('Products Error:', productsError);
    //     return <p>Error fetching products: {productsErrorMessage?.message}</p>;
    //   }
  return (
    <CartDrawer
        products={products}
        cart={cart}
    />
  )
}
