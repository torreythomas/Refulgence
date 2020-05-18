import React from 'react';
import Navbar from "../Nav/Navbar"
import Footer from '../Footer/Footer'
import './Contact.css'

const Contact = () => {

    return(
        <div>
        <div className="contact-background-container">
        <Navbar />
        <div  className="contact-header">
        <h1> Send Us An Email </h1>
        </div>
        <div className=" contact-subtext flex justify-center">
        <p> Yeah, we <em> really </em> want to hear from you.</p>
        </div>
        <div  className="contact-header-button">
        <a className="grow shadow pa4 mycolor" href="mailto:torreythms@gmail.com"> Talk to Us </a>
        </div>

    </div>

    <div>
        <Footer/>
    </div>
    
    </div>
    
    )

}

export default Contact;