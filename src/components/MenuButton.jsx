import { Box, Button, List, Menu, MenuItem, Popover, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



// export default function MenuButton({title, items}) {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//       setAnchorEl(null);
//     };

//     const handleHover = (event) => {
//         setAnchorEl(event.currentTarget);
//       };
    
//       const handleLeave = () => {
//         setAnchorEl(null);
//       };

    
//   return (
//         <Box > 
//             <Button  sx={{color:'black', fontSize:12,'&:hover': {  color:'red'}, }}
//                 id="basic-button"
//                 onClick={handleClick}
//                 onMouseOver={handleHover}
//                 onMouseLeave={handleLeave}
                
//                 textTransform={'none'}
//             >
//                 <Typography variant="button" sx={{ textTransform: 'none', '&:hover': {  color:'red' },  }}>
//                     {title}
//                 </Typography>
//             <ExpandMoreIcon sx={{color:'darkgray', }}/>
//             </Button>
            

//                 <Menu sx={{mt:'10px' , '&:hover': {  color:'red' },}}

//                     id="basic-menu"
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleLeave}
                    
//                 >
//                     <MenuItem  sx={{'&:hover': {  color:'red' },}} onClick={handleClose}>{items[0]}</MenuItem>
//                     <MenuItem onClick={handleClose}>{items[1]}</MenuItem>
//                     <MenuItem onClick={handleClose}>{items[2]}</MenuItem>
//                 </Menu>
            
//         </Box>
//   )
// }



export default function MenuButton({ title, items }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
  
    return (
      <Box px={2} display={'flex'} sx={{ textTransform: 'none', '&:hover': {  color:'#D13F57' },  }} >
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseOver={handlePopoverOpen}
          onMouseOut={handlePopoverClose}

          variant='body2'
        >
          {title}
        </Typography>
        <ExpandMoreIcon sx={{color:'darkgray', }}/>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          {open && (
            <Box >
              <MenuItem sx={{ '&:hover': { color: '#D13F57' } }} onClick={handlePopoverClose}>
                {items[0]}
              </MenuItem>
              <MenuItem onClick={handlePopoverClose}>{items[1]}</MenuItem>
              <MenuItem onClick={handlePopoverClose}>{items[2]}</MenuItem>
            </Box>
          )}
        </Popover>
      </Box>
    );
  }