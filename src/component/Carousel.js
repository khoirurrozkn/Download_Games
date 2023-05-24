import React from 'react'
import './Carousel.css'

const Carousel = (props) => {
  return (
    <>
        <div class="slide">
            <div id='crack1' className='crack' style={{backgroundImage: props.image1, backgroundPosition: props.position1}}></div>
        </div>
        <div class="slide">
            <div id='crack2' className='crack' style={{backgroundImage: props.image2, backgroundPosition: props.position2}}></div>
        </div>
        <div class="slide">
            <div id='crack3' className='crack' style={{backgroundImage: props.image3, backgroundPosition: props.position3}}></div>
        </div>
    </>
  )
}

export default Carousel