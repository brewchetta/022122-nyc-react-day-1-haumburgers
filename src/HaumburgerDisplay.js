import React from 'react'

function HaumburgerDisplay(props) {
  // rating and name are props being sent down from above!
  // we could destructure if we wanted...

    return <h2>My {props.rating} favorite haumburger is {props.name}</h2>

}

export default HaumburgerDisplay;
