import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
     <div>

      <Button handleClick={handleClick} text='Click Me'>
        <h1>{count}</h1>
      </Button>


      {/* <Card name="CodeWithYash">
      <h1>Learn React </h1>
      <p>Trting to be consistent in this</p>
      <p>Trting to be consistent in this</p>
      </Card> */}
     </div>
    </>
  )
}

export default App
