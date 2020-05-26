import React from 'react';
import './HeroMessage.css'
import { Link } from "react-router-dom";




const HeroMessage = ()  => {


    return (
    <div className="hero-message-container-about">
        <h4 className="sub-slogan-about  "> About  </h4>
        <h1 className="slogan-about animate__animated animate__fadeIn"> Our goal is to <em className="brilliance-blue"> progress </em>, not to <em className="brilliance"> portray </em>  </h1>

<p className="about-text"> After searching Youtube for another video on how to become the ever so elusive word "productive", we landed on a video called "How Learning For Fun Can Change You Life" by John Fish. In this video, he spoke on the topic of learning and how we can come to see learning as a painful punishment instead of an enriching gift. This got us thinking, we want to be apart of the movement to change the stigma on learning. </p>
<p  className="about-text"> We decided to get together to create a way for people like us to enrich their minds and to find resources that don't just tell you to "work hard" or "stop being lazy", but are resources to help each person grow as a person, and as a by-product, progress in life and rekindle that flame of interest for learning we all had during our adolescent years.</p>
<Link id="contact-us" className="nav-link-button nav-link  grow " to="/contact"> 
<p className="nav-button-text-align" > Contact </p>
</Link>

    </div>
    )



}







export default HeroMessage;