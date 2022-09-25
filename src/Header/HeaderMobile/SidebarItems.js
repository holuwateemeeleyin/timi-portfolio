import React from 'react'
import { Link } from 'react-router-dom'
import { MdMarkEmailUnread } from 'react-icons/md'
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

export default function SidebarItems({onHideNav}) {
    const items = [
        {
            type: 'navItem',
            text: 'Home',
            link: '/',
        },
        {
            type: 'navItem',
            text: 'Projects',
            link: '/projects',
        },
        {
            type: 'navItem',
            text: 'Resume',
            link: '/resume',
        },
        {
            type: 'navItem',
            text: 'Contact Me',
            link: '/contact',
        },
    ]
    const showItems = ()=> (
        items.map(item => (
            <div key={item.link} className={item.type}>
                <Link to={item.link} onClick={onHideNav}>
                    {item.text}
                </Link>
            </div>
        ))
    )
  return (
    <div className='sidebarItems-container'>
      {showItems()}
      <div className='social'>
        <MdMarkEmailUnread color='#fff'/>
          <FaTwitterSquare color='#fff'/>
          <AiFillGithub color='#fff'/>
          <FaLinkedin color='#fff'/>
      </div>
    </div>
  )
}
