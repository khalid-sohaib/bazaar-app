import { AppBar, Box, Container, Typography  } from '@mui/material'
import React from 'react'

const styles = () =>({
    appbar:{
        height:'40px',
        backgroundColor:'#2B3445',
        alignItems:'center'
    },

})

const Tool = () => {
    const classes = styles();
    
  return (
    <AppBar sx={{justifyContent:'center', height:'40px', position:'relative',
    backgroundColor:'#2B3445',}}>
        <Box mx={8} sx={{justifyContent:'space-between', display:'flex', }}>
            <Box  sx={{display:'flex',  alignItems:'center', justifyContent:'center'}}>
                <Box px={2} mx={1} sx={{display:'flex', backgroundColor:'#D23F57', borderRadius:'10px', alignItems:'center', justifyContent:'center'}}>
                    <Typography variant='h6' fontSize={14} fontWeight={700} >HOT</Typography>
                </Box>
                    <Typography variant='body1' fontSize={12}>Free Express Shipping</Typography>
            </Box>
            <Box>
                Icons
            </Box>
        </Box>
    </AppBar>
  )
}

export default Tool;
