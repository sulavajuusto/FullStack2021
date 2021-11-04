import React from 'react';


const CountryPage  = ({country}) => {
    console.log(country.languages)
    console.log(country.languages.values)
return(
    <div>
        <h1>{country.name.common}</h1>

        <div>Capital: {country.capital[0]}</div>
        <div>population: {country.population}</div>

        <h3>Languages:</h3>
        <ul>
            {Object.entries(country.languages).map(([key, value]) => <li key={key} >{value}</li>)}
        </ul>

        <img src={country.flags.png} alt='flag'/>
    </div>
)

}

export default CountryPage;