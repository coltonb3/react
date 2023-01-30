import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/coltonb3/" target='_blank' rel='noreferrer'><FiLinkedin/></a>
        <a href="https://github.com/coltonb3" target='_blank' rel="noreferrer"><FiGithub/></a>
    </div>
  )
}

export default HeaderSocials