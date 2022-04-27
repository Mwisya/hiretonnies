import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
      <div className='menu'>

    <ul>
        <li><Link to='/' className='menu__links' >Home</Link></li>
        <li><Link to='/' className='menu__links'>About</Link></li>
        <li><Link to='/' className='menu__links'>Book</Link></li>
        <li><Link to='/' className='menu__links' >Location</Link></li>
    </ul>
      </div>
  )
}

export default Menu