import { CircularProgress, Grid, Typography } from '@mui/material'
import React from 'react'
import CardCategory from '../components/cards/CardCategory';
import CustomLink from '../components/CustomLink';

export default function BestCategories({ categories, isLoading, isError, error}) {
    const imageUrl1 = '/t-shirt4.webp';
    const imageUrl2 = '/t-shirt5.webp';
    const imageUrl3 = '/smartwatch-2.webp';
    const imageUrl4 = '/casmatics.webp';

    if(isLoading){
        return <CircularProgress size="lg" />
    }
    if(isError){
        return <h1>{error.message}</h1>
    }

  return (
        <>
        
            <Typography variant='h2' mt={8} mb={3} fontSize={25} fontWeight={700} sx={{textAlign:'center'}}>Best Selling Categories</Typography>
      
            {categories && 
            <Grid container spacing={3} px={2} >
                <Grid item xs={12}  sm={6} md={3}  mt={2} >
                    <CustomLink path={'/product-category'} data={{ category: "men's clothing" }} >
                        <CardCategory imageUrl={imageUrl1} btnTitle={categories[2]}/>
                    </CustomLink>
                </Grid>

                <Grid item xs={12}  sm={6} md={3}  mt={2} >
                    <CustomLink path={'/product-category'} data={{category: "women's clothing"}}>
                        <CardCategory imageUrl={imageUrl2} btnTitle={categories[3]}/>
                    </CustomLink>
                </Grid>

                <Grid item xs={12}  sm={6} md={3}  mt={2} >
                    <CustomLink path={'/product-category'} data={{category: "electronics"}} >
                        <CardCategory imageUrl={imageUrl3} btnTitle={categories[0]}/>
                    </CustomLink>

                </Grid>
                <Grid item xs={12}  sm={6} md={3}  mt={2} >
                    <CustomLink path={'/product-category'} data={{category: "jewelery"}}>
                        <CardCategory imageUrl={imageUrl4} btnTitle={categories[1]}/>
                    </CustomLink>
                </Grid>
            </Grid>
            }
        </>
        
  )
}
