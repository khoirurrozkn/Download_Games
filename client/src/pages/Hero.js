import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../component/Button'
import Carousel from '../component/Carousel'
import Card from '../component/Card'
import axios from 'axios'
import './Hero.css'

const Hero = () => {
  const [ data, setData ] = useState([])
  const [ category, setCategory ] = useState([])
  const [ isResponseVisible, setIsResponseVisible ] = useState(false)
  const [ isCrack, setIsCrack ] = useState(false)
  const [ chooseGenre, setChooseGenre ] = useState(false)
  

  const handleMouseEnter = () => {
    if(!isCrack){
      AllCategory()
    }
    setChooseGenre(true)
  };

  const handleMouseLeave = () => {
    if(!isCrack){
      AllCategory()
    }
    setChooseGenre(false)
  };

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

  const AllCategory = async () => {
    try {
      const {data} = await axios.get('http://127.0.0.1:5463/api/category')
      setCategory(data)
   } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    AllCategory()
    // console.log(process.env.REACT_APP_API_KEY)
  },[])
    
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
              <div onClick={() => setIsResponseVisible(true)} className='input'>Lihat daftar game dan cari game</div>
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
          <span>Pemrograman itu menyenangkan dan asik.</span>
       </div>
       <div className='middleSide'>
          <div className='infoGenre'>
            <span>Eksplore kategori</span>
          </div>
          <div className='showGenre'>
            <Card image="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684906552/tumb_cod-min_fddqlh.jpg')" genre='Shooter' />
            <Card image="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684910887/tumb_mmorpg_new_new_uknnfl.webp')" genre='Mmorpg' />
            <Card image="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684907174/tum_fighting_new-min_hroxqr.jpg')" genre='Fighting' />
            <Card image="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684908064/tumb_sepak_isnrtk.webp')" genre='Sports' />
            <Card image="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684909247/tumb_racing-min_jdchzb.jpg')" genre='Racing' />
            <Card image="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684909495/tumb_batleroyale_jp3uru.webp')" genre='battleRoyale' />
            <Card image="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684909787/tumb_strategy-min_aciv9p.png')" genre='Strategy' />
            <Card image="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684910278/tumg_social-min_zvsno2.jpg')" genre='Social' />
          </div>
       </div>
      </div>

      <div className='content'>
        <div className='choose'>
          <Button field='Bantuan?'/>
          <Button field='Komplain'/>
          <Button field='Req game'/>
          <Button field='Crack game' tilte='Donload crack games' />
        </div>
        <div className="slideShow">
          <Carousel 
            image1="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684915568/tumb_gtav-min-min_ic9c9m.jpg')" position1='100% 36%'
            image2="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684945928/tumbnail_onepiece-min-min_l0xufa.jpg')" position2='100% 20%' 
            image3="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684947325/tumbnail_rdr_2-min_grb1hy.png')" position3='100% 20%' 
          />
        </div>
      </div>

      { isResponseVisible && (
        <div id='response'>
          <div className='wrapSearch'>
            <div className='wrapQueryGames'>

              <div className='boxSearchGames'>
                <div className='boxInputGames'>
                  <div className='bgInputGames'>
                    <input type='text' placeholder='Masukan judul game'></input>
                    <i className="bi bi-search search"></i>
                  </div>
                </div>
              </div>

              <div className='boxContentGames'>
                <i onClick={() => setIsResponseVisible(false) } className="bi bi-x-circle back"></i>
                <div className='crack' onClick={() => setIsCrack(false)} style={isCrack === false ? {backgroundColor: 'rgba(255, 255, 255, 0.19)', color: 'white', border: 'solid 1px white'} : {color: 'rgba(255, 255, 255, 0.556)', border: 'solid 1px rgba(255, 255, 255, 0.556)'}}>No Crack</div>
                <div className='noCrack' onClick={() => setIsCrack(true)} style={isCrack === true ? {backgroundColor: 'rgba(255, 255, 255, 0.19)', color: 'white', border: 'solid 1px white'} : {color: 'rgba(255, 255, 255, 0.556)', border: 'solid 1px rgba(255, 255, 255, 0.556)'}}>Crack</div>
                <div className='genre' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>kategori <i className="bi bi-filter" style={{marginTop: '5px', marginLeft: '3px'}}></i></div>
                {chooseGenre ?
                <>
                  {isCrack? 
                    <div className='fieldGenre' style={{bottom: "87%"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>ini crack</div>
                  :
                    <>
                      
                      <div className='fieldGenre' style={{bottom: "22.9%"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {category.map((value, index) => (
                          <div key={value._id} className={`boxCategory${index}`}>{value.category_name}</div>
                        ))}
                      </div>
                      
                    </>
                  }
                </>
                :
                null}
              </div>

            </div>
          </div>
        </div>
      )}
    </>      
  )
}

export default Hero
