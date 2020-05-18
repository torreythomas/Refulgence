import React from 'react';
import Card from './Card'

const CardList = ({data}) => {

    const cardComponent = data.map((resource,i )  => {
        return <Card 
                 key={data[i].id} 
                 id={data[i].id}  
                 name={data[i].name} 
                 type={data[i].type}
                 description={data[i].description}
                 site_logo={data[i].site_logo}
                 link={data[i].link}
                 />

    })


    return (
<div>
{ cardComponent }
</div>




    )
}






export default CardList;