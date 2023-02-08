import React from 'react'
import Colton_Bush_Resume from '../../assets/Colton_Bush_Resume.pdf'



const CTA = () => {
  return (
    <div className='cta'>
        <a href={Colton_Bush_Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn'>Lets talk</a>
    </div>
  )
}

export default CTA

