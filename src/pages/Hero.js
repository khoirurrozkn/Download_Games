import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Hero.css'

const Hero = () => {
  const [ data, setData ] = useState([])
  const [ genre, setGenre ] = useState([
{
    id: 1,
    genre: 'MMORPG'
},
{
    id: 2,
    genre: 'shooter'
},
{
    id: 3,
    genre: 'fighting'
},
{
    id: 4,
    genre: 'sports'
},
{
    id: 4,
    genre: 'racing'
},
{
    id: 5,
    genre: 'battle royale'
},
{
    id: 6,
    genre: 'strategy'
},
{
    id: 7,
    genre: 'social'
}])

  const phoneNumber = '6282139306484'
  const message = 'Halooo...'
  const encodedMessage = encodeURIComponent(message)
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`


  // const scrollRef = useRef(null);

  // const scrollToRight = () => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollLeft += 100;
  //   }
  // };

//   <div ref={scrollRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
//    {/* Isi elemen yang ingin di-scroll */}
//    <button onClick={scrollToRight}>Scroll ke kanan</button>
//  </div>

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
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])


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
              <div className='logo' title='Logo'>
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
                <Link to='https://github.com/khoirurrozkn'><i className="bi bi-github" style={{color: 'rgb(129,38,144)'}} title='Github saya'></i></Link>
              </div>
            </div>
            <div className='wrapMe'>
              <Link to={url}><i className="bi bi-whatsapp" style={{color: 'rgb(61,193,80)'}} title='Wa saya'></i></Link>
            </div>
            <div className='wrapMe'>
              <Link to='https://www.instagram.com/khoirurrozkn/'><i className="bi bi-instagram" title='Instagram saya'></i></Link>
            </div>
            <div className='wrapMe'>
              <Link><i className="bi bi-person-badge" style={{color: 'white'}} title='Tentang saya'></i></Link>
            </div>
          </div>
       </div>
       <div className='greetings'>
          <span>Pemrograman itu menyenangkan.</span>
       </div>
       <div className='middleSide'>
          <div className='infoGenre'>
            <span>Explore genre</span>
          </div>
          <div className='showGenre'>
            {genre.map((value) => {
              return(
                <div className='listGenre' key={value.id}>{value.genre}</div>
              )
            })}
          </div>
       </div>
      </div>

      <div className='content'>
        <div></div>
      </div>
    </>      
  )
}

export default Hero