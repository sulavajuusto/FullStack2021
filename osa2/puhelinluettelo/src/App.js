import React, { useEffect, useState } from 'react';
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Persons from './Components/Persons';
import personsService from './services/persons'


const App = () => {

  const personInitializerArray =  [
  ]

  const [persons, setPersons ] = useState([]) 
  const [personId, setpersonId] = useState(1)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filteredPersons, setFilteredPersons] =  useState([])


 useEffect(() => {
  personsService
  .getAll()
   .then(data => {
     setPersons(data);
     setpersonId(figureHighestId(data));
     setFilteredPersons(data);
   })
 }, []) 

 const figureHighestId = (data) => {
      let highest = 0;
      if (data.length > 0){
        for (let index = 0; index < data.length; index++) {
          const person = data[index];
          if (person.id > highest){
            highest = person.id
          }
        }
      }
      console.log(`highest id ${highest}`);
      return highest;
 }

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.findIndex(x => x.name === newName) > -1){
      handleSameName()
    }else {
      let tempId = personId;
      tempId++;
      const tempPerson =  {
        name : newName,
        phoneNumber : newNumber
      }
      personsService
      .create(tempPerson)
      .then(newPerson => {
  
        let newList = persons.concat(newPerson);
        setPersons(newList);
        //lets clear the filter also
        setFilteredPersons(newList);
      })
      setpersonId(tempId);
    }
    setNewName('');
    setNewNumber('');
  }

  const handleSameName = () =>  {
    
    let foundPerson = persons.find(x => x.name === newName);
    if (newNumber === foundPerson.phoneNumber){
      window.alert(`${newName} is already added to phonebook`)
    }else {
      if  (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const changedUser = { ...foundPerson, phoneNumber: newNumber };
        personsService.update(foundPerson.id, changedUser)
        .then(data => {
          let newList = persons.map(n => n.id !== data.id ? n : data);
          setPersons(newList);
          //lets clear the filter also
          setFilteredPersons(newList);
        })
      }
    }
  }
  
  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const filterPersonsChange = (event) => {
    
    const tempPersons = persons.filter(x => x.name.toString().toLowerCase().indexOf(event.target.value?.toString().toLowerCase()) !== -1);
    setFilteredPersons(tempPersons);
  }

  const deletePerson = (personId) => {
    if  (window.confirm("Are you sure you want to delete the user?")){
        console.log(personId);
       personsService.deletePerson(personId)
       .then(data => {
        console.log(data);
        let newList = persons.filter(p => p.id !== personId);
        setPersons(newList);
        //lets clear the filter also
        setFilteredPersons(newList);
       });
      } else {
        console.log(personId);
      }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterOnChange={filterPersonsChange}/>
      <h3>Add a new person</h3>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} 
      handleNumberChange={handleNumberChange} handlePersonChange={handlePersonChange} />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App;
