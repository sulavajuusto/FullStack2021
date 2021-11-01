import react from "react";

const CountryList = (countries) => {
    return(
    <ul>
        {countries.map(country => <li key={country.ccn3}>country.name</li> ) }
    </ul>
    )
}
export default CountryList