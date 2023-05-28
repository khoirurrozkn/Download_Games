import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../component/Button'
import Carousel from '../component/Carousel'
import axios from 'axios'
import './Hero.css'

const Hero = () => {
  const [ data, setData ] = useState([])
  // const [ category, setCategory ] = useState([])
  const [ isResponseVisible, setIsResponseVisible ] = useState(false)
  const [ isCrack, setIsCrack ] = useState(false)
  const [ chooseGenre, setChooseGenre ] = useState(false)
  const [ gamesPerPage ] = useState(6)
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ isLoading, setIsLoading ] = useState(true)

  const totalPages = Math.ceil(data.filter(game => game.crack === isCrack).length / gamesPerPage)

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

  const currentGames = data.filter(game => game.crack === isCrack).slice((currentPage - 1) * gamesPerPage, currentPage * gamesPerPage)


  const handlePageChange = (page) => {
    if(page <= 0){
      return
    }
    if(page == totalPages + 1){
      return
    }
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
    setIsLoading(true)
    if(category == ""){
      try {
        const { data } = await axios.get('http://127.0.0.1:5463/api/game')

        setIsLoading(false)
        setData(data)
        console.log(data)
      } catch (error) {
        console.log(error.message)
      }
    }else{
      try {
        const {data} = await axios.get(`http://127.0.0.1:5463/api/category/${category}`)
  
        setIsLoading(false)
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
       <div className='wrapSmart'>

       </div>
       <div className='greetings'>
          <span>Pemrograman itu menyenangkan dan asik.</span>
       </div>
       <div className='middleSide'>
          <div className='infoGenre'>
            <span>Eksplore kategori</span>
          </div>
          <div className='showGenre'>

          <div className='wrapListGenre'>
            <div onClick={() => {handleGame("Shooter"); setCurrentPage(1); setIsResponseVisible(true)}} style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684906552/tumb_cod-min_fddqlh.jpg')"}} className='listGenre'>
                <div>Shooter</div>
            </div>
          </div>
          <div className='wrapListGenre'>
            <div onClick={() => {handleGame("MMORPG"); setCurrentPage(1); setIsResponseVisible(true)}} style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684910887/tumb_mmorpg_new_new_uknnfl.webp')"}} className='listGenre'>
                <div>Mmorpg</div>
            </div>
          </div>
          <div className='wrapListGenre'>
            <div onClick={() => {handleGame("Fighting"); setCurrentPage(1); setIsResponseVisible(true)}} style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684907174/tum_fighting_new-min_hroxqr.jpg')"}} className='listGenre'>
                <div>Fighting</div>
            </div>
          </div>
          <div className='wrapListGenre delete'>
            <div onClick={() => {handleGame("Sports"); setCurrentPage(1); setIsResponseVisible(true)}} style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684908064/tumb_sepak_isnrtk.webp')"}} className='listGenre'>
                <div>Sports</div>
            </div>
          </div>
          <div className='wrapListGenre delete'>
            <div onClick={() => {handleGame("Racing"); setCurrentPage(1); setIsResponseVisible(true)}} style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684909247/tumb_racing-min_jdchzb.jpg')"}} className='listGenre'>
                <div>Racing</div>
            </div>
          </div>
          <div className='wrapListGenre delete'>
            <div onClick={() => {handleGame("Battle Royale"); setCurrentPage(1); setIsResponseVisible(true)}} style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684909495/tumb_batleroyale_jp3uru.webp')"}} className='listGenre'>
                <div>Battle Royale</div>
            </div>
          </div>
          <div className='wrapListGenre delete'>
            <div onClick={() => {handleGame("Strategy"); setCurrentPage(1); setIsResponseVisible(true)}} style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684909787/tumb_strategy-min_aciv9p.png')"}} className='listGenre'>
                <div>Strategy</div>
            </div>
          </div>
          <div className='wrapListGenre delete'>
            <div onClick={() => {handleGame("Social"); setCurrentPage(1); setIsResponseVisible(true)}} style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dld4k3hlf/image/upload/v1684910278/tumg_social-min_zvsno2.jpg')"}} className='listGenre'>
                <div>Social</div>
            </div>
          </div>
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
                <div className='crack' onClick={() => {setIsCrack(false); setCurrentPage(1);}} style={isCrack === false ? {backgroundColor: 'rgba(255, 255, 255, 0.19)', color: 'white', border: 'solid 1px white'} : {color: 'rgba(255, 255, 255, 0.556)', border: 'solid 1px rgba(255, 255, 255, 0.556)'}}>No Crack</div>
                <div className='noCrack' onClick={() => {setIsCrack(true); setCurrentPage(1);}} style={isCrack === true ? {backgroundColor: 'rgba(255, 255, 255, 0.19)', color: 'white', border: 'solid 1px white'} : {color: 'transparent', border: 'none'}}>Crack</div>
                <div className='allGames' onClick={() => {handleGame(""); setCurrentPage(1);}}>Semua</div>
                <div className='genre' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>kategori <i className="bi bi-filter" style={{marginTop: '5px', marginLeft: '3px'}}></i></div>
                <div className='bantuan'>Bantuan?</div>
                {chooseGenre ?
                <>
                  {isCrack? 
                    <div className='fieldGenre' style={{bottom: "87%"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => setCurrentPage(1)}>ini crack</div>
                  :
                    <>
                      <div className='fieldGenre' style={{bottom: "22.9%"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => setCurrentPage(1)}>
                        {/* {category.map((value, index) => (
                          <div key={value._id} className={`boxCategory${index}`} onClick={() => handleCategory(value.category_name)}>{value.category_name}</div>
                        ))} */}
                        <div className='wrapAllBoxCategory'>
                          <div className='boxCategory boxCategory0' onClick={() => {handleGame("Shooter"); setCurrentPage(1);}}>Shooter</div>
                          <div className='boxCategory boxCategory1' onClick={() => {handleGame("MMORPG"); setCurrentPage(1);}}>MMORPG</div>
                          <div className='boxCategory boxCategory2' onClick={() => {handleGame("Fighting"); setCurrentPage(1);}}>Fighting</div>
                          <div className='boxCategory boxCategory3' onClick={() => {handleGame("MOBA"); setCurrentPage(1);}}>MOBA</div>
                          <div className='boxCategory boxCategory4' onClick={() => {handleGame("Sports"); setCurrentPage(1);}}>Sports</div>
                          <div className='boxCategory boxCategory5' onClick={() => {handleGame("Racing"); setCurrentPage(1);}}>Racing</div>
                          <div className='boxCategory boxCategory6' onClick={() => {handleGame("Card Game"); setCurrentPage(1);}}>Card Game</div>
                          <div className='boxCategory boxCategory7' onClick={() => {handleGame("Battle Royale"); setCurrentPage(1);}}>Battle Royale</div>
                          <div className='boxCategory boxCategory8' onClick={() => {handleGame("Strategy"); setCurrentPage(1);}}>Strategy</div>
                          <div className='boxCategory boxCategory9' onClick={() => {handleGame("Social"); setCurrentPage(1);}}>Social</div>
                        </div>
                      </div>
                    </>
                  }
                </>
                :
                null}
                {isLoading? 
                <>
                  <div className="load-3" style={{position: 'absolute', right: '47%', top: '45%'}}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </>  
                : 
                <>
                  <div className='wrapAllGamesDownload'>
                    <div className='gamesFile'>
                      {currentGames.map((value) => {
                        if(isCrack === false){
                          if(value.crack === false){
                            return (
                              <Link to={value.game_url} className='wrapBoxGames' key={value._id}>
                                <img src={value.thumbnail}></img>
                                <div className='wrapInfo'>
                                  <div className='game_name'>{value.game_name}</div>
                                  <div className='info'>{value.description}</div>
                                </div>
                              </Link>
                            )
                          }
                        }else if(isCrack === true){
                          if(value.crack === true){
                            return(
                              <Link to={value.game_url} className='wrapBoxGames' key={value._id}>
                                <img src={value.thumbnail}></img>
                                <div className='wrapInfo'>
                                  <div className='game_name'>{value.game_name}</div>
                                  <div className='info'>{value.description}</div>
                                </div>
                              </Link>
                            )
                          }
                        }

                      })}
                    </div>
                    <div className='wrapPagination'>
                      {totalPages > 1 && (
                        <div className="pagination">
                        <div onClick={() => handlePageChange(currentPage - 1)}><i className="bi bi-arrow-left-square-fill arrow"></i></div>
                        <div>
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
                              )
                            })}
                          </div>
                          <div onClick={() => handlePageChange(currentPage + 1)}><i className="bi bi-arrow-right-square-fill arrow"></i></div>
                        </div>
                      )}
                    </div>
                  </div>
                </>
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </>      
  )
}

export default Hero