import React,{ useState, useEffect } from 'react'
import games from './../game/Game'

const Hero = () => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    games.map((val) => {
      if(val.crack === false){
        setData(val)
      }
    })
  },[])

  return (
    <div>Hero</div>
  )
}

export default Hero