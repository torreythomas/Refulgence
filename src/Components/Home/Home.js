import React from 'react';
import HeroMessage from "../HeroMessage/HeroMessage"
import Establish from "../Establish/Establish"
import FeaturedWork from '../FeaturedWork/FeaturedWork'
import Footer from '../Footer/Footer'
import Navbar from '../Nav/Navbar'
import "./Home.css"

const Home = () => {

return(
    <div>
    <div className="home">
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

export default Home;
