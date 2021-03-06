import axios from "axios";
import React, {useState, useEffect } from "react";
import CountryList from "./Components/CountryList";
import CountryPage from "./Components/CountryPage";

function App() {

  const[countries, setCountries] = useState([])
  const[searchString, setSearchString] = useState("");
  const[filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(res => {
      console.log(res)
      setCountries(res.data)
    })
  }, [])

const handleCountrySearch = (event) => {
    setSearchString(event.target.value);
    let tempCountries = countries.filter(x => x.name.common.toLowerCase().includes(searchString.toLowerCase()));
    console.log(tempCountries)
    setFilteredCountries(tempCountries);
}

const searchWithCcn3 = (ccn3) => {
  let tempCountries = countries.filter(x => x.ccn3 === ccn3);
    console.log(tempCountries)
    setFilteredCountries(tempCountries);
}
  return (
      <div>
        <span>Find Countries</span> <input value={searchString} onChange={handleCountrySearch} />

        {filteredCountries.length >10? <div>narrow down search</div> : filteredCountries.length >1  ? 
        <CountryList countries={filteredCountries} searchWithCcn3={searchWithCcn3}/>
          :
          filteredCountries.length  === 1 ? <CountryPage country={filteredCountries[0]}/> : <div>no results</div>
      }
      </div>
  )
}

export default App;
