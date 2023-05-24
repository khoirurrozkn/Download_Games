import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../component/Button'
import Carousel from '../component/Carousel'
import axios from 'axios'
import './Hero.css'

const Hero = () => {
  const [ data, setData ] = useState([])

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

  const category = async () => {
    try {
      const { data } = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        params: {
          category: 'fighting'
        },
        headers: {
          'X-RapidAPI-Key': 'cade637877msh20e8db6d14691ddp107d12jsn07aea961aa44',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      });
  
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData()
    category()
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
          <span>Programming is enjoyable and fascinating.</span>
       </div>
       <div className='middleSide'>
          <div className='infoGenre'>
            <span>Explore genre</span>
          </div>
          <div className='showGenre'>
            <div className='wrapListGenre'>
              <div id='shooter' className='listGenre'>
                <div>Shooter</div>
              </div>
            </div>
            <div className='wrapListGenre'>
              <div id='mmorpg' className='listGenre'>
                <div>Mmorpg</div>
              </div>
            </div>
            <div className='wrapListGenre'>
              <div id='fighting' className='listGenre'>
                <div>Fighting</div>
              </div>
            </div>
            <div className='wrapListGenre'>
              <div id='sports' className='listGenre'>
                <div>Sports</div>
              </div>
            </div>
            <div className='wrapListGenre'>
              <div id='racing' className='listGenre'>
                <div>Racing</div>
              </div>
            </div>
            <div className='wrapListGenre'>
              <div id='battleroyale' className='listGenre'>
                <div>Battle royale</div>
              </div>
            </div>
            <div className='wrapListGenre'>
              <div id='strategy' className='listGenre'>
                <div>Strategy</div>
              </div>
            </div>
            <div className='wrapListGenre'>
              <div id='social' className='listGenre'>
                <div>Social</div>
              </div>
            </div>
          </div>
       </div>
      </div>

      <div className='content'>
        <div className='choose'>
          <Button field='Need help?'/>
          <Button field='Complain'/>
          <Button field='Req games'/>
          <Button field='Crack'/>
        </div>
        <div class="slideShow">
          <Carousel 
            image1="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684915568/tumb_gtav-min-min_ic9c9m.jpg')" position1='100% 36%'
            image2="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684945928/tumbnail_onepiece-min-min_l0xufa.jpg')" position2='100% 20%' 
            image3="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684947325/tumbnail_rdr_2-min_grb1hy.png')" position3='100% 20%' 
          />
        </div>
      </div>
    </>      
  )
}

export default Hero