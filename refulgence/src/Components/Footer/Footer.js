import React from 'react';
import {VerticleButton as ScrollUpButton}  from "react-scroll-up-button";
import './Footer.css'


const Footer = () => {

    return (

    <div className="footer-container  footer-background-image ">
        <div className="footer-background-color-dim">


        <div class=" footer-containter container">
  <div class=" footer-row row">
    <div class=" footer-col col">
    <div className="footer-icon-container">
    <i className=" fab grow fa-facebook-square"></i>
    <i className=" fab grow fa-twitter-square"></i>
    <i className=" fab grow fa-instagram-square"></i>
    </div>
    <div className="footer-button-container">
    <ScrollUpButton
      StopPosition={0}
      ShowAtPosition={150}
      EasingType='easeOutCubic'
      AnimationDuration={2500}
      ContainerClassName='ScrollUpButton__Container'
      TransitionClassName='ScrollUpButton__Toggled'
      style={{width:"100px", backgroundColor:"#1a1a1a"}}
      ToggledStyle={{}}
    />
    </div>
    <div className="footer-company-info">
        <p> Refulgence CC</p>
        <p> 123 Cherry Hill Ave,
        <br/> Washington, D.C,
        <br/> 20018. USA </p>
    </div>
    <div className="footer-email-information">
    <i class="far fa-envelope"></i>
    <p> hello@refulgence.co.us</p>
    </div>
    <div className="footer-phone-information">
    <i class="fas fa-phone-volume"></i>
    <p> +1 123-123-1234</p>
    </div>
    <div className="footer-terms-and-conditions">
    <p> Terms and Conditions | Privacy Policy | Cookies | <i class="far fa-copyright"></i> 2020 Refulgence CC <img alt="logo" width="100" height="100" className="footer-logo"  src={require('../../Hatchful/logo_transparent.png')} /></p>
</div>
    </div>



  </div>
  </div>














        </div>
    </div>
    )
}








export default Footer;