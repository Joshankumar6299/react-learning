import './App.css'
import React, { useEffect } from 'react'
import LoggerComponent from './components/LoggerComponent'
import TimerComponents from './components/TimerComponents'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {
  // const [count, setCount] = React.useState(0);
  // const  [total, setTotal] = React.useState(1);
  
  //first -> side-effect function
  //second -> clean-up function
  //third -> comma separated dep list


  // variation:1
  //run on every render
  // useEffect(() => {
  //   alert("I will run on each rander")
  // })

  // variation:2
  //that  run on only first rander
  // useEffect(() => {
  //   alert("I will run on first rander")
  // }, [])

  // variation:3
  //
  // useEffect(() => {
  //   alert("I will run every time when count is updated")
  // }, [count])

  // variation:4
  // multiple dependencies

  // useEffect(() => {
  //   alert("I will run every time when count/Total is updated")
  // }, [count, total])

  // variation:5
  // iss bar let's add a clean-up function

  // useEffect(() => {
  //   alert("Count is updated")
  //   return () => {
  //     alert("count is unmounted from UI")
  //   }
  // }, [count])


  

  // function handleClick() {
  //   setCount(count + 1);
    
  // }
  // function handleClickTotal() {
  //   setTotal(total + 1);
    
  // }

  
  return (
    <>
     <div>
      {/* <LoggerComponent /> */}
      {/* <TimerComponents/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent/> */}
      <MultiEffectComponent/>

      {/* <button onClick={handleClick}>Update Count</button><br />
      Count Is: {count}
<br />
      <button onClick={handleClickTotal}>Update Total</button><br />
      Total Is: {total} */}
     </div>

    </>
  )
}

export default App
