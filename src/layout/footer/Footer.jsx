import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import CustomButton from '../../components/CustomButton';


const styles = () => ({
    mainBox: {
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
        display: "block",
        backgroundColor: "#222935",
        color: "white",
        overflow: "hidden",
        
    },

    styledLogo: {
        padding: '2px 0 18px',
  },
  
  styledText: {
      fontSize: "14px",
      fontWeight: "400",
    marginBottom: "10px",
    color: "#AEB4BE",
    lineHeight: 1.75,
  },

  styledHeading: {
      fontSize: "18px",
      lineHeight: 1,
      fontWeight: 600,
      marginBottom: "12px",
      marginTop: {
          xs: "20px",
          lg: "0", 
        }
    }
})

function Footer() {
const footerLogo = '/logo1.svg'
  const classess = styles();

  return (
    <>
      <Box px={{ xs: 3, lg: 2}} py={{ xs: 4, sm: 10}} sx={ classess.mainBox }>
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <img
              src={footerLogo}
              alt=''
              style={ classess.styledLogo }
            />
            <Typography sx={ classess.styledText }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</Typography>
          </Grid>

      <Grid item xs={12} sm={6} md={6} lg={2} pl={{ xs: 0, lg: 3 }}>
        <Typography sx={ classess.styledHeading }>About Us</Typography>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <CustomButton btnTitle="Careers" />
          <CustomButton btnTitle="Our Stores" />
          <CustomButton btnTitle="Our Cares" />
          <CustomButton btnTitle="Terms & Conditions" />
          <CustomButton btnTitle="Privacy Policy" />
        </Box>
      </Grid>
      
      <Grid item xs={12} sm={6} md={6} lg={3} pl={{ xs: 0, lg: 3 }}>
        <Typography sx={ classess.styledHeading }>Customer Care</Typography>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <CustomButton btnTitle="Help Center" />
          <CustomButton btnTitle="Track Your ORder" />
          <CustomButton btnTitle="Corporate & Bulk Purchasing" />
          <CustomButton btnTitle="Return & Refunds" />
        </Box>
      </Grid>
      
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Typography sx={ classess.styledHeading }>Contact Us</Typography>
        <Box sx={{ lineHeight: 1 }}>
          <Typography sx={ classess.styledText }>70 Washington Square South, New York, NY 10012, United States</Typography>
          <Typography sx={ classess.styledText }>Email: uilib.help@gmail.com</Typography>
          <Typography sx={ classess.styledText }>Phone: +1 1123 456 780</Typography>
        </Box>

      </Grid>
    </Grid>
    
  </Box>
</>
  )
}

export default Footer