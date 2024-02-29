import React, { useEffect } from 'react'
import { Box, CircularProgress, Grid } from '@mui/material'
// import CardProduct from '../../CardProduct';

import Filterbar from '../../components/Filterbar'
import ProductSideBar from '../../components/ProductSideBar'
import Product from '../../components/cards/Product';


export default function ProductsByCategory({ category,  products, isLoading, isError, error, length}) {


  if(isLoading) return <CircularProgress size="lg" />
  if(isError) return <h1>{error.message}</h1>


  return (
   <Box p={{ xs:2, sm:3}} bgcolor={'#F6F9FC'}>
        <Filterbar data={category} quantity={length}/>
        <Grid container my={4} spacing={2}>
            <Grid item lg={2.8}>
              <ProductSideBar/>
            </Grid>

            <Grid item xs={12} md={9}>
              <Grid container spacing={2}>
                {products.map((product, index) =>  
                 { const words = product.title.split(" ");
                  const shortenedTitle = words.slice(0, 3).join(" ");
                  return(
                      <Grid key={index} item xs={12} sm={6} lg={4}>
                        <Product
                          Id={product.id}
                          ImageUrl={product.image}
                          Title={shortenedTitle}
                          Description={product.title}
                          Price={product.price.toString()}
                          Stars={product.rating.rate}
                          Reviews={product.rating.count}
                        />
                      </Grid>
                  )}
                )}
              </Grid>
            </Grid>
          </Grid>
        
   </Box>
  )
}
