import React, { useState } from 'react'
import { Box, Button, Container, Drawer, Grid, Hidden, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import CategoryMenu from '../../components/CategoryMenu';
import CustomLink from '../../components/CustomLink';
import CartDrawer from '../cartDrawer/CartDrawer';
import MenuButton from '../../components/MenuButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CartDrawerContainer from '../../containers/CartDrawer';

export default function MenuBar() {
  
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

  return (
    // <Box position={'sticky'} mx={2} sx={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'10px', zIndex:'1'}}>
    <Box
        
        position={'sticky'}
        top={0} 
        zIndex={1}
        bgcolor={'#fff'} 
        p={2}
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.1)'
    >
        <Box  
           display={'flex'}
           
        >   
            <Hidden lgDown>
                <Link 
                    to={{
                        pathname: '/',
                        }}
                >
                    <img src='/logo.svg' />
                </Link>
                <CategoryMenu/>
            </Hidden>

            <Hidden lgUp>
                <Button onClick={toggleMobileMenu}>
                    <MenuIcon sx={{color:'#2B3445'}} />
                </Button>
            </Hidden>

            <Drawer
                anchor="left"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            >

                <Box
                width={250}
                padding={2}
                display='flex'
                flexDirection='column'
                alignItems='center'
                >
                    <IconButton onClick={() => setMobileMenuOpen(false)}>
                        <CloseIcon/>
                    </IconButton>
                <Link
                    style={{ textDecoration: 'none', color: '#2B3445' }}
                    to={{ pathname: '/' }}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <Typography variant='h6' gutterBottom>
                    Home
                    </Typography>
                </Link>
                <Link
                    style={{ textDecoration: 'none', color: '#2B3445' }}
                    to={{ pathname: '/product-category' }}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <Typography variant='h6' gutterBottom>
                    Products
                    </Typography>
                </Link>
                <Link
                    style={{ textDecoration: 'none', color: '#2B3445' }}
                    to={{ pathname: '/product-detail' }}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <Typography variant='h6' gutterBottom>
                    Detail
                    </Typography>
                </Link>
                <Link
                    style={{ textDecoration: 'none', color: '#2B3445' }}
                    to={{ pathname: '/cart' }}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <Typography variant='h6' gutterBottom>
                    Pages
                    </Typography>
                </Link>
                </Box>
            </Drawer>
            
        </Box>

        

        <Hidden lgUp>
            <Link 
                to={{
                    pathname: '/',
                    }}
            >
                <img src='/bazaar-sm.svg' />
            </Link>
        </Hidden>

        <Hidden lgDown>
            <Box sx={{display:'flex', }} color={"#2B3445"} > 
                <Link style={{ textDecoration: 'none', color :'#2B3445' }} to={{ pathname: '/',}}>
                    {/* <MenuButton title={'Home'} items={['Profile', 'Products', 'Login']}/> */}
                    {/* <Typography>Home</Typography> */}
                    <Box px={2} display={'flex'} sx={{ textTransform: 'none', '&:hover': {  color:'#D13F57' },  }} >
                        <Typography variant='body2'>
                        Home
                        </Typography>
                        <ExpandMoreIcon sx={{color:'darkgray', }}/>
                    </Box>
                </Link>
                <Link style={{ textDecoration: 'none', color :'#2B3445' }} to={{ pathname: '/product-category',}}>
                    <MenuButton title={'Products'} items={['Profile', 'Products', 'Login']}/>
                </Link>
                <Link style={{ textDecoration: 'none', color :'#2B3445' }} to={{ pathname: '/product-detail',}}>
                    <MenuButton title={'Detail'} items={['Profile', 'Products', 'Login']}/>
                </Link>
                <Link style={{ textDecoration: 'none', color :'#2B3445' }} to={{ pathname: '/',}}>
                    <MenuButton title={'Pages'} items={['Profile', 'Products', 'Login']}/>
                </Link> 
            </Box>
        </Hidden>

        <Box display={'flex'} alignItems={'center'}>
           <PersonOutlineOutlinedIcon sx={{ mx:'10px', '&:hover': {  color:'#D13F57' },}}/> 
           {/* <CustomLink path={'/cart'} >
                <ShoppingBagOutlinedIcon sx={{'&:hover': {  color:'#D13F57' },}}/> 
           </CustomLink> */}

            <CartDrawerContainer/>
        </Box>
    </Box>
  )
}
