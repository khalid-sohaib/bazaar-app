  import React, { createContext, useContext, useState, useEffect } from 'react';
  import { useMutation, useQuery } from 'react-query';
  import { addCart, cartUpdate, fetchCart, fetchProductById } from '../utils/Api';
  import { Update } from '@mui/icons-material';

  const CartContext = createContext();

  export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log("context initial cart", cart)







    const { data: cartData, isLoading: cartLoading, isError: cartError, error: cartErrorMessage,isSuccess } = useQuery('cartData', fetchCart,{
      onSuccess:(data)=>{
        // setCart(data.products);
      }
      
    });

    // console.log("context initial cart", )


    // const [products, setProducts] = useState([]);
    
    // Products from the Cart
    const { data: products, isLoading: productsLoading, isError : productsError, error: productsErrorMessage, refetch: refetchProducts } = useQuery(
        'productsArray',
        async () => {
          console.log("context refetch cartttttt", cart)

          const fetchProductPromises = cart?.map((product) => fetchProductById(product.productId));
          return await Promise.all(fetchProductPromises);
          // if (cart.length === 0) {
            
          //   const fetchProductPromises = cartData?.products?.map((product) => fetchProductById(product.productId));
          //   return await Promise.all(fetchProductPromises);
          // }
          // else{
          //   console.log('cart refetch',cart)
          //   const fetchProductPromises = cart?.map((product) => fetchProductById(product.productId));
          //   return await Promise.all(fetchProductPromises);
          // }
          return [];
        },
        { enabled: isSuccess , keepPreviousData:false } // Only fetch products if cart data is available
        );

  console.log("context products", products)

    // useEffect(() => {
    //   if (cartData) {
    //     setCart(cartData.products);
    //   }
    // }, [cartData]);

    
    const AddtoCart =(newCart) => {

      setCart(newCart);

      setTimeout(()=>{
        refetchProducts();
      },10)

      const res = useMutation(addCart(newCart));
    
    };
    const UpdateCart = (newCart) => {
      setCart(newCart);
  
      setTimeout(() => {
        refetchProducts();
      }, 10);
    };

    const handleDeleteFromCart = (index) => {
      // Make sure index is within valid range
      if (index >= 0 && index < cart.length) {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);

        setTimeout(() => {
          refetchProducts();
        }, 10  );
      }
    };
    const contextValue = {

      cart,
      products,
      AddtoCart,
      UpdateCart,
      handleDeleteFromCart,

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
