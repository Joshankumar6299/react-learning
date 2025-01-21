import './App.css'
import ChildA from './componrnts/ChildA';
import { createContext } from 'react';
import { useState } from 'react';

// Step1: create Context
// const userContext = createContext();

// Step2: wrap all the child inside a Provide 
// Step3: pass the value to the Provider
// step4: consumer k andar jaake consume karlo

const ThemeContext = createContext();

function App() {
 
  // const [user, setUser] = useState({name:'Yash'});

  const [theme,setTheme] = useState('light');

  return (
    <>
     {/* <div>
      <h1>Code With Yash</h1>
     </div> */}
      {/* <userContext.Provider value={user}>
      <ChildA />
      </userContext.Provider> */}

        <ThemeContext.Provider value={{theme,setTheme}}>
          <div id='container' style={{backgroundColor:theme==='light'?'beige':'black'}}>
          <ChildA />
          </div>
          
        </ThemeContext.Provider>
     
    </>
  )
}

export default App
// export {userContext}
export {ThemeContext}
