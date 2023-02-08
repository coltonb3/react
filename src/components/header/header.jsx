import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const header = () => {
  return (
    <header>
      <div className='header__container'>
      <h5>Hello I'm </h5>
      <h1>Colton Bush</h1>
      <h5 className='text-light'>
        Aspiring Full Stack Developer <br/>
        Husband|Father <br/> 
        Avid golfer 
      </h5>
      <br/>
      <br/>
      <br/>
    <CTA />
      <HeaderSocials />
      <div className='gif'>
        <img src='https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/unsized/2019/06/06/5cf986ef1e242467c27d5daa_10second.gif' alt='pebblebeach'/>
      </div>

      {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
    </div>
    </header>
  )
}

export default header