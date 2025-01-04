import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  if (isLoggedIn) {
    return(
      <Login />
    )
    }
    
  

  // Ternary operator
  // return(
  //   <div>
  //     {isLoggedIn? <Logout /> : <Login />}
  //   </div>
  // )


  // Logical && operator
  return(
    <div>
      <h1>Welcome to Code With Yash</h1>
      <div>
        {isLoggedIn && <Logout />}
      </div>
    </div>
  )


  //  if-else operator
// if (isLoggedIn) {
//   return(
//     <Logout />
//   )
//   }
//   return (
//     <Login />
//   )

}

export default App
