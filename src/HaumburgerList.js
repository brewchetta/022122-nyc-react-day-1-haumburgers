import React from 'react'
import HaumburgerDisplay from "./HaumburgerDisplay"

function HaumburgerList(props) {

  // here we map through the list of burgers and return a new array of displays with the proper info plugged in
  // a good habit is to give each display a key which is unique and stable (the id is always a good idea!)

  return props.burgers.map(burger => (
    <HaumburgerDisplay
      key={burger.id}
      rating={burger.rating}
      name={burger.name}
    />
  ))

}

export default HaumburgerList
