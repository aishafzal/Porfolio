import React from 'react'
import './card.css'
const card = ({emoji,heading,detail}) =>  {
  return (
    <div className='card'>
      <img src={emoji} alt=""></img>
      <span>{heading}</span>
      <span>{detail}</span>
      <button className='c-button'>LEARN MORE</button>
    </div>


  )
}

export default card
