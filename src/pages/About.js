import { Button, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';

function Contact(){
    const theme=useTheme();
    const isMobile=useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <div style={!isMobile?{marginTop:"30px",width:"90%",display:"flex",alignItems:"center",margin:"auto"}:{marginTop:"40px",width:"90%",display:"flex",flexDirection:"column",alignItems:"center",margin:"auto"}}>
        <div style={!isMobile?{width:"65%"}:{width:"100%"}}>
        <Typography variant={!isMobile?"h3":"h6"}>Domain Buster is an online tool to discover subdomains of a target domain...</Typography>
        {isMobile && <img alt="search" src="https://i.pinimg.com/originals/b6/19/fe/b619fed8826330203d4865d3214ec913.jpg" width="100%"></img>}
        <a href="/" style={{textDecoration:"none"}}><Button variant="outlined" color="secondary" size="large" style={!isMobile?{marginTop:"20px",width:"40%"}:{width:"90%",marginTop:"20px"}}>Bust Domains</Button></a>
        </div>
        {!isMobile && <img src="https://i.pinimg.com/originals/b6/19/fe/b619fed8826330203d4865d3214ec913.jpg" alt="search" width="30%"></img>}
        </div>
    )

}

export default Contact;
// online tool to discover subdomains of a target domain