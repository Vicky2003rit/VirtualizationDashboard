import React from "react";
import {Grid,Box} from '@mui/material';


export default function MyChartBox(props){
    const {icon1,title1,chart1,icon2,title2,chart2,icon3,title3,chart3,title4,chart4,title5,chart5} = props
    return(
        <>
            <Grid container sx={{width:'100%',display:'flex',minHeight:'150px',boxShadow:3,justifyContent:'space-evenly' ,backgroundColor:'#f7f6cd' }}>
                <Grid  item xs={12} sm={12} md={6} lg={4}
                    sx={{minHeight:'100px',padding:'0px',margin:'0px'}}>
                        <Box sx={{marginBottom:'20px',fontWeight:'bold',display:'flex',flexDirection:'row',alignContent:'center'}}>
                            
                            <Box>{title1}</Box>
                        </Box>
                        <Box>{chart1}</Box>
                   

                </Grid>
                <Grid  item xs={12} sm={12} md={6} lg={4}
                    sx={{minHeight:'200px',padding:'20px'}}>
                        <Box sx={{marginBottom:'20px',fontWeight:'bold',display:'flex',flexDirection:'row',alignContent:'center'}}>
                            
                            <Box>{title2}</Box>
                        </Box>
                        <Box>{chart2}</Box>
                   

                </Grid>
                <Grid  item xs={12} sm={12} md={6} lg={4}
                    sx={{minHeight:'200px',padding:'20px'}}>
                        <Box sx={{marginBottom:'20px',marginLeft:'-20px',fontWeight:'bold',display:'flex',flexDirection:'row',alignContent:'center'}}>
                            
                            <Box>{title3}</Box>
                        </Box>
                        <Box>{chart3}</Box>
                   

                </Grid>

                

            </Grid>
            <Grid container sx={{width:'100%',display:'flex',minHeight:'150px',boxShadow:3,justifyContent:'space-evenly',backgroundColor:'#e8f5f5'}}>
                <Grid  item xs={12} sm={12} md={6} lg={4}
                    sx={{minHeight:'100px',padding:'0px',margin:'0px'}}>
                        <Box sx={{marginBottom:'20px',fontWeight:'bold',display:'flex',flexDirection:'row',alignContent:'start'}}>
                            <Box>{icon1}</Box>
                            <Box>{title4}</Box>
                        </Box>
                        <Box sx={{ marginLeft: '-10px' }}>{chart4}</Box>
                   

                </Grid>
                <Grid  item xs={12} sm={12} md={6} lg={4}
                    sx={{minHeight:'100px',padding:'0px',margin:'0px'}}>
                        <Box sx={{marginBottom:'20px',fontWeight:'bold',display:'flex',flexDirection:'row',alignContent:'start'}}>
                            <Box>{icon1}</Box>
                            <Box>{title5}</Box>
                        </Box>
                        <Box sx={{ marginLeft: '-10px' }}>{chart5}</Box>
                   

                </Grid>



                

            </Grid>
        </>

    );
}