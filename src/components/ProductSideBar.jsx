import { CheckBox, Label } from '@mui/icons-material'
import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Rating, Typography } from '@mui/material'
import React from 'react'


const styles = () =>({

  main : {
      backgroundColor : 'white',
      bgcolor:'white',
      borderRadius:2,
      boxShadow:1
  },

  heading : {
      paddingY : '8px',
      fontSize :'16px',
      fontWeight : '600'
  },
  subTitle : {
    padding : '8px',
    fontSize :'14px',
    fontWeight : '400',
    color : '#8990A2'
  }
})
export default function ProductSideBar() {
  const classes = styles();
  return (
    <Box p={2} sx={classes.main}>
        <Typography sx={classes.heading}>Categories</Typography>
          <Box py={2}>
            <Typography sx={classes.subTitle}>Bath Preparations</Typography>
            <Typography sx={classes.subTitle}>Eye Makeup Preparations</Typography>
            <Typography sx={classes.subTitle}>Fragrance</Typography>
            <Typography sx={classes.subTitle}>Hair Preparations</Typography>
          </Box>
          <Divider/>
        <Typography sx={classes.heading} >Brands</Typography>
          <Box>
            <FormGroup>
              <FormControlLabel control={<Checkbox  />} label="Mac" />
              <FormControlLabel control={<Checkbox  />} label="Karts" />
              <FormControlLabel control={<Checkbox  />} label="Baals" />
              <FormControlLabel control={<Checkbox  />} label="Bukks" />  
              <FormControlLabel control={<Checkbox  />} label="Luasis" />  
            </FormGroup>
          </Box>
          <Divider/>
        <Typography sx={classes.heading}>Ratings</Typography>
          <Box>
            <FormGroup>
              <FormControlLabel control={<Checkbox  />} label={<Rating size='small' value={3}/>} />
              <FormControlLabel control={<Checkbox  />} label={<Rating size='small' value={3}/>} />
              <FormControlLabel control={<Checkbox  />} label={<Rating size='small' value={3}/>} />
              <FormControlLabel control={<Checkbox  />} label={<Rating size='small' value={3}/>} />
              <FormControlLabel control={<Checkbox  />} label={<Rating size='small' value={3}/>} />
                
            </FormGroup>
          </Box>


    </Box>
  )
}
