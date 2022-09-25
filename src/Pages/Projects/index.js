import React from 'react'
// import { Link } from 'react-router-dom'
import './Projects.css'
import { FcLink } from 'react-icons/fc'

export default function Projects() {
    const items = [
        
        {
            title:'Lights UP NFT',
            desc:'An NFT platform; that allows people to advertise their NFTs.',
            link:'http://lightups.herokuapp.com/'
        },
        {
            title:'CHopChop',
            desc:'CHopChop is a food web app that shows varieties of food and allow users to add to cart their favourite food.',
            link:'https://chopchopfood.netlify.app/'
        },
        {
            title:'Visitor Management System',
            desc:'A visitor management system that keep tracks of guest in organization, and provides a way to save the stress of doing it traditional way.',
            link:'https://visitor-entry-system.herokuapp.com/'
        },
        {
            title:'Book shelf App',
            desc:'Book lending app allows user to categorize books into three shelves; which are Currently Reading, Want to Read and Read shelves. It also have a add books, incase the books are not in the category.',
            link:'https://book-lending-app.netlify.app/'
        },
        {
            title:'Todo Productivity App',
            desc:'An app that is generally used to maintain our day-to-day tasks or list everything that we have to do. The users can edit from previous list, delete and add new task to do for the day.',
            link:'https://timmy-todoapp.netlify.app'
        },
        {
            title:'CHopChop',
            desc:'CHopChop is a food web app that shows varieties of food and allow users to add to cart their favourite food.',
            link:'2'
        },
        
    ]

    const showProjects =()=> (
        items.map(item => (
            <div key={item.link} className='projects'>
                <a href={item.link}>
                    <h2 className='title'>{item.title}</h2>
                    <p className='desc'>{item.desc}</p>
                    <FcLink size={25}/>
                </a>
            </div>
        ))
    )
  return (
    <div className='projects-container'>
        {showProjects()}
    </div>
  )
}
