import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CustomLink from '../CustomLink';


const styles = ()=>({
    card : {
            paddingTop:'16px',
          '&:hover .MuiSvgIcon-root': {
              display: 'block',
            //   transform: 'translateX(-18px)', 
              transition: 'transform 0.4s ease-in-out',
            },
    },
    icon : {
        display:'none',
        color:'#B6B6B6',
        backgroundColor:'#FFFFFF',
        borderRadius:'50%',
        p:'8px',
        fontSize:'18px',
        // transform: 'translateX(100%)',
        right:18,
        position:'absolute',
        '&:hover': {
            backgroundColor:'#E3E9EE',
            color:'red',
            },
    },
    
})

export default function Product({ Id, ImageUrl, btnTitle, Title, Description, Price, Stars, Reviews}) {
    const classes = styles();
  return (
    <CustomLink 
      path={'/product-detail'}
      data={{id:Id}}
    >
      <Card style={{ position: 'relative'  }}
                    sx={{...classes.card, }}
                    
                >
              <CardMedia 
                    sx={{ position: 'relative',  }}     
              >   
                  <img 
                    alt="category"
                    loading="lazy"
                    decoding="async"
                    src={ImageUrl}
                    style={{ objectFit: 'contain', width: '100%', height: '345px', mixBlendMode:'multiply'  }}
                  />

                

              </CardMedia>

                  <AddShoppingCartIcon 
                      sx={{ ...classes.icon, top: '18px' }}
                  />
                  
                  <FavoriteBorderIcon
                      sx={{ ...classes.icon, top: '60px', }}

                  />
                  
                  

                <CardContent sx={{ pb:'0'}}>
                  <Typography py={1} fontSize={14} fontWeight={600}>{Title}</Typography>
                  <Rating size='small' name="read-only" value={Stars} readOnly />  
                  <Typography py={1} fontSize={14} fontWeight={600} sx={{color:'#D23F57'}}>${Price}</Typography>
                  
                </CardContent>
      </Card>

    </CustomLink>
  )
}
