import React from 'react'
import { Link } from 'react-router-dom'
import { MdMarkEmailUnread } from 'react-icons/md'
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import Resume from '../../Assets/timisamuel.pdf'

export default function SidebarItems({ onHideNav }) {
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
            link: Resume,
        },
        {
            type: 'navItem',
            text: 'Contact Me',
            link: '/contact',
        },
    ]
    const showItems = () => (
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
                <a href="mailto: abegundeosamuel@gmail.com"><MdMarkEmailUnread color='#fff' /></a>
                <a href="https://twitter.com/degreenguy"><FaTwitterSquare color='#fff' /></a>
                <a href='https://github.com/holuwateemeeleyin'><AiFillGithub color="#fff" /></a>
                <a href='https://www.linkedin.com/in/oluwatimileyin/'><FaLinkedin color='#fff' /></a>
            </div>
        </div>
    )
}
