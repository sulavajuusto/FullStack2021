import React from 'react';

const Persons = ({filteredPersons,deletePerson}) =>{


    return(
        <ul>
        {filteredPersons.map(person => 
          <li key={person.id}>{person.name} {person.phoneNumber}
              <button onClick={() => deletePerson(person.id)}>Delete</button></li>
          
          )}
      </ul>
    )
}
export default Persons;