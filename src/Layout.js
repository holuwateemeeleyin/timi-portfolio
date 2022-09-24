import React from 'react'
import Header from './Header/HeaderMobile'

export default function Layout(props) {
  return (
    <div>
      <Header/>
      <div>
        {props.children}
      </div>
    </div>
  )
}
