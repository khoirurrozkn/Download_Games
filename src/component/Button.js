import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {

  return (
    <div onClick={props.process} className='chooseField'>
        <div style={{color: 'white', textDecoration: 'none'}}>{props.field}</div>
    </div>
  )
}

export default Button