import React from 'react';
import HeroMessage from "./HeroMessage/HeroMessage"
import Establish from "./Establish/Establish"
import FeaturedWork from './FeaturedWork/FeaturedWork'
import Footer from '../Footer/Footer'
import Navbar from '../Nav/Navbar'
import "./About.css"

const About = () => {

    return(
        <div>
        <div className="about-background-container">
        <Navbar />
    <HeroMessage/>
    </div>
    <div>
    <Establish/>
    </div>
    <div>
    <FeaturedWork/>
    </div>
    <div>
        <Footer/>
    </div>
    
    </div>
    
    )

}

export default About;
