import React from 'react';
const Errors = ({ error }) => {
    if (error === null) {
      return null
    }
  
    return (
      <div className='error'>
        {error}
      </div>
    )
  }

  export default Errors;