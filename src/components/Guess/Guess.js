import React, { useState } from 'react';

function Guess({ onGuess }) {
  const [value, setValue] = useState('')

  function handleChange(e) {
    setValue(e.target.value.toUpperCase())
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (value.length === 5) {
      onGuess({ guess: value });
    }

    setValue('')
  }



  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={value} onChange={handleChange} pattern='\w{5,5}' title="Must be 5 characters long" />
    </form>
  )
}

export default Guess;
