import { Button, Typography } from '@mui/material'
import React from 'react'

const styles = () => ({
    styledButton: {
        color: "#AEB4BE",
        padding: 0, 
        textTransform: 'none',
        lineHeight: 2,
        justifyContent: "flex-start",

        '&:hover': {
            color: "white",
        },
    },
})

function CustomButton({ btnTitle }) {
    const classess = styles();

return (
    <>   
        <Typography variant='button' sx={ classess.styledButton } >{btnTitle}</Typography>
    </>
)
}

export default CustomButton