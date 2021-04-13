import './App.css';
import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import {AppBar, Toolbar,Typography,Button,useMediaQuery,useTheme, Menu, IconButton, MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  const theme=useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const isMobile=useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className="App">
      <Router>
          <AppBar position="static" style={{ background: '#000000' }}>
            <Toolbar>
              <Typography variant={!isMobile?"h4":"h5"} style={{flex:"1",textAlign:"left"}}>Domain Buster</Typography>
              {!isMobile?<div>
              <Link to="/contact" style={{textDecoration:"none"}}><Button style={{color:"white"}}>Contact</Button></Link>
              <Link to="/about" style={{textDecoration:"none"}}><Button style={{color:"white"}}>About</Button></Link>
              <Link to="/" style={{textDecoration:"none"}}><Button style={{color:"white"}}>Home</Button></Link>
              </div>:<IconButton style={{color:"white"}} onClick={handleClick}><MenuIcon /></IconButton>}
              <Menu 
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem button style={{width:"100px"}} onClick={handleClose}><Link to="/" style={{textDecoration:"none"}}>Home</Link></MenuItem>                
                <MenuItem button onClick={handleClose}><Link to="/contact" style={{textDecoration:"none"}}>Contact</Link></MenuItem>
                <MenuItem button onClick={handleClose}><Link to="/about" style={{textDecoration:"none"}}>About</Link></MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>  
      </Router>
      <Typography variant="body1" style={{margin:"20px auto 20px"}}>© Copyright Bala Vignesh</Typography>
    </div>
  );
}

export default App;
