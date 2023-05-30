import React from 'react'
import "../style.scss"
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username'></input>
        <input required type="text" placeholder='email'></input>
        <input required type="password" placeholder='password'></input>
        <button>Register</button>
        <span>
          If you have an account, please sign from <Link to="login">here</Link>.
        </span>
      </form>
    </div>
  )
}

export default Register
