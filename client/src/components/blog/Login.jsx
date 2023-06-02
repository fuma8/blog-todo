import React from 'react'
import "../style.scss"
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username'></input>
        <input required type="password" placeholder='password'></input>
        <button>Login</button>
        <span>
          If you don't have an account, please make form <Link to="register">here</Link>.
        </span>
      </form>
    </div>
  )
}

export default Login
