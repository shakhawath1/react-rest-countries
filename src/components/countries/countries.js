import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    return (
        <div>
            <h2>About Countries of the World</h2>
            <div>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};
const Country = (props) => {
    console.log(props);
    return (
        <div>
            <h3>{props.country.name.common}</h3>
        </div>
    );
};

export default Countries;