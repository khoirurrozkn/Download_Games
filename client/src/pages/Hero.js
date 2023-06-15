import React,{ useState, useEffect } from 'react'
import games from './../game/Game'
import { Container } from 'react-bootstrap'
// import Navbar from './../component/Navbar'
import './Hero.css'

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
    <Container fluid className='p-0' style={{
      height: 'auto',
      backgroundColor: 'rgb(13,17,22)'
    }}>
      {/* <Navbar title='Pilihan' body='babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo' /> */}

      <div className='w-100 d-flex justify-content-center align-items-bottom btrans' style={{backgroundColor: 'rgb(22,27,34)'}}>
        <div className='left d-flex align-items-center justify-content-center' style={{height: 'auto'}}>
          <div className='logoHero' style={{
            fontFamily: "'Nanum Myeongjo', serif", 
            letterSpacing: '2px',
            color: 'rgba(255, 255, 255, 0.918)'
          }}>
            KukiGames
          </div>
        </div>

        <div className='middle d-flex justify-content-center align-items-center'>
          <marquee behavior="scroll" direction="left" className='d-block marq'>
            <span className='me-5'> Website terakhir di update pada 6 / 16 / 2023 </span>
            <span className='me-5'> Website terakhir di update pada 6 / 16 / 2023 </span>
            <span className='me-5'> Website terakhir di update pada 6 / 16 / 2023 </span>
            <span className='me-5'> Website terakhir di update pada 6 / 16 / 2023 </span>
            <span className='me-5'> Website terakhir di update pada 6 / 16 / 2023 </span>
          </marquee>
        </div>
        <div className='right d-flex justify-content-center align-items-center'>
          <div className='complain'>
            Complain?
          </div>
          <div className='request'>
            Request?
          </div>
          <div className='bonus'>
            Bonus
          </div>
        </div>


      </div>
      <svg className='waveTop' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#161B22" fill-opacity="1" d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,154.7C672,128,768,128,864,160C960,192,1056,256,1152,272C1248,288,1344,256,1392,240L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

      <div className='content' style={{height: 'auto'}}>
          <div className='wrapSearchHero d-flex justify-content-center'>
            <input className='searchingHero' type='text' placeholder='Masukan judul game atau cari game'></input>
          </div>
          <div className='choiceHero d-flex justify-content-center align-items-center'>
            <div>All games</div>
            <div>Shooter</div>
            <div>Fighting</div>
            <div>Mmorpg</div>
            <div>Strategy</div>
            <div>Battle royale</div>
            <div>Sports</div>
            <div>Card game</div>
            <div>Racing</div>
          </div>
      </div>
    </Container>
  )
}

export default Hero