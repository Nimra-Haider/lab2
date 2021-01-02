import { Grid } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card,CardDeck } from 'react-bootstrap';
import React from 'react';
import {} from "react-icons/fa"
import "../index.css"
import "../App.css"
import $ from "jquery";
const LandingPage = () => {
    $(document).ready(function(){
        $('#stars li').on('mouseover', function(){
          var onStar = parseInt($(this).data('value'), 10); 

          $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
              $(this).addClass('hover');
            }
            else {
              $(this).removeClass('hover');
            }
          });
          
        }).on('mouseout', function(){
          $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
          });
        });
        
        $('#stars li').on('click', function(){
          var onStar = parseInt($(this).data('value'), 10); 
          var stars = $(this).parent().children('li.star');
          
          for (var i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
          }
          
          for (var i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
          }
          var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
          var msg = "";
          if (ratingValue > 1) {
              msg = "Thanks! You rated this " + ratingValue + " stars.";
          }
          else {
              msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
          }
          responseMessage(msg);
          
        });
        
      });
      
      function responseMessage(msg) {
        $('.success-box').fadeIn(200);  
        $('.success-box div.text-message').html("<span>" + msg + "</span>");
      }
    return ( 

        <div>
        <Grid contained style={{marginTop:"10px"}}>
        <Grid contained>
        <Grid>
        <div>
            <h1 style={{color:"Green"}}> Featured Dramas</h1>
        </div>
        <CardDeck className="card">
        <Card>
            <Card.Img style={{marginTop:"60px", marginBottom:"50px"}} variant="bottom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpN39hAKdG8-1tNQ2cNmzsas8-I4YYQ8sZPA&usqp=CAU" />
            <Card.Body>
            <Card.Title>MDress</Card.Title>
            <Card.Text>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis veritatis voluptate at quos, consequuntur vitae eligendi. Accusamus, nobis. Natus cupiditate eaque illo pariatur sit fugiat provident fugit repellendus animi quibusdam.
            </Card.Text>
            <Button variant="dark" >check</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img style={{marginTop:"60px", marginBottom:"50px"}}  variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YOSM1G1wTDgwDLb_00jUqGzGaGK6HR985A&usqp=CAU" />
            <Card.Body>
            <Card.Title>pDress</Card.Title>
            <Card.Text>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis veritatis voluptate at quos, consequuntur vitae eligendi. Accusamus, nobis. Natus cupiditate eaque illo pariatur sit fugiat provident fugit repellendus animi quibusdam.
            </Card.Text>
            <Button variant="dark" className="cardButton">Check</Button>
            </Card.Body>
                </Card>
        <Card>
            <Card.Img style={{marginTop:"60px", marginBottom:"50px"}}  variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsWHY4JzmB9zlps9Pa8JIwGM8WKncBZuZ3g&usqp=CAU" />
            <Card.Body>
            <Card.Title>TDress</Card.Title>
            <Card.Text>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis veritatis voluptate at quos, consequuntur vitae eligendi. Accusamus, nobis. Natus cupiditate eaque illo pariatur sit fugiat provident fugit repellendus animi quibusdam.
            </Card.Text>
            
            <Button variant="dark" className="cardButton">Check </Button>
            </Card.Body>
        </Card>
    </CardDeck>
    </Grid>
        </Grid>
        </Grid>
    
<h2>Rate Page</h2>
<section className='rating-widget'>
        
  <div className='rating-stars text-center'>
    <ul id='stars'>
      <li className='star' title='Poor' data-value='1'>
      <i className="fa fa-star"></i>
      </li>
      <li className='star' title='Fair' data-value='2'>
        <i className='fa fa-star fa-fw'></i>
      </li>
      <li className='star' title='Good' data-value='3'>
        <i className='fa fa-star fa-fw'></i>
      </li>
      <li className='star' title='Excellent' data-value='4'>
        <i className='fa fa-star fa-fw'></i>
      </li>
      <li className='star' title='WOW!!!' data-value='5'>
        <i className='fa fa-star fa-fw'></i>
      </li>
    </ul>
  </div>
  
  <div className='success-box'>
    <div className='clearfix'></div>
    <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>
    <div className='text-message'></div>
    <div className='clearfix'></div>
  </div>

</section>
        </div>
        
     );
}

 
export default LandingPage;