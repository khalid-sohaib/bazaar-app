import { Avatar, Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import QuantityInput from '../NumberInput';


const styles =() =>({
    main : {
        display:'flex', 
        alignItems:'center', 
        boxShadow:'2', 
        borderRadius:2
    },
    content :{

    }
})
export default function CardCart({imgUrl, title, price, quantity}) {
    const classes = styles();
  return (
    <Card sx={classes.main}>
            <Box px={2} py={1}>
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

            </Box>
            

        <CardContent sx={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
            <Typography fontSize={18} fontWeight={600} my={1}>{title}</Typography>
            <Box display={'flex'}>
                <Typography fontSize={14} fontWeight={400} >${price} X {quantity} </Typography>
                <Typography fontSize={14} fontWeight={550} sx={{color:'#D23F57', ml:1}}> ${ price * quantity} </Typography> 
            </Box>
                <QuantityInput value={quantity}/>  
        </CardContent>
    </Card>
  )
}
