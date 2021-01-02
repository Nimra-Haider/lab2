import React from 'react';
import { Button, Grid } from '@material-ui/core';
import ProductService from '../../services/Product';
import { withRouter } from 'react-router-dom';
import userService from '../../services/UserService';
import { FaShopify } from 'react-icons/fa';


const SingleProduct = (props) => {
    const {product,onDelete,history}=props;
    const [count,setCount] = React.useState(0);
    const handleincrement=()=>{
        setCount(count+1);
    }
    const handledecrement=()=>{
        setCount(count-1);
    }
    const ratingChanged=(rating)=>{
        alert(`You have Given ${rating} Stars`);
    }
    console.log(props);
    return ( <Grid item xs={4} style={{border: "inset"}}>
        <img src={product.Link} alt="Product" width="50%"></img>
        <h2>{product.name} 
        {userService.isAdmin() && 
        <>
        <Button variant="contained" color="primary" onClick={e=>{
            console.log("Update");
            history.push("/products/update/"+product._id);
        }}>   Edit</Button>
         <Button variant="contained" color="secondary" onClick={e=>{
             ProductService.deleteProduct(product._id).then((data)=>{
                 console.log(data)
                 onDelete();
             }).catch((err=>{
                 console.log(err);
             }));
         }}>   Delete</Button>
         </>}</h2>
        
     
        <h5>Price :</h5><p>{product.price} Pkr</p>
        <h5>Product Id :</h5><p>{product.pid}</p>
        <h5>Category :</h5><p>{product.category}</p>
        <h5>Details :</h5><p>{product.details}</p>
        Quantity :<Button onClick={handledecrement}><strong>-</strong></Button>
        {count}
        <Button  onClick={handleincrement}><strong>+</strong></Button>
        <br/>
        <Button variant="contained" color="secondary"><FaShopify size ="1.2rem"/>Add to Cart</Button>
        <hr/>
    </Grid> );
}
 
export default withRouter(SingleProduct);