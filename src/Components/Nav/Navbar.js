import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

return (
    <div>
<nav className="my-nav-component">
<div class="d-flex container">
      <a href="#"> <img height="150" width="150"  class="logo"  src={require('../../Hatchful/HatchfulExport-All/logo_transparent.png')}/>  </a>
      <ul class="nav">
<li class="nav-item">
<Link className="nav-link   grow  animate__animated animate_Bounce" to="/"> 
<p> Home </p>
</Link>
</li>
<li class="nav-item">
<Link className="nav-link   grow  animate__animated animate_Bounce" to="/about"> 
<p> About </p>
</Link>
</li><li class="nav-item">
<Link className="nav-link   grow  animate__animated animate_Bounce" to="/resources"> 
<p> Resources </p>
</Link>
</li>
<li class="nav-item">

 <Link
  style={{ marginTop:"-5px"}}
  className="nav-link-button nav-link grow " to="/contact"> 
<p className="nav-button-text-align"> Contact </p>
</Link>
</li>
</ul>
</div>
</nav>

</div>
)
}


export default Navbar;