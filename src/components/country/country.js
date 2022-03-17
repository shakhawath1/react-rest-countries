import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, area, population, flags } = props.country;
    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt=""></img>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;