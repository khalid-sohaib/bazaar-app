import React from 'react'
import { Box, Button, Card, MenuItem, TextField, Typography } from '@mui/material'


const styles = () => ({
    styledMainBox: {
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "16px",
    },

styledButton: {
    color: 'rgb(210, 63, 87)', 
    border: '1px solid rgba(210, 63, 87, 0.5)', 
    textTransform: "none",

    '&:hover': { borderColor: '#D23F57', backgroundColor:'#FDF7F8' },
},

styledTotal: {
    color: "#7D879C",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
},

styledPrice: {
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: 1,
    color: "rgb(43, 52, 69)",
},

styledHeadings: {
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: 1.5,
    color: "rgb(43, 52, 69)",

},

styledNote: {
    padding: "6px 10px",
    fontSize: "12px",
    lineHeight: 1,
    borderRadius: "3px",
    color: "rgb(210, 63, 87)",
    backgroundColor: "rgb(252, 233, 236)",
},

styledCheckoutButton: {
    color: "rgb(255, 255, 255)", 
    backgroundColor: "rgb(210, 63, 87)", 
    fontWeight: 520, 
    borderRadius: "6px",
    textTransform: "none",
    height: "32px",
    fontSize: "14px",

    '&:hover': {
        backgroundColor: "#E3364E",
    },
}
})

export default function CardCheckout({price}) {
    const classess = styles();
  return (
    <Card>
        <Box sx={ classess.styledMainBox } >
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography sx={ classess.styledTotal }>Total:</Typography>
                <Typography sx={{...classess.styledPrice, color:'#D23F57'}}>${price}</Typography>
            </Box>

            <Box display="flex" alignItems="Center" mt={4} mb={1}>
                <Typography mr={1} sx={ classess.styledHeadings }>Additional Comments</Typography>
                <Typography sx={ classess.styledNote }>Note</Typography>
            </Box>

            <Box>                   
                <TextField
                    multiline
                    rows={4}
                    fullWidth
                    color="error"
                />
                            
                <TextField label="Voucher" color="error" size="small" fullWidth sx={{ marginTop: '16px', }} />
                <Button variant="outlined" fullWidth sx={{ ...classess.styledButton, marginTop: "16px" }}  >Apply Voucher</Button>
            </Box>

            <Box mt={4} mb={1}>
                <Typography mb={1} sx={ classess.styledHeadings }>Shipping Estimates</Typography>

                <TextField
                    select
                    label="State"
                    defaultValue="New York"
                    color="error"
                    size="small"
                    fullWidth
                    sx={{ marginTop: '8px', }}
                >
                    <MenuItem  value="New York" >New York</MenuItem>
                    <MenuItem value="Chicago">Chicago</MenuItem>
                </TextField>
                    
                <TextField label="Zip Code" placeholder="3100" size="small" fullWidth color="error" sx={{ marginTop: '16px', }} />
                <Button variant="outlined" fullWidth sx={{ ...classess.styledButton, marginTop: '16px', }}  >Calculate Shipping</Button>
                <Button variant="contained" fullWidth sx={{ ...classess.styledCheckoutButton, marginTop: '16px',  }}  >Checkout Now</Button>
            </Box>

        </Box>
    </Card>
  )
}
