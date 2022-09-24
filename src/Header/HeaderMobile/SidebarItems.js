import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarItems() {
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
                <Link to={item.link}>
                    {item.text}
                </Link>
            </div>
        ))
    )
  return (
    <div>
      {showItems()}
    </div>
  )
}
