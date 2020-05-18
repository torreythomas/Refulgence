import React from 'react';


const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div 
        className="pa4 flex justify-center ma0 ">
        <input 
            style={{ color: "white",
            
                
                    }}
            className=" pa2 w-20 tc  ma0 ba b--white bg-transparent "
            type='search' 
            placeholder=' search our resources ' 
            onChange={searchChange}
            />
        </div>
    )



};





export default SearchBox;