import React from 'react'
import { Box, Button, Container, Grid, Hidden, Menu, MenuItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import CategoryMenu from '../../components/CategoryMenu';
import CustomLink from '../../components/CustomLink';
import CartDrawer from '../cartDrawer/CartDrawer';
import MenuButton from '../../components/MenuButton';

export default function MenuBar() {
  
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
            <Link 
                to={{
                      pathname: '/',
                    }}
            >
                <img src='/logo.svg' />
            </Link>
            <CategoryMenu/>
        </Box>

        <Box>
        </Box>

        <Hidden lgDown>
            <Box sx={{display:'flex', }} color={"#2B3445"} > 
                <Link style={{ textDecoration: 'none', color :'#2B3445' }} to={{ pathname: '/',}}>
                    <MenuButton title={'Home'} items={['Profile', 'Products', 'Login']}/>
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

            <CartDrawer/>
        </Box>
    </Box>
  )
}
