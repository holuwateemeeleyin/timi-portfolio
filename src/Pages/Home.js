import React from 'react'
import './Home.css'
import { MdMarkEmailUnread } from 'react-icons/md'
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import HomePic from '../Assets/pic.png'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='avatar'>
        <img src={HomePic} alt='Timi Samuel'  width='256px'/>
      </div>
      <div className='profile'>
        <h2 className='margin profile-name'>
          Timi Samuel
        </h2>
        <div className='margin profile-title'>
          {`${`< Software Developer />`}`}
        </div>
        <div className='margin profile-desc'>
          Do you need a developer? Well, I am your guy. I build with mainly JavaScript 
          (ReactJs &amp; a bit of Node.js), Bootstrap, and lots of css.
          I press laptop for a living
        </div>
        <div className='profile-work'>
          Currently, I'm opened to Work
        </div>
        <div className='profile-handle'>
          <MdMarkEmailUnread color='#f01e2c'/>
          <FaTwitterSquare color='#1DA1F2'/>
          <AiFillGithub/>
          <FaLinkedin color='#1DA1F2'/>
        </div>
      </div>
    </div>
  )
}
