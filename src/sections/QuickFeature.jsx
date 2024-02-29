import { Box, Card, CardContent, CardMedia, Divider, Grid, Hidden, Paper, Typography } from '@mui/material'
import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';

import CardQuick from '../components/cards/CardQuick';

export default function QuickFeature() {
    

  return (
    <Box>
            <Box pt={8} px={2}   >
                <Paper elevation={4} sx={{ display:'flex', justifyContent:'space-around', flexWrap:'wrap', py:1}}>
                    <Grid container justifyContent={'space-around'} alignItems={'center'} >
                        <Grid item px={2} display={'flex'} justifyContent={'center'} xs={12} sm={5.7} md={2.7} >
                            <CardQuick title={'Fast Delivery'} description={"Strat from $10"} icon={<LocalShippingOutlinedIcon sx={{fontSize:'50px'}}/>}/>
                        </Grid>

                            <Hidden smDown>
                                <Divider orientation="vertical" variant="middle" flexItem />
                            </Hidden>

                        <Grid item px={2} display={'flex'} justifyContent={'center'} xs={12} sm={5.7} md={2.7} >
                            <CardQuick title={'Fast Delivery'} description={"Strat from $10"} icon={<SavingsOutlinedIcon sx={{fontSize:'50px'}}/>}/>
                        </Grid>

                            <Hidden mdDown>
                                <Divider orientation="vertical" variant="middle" flexItem />
                            </Hidden>

                        <Grid item px={2} display={'flex'} justifyContent={'center'} xs={12} sm={5.7} md={2.7} >
                            <CardQuick title={'Fast Delivery'} description={"Strat from $10"} icon={<TimerOutlinedIcon sx={{fontSize:'50px'}}/>}/>
                        </Grid>
                        
                            <Hidden smDown>
                                <Divider orientation="vertical" variant="middle" flexItem />
                            </Hidden>

                        <Grid item px={2} display={'flex'} justifyContent={'center'} xs={12} sm={5.7} md={2.7} >
                            <CardQuick title={'Fast Delivery'} description={"Strat from $10"} icon={<PaymentOutlinedIcon sx={{fontSize:'50px'}}/>}/>
                        </Grid>
                        

                    </Grid>
                  
                        
                </Paper>
            </Box>
    </Box>
  )
}
