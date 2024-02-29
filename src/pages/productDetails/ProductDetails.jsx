import { Avatar, Box, Button, Grid, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import axios from 'axios';
import { useMutation } from 'react-query';
import { useCart } from '../../contexts/CartContext';




export default function ProductDetails() {

    const location = useLocation();
    const id = location.state?.id || 1;
    
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    const createCartMutation = useMutation((newCart) =>
  axios.post('https://fakestoreapi.com/carts', newCart)
);

//get cart from context

const {  
  cart,
  AddtoCart } = useCart();
console.log("Cart obj from state in detail page",cart);
const handleClick = async () => {
  try {
    // Data for creating a new cart
    // const newCartData = {
    //   userId: 5,
    //   date: '2020-02-03',
    //   products: [
    //     { productId: product.id, quantity: 1 },
    //     // Add products
    //   ],
    // };

   cart.products.push({productId: product.id, quantity: 1 });
   

    // POST request to create a new cart
    // const createdCart = await createCartMutation.mutateAsync(newCartData);

    // console.log('New Cart data:', createdCart.data);
    // AddtoCart(createdCart);
    console.log("New Cart data",cart);
    AddtoCart(cart);

  } catch (error) {
    console.error('Error creating new cart:', error);
    // error messages.
  }
};
    
    const { data: product, isLoading, error } = useQuery(['product', id], () =>
    axios(`https://fakestoreapi.com/products/${id}`).then((response) => response.data)
    );
    if (isLoading) return <p>Loading...</p>;
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


