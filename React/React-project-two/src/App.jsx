import UserCard from './components/UserCard'
import card from './assets/card.jpg'
import mp from './assets/mp.jpg'
import prc from './assets/prc.jpg'
import './App.css'



function App() {

  return (
    <div className='container'>
     <UserCard  name="Joshan kushwaha" desc="desc1" image={card} style={{"border-radius":"10px"}}/>
     <UserCard  name="Maharana Pratap" desc="desc2" image={mp} style={{"border-radius":"10px"}}/>
     <UserCard  name="PrithviRaj Chauhan" desc="desc3" image={prc} style={{"border-radius":"10px"}}/>
     
    </div>
  )
}

export default App
