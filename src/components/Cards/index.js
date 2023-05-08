import React from 'react'
import './Cards.css'

const Card = (props) => {
  return (
    <div className='card' id={props.id}>
      <img src={props.src} alt={props.alt} />
      <p className='product-title'>{props.name}</p>
      <ul>
        <li>{props.text}</li>
      </ul>
      <a href={props.href} className='card-link'>mais</a>
    </div>
  )
}

export default Card