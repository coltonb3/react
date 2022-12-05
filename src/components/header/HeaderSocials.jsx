import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank'><FiLinkedin/></a>
        <a href="https://github.com" target='_blank'><FiGithub/></a>
    </div>
  )
}

export default HeaderSocials