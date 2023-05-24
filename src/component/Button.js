import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {

  return (
    <div className='chooseField'>
        <Link style={{color: 'white', textDecoration: 'none'}}>{props.field}</Link>
    </div>
  )
}

export default Button