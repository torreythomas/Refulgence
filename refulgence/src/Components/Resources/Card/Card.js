import React from 'react';



const Card = (props) => {
    return (
        <div 
        style={{
              color: "white"
    }}
        className="dib tc br3 pa3 ma2 w-100 bw2 shadow ">
              <a href={props.link}> <img style={{ objectFit:"cover"}} width="200" height="200" alt='photo'  src={props.site_logo}   /> </a>  
            <div>
                <h2> {props.name} </h2>
                <p> {props.type} </p>
            </div>
            <div>
                <p> { props.description} </p>
            </div>
        </div>
    )
}

export default Card;