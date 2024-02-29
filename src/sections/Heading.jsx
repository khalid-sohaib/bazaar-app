import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

export default function Heading() {
  return (
    <Box  flexDirection={{xs :'column', sm:'row'}}  py={8} sx={{backgroundColor:'#F6F9FC', display:'flex', justifyContent:'space-between',   }}>
       
            <Box my={10} mx={2} width={'50%'}  >
                <Typography variant='h1' fontSize={50} fontWeight={'bold'} pb={5}>Fashionable Collection</Typography>
                <Typography variant='body2' py={2} fontSize={14} color={'#0F3460'}>Get Free Shipping on all orders over $99.00</Typography>
                <Button variant='contained' sx={{bgcolor:'#1F2937'}} >Shop Now</Button>
            </Box>
            <Box  display={'flex'}  justifyContent={'center'}>
                <img  src='/bag.png' style={{width:'400px', overflow:'hidden', height:'100%'}}/>
            </Box>
    </Box>
  )
}
