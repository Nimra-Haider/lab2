import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import ProductService from '../../services/Product';
import Admin from '../Auth/Admin';
import Auth from '../Auth/Auth';

const UpdateProduct = (props) => {
    const [name,setName] = React.useState("");
    const [Link,setLink] = React.useState("");
    const id =props.match.params.id;
    React.useEffect(()=>{
        ProductService.getSingleProduct(id).then(data=>{
            setName(data.name);
            setLink(data.Link);
        })
    },[]);
    return ( 
        <Admin>
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <h1>Update Existing Drama</h1>
        </Grid>
        <Grid item xs ={3}></Grid>
        <Grid item xs ={6}>
            <TextField id="standard-basic" label="link" fullWidth value={Link} onChange={(e=>{setLink(e.target.value)})}/>
            <TextField id="standard-basic" label="name" fullWidth value={name} onChange={(e=>{setName(e.target.value)})}/>
        </Grid>
        <Grid item xs ={3}></Grid>
        <Grid item xs ={3}></Grid>
        <Grid item xs ={9}>
            <Button variant="contained" color="primary" onClick={e=>{
            ProductService.updateProduct(id,{Link,name}).then((data)=>{
                console.log(data);
                props.history.push("/products");
            }).catch(err=>{
                console.log(err);
            });
        }}>Update drama</Button>
        </Grid>
    </Grid></Admin> );
}
 
export default UpdateProduct;