import { useState } from 'react'

import './App.css'

function App() {
  function handleClick() {
    alert('Hello World')
  }
  function handleMouseOver() {
    alert('para ke uper mouse lekar aaye ho')
  }

  function handleInputChange(e) {
    // console.log('input me value change hui hai')
    console.log("Value till now :", e.target.value);
    
  }
  function handleSubmit(e) {
    e.preventDefault()
    alert('Form Submitted')
  }

  return (
    <>
    
    <div>

    <button onClick={() => alert("Button click hui hai")}>
      Click Me
    </button>

      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form> */}

      {/* <p onMouseOver={handleMouseOver} style={{border: '1px solid black', padding: '10px'}}>
        I am a para  
      </p>

      <button onClick={handleClick}>
        Click Me
      </button> */}
    </div>
    </>
  )
}

export default App
