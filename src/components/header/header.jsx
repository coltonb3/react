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
      <div className='me'>
        <p>
          test
        </p>
      </div>

      {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
    </div>
    </header>
  )
}

export default header