import React, { use } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = ({countriesProrise}) => {

    const Countires = use(countriesProrise);
    console.log(Countires);

    return (
        <div>
            <h1>Traveling Countries : {Countires.length}</h1>
            
            <div className='countries'>
            {
                Countires.map(country => <Country key={country.cca3} country = {country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;