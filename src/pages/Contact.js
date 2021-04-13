import { Typography,useTheme,useMediaQuery } from '@material-ui/core';
import React from 'react';
import MailIcon from '@material-ui/icons/Mail';

function Contact(){
    const theme=useTheme();
    const isMobile=useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <div style={{marginTop:"30px"}}>
        <Typography variant={!isMobile?"h3":"h5"}>Contact Us</Typography>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"15px"}}>
        <MailIcon fontSize={!isMobile?"large":"medium"}/>
        <Typography variant={!isMobile?"h5":"body1"} style={{marginLeft:"10px"}}>balavignesh1432@gmail.com</Typography>
        </div>
        </div>
    )

}

export default Contact;