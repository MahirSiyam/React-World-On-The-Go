import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({countriesProrise}) => {

    const Countires = use(countriesProrise);

    const [visitedCountries , setVisitedCountries] = useState([]);
    const [visitedFlags , setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flags) => {
        const newVisitedFlags = [...visitedFlags , flags];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h1>Traveling Countries : {Countires.length}</h1>
            <h3>Travel so far : {visitedCountries.length}</h3>

            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag , index) => <img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
            {
                Countires.map(country => <Country key={country.cca3} 
                    country = {country} 
                    handleVisitedCountries = {handleVisitedCountries}
                    handleVisitedFlags = {handleVisitedFlags}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;