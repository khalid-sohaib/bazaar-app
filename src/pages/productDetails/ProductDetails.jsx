import { Avatar, Box, Button, CircularProgress, Grid, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import axios from 'axios';
import { useMutation } from 'react-query';
import { useCart } from '../../contexts/CartContext';
import { useCartContext } from '../../contexts/TestCartContext';
import { fetchProductById } from '../../utils/Api';


const styles = () => ({
  spinner : {
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          height:"100vh",
  }
})

export default function ProductDetails() {
    const classes = styles();
    //Getting Prdoduct-Id
    const location = useLocation();
    const id = location.state?.id || 1;
    
   
//get cart from context
const {  
  cart,
  AddtoCart } = useCart();


const handleClick = async () => {
  try {
    // Update cart state using the functional form of setCart
    AddtoCart((prevCart) => {
      // Check if the cart exists (has length)
      if (prevCart && prevCart.length > 0) {
        // Check if the productId already exists in the cart
        const existingProductIndex = prevCart.findIndex(
          (e) => e.productId === id
        );

        if (existingProductIndex !== -1) {
          // If productId exists, increment the quantity
          return prevCart.map((product, index) =>
            index === existingProductIndex
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
        } else {
          // If productId doesn't exist, add a new entry with quantity=1
          return [...prevCart, { productId: id, quantity: 1 }];
        }
      } else {
        // If cart doesn't exist, add a new entry with quantity=1
        return [{ productId: id, quantity: 1 }];
      }
    });
  } catch (error) {
    console.error('Error updating cart:', error);
  }
};

console.log("Idddddddddddd",id);
    const {data: product, isLoading, error} = useQuery('product',()=>fetchProductById(id));
    if (isLoading) return <Box sx={classes.spinner}><CircularProgress size={100} thickness={2} /></Box>;
    if (error) return <p>Error: {error.message}</p>;


    const imgUrl = product?.image;
    const category = product?.category;
    const title = product?.title;
    const price = product?.price;
    const reviews = product?.rating?.count; 
    const stars = product?.rating?.rate;

    //  console.log(product);  

  return (
    <Grid container  bgcolor={'#F6F9FC'} >
        <Grid item  xs={12} md={6} display={'flex'} alignItems={'center'}  justifyContent={'center'} px={2} >
            {/* <Box display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'center'} > */}
                {/* <Typography>Hello world</Typography> */}
                {/* <Avatar src={imgUrl} sx={{ borderRadius:'0px',  width: '400px', height: '400px', objectFit:'contain', maxHeight:'400px' }}  /> */}
                <img 
                  alt="Product image"
                  loading="lazy"
                  decoding="async"
                  src={imgUrl}
                  style={{ objectFit: 'fill', maxHeight:'400px', mixBlendMode:'multiply'}}
                />
            {/* </Box> */}
        </Grid>
        
        <Grid item xs={12} md={6} >
            
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'} py={8} pl={2}>
                <Typography variant='h2' mb={1} fontSize={30} fontWeight={700}>{title}</Typography>

                <Box mb={2} display={'flex'}>
                    <Typography fontSize={14} fontWeight={400} sx={{ color:'#2B3445'}} mr={1} >Brand : </Typography>
                    <Typography fontSize={14} fontWeight={600}>Xiaomi</Typography>
                </Box>

                <Box mb={2} sx={{display:'flex', fontSize:'12'}}>
                    <Typography fontSize={14} fontWeight={400} sx={{ color:'#2B3445'}} mr={1} >Rated: </Typography>
                    <Rating size='medium' name="read-only" value={stars} readOnly />  
                    <Typography ml={1} fontSize={14} fontWeight={600}> ({reviews})</Typography>
                </Box>

                <Box mb={2}>
                    <Typography variant='h6' mb={1} fontSize={14} fontWeight={600}>Option</Typography>
                    <Box>
                        <Button variant='text' sx={{bgcolor:'#D8DBDD', textTransform:'none', color:'black', mr:1 }}>option 1</Button>
                        <Button variant='text' sx={{bgcolor:'#D8DBDD', textTransform:'none', color:'black', mr:1 }}>option 2</Button>
                        <Button variant='text' sx={{bgcolor:'#D8DBDD', textTransform:'none', color:'black', mr:1 }}>option 3</Button>
                        <Button variant='text' sx={{bgcolor:'#D8DBDD', textTransform:'none', color:'black', mr:1 }}>option 4</Button>
                    </Box>
                </Box>

                <Box mb={2}>
                    <Typography variant='h6' mb={1} fontSize={14} fontWeight={600} >Type</Typography>
                    <Box>
                        <Button variant='text' sx={{bgcolor:'#D8DBDD', textTransform:'none', color:'black', mr:1 }}>type 1</Button>
                        <Button variant='text' sx={{bgcolor:'#D8DBDD', textTransform:'none', color:'black', mr:1 }}>type 2</Button>
                        <Button variant='text' sx={{bgcolor:'#D8DBDD', textTransform:'none', color:'black', mr:1 }}>type 3</Button>
                    </Box>
                </Box>

                <Box mb={2}>
                    <Typography variant='h5' fontWeight={700} sx={{color:'#D23F57'}}>${decodeURIComponent(price)}</Typography>
                    <Typography variant='body2'>Stock Available</Typography>
                </Box>

                <Box mb={4} >
                    <Button variant='contained' size='large' sx={{bgcolor:'#D23F57', color:'white'}} onClick={handleClick} >Add To Cart</Button>
                </Box>

                <Box display={'flex'}>
                    <Typography fontSize={14} fontWeight={400} sx={{ color:'#2B3445'}} mr={1} >Sold by :  </Typography>
                    <Typography fontSize={14} fontWeight={600} > {category}</Typography>
                </Box>
            </Box>
            
        </Grid>
    </Grid>
  )
}


