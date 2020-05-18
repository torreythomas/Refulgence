import React from 'react';
import Carousel from '../../Carousel/SliderResources'
import './FC.css'
import { Link } from "react-router-dom";


const FC = ()  => {


    return (
       <div className="F-container">
  
  <Carousel/>
  
    <div className="featured-work-container pa5">
          <p className="think-beyond "> COMPANIES WE SUPPORT </p>
          <h1 className="featured-content"> Start learning with the best  </h1>
      </div>
      
      <div className="container">
  <div className="row icon-row">
    <div className="icon-col grow col-sm-2"><i className="fab fa-apple"></i></div>
    <div className="icon-col grow col-sm-2"><i className="fab fa-angular"></i></div>
       <div className="icon-col grow col-sm-2"><i className="fab fa-linkedin"></i></div>
    <div className="icon-col grow col-sm-2"><i className="fab fa-js"></i></div>
    <div className="w-100"></div>
    <div className="icon-col grow col-sm-2"><i className="fab fa-goodreads"></i></div>
    <div className="icon-col grow col-sm-2"><i className="fab fa-medium"></i></div>
    <div className="icon-col grow col-sm-2"><i className="fab fa-dev"></i></div>
    <div className="icon-col grow col-sm-2"><i className="fab fa-amazon"></i></div>
     <div className="w-100"></div>
     <div className="icon-col grow col-sm-2"><i className="fab fa-react"></i></div>
    <div className="icon-col grow col-sm-2"><i className="fab fa-drupal"></i></div>
       <div className="icon-col grow col-sm-2"><i className="fab fa-stack-overflow"></i></div>
    <div className="icon-col grow col-sm-2"><i className="fab fa-meetup"></i></div>
     <div className="w-100"></div>
  </div>
  </div>


  
  <div className="container jt-container">
  <div className="jt-row row">
    <div className="col br3  grow jt-col">
<Link  style={{
  border:"none",
  color: "white",
  marginTop: "10px"
}}
to="/contact"> 
     <p> Join the team </p>
     <i class="fas fa-arrow-circle-right"> </i>
</Link>

    </div>
    <div className="col br3  grow jt-col">
<Link  style={{
  border:"none",
  color: "white",
  marginTop: "10px"
}}
to="/resources"> 
     <p> Want Resources? </p>
     <i class="fas fa-arrow-circle-right"> </i>
</Link>

    </div>
  </div>
</div>

</div>

    )




}

export default FC;