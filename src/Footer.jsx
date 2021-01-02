import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"
import {FaFacebook,FaSnapchat,FaInstagram,FaTwitter,FaWhatsapp} from "react-icons/fa"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return ( <div >
        <MDBFooter style={{backgroundColor:"cadetblue"}} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">ABOUT US</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem fugit, sint ipsa natus reprehenderit unde laudantium! Obcaecati optio eos minima excepturi esse pariatur iste et illo voluptas similique. Exercitationem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime, perspiciatis ullam tenetur cumque recusandae repudiandae temporibus, tempora, aspernatur nam iusto expedita doloribus nostrum culpa ad voluptatibus. Omnis, error minus!
            </p>
          </MDBCol>
          <MDBCol md="6">
             < h5 style={{paddingLeft:"40px"}} className="title">MORE</h5>
            <ul>
              <li className="list-unstyled">
                <a style={{color:"chocolate"}}  href="#!">Feedback</a>
              </li>
              <li className="list-unstyled">
                <a style={{color:"chocolate"}} href="#!">Term and Policies</a>
              </li>
              <li className="list-unstyled">
                <a style={{color:"chocolate"}} href="#!">Speical Packages</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> NIMRA HADIER </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div> );
}
 
export default Footer;