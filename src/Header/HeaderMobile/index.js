import React, { useState } from 'react'
import './Header.css'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import SideBar from './SideBar'

export default function Header() {
  const [ showNav, setShowNav ] = useState(false)
  
  const onHideNav = ()=> {
    setShowNav(false)
  }
  return (
    <div className='header-mobile'>
        <div className='sidebar'>
          <HiOutlineMenuAlt2 size={28}
            onClick={()=> setShowNav(true)}
          />
        </div>
        <SideBar
          showNav={showNav}
          onHideNav={()=> onHideNav()}
        />
        <div className='header-title'>
          Timi.
        </div>
    </div>
  )
}
