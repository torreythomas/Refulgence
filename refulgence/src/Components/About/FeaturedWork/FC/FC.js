import React from 'react';
import './FC.css'
import { Link } from "react-router-dom";



const FC = ()  => {


    return (
      <div className="background">



<div className="container-pushed-left-FC">
<div className="container-md logo-container about-lg-container"> 
<img alt="logo"  className="WA-logo shadow-5 grow"  src={require('../../../../Hatchful/logo_transparent.png')}/>  
  </div>
    <div className="hero-message-container-about-FC">
        <h4 className="sub-slogan-about-FC  "> TEAM  </h4>
        <h1 className="slogan-about-FC animate__animated animate__fadeIn"> A culture of growth  </h1>

<p className="about-text-FC"> We are a diverse team of individuals seeking to reach one solitary goal: to make learning enjoyable and encouraged to all. We like cars and lavish vacations just as much as the next 20 year-old, but we understand the importance of establishing a love for learning and health, and the rest will follow. We developed a sense of comraderie and confidence within our team by fostering an atmosphere of encouraged hardwork. Do you think you belong on our team? We have a place for you. </p>
<Link className="nav-link-button nav-link  grow " to="/contact"> 
<p 
style={{color:"rgb(91,97,191)"}}
className="nav-button-text-align"> Join Us </p>
</Link>
</div>
</div>





 <div className="container-container">
    <div className="about-message-container">
    <div className="WA-container grow">
  <div className="container-md text">
  <p style={{ textAlign:"center",color: "rgb(91,97,183)"}}> Our Values</p>
      <h2 className="about-desc-text"> LEARNING + CURIOSITY + GROWTH + HAPPINESS </h2>
  </div>
    </div>
    </div>
    </div>

    <div class="container fc-about-container">
  <div class="row fc-about-row">
    <div class="col grow shadow-5 fc-about-col-main">
    </div>
  </div>
  <div class="row">
    <div class="col  shadow-5 grow fc-about-col">
    </div>
    <div class="col shadow-5 grow fc-about-col-2">
    </div>
  </div>
</div>





<div className="container-pushed-left-FC">
<div className="container-md logo-container about-lg-container"> 
<img alt="logo"  className="WA-logo shadow-5 grow"  src={require('../../../../Hatchful/HatchfulExport-All/logo_transparent.png')}/>  
  </div>
    <div className="hero-message-container-about-FC">
        <h4 className="sub-slogan-about-FC  "> FOR THE YOUTH </h4>
        <h1 className="slogan-about-FC animate__animated animate__fadeIn"> We know our audience  </h1>

<p className="about-text-FC"> We are proud of what we do at Refulgence and we truly believe what we stand for. We believe that learing isn't just something to do as a chore or paiful experience, but we believe that learning is the crux on which personal fulfillment and overall growth stem. We commit to helping others realize this and reach their full brilliant potential as well. </p>
<p className="about-text-FC"> We are always looking out for new things to learn, which is why we know that each day will be better than the last. </p>
<Link className="nav-link-button nav-link  grow " to="/resources"> 
<p 
style={{color:"rgb(91,97,191)"}}
className="nav-button-text-align"> Resources </p>
</Link>
</div>
</div>



  
       <div className="F-container">
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








</div>

    )




}

export default FC;