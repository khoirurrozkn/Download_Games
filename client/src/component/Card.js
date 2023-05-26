import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='wrapListGenre'>
        <div style={{backgroundImage: props.image}} className='listGenre'>
            <div>{props.genre}</div>
        </div>
    </div>
  )
}

export default Card