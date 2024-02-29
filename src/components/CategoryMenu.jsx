import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Hidden, Typography } from '@mui/material';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CustomLink from './CustomLink';
import { Link } from 'react-router-dom';


const styles = ()=>({
    mainBox :{
        padding:'1',
        backgroundColor:'#F6F9FC',
        color:'black',
        justifyContent : 'center',
        mx:'10px'

    },
    text : {
        pr :'120px',
        pl :'10px'
    },
    menuItem:{
      display:'flex',
      justifyContent:'space-between',
      textTransform:'capitalize',
        '&:hover': {   }
    }
})

export default function CategoryMenu() {
    const classes = styles();

    //exp
    const typographyRef = React.useRef(null);
    const icon1 = React.useRef(null);
    const icon2 = React.useRef(null);
    const button = React.useRef(null);


    const handleScroll = () => {
        const isSticky = window.scrollY > 0;
        if (typographyRef.current) {
            typographyRef.current.style.display = isSticky ? 'none' : 'block';
            icon1.current.style.color = isSticky ? 'gray' : 'black';
            icon2.current.style.color = isSticky ? 'gray' : 'black';
            button.current.style.backgroundColor = isSticky ? 'white' : '#F6F9FC';
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
    {(popupState) => (
      <React.Fragment>
        <Button ref={button} variant="text" {...bindTrigger(popupState)} sx={classes.mainBox}>
            <CategoryOutlinedIcon ref={icon1} fontSize='medium'/>
            {/* <Typography variant='subtitle1' textTransform={'none'} sx={classes.text}>Categories</Typography> */}

            {/* exp */}
            <Hidden mdDown>
                <Typography ref={typographyRef} variant='subtitle1' textTransform='none' sx={{ pr: '120px', pl: '10px', color:'black'}}>
                Categories
                </Typography>
            </Hidden>

            <ChevronRightIcon  ref={icon2} fontSize='medium'/>
        </Button>
        <Menu  {...bindMenu(popupState)} PaperProps={{ sx: { width: 272, mt:2 }}}>

          
          <CustomLink path={'/product-category'} data={{ category: "men's clothing" }} >
            <MenuItem onClick={popupState.close} sx={classes.menuItem} >Men's clothing <ChevronRightIcon/></MenuItem>
          </CustomLink>

          <CustomLink path={'/product-category'} data={{category: "women's clothing"}}>
            <MenuItem onClick={popupState.close} sx={classes.menuItem} >Women's clothing <ChevronRightIcon/> </MenuItem>
          </CustomLink>

          <CustomLink path={'/product-category'} data={{category: "electronics"}} >
            <MenuItem onClick={popupState.close} sx={classes.menuItem} >Electronics <ChevronRightIcon/> </MenuItem>
          </CustomLink>

          <CustomLink path={'/product-category'} data={{category: "jewelery"}}>
            <MenuItem onClick={popupState.close} sx={classes.menuItem} >jewelery <ChevronRightIcon/> </MenuItem>
          </CustomLink>
        </Menu>
      </React.Fragment>
    )}
  </PopupState>
  )
}
