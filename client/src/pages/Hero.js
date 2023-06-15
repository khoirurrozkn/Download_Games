import React,{ useState, useEffect } from 'react'
import games from './../game/Game'
import { Container } from 'react-bootstrap'
import Navbar from './../component/Navbar'
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
      height: 'auto'
    }}>
      <Navbar title='Pilihan' body='babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo babayo' />

      <div className='w-100 btrans' style={{height: 'auto', backgroundColor: 'rgb(22,27,34)'}}>
        <h1 className='text-center' style={{
          fontFamily: "'Nanum Myeongjo', serif", 
          letterSpacing: '2px',
          color: 'rgba(255, 255, 255, 0.918)'
        }}>
          Roz Games
        </h1>
          <div className='caption w-100 d-flex justify-content-center'>
            <p className='text-light d-block text-center'>
              Roz Games menyediakan link game-game terbaru, serta memberikan rekomendasi 
              tentang game-game populer dan terkini. 
              Anda dapat menjelajahi koleksi game PC dengan akses yang mudah dan cepat.
            </p>
          </div>
      </div>
      <svg className='waveTop' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#161B22" fill-opacity="1" d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,154.7C672,128,768,128,864,160C960,192,1056,256,1152,272C1248,288,1344,256,1392,240L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

      <div className='w-100 content' style={{backgroundColor: 'rgb(13,17,22)', height: 'auto'}}>
        
      </div>
    </Container>
  )
}

export default Hero