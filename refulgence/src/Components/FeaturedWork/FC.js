import React from 'react';
import './FC.css'
import { Link } from "react-router-dom";


const FC = ()  => {


    return (
       <div className="F-container">
  <div className="row">
    <div className="col  col-sm-10">  
    <iframe  title="john-fish" width="1200" height="700" src="https://www.youtube.com/embed/KGFPry6eL0g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="col col-sm-12 fc-sm">  
    <hr />
   <p className="wa-description "> John Fish: A Junior at Harvard University with an amazing outlook on making learning fun and how it can change the lives of young people.</p>
       <h2> Learning for Fun Could Change your Life forever </h2>
    </div>
  </div>
  
  <div className="row">
    <div className="col grow  AF hide-child ">
    </div>




    <div className="col grow  AF2">
    </div>
    </div>

    <div className="row">
    <div className="col-sm-6">
    <hr />
        <p className="wa-description"> We are lead by a passion to learn anf grow as individuals </p>
        <h2> - Passion - </h2>
    </div>



    
    <div className="col-sm-6">
    <hr />
    <p className="wa-description"> We love literature. There's nothing better than the smell of that fresh new book smell </p>
        <h2>  - Literature - </h2>
    </div>
    </div>

    <div className="row">
    <div className="col grow  AF3 ">
    </div>
    <div className="col grow  AF4 ">
    </div>
  </div>
  <div className="row">
    <div className="col-sm-6">
    <hr />
        <p className="wa-description"> We believe a full mind makes a fine individual </p>
        <h2> - Enrich your brain -</h2>
    </div>
    <div className="col-sm-6">
    <hr />
    <p className="wa-description"> We won't diminish the importance of learning from reliable sources, we hate fakes too. </p>
        <h2> - Real Knowledge - </h2>
    </div>
    </div>

    
    <div className="row">
    <div className="col-sm-12 icon-f-c">
    <i className="fas fa-th"></i>
    <Link style={{color:"black", textDecoration:"none"}} to="/resources"> 
    <p className="all-resources-FC animate__animated animate__tada"> All Resources</p>
</Link>
   

    </div>
    </div> 
  
    <div className="featured-work-container">
          <p className="think-beyond"> COMPANIES WE SUPPORT </p>
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