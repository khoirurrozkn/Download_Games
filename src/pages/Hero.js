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
      <div className='navbar'>
       <div className='topSide'>
          <div className='boxTopSide'>
              <div className='logo'>
                Kuki Games
              </div>
          </div>
          <div className='boxTopSideSearch'>
            <div className='colorBoxTopSideSearch'>
              <input type='text' placeholder='Masukan judul game'></input>
              <i className="bi bi-search"></i>
            </div>
          </div>
          <div className='boxTopSide'>
            <div className='wrapMe'>
              <div className='wrapGithub'>
                <i className="bi bi-github" style={{color: 'rgb(129,38,144)'}}></i>
              </div>
            </div>
            <div className='wrapMe'>
              <i className="bi bi-whatsapp" style={{color: 'rgb(61,193,80)'}}></i>
            </div>
            <div className='wrapMe'>
              <i className="bi bi-instagram"></i>
            </div>
            <div className='wrapMe'>
            <i class="bi bi-person-badge" style={{color: 'white'}}></i>
            </div>
          </div>
       </div>
       <div className='greetings'>
          <span>Pemrograman itu menyenangkan.</span>
       </div>
       <div className='middleSide'>

       </div>
      </div>

      <div className='content'>

      </div>
    </>      
  )
}

export default Hero