import React from 'react'

import './UserCard.css'
// import './App.css'

const UserCard = (props) => {
  return (
    <div className='user-container ' style={props.style}>
        <p id='user-name'> {props.name}</p>
        <img id='user-img' src={props.image} alt="yash"></img>
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard