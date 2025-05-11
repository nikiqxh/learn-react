import React from 'react'
import MyInput from '../UI/myInput/MyInput'
import MyButton from '../UI/button/MyButton'

const Login = () => {
  return (
    <div>
      <h1>Вход</h1>

      <form>
        <MyInput type='text' placeholder='Логин'/>
        <MyInput type='password' placeholder='Пароль'/>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login
