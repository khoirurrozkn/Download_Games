import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../component/Button'
import Carousel from '../component/Carousel'
import Card from '../component/Card'
import axios from 'axios'
import './Hero.css'

const Hero = () => {
  const [ data, setData ] = useState([])
  // const [ category, setCategory ] = useState([])
  const [ isResponseVisible, setIsResponseVisible ] = useState(false)
  const [ isCrack, setIsCrack ] = useState(false)
  const [ chooseGenre, setChooseGenre ] = useState(false)
  const [gamesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / gamesPerPage)

  let startPage, endPage
  
  if (totalPages <= 3) {
    startPage = 1;
    endPage = totalPages
  } else {
    if (currentPage <= 2) {
      startPage = 1
      endPage = 3
    } else if (currentPage + 1 >= totalPages) {
      startPage = totalPages - 2
      endPage = totalPages
    } else {
      startPage = currentPage - 1
      endPage = currentPage + 1
    }
  }

  const currentGames = data.slice((currentPage - 1) * gamesPerPage, currentPage * gamesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleMouseEnter = () => {
    setChooseGenre(true)
  }

  const handleMouseLeave = () => {
    setChooseGenre(false)
  }

  const phoneNumber = '6282139306484'
  const message = 'Halooo...'
  const encodedMessage = encodeURIComponent(message)
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  
  // const AllCategory = async () => {
  //   try {
  //     const {data} = await axios.get('http://127.0.0.1:5463/api/category')
  //     setCategory(data)
  //  } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  const handleGame = async (category) => {
    if(category == ""){
      try {
        const { data } = await axios.get('http://127.0.0.1:5463/api/game')

        setData(data)
        console.log(data)
      } catch (error) {
        console.log(error.message)
      }
    }else{
      try {
        const {data} = await axios.get(`http://127.0.0.1:5463/api/category/${category}`)
  
        setData(data.games)
      } catch (error) {
        console.log(error.message)
      }
    }
  }

  // console.log(process.env.REACT_APP_API_KEY)
    
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
              <div onClick={() => {
                setIsResponseVisible(true);
                handleGame("");
              }} className='input'>Lihat daftar game dan cari game</div>
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
                <div className='allGames' onClick={() => handleGame("")}>Semua</div>
                <div className='genre' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>kategori <i className="bi bi-filter" style={{marginTop: '5px', marginLeft: '3px'}}></i></div>
                <div className='bantuan'>Bantuan?</div>
                {chooseGenre ?
                <>
                  {isCrack? 
                    <div className='fieldGenre' style={{bottom: "87%"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>ini crack</div>
                  :
                    <>
                      <div className='fieldGenre' style={{bottom: "22.9%"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {/* {category.map((value, index) => (
                          <div key={value._id} className={`boxCategory${index}`} onClick={() => handleCategory(value.category_name)}>{value.category_name}</div>
                        ))} */}
                        <div className='wrapAllBoxCategory'>
                          <div className='boxCategory boxCategory0' onClick={() => handleGame("Shooter")}>Shooter</div>
                          <div className='boxCategory boxCategory1' onClick={() => handleGame("MMORPG")}>MMORPG</div>
                          <div className='boxCategory boxCategory2' onClick={() => handleGame("Fighting")}>Fighting</div>
                          <div className='boxCategory boxCategory3' onClick={() => handleGame("MOBA")}>MOBA</div>
                          <div className='boxCategory boxCategory4' onClick={() => handleGame("Sports")}>Sports</div>
                          <div className='boxCategory boxCategory5' onClick={() => handleGame("Racing")}>Racing</div>
                          <div className='boxCategory boxCategory6' onClick={() => handleGame("Card Game")}>Card Game</div>
                          <div className='boxCategory boxCategory7' onClick={() => handleGame("Battle Royale")}>Battle Royale</div>
                          <div className='boxCategory boxCategory8' onClick={() => handleGame("Strategy")}>Strategy</div>
                          <div className='boxCategory boxCategory9' onClick={() => handleGame("Social")}>Social</div>
                        </div>
                      </div>
                    </>
                  }
                </>
                :
                null}
                <div className='wrapAllGamesDownload'>
                  <div className='gamesFile'>
                    {currentGames.map((value) => (
                      <div className='wrapBoxGames' key={value._id}>
                        {value.game_name}
                      </div>
                    ))}
                  </div>
                  <div className='wrapPagination'>
                    {totalPages > 1 && (
                      <div className="pagination">
                        {Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
                          const page = startPage + index;
                          return (
                            <div
                              key={page}
                              onClick={() => handlePageChange(page)}
                              className='page'
                              style={currentPage === page ? {backgroundColor: 'green'} : {backgroundColor: 'rgba(255, 255, 255, 0.19)'}}
                            >
                              {page}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>      
  )
}

export default Hero