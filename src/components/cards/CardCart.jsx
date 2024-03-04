import { Avatar, Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import QuantityInput from '../NumberInput';

import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../../contexts/CartContext';

const styles =() =>({
    main : {
        justifyContent:'space-between',
        display:'flex', 
        alignItems:'center', 
        boxShadow:'2', 
        borderRadius:2
    },
    content :{

    }
})
export default function CardCart({id, imgUrl, title, price, quantity, onDelete}) {

    const classes = styles();

    const handleClick = () => {
        onDelete();
        console.log("Handle close");
    }
  return (
    <Card sx={classes.main}>
      
            <Box px={2} py={1} display={'flex'}>

                <CardMedia sx={{width: '140px', height:'140px', objectFit:'contain'}}
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
                <CardContent sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                    <Typography fontSize={18} fontWeight={600} my={1}>{title}</Typography>
                    <Box display={'flex'}>
                        <Typography fontSize={14} fontWeight={400} >${price} X {quantity} </Typography>
                        <Typography fontSize={14} fontWeight={550} sx={{color:'#D23F57', ml:1}}> ${ price * quantity} </Typography> 
                    </Box>
                        <QuantityInput value={quantity}/>  
                </CardContent>

            </Box>
            


        <IconButton onClick={handleClick} sx={{alignSelf:'start', p:2}}>
            <CloseIcon/>
        </IconButton>
    </Card>
  )
}
