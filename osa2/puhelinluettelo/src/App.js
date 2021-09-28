

import React, { useState } from 'react';
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Persons from './Components/Persons';



const App = () => {

  const personInitializerArray =  [
    { name: 'Arto Hellas', id : 0, phoneNumber : '040-1234567' },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523', id: 1 },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345', id: 2 },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122', id: 3 }
  ]

  const [ persons, setPersons ] = useState(personInitializerArray) 
  const [personId, setpersonId] = useState(1)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filteredPersons, setFilteredPersons] =  useState(personInitializerArray)


  const addPerson = (event) => {
    event.preventDefault();
    console.log(persons.findIndex(x => x.name === newName))
    if (persons.findIndex(x => x.name === newName) > -1){
      window.alert(`${newName} is already added to phonebook`)
    }else {
      let tempId = personId;
      const tempPerson =  {
        name : newName,
        id : tempId,
        phoneNumber : newNumber
      }
      tempId++;
      setPersons(persons.concat(tempPerson));
      setpersonId(tempId);
    }
    setNewName('');
    setNewNumber('');
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
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterOnChange={filterPersonsChange}/>
      <h3>Add a new person</h3>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} 
      handleNumberChange={handleNumberChange} handlePersonChange={handlePersonChange} />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App;
