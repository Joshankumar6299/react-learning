import React from 'react'
import { useEffect } from 'react'

const TimerComponents = () => {

    const [seconds, setSeconds] = React.useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        console.log("SetInterval executed");
         setSeconds(seconds => seconds + 1);
      },1000);
    
      return () => {
        console.log("Time to stop");
        
        clearInterval(intervalId);
      }
    }, []);
    
    
  return (
    <div>
        <h1>Seconds:{seconds}
        </h1>
        </div>
  )
}

export default TimerComponents