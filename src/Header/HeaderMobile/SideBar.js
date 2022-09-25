import React from 'react'
import { SideNav } from 'react-simple-sidenav'
import { IoMdClose } from 'react-icons/io'
import SidebarItems from './SidebarItems'

export default function SideBar({ showNav, onHideNav }) {
  return (
    <SideNav
        showNav={showNav}
        onHideNav={onHideNav}
        navStyle={{
            background:'#242',
            maxWidth:'300px'
        }}
    >
        <div className='close-nav'>
            <IoMdClose 
                color='#fff' 
                size={22}
                onClick={onHideNav}
                />
        </div>
      <SidebarItems onHideNav={onHideNav}/>
    </SideNav>
  )
}
