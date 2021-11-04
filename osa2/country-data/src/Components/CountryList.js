import react from "react";

const CountryList = ({countries, searchWithCcn3}) => {
    console.log(countries);


    return(
    <div>
        {countries.map(country => <div>{country.name.common} <button onClick={() => searchWithCcn3(country.ccn3)}>Show</button></div> ) }
        </div>
    )
}
export default CountryList