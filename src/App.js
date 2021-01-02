import React from 'react';
import TopMenu from './components/topmenu';
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import LandingPage from './components/landingpage';
import NotFound from './components/notfound';
import NewProduct from './components/products/newproduct';
import UpdateProduct from './components/products/UpdateProduct';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import Products from './components/products/products';
import ContactUs from './components/products/contactus';
function App() {
  return (
    <Router>
    <div >
    <ToastContainer/>
    <TopMenu style={{background: "black"}}/>
      <div>
      <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/new" component={NewProduct}/>
      <Route path="/update/:id" component={UpdateProduct}/>
      <Route path="/products" component={Products}/>
      <Route path="/contact-us" exact component={ContactUs}/>
      <Route path="/notfound" component={NotFound}/>
      <Route path="/" exact component={LandingPage}/>
      <Redirect to="notfound"/>
      </Switch>
      </div>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
