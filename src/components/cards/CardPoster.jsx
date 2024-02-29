import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'


const styles = ()=>({
    card : {
        maxHeight:'245px', 
        position:'relative',
        // maxWidth: 345,
        '&:hover  img ': {
            transform: 'scale(1.2)',
            transition: 'transform 0.3s ease-in-out',
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
        // alignItems: 'flex-end',
        justifyContent: 'center',
        color: 'white',
        //textAlign:'end',
        // backgroundColor:'lightgray'
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
            },
    },
    button : {
        
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
    styledButton: {
        color: 'white',
        padding: 0, 
        border: 'none',
        textAlign: 'flex-start',
        position: 'relative',
        overflow: 'hidden',

        '&::before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '3px',
          bottom: 0,
          left: '0',
          backgroundColor: 'white',
          transform: 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
        },

        '&:hover::before': {
          transform: 'translateX(0)',
        },
    },
   
})
export default function CardPoster({imageUrl, left}) {

    const classes = styles();
  return (
    
        <Card sx={classes.card} >
            <CardMedia  
                component="img" 
                alt="category"
                loading="lazy"
                decoding="async"
                src={imageUrl}
                sx={{ objectFit: 'cover',   }}   
            >   
            </CardMedia>
            <Box sx={{...classes.overlay, alignItems : left ? 'flex-start' : 'flex-end', textAlign : left ? 'start' : 'end'}}>
                <CardContent sx={{marginRight:'24px'}} >
                    <Typography variant='h4' fontSize={25} fontWeight={700} my={3}>For Women's </Typography>
                    <Typography variant='body1' fontSize={14} my={3}  sx={{ borderBottom: '3px solid white'}} >25% off </Typography>
                    {/* <Divider  sx={{ borderTop: '3px solid white', width:'55px', mt:'10px' }}/> */}
                    <Button variant='text'  sx={classes.styledButton} >
                        
                        <Typography variant='h6' fontSize={14}>Shop Now </Typography>
                    </Button>
                </CardContent>
            </Box>
          </Card>
  )
}
