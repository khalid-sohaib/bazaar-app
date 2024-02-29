import {CircularProgress, Grid, Typography } from '@mui/material'
import React from 'react'
import CardProduct from '../components/cards/CardProduct';

export default function BestProduct({ products, isLoading, isError, error}) {
    const imageUrl = '/21.webp';
    const imageUrl1 = '/4.webp';

    if(isLoading){
        return <CircularProgress size="lg" />
    }
    if(isError){
        return <h1>{error.message}</h1>
    }
    const Bestproducts = products.slice(7, 11);

  return (
        <>
        
            <Typography variant='h2' mt={8} mb={3} fontSize={25} fontWeight={700} sx={{textAlign:'center'}}>Best Selling Products</Typography>
            <Grid container spacing={2} px={2} >
                
                {Bestproducts.map((product) => {
                    const words = product.title.split(" ");
                    const shortTitle = words.slice(0, 4).join(" ");
                    return(
                        <Grid key={product.id} item xs={12} sm={6} md={3} mt={2}>

                            <CardProduct
                                id={product.id}
                                imageUrl={product.image}
                                category={product.category}
                                title={shortTitle}
                                price={product.price.toString()}
                                stars={product.rating.rate}
                                reviews={product.rating.count}
                            />

                        </Grid>
                    );}
                )}

            </Grid>
        </>
        
  )
}
