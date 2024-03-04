import { Avatar, Box, Card, CardContent, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'

import { useQuery } from 'react-query';
import QuantityInput from '../NumberInput';
import CloseIcon from '@mui/icons-material/Close';



const styles =() =>({
    main : {
        display:'flex', 
        // flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between' 
        // boxShadow:'2', 
        // borderRadius:2
    },
    content :{

    },

    
})



export default function CardCartDrawer({imgUrl, title, price, quantity, onDelete}) {    
    const classes = styles();

    const handleClick = () => {
        onDelete();
    }

    return (
        <>
        <Card elevation={0} sx={classes.main}>
            <QuantityInput value={quantity} direction="column"/>  
        
            {/* <Box px={2} > */}
                <CardMedia sx={{width: '55px', height:'55px', objectFit:'contain'}}
                    component={'img'}
                    src={imgUrl}
                    loading="lazy"
                    decoding="async"
                >
                    {/* <Avatar 
                        loading="lazy"
                        decoding="async"
                        src={imgUrl} 
                        style={{  width:'100%', height:'100%',borderRadius:'0', mixBlendMode:'multiply', objectFit:'contain',  }}
                        
                        /> */}
                </CardMedia>
            {/* </Box> */}
    
            <CardContent sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                <Typography fontSize={14} fontWeight={600} my={1}>{title}</Typography>

                <Box display={'flex'} flexDirection={'column'} >
                    <Typography fontSize={10} fontWeight={400} > ${price} X {quantity} </Typography>
                    <Typography fontSize={14} fontWeight={600} sx={{color:'#D23F57'}}> ${price * quantity} </Typography> 
                </Box>
            </CardContent>
            <IconButton onClick={handleClick}>
                <CloseIcon fontSize='small' />
            </IconButton>
        </Card>
        {/* <Divider/> */}
        </>
    )
  }
  
  