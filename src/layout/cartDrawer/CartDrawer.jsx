import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { CircularProgress, Drawer, IconButton, Typography } from '@mui/material';
import CustomLink from '../../components/CustomLink';
import CardCartDrawer from '../../components/cards/CardCartDrawer';
import { fetchCart } from '../../utils/Api';


const styles =() =>({
    main : {
        display:'flex', 
        // flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between' 
        // boxShadow:'2', 
        // borderRadius:2
    },
    content :{

    },
    styledButton: {
        color: 'rgb(210, 63, 87)', 
        border: '1px solid rgba(210, 63, 87, 0.5)', 
        textTransform: "none",
    
        '&:hover': { borderColor: '#D23F57', backgroundColor:'#FDF7F8' },
    },
    styledCheckoutButton: {
        color: "rgb(255, 255, 255)", 
        backgroundColor: "rgb(210, 63, 87)", 
        fontWeight: 520, 
        borderRadius: "6px",
        textTransform: "none",
        // height: "32px",
        fontSize: "14px",
    
        '&:hover': {
            backgroundColor: "#E3364E",
        },
    }
    
})
export default function CartDrawer() {
    const classes = styles();

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    // const [cart, setCart] = useState({
    //     id: 11, 
    //     userId: 5, 
    //     date: '2020-02-03', 
    //     products: 
    //             [
    //                 {
    //                     productId: 9, 
    //                     quantity: 1
    //                 },
    //                 {
    //                     productId: 11, 
    //                     quantity: 2
    //                 },
    //             ]
    // });

        const queryKey= 'cart';
        const {data : cart, isLoading: cartLoading, isError: cartError, error: cartErrorMessage } = useQuery(queryKey, fetchCart);

        const fetchProduct = async (productId) => {
            const response = await axios(`https://fakestoreapi.com/products/${productId}`);                
                return response.data;
            };
        
        const { data: products, isLoading: productsLoading, isError : productsError, error: productsErrorMessage } = useQuery(
        'products',
        async () => {
            if (cart && cart.products) {
            const fetchProductPromises = cart.products.map((product) => fetchProduct(product.productId));
            return await Promise.all(fetchProductPromises);
            }
            return [];
        },
        { enabled: !!cart } // Only fetch products if cart data is available
        );
        
        if (cartLoading || productsLoading) return <CircularProgress size="lg" />;
        //    if (cartError || productsError) return <p>Error: {cartErrorMessage?.message || productsErrorMessage?.message}</p>;
        if (cartError || cart == null) {
            console.error('Cart Error:', cartError);
            return <p>Error fetching cart: {cartErrorMessage?.message}</p>;
          }
          if (productsError || products == null) {
            console.error('Products Error:', productsError);
            return <p>Error fetching products: {productsErrorMessage?.message}</p>;
          }
    
        //   setProducts(productsData);

 // Finding the corsponding quanity 
 const cartProduct = (id) => {
    return cart.products.find((cartItem) => cartItem.productId === id);
  };

    const DrawerList = (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} sx={{ width: 400, height:'100%'}}  role="presentation" >
        <Box>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} px={3} py={2}> 
                <Box display={'flex'} sx={{color:'#0e325b'}} alignItems={'center'}>
                    <ShoppingBagOutlinedIcon />
                    <Typography  fontSize={14} fontWeight={600} ml={1} >2 item</Typography>
                </Box>
                <IconButton>
                    <CloseIcon onClick={toggleDrawer(false)}/>
                </IconButton>
            </Box>
            
            <Divider />

            <Box display={'flex'} flexDirection={'column'} px={0} >
            {products&&
                        products.map((product) => {
                            const words = product.title.split(" ");
                            const shortenedTitle = words.slice(0, 4).join(" ")
                            return(
                                <>
                                    <Box key={product.id} item  px={2}>
                                        <CardCartDrawer 
                                        // Id={product.id}
                                        imgUrl={product.image}
                                        title={shortenedTitle}
                                        price={product.price.toString()}
                                        quantity={cartProduct(product.id) ? cartProduct(product.id).quantity : 0}
                                        
                                        />
                                    </Box>
                                    <Divider/>
                                </>
                        );})
                        }
            </Box>

        </Box>

        <Box p={2}  >
            <Button variant="contained" onClick={toggleDrawer(false)} fullWidth sx={{ ...classes.styledCheckoutButton, marginTop: '16px',  }}  >Checkout Now {}</Button>
            <CustomLink path={'/cart'}>
                <Button variant="outlined" onClick={toggleDrawer(false)} fullWidth sx={{ ...classes.styledButton, marginTop: '16px', }}  >View Cart</Button>
            </CustomLink>
        </Box>

      </Box>
    );
  
    return (
      <div>
        <IconButton  onClick={toggleDrawer(true)} sx={{color:'#2B3445'}}>
            <ShoppingBagOutlinedIcon sx={{'&:hover': {  color:'#D13F57' },}}/> 
        </IconButton >
        <Drawer 
            anchor='right'
            open={open} 
            onClose={toggleDrawer(false)}
            
        >
          {DrawerList}
        </Drawer>
      </div>
    );
  }