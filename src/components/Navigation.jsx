import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../UI/button/MyButton'
import { AuthContext } from '../context/context'


const Navigation = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className='navbar'>
        <div className="navbar__links">
            <MyButton onClick={logout}>Выйти</MyButton>
            <Link to='/posts'>Главная</Link>
            <Link to='/about'>О нас</Link>
        </div>
    </div>
  )
}

export default Navigation
