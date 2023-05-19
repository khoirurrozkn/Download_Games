import React, { useState } from 'react'
import axios from 'axios'
import './Hero.css'

const Hero = () => {
  const [ data, setData ] = useState([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        headers: {
          'X-RapidAPI-Key': 'cade637877msh20e8db6d14691ddp107d12jsn07aea961aa44',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      });
      setData(data)
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  }

  // {data?
  //   <>
  //     {data.map((value) => {
  //       return (
  //         <div key={value.id}>
  //           <p>{value.developer}</p>
  //         </div>
  //       )
  //     })}
  //   </>
  // : null }
    
  return(
    <>
      <div id='navbar' className='container-fluid'>
       <div id='option'>
          <div className='childNavbar'>

          </div>
          <div className='childNavbar'>

          </div>
          <div className='childNavbar'>

          </div>
        </div>
      </div>
      <div id='content'>

      </div>
    </>      
  )
}

export default Hero