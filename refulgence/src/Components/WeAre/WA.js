import React from 'react';
import { Link } from "react-router-dom";
import './WA.css'



const WA = ()  => {


    return (
        <div>
        <div className="container-container">
    <div className="WA-message-container">
    <div className="WA-container">
<div className="container-md logo-container"> 
<img alt="logo"  className="WA-logo"  src={require('../../Hatchful/logo.png')}/>  
  </div>
  <div className="container-md text">
      <h2 className="desc-text"> We are a group of young minds dedicated to creating pathways of mindfulness and growth in a 
   <em className="emphasis">  "filter-filled" </em> 
        society. We believe the young-adult years should be focused on growing and learning, 
        <strong className="emphasis-two"> <em> not how many cars you have. </em> </strong> </h2>
      <div className="MyButtons">
      <Link className="nav-link-button nav-link  grow " to="/about"> 
<p className="nav-button-text-align"> Our Source </p>
</Link>
<Link className="nav-link-button nav-link  grow " to="/resources"> 
<p className="nav-button-text-align"> Resources </p>
</Link>
      </div>
  </div>
    </div>
    </div>
    </div>

    <div className="featured-work-container">
          <p className="think-beyond"> THINK BEYOND </p>
          <h1 className="featured-content"> Featured Content</h1>
      </div>

    </div>
    )




}







export default WA;