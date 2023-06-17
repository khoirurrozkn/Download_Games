import React,{ useState, useEffect } from 'react'
import games from './../game/Game'
import { Container } from 'react-bootstrap'
// import Navbar from './../component/Navbar'
import './Hero.css'

const Hero = () => {
  const [ shooter, setShooter ] = useState([])
  const [ fighting, setFighting ] = useState([])
  const [ mmorpg, setMmorpg ] = useState([])
  const [ strategy, setStrategy ] = useState([])
  const [ battleR, setBattleR ] = useState([])
  const [ sports, setSports ] = useState([])
  const [ cardGame, setCardGame ] = useState([])
  const [ racing, setRacing ] = useState([])
  const [ isCategory, setIsCategory ] = useState(false)
  const [ data, setData ] = useState([])
  const [ searching, setSearching ] = useState("")
  const [ resultSearching, setResultSearching ] = useState([])

  useEffect(() => {
    setShooter(games.filter(val => val.category === "Shooter").slice(0, 8))
    setFighting(games.filter(val => val.category === "Fighting").slice(0, 8))
    setMmorpg(games.filter(val => val.category === "MMORPG").slice(0, 8))
    setStrategy(games.filter(val => val.category === "Strategy").slice(0, 8))
    setBattleR(games.filter(val => val.category === "Battle Royale").slice(0, 8))
    setSports(games.filter(val => val.category === "Sports").slice(0, 8))
    setCardGame(games.filter(val => val.category === "Card Game").slice(0, 8))
    setSports(games.filter(val => val.category === "Sports").slice(0, 8))
    setRacing(games.filter(val => val.category === "Racing").slice(0, 8))
  },[])

  const changeCategory = (req) => {
    if(req === ""){
      setData(games)
    }else{
      setData(games.filter(val => val.category === req && val.crack === false))
    }
    
    setIsCategory(true)
  }

  useEffect(() => {
    if(searching === ""){
      setResultSearching([])
    }else{
      setResultSearching(
        games.filter((val) => val.crack === false && val.game_name.toLowerCase().includes(searching.toLowerCase())).slice(0, 6)
      )
    }
  }, [searching]);

  return (
    <>
    {isCategory? 
    <>
      <Container fluid className='p-0' style={{
      height: 'auto',
      backgroundColor: 'rgb(13,17,22)'
    }}>

        {data.map((val, idx) => {
            return(
              <div key={idx}>{val.game_name}</div>
            )  
        })}
      </Container>
    </> 
    : 
    <>
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
          {/* <marquee behavior="scroll" direction="left" className='d-block marq'>
            <span className='me-5'> Website terakhir di update pada 6 / 16 / 2023 </span>
            <span className='me-5'> Website terakhir di update pada 6 / 16 / 2023 </span>
            <span className='me-5'> Website terakhir di update pada 6 / 16 / 2023 </span>
            <span className='me-5'> Website terakhir di update pada 6 / 16 / 2023 </span>
            <span className='me-5'> Website terakhir di update pada 6 / 16 / 2023 </span>
          </marquee> */}
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
            <input className='searchingHero' type='text' onChange={(e) => setSearching(e.target.value)} placeholder='Masukan judul game atau cari game'></input>
          </div>
          {searching === "" ? 
          null 
          : 
          <>
            <div className='wrapResultSearching d-flex justify-content-center'>
              <div className='resultSearching d-flex justify-content-center'>
                {resultSearching.map((val, idx) => {
                  return(
                    <div className='boxResult' key={idx} style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.111), rgba(0, 0, 0, 0.111)), url("${val.thumbnail}")`
                    }}>{val.game_name}</div>
                  )
                })}
              </div>

            </div>
          </>
          }


          <div className='choiceHero d-flex justify-content-center align-items-center'>
            <div onClick={() => changeCategory("")}>All games</div>
            <div onClick={() => changeCategory("Shooter")}>Shooter</div>
            <div onClick={() => changeCategory("Fighting")}>Fighting</div>
            <div onClick={() => changeCategory("MMORPG")}>Mmorpg</div>
            <div onClick={() => changeCategory("Strategy")}>Strategy</div>
            <div onClick={() => changeCategory("Battle Royale")}>Battle royale</div>
            <div onClick={() => changeCategory("Sports")}>Sports</div>
            <div onClick={() => changeCategory("Card Game")}>Card game</div>
            <div onClick={() => changeCategory("Racing")}>Racing</div>
          </div>
          <div className='cuplikan' style={{color: 'rgba(240, 246, 252, 0.744)'}}>
            <div className='viewMore d-flex justify-content-end'>
              <div onClick={() => changeCategory("Shooter")}>View More Shooter?</div>
            </div>
            <div className='scroll'>
              <div className='wrapGames'>
                {shooter && shooter.map((val, idx) => {
                  return(
                    <div className={ idx === 0 ? `game${idx}` : 'game'} style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.111), rgba(0, 0, 0, 0.111)), url("${val.thumbnail}")`
                    }} key={idx}>{val.game_name}</div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='cuplikan mt-2' style={{color: 'rgba(240, 246, 252, 0.744)'}}>
            <div className='viewMore d-flex justify-content-end'>
              <div onClick={() => changeCategory("Fighting")}>View More Fighting?</div>
            </div>
            <div className='scroll'>
              <div className='wrapGames'>
                {fighting && fighting.map((val, idx) => {
                  return(
                    <div className={ idx === 0 ? `game${idx}` : 'game'} style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.111), rgba(0, 0, 0, 0.111)), url("${val.thumbnail}")`
                    }} key={idx}>{val.game_name}</div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='cuplikan mt-2' style={{color: 'rgba(240, 246, 252, 0.744)'}}>
            <div className='viewMore d-flex justify-content-end'>
              <div onClick={() => changeCategory("MMORPG")}>View More Mmorpg?</div>
            </div>
            <div className='scroll'>
              <div className='wrapGames'>
                {mmorpg && mmorpg.map((val, idx) => {
                  return(
                    <div className={ idx === 0 ? `game${idx}` : 'game'} style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.111), rgba(0, 0, 0, 0.111)), url("${val.thumbnail}")`
                    }} key={idx}>{val.game_name}</div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='hideCuplikan cuplikan mt-2' style={{color: 'rgba(240, 246, 252, 0.744)'}}>
            <div className='viewMore d-flex justify-content-end'>
              <div onClick={() => changeCategory("Strategy")}>View More Strategy?</div>
            </div>
            <div className='scroll'>
              <div className='wrapGames'>
                {strategy && strategy.map((val, idx) => {
                  return(
                    <div className={ idx === 0 ? `game${idx}` : 'game'} style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.111), rgba(0, 0, 0, 0.111)), url("${val.thumbnail}")`
                    }} key={idx}>{val.game_name}</div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='hideCuplikan cuplikan mt-2' style={{color: 'rgba(240, 246, 252, 0.744)'}}>
            <div className='viewMore d-flex justify-content-end'>
              <div onClick={() => changeCategory("Battle Royale")}>View More Battle Royale?</div>
            </div>
            <div className='scroll'>
              <div className='wrapGames'>
                {battleR && battleR.map((val, idx) => {
                  return(
                    <div className={ idx === 0 ? `game${idx}` : 'game'} style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.111), rgba(0, 0, 0, 0.111)), url("${val.thumbnail}")`
                    }} key={idx}>{val.game_name}</div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='hideCuplikan cuplikan mt-2' style={{color: 'rgba(240, 246, 252, 0.744)'}}>
            <div className='viewMore d-flex justify-content-end'>
              <div onClick={() => changeCategory("Sports")}>View More Sports?</div>
            </div>
            <div className='scroll'>
              <div className='wrapGames'>
                {sports && sports.map((val, idx) => {
                  return(
                    <div className={ idx === 0 ? `game${idx}` : 'game'} style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.111), rgba(0, 0, 0, 0.111)), url("${val.thumbnail}")`
                    }} key={idx}>{val.game_name}</div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='hideCuplikan cuplikan mt-2' style={{color: 'rgba(240, 246, 252, 0.744)'}}>
            <div className='viewMore d-flex justify-content-end'>
              <div onClick={() => changeCategory("Card Game")}>View More Card game?</div>
            </div>
            <div className='scroll'>
              <div className='wrapGames'>
                {cardGame && cardGame.map((val, idx) => {
                  return(
                    <div className={ idx === 0 ? `game${idx}` : 'game'} style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.111), rgba(0, 0, 0, 0.111)), url("${val.thumbnail}")`
                    }} key={idx}>{val.game_name}</div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='hideCuplikan cuplikan mt-2' style={{color: 'rgba(240, 246, 252, 0.744)'}}>
            <div className='viewMore d-flex justify-content-end'>
              <div onClick={() => changeCategory("Racing")}>View More Racing?</div>
            </div>
            <div className='scroll'>
              <div className='wrapGames'>
                {racing && racing.map((val, idx) => {
                  return(
                    <div className={ idx === 0 ? `game${idx}` : 'game'} style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.111), rgba(0, 0, 0, 0.111)), url("${val.thumbnail}")`
                    }} key={idx}>{val.game_name}</div>
                  )
                })}
              </div>
            </div>
          </div>

      </div>
    </Container>
    </>
    }
    </>
  )
}

export default Hero