import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import CardCheckout from '../../components/cards/CardCheckout';
import CardCart from '../../components/cards/CardCart'
import { useUserContext } from '../../contexts/UserContextProvider';

export default function Cart({ products, cart, totalPriceSum}) {


 // Finding the corsponding quanity 
 const cartProduct = (id) => {
    return cart.products.find((cartItem) => cartItem.productId === id);
  };
  
 
  // const { user, login, logout } = useUserContext();
  // login('Ali');
  // logout();

  return (

    <>
    {/* <Typography variant='h1'>Hello {user}</Typography> */}
        <Box>
        </Box>
        <Grid container spacing={2} bgcolor={'#F5F8FB'} p={3} >
            <Grid item xs={12} lg={8} >
                <Grid container spacing={2} display={'flex'} flexDirection={'column'} >
                    {products &&
                    products.map((product) => (
                    <Grid key={product.id} item >
                        <CardCart
                        
                        // Id={product.id}
                        imgUrl={product.image}
                        title={product.title}
                        price={product.price.toString()}
                        quantity={cartProduct(product.id) ? cartProduct(product.id).quantity : 0}
                        
                        />
                    </Grid>
                    ))
                    }
                </Grid>                  
            </Grid>

            <Grid item xs={12} lg={4} >
                <CardCheckout price={totalPriceSum}/>
            </Grid>
        </Grid>
        
    </>
  )
}
