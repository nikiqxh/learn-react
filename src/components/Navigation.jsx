import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navbar'>
        <div className="navbar__links">
            <Link to='/posts'>Главная</Link>
            <Link to='/about'>О нас</Link>
        </div>
    </div>
  )
}

export default Navigation
