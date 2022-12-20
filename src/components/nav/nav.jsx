import React from 'react'
import './nav.css'
import {RiHome7Line} from 'react-icons/ri'
import {SlUser} from 'react-icons/sl'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'
import { useState} from 'react'


 const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}className={activeNav=== '#' ? 'active' : ''}><RiHome7Line/></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav=== 'about' ? 'active' : ''}><SlUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}className={activeNav=== 'experience' ? 'active' : ''}><MdWorkOutline/></a>
      <a href="#contact"onClick={() => setActiveNav('#contact')}className={activeNav=== 'contact' ? 'active' : ''}><AiOutlineMail/></a>
    </nav>
  
  )
}

export default Nav 
   