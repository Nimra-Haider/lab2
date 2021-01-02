import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, FormControl, Grid, Toolbar, Typography } from '@material-ui/core';
import userService from '../services/UserService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Nav, Navbar} from 'react-bootstrap';
 const useStyles = makeStyles((theme) => ({
    Name: {
       color:"black",
     },
    navbar: {
      background: "rgb(114, 72, 33);",
      height: "80px",
      display: "flex",
      fontsize: "1.2rem",
      position: "sticky",
      top: "1",
      zindex: "999",  
  }
   }));
const TopMenu = () => {
    

    const classes = useStyles();
     return ( 
    <header className={classes.navbar}>
    <Navbar variant="info" >
    <Navbar.Brand style={{paddingLeft:"20px", fontSize:"35px", color: "Black"}}className={classes.Name} href="/"><em>SELLER</em></Navbar.Brand>
    
    <Nav>
      <Nav.Link href="/" >Home</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>
      <Nav.Link href="/contact-us">Contact</Nav.Link>
      {!userService.isLoggedin()? <>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>   
             </>:<Button variant="contained"  onClick={(e)=>{
                 userService.logout();
                 window.location.reload();
             }}>Log Out {userService.getLoggedinUser().name}</Button>}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className={classes.Name} />
      <Button style={{float:"left"}} variant="outline-info" className={classes.Name}>Search</Button>
    </Form>
  </Navbar>
  </header>
    );

}
 
export default TopMenu;