import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({countriesProrise}) => {

    const Countires = use(countriesProrise);
    // console.log(Countires);

    const [visitedCountries , setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h1>Traveling Countries : {Countires.length}</h1>
            <h3>Travel so far : {visitedCountries.length}</h3>

            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>

            <div className='countries'>
            {
                Countires.map(country => <Country key={country.cca3} 
                    country = {country} handleVisitedCountries = {handleVisitedCountries}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;