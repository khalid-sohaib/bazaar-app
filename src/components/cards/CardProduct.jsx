import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Reviews, Stars } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';

const styles = ()=>({
    card : {
        '&:hover img ': {
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease-in-out',
          },
          '&:hover button ': {
            display:'block'
          },
          '&:hover .MuiSvgIcon-root': {
              display: 'block',
            //   transform: 'translateX(-18px)', 
              transition: 'transform 0.4s ease-in-out',
            },
    },
    overlay : {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        color: 'white',
        },
    icon : {
        display:'none',
        backgroundColor:'white',
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
    button : {
        
        display:'none',
        p:'8px',
        color:'white',
        backgroundColor:'#2B3445',
        opacity:'100%',
        width:'96%',
        margin:1,
        '&:hover': {
            backgroundColor:'#343434',
            },
    },
   
})

export default function CardProduct({ id, imageUrl, btnTitle, category, title, price, stars, reviews}) {
    const classes = styles();
    btnTitle='Quick View';
  
    return (
       
        <CustomLink path={'/product-detail'} data={{id:id}}>

        
          <Card 
                elevation={0}
                style={{ position: 'relative'  }}
                sx={{...classes.card,}}
                  
              >
            <CardMedia 
                  sx={{ bgcolor:'#E3E9EF', position: 'relative', p:2 }}     
            >   
                <img 
                  alt="category"
                  loading="lazy"
                  decoding="async"
                  src={imageUrl}
                  style={{ objectFit: 'contain', width: '100%', height: '329px', mixBlendMode:'multiply'  }}
                />

                <Box sx={classes.overlay} 
                >
                    <CardActions sx={{width:'100%'}} >
                        <Button
                        fullWidth
                        variant="contained"
                        // color={'primary.light'}
                        sx={classes.button}
                        >
                        <Typography variant='h6' fontSize={17} fontWeight={600} >{btnTitle}</Typography>
                        </Button>
                    </CardActions>

                </Box>

            </CardMedia>

                <AddShoppingCartIcon 
                    sx={{ ...classes.icon, top: '18px' }}
                />
                
                <FavoriteBorderIcon
                    sx={{ ...classes.icon, top: '60px', }}

                />
                
              <CardContent sx={{ textAlign:'center',}}>
                <Typography variant='body2' color={'gray'} textTransform={'capitalize'}>{category}</Typography>
                <Typography variant='h6' fontSize={14} fontWeight={700} >{title}</Typography>
                <Typography variant='h6' fontSize={14} fontWeight={700} >${price}</Typography>
                <Box sx={{display:'flex', justifyContent:'center', fontSize:'12'}}>
                    <Rating size='small' name="read-only" value={stars} readOnly />  
                    <Typography ml={1} fontSize={12} color={"gray"} fontWeight={600}> ({reviews} Reviews )</Typography>
                </Box>
              </CardContent>
          </Card>
          </CustomLink>
        // {/* </Link> */}
    )
  }
  
