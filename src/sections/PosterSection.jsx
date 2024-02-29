import React from 'react'
import CardPoster from '../components/cards/CardPoster'
import { Grid } from '@mui/material'

export default function PosterSection() {
    const imageUrl = '/womens-fashion.jpg'
  return (
    <>
        

        <Grid container spacing={2} mt={2} px={2} my={5} mb={10} >
                <Grid item xs={12}  sm={12} md={4}  mt={2} >
                    <CardPoster imageUrl={"/men's-fashion.jpg"} left={true}/>
                </Grid>
                <Grid item xs={12}  sm={12} md={4}  mt={2} >
                    <CardPoster imageUrl={"/banner2.jpg"} left={true}/>
                </Grid>
                <Grid item xs={12}  sm={12} md={4}  mt={2} >
                    <CardPoster imageUrl={imageUrl}/>
                </Grid>
                 

        </Grid>
    </>
  )
}
