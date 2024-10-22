import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 15
 
  const addValue = ()=>{
    if (counter >= 20) {
     alert("Maximum value reached (20). No further decrement.");
      return; // Stop execution if the minimum value is reached
    }
    setCounter(counter + 1); // Corrected line
  }

  const removeValue = () => {
    if (counter <= 0) {
      alert("Minimum value reached (0). No further decrement.");
      return; // Stop execution if the minimum value is reached
    }
    setCounter(counter - 1); // Corrected line
  }
  

  return (
    <>
    <h1>Code With Yash</h1>
    <h2>Counter value {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Value</button>
    <br />
    <p>footer : {counter}</p>
    </>
  )
}

export default App
