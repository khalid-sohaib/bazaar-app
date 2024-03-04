import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import CardCheckout from '../../components/cards/CardCheckout';
import CardCart from '../../components/cards/CardCart'
import { useCartContext } from '../../contexts/TestCartContext';
import { useCart } from '../../contexts/CartContext';


export default function Cart({ products, cart, totalPriceSum}) {

    const {handleDeleteFromCart } = useCart();

    //  Finding the corsponding quanity 
    const cartProduct = (id) => {
        return cart.find((cartItem) => cartItem.productId === id);
    };
  
    const handleDeleteByIndex = (index) => {
        handleDeleteFromCart(index);
      };


  return (

    <>
    {/* <Typography variant='h1'>Hello {user}</Typography> */}
        <Box>
            {/* <Typography>{cartData}</Typography> */}
        </Box>
        <Grid container spacing={2} bgcolor={'#F5F8FB'} p={3} >
            <Grid item xs={12} lg={8} >
                <Grid container spacing={2} display={'flex'} flexDirection={'column'} >
                    {products &&
                    products.map((product, index) => (
                    <Grid key={product.id} item >
                        <CardCart
                        
                        Id={product.id}
                        imgUrl={product.image}
                        title={product.title}
                        price={product.price.toString()}
                        quantity={cartProduct(product.id) ? cartProduct(product.id).quantity : 0}
                        onDelete={() => handleDeleteByIndex(index)}
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
