import React from 'react';
import './smallCard.css'

function SmallCard({title, number, imgRS, porcentaje, estado}) {
    return (
        <div className="card-small">
        <p className="card-small-views"> {title}</p>
       
     <p className="card-small-icon">
            <img src={imgRS} alt=""/>
        </p>
    <p className="card-small-number">{number}</p>
       
     <p className="card-small-porcentaje porcentaje-up">
            <img src={estado} alt=""/>
            {porcentaje}%
        </p>
    </div>
    )   
}

export default SmallCard;