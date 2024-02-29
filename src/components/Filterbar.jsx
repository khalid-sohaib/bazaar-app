import { Box, Typography } from '@mui/material'
import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import ViewListIcon from '@mui/icons-material/ViewList';

export default function Filterbar({data, quantity}) {
  
  return (
    <Box display={'flex'} justifyContent={'space-between'} p={2} bgcolor={'white'} borderRadius={2} boxShadow={1} >
        <Box>
            <Typography variant='h6' fontSize={16} fontWeight={600}>Searching for “ {data} ”</Typography>
            <Typography variant='subtitle1' fontSize={14}>{quantity} results found</Typography>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
            <Typography color={'#707070'} px={2}>View:</Typography>
            <AppsIcon htmlColor='#707070' sx={{paddingRight:'16px'}}/>
            <ViewListIcon htmlColor='#707070' sx={{paddingRight:'16px'}}/>
        </Box>
    </Box>
  )
}
