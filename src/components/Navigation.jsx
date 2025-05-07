import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navbar'>
        <div className="navbar__links">
            <Link to='/Posts'>Главная</Link>
            <Link to='/About'>О нас</Link>
        </div>
    </div>
  )
}

export default Navigation
