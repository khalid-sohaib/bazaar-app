import { Box, Button, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

const styles = ()=>({
    card : {

        
        '&:hover img ': {
            transform: 'scale(1.2)',
            transition: 'transform 0.3s ease-in-out',
          },
          '&:hover button ': {
            color:'white',
            backgroundColor:'#2B3445',
            opacity:'100%'
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
    button : {
        
        p:'8px',
        color:'black',
        backgroundColor:'white',
        position: 'absolute',
        
        opacity:'50%',
        width:'95%',
        margin:1,
        color:'black',
        '&:hover': {
            backgroundColor:'#343434',
            color:'white',
            },
    },
   
})

export default function CardCategory({imageUrl, btnTitle}) {
    const classes = styles();
  return (
        <Card style={{ position: 'relative',  }}
        sx={classes.card}
        >
            <CardMedia
                // component="img"
                // alt="category"
                // loading="lazy"
                // // width="345"
                // height="345"
                // decoding="async"
                // src={imageUrl}
                // sx={{objectFit:'cover'}}
                // style={{ color: 'transparent' }}
            >
                <img 
                  alt="category"
                  loading="lazy"
                  decoding="async"
                  src={imageUrl}
                  style={{ objectFit: 'cover', width: '100%', height: '345px',  }}
                />
                <Box sx={classes.overlay} 
                >
                    <Button
                        fullWidth
                        variant="contained"
                        sx={classes.button}
                        >
                        <Typography variant='h6' fontSize={17} fontWeight={500}  >{btnTitle}</Typography>
                    </Button>

                </Box>
            </CardMedia>
           
            
        </Card>
  )
}
