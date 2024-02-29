import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function CardQuick({title, description, icon}) {
  return (
    <Card  elevation={0} sx={{ display:'flex', justifyContent:'center', alignItems:'center', color:'#2B3445', border: 'none'}}>
        <CardMedia>
            {icon}
        </CardMedia>
        <CardContent>
            <Typography  variant='h4' fontSize={17} fontWeight={600} >
                {title}
            </Typography>

            <Typography variant='body2'>
                {description}
            </Typography>
        </CardContent>
    </Card>
  )
}
