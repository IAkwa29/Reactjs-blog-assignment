import React, { useState } from "react";
import './login.css'
import { Link } from 'react-router-dom';
import axios from "axios";


function Login() {

  const [enteredEmail, setEmail] = useState("")
  const [enteredPassword, setPassword] = useState("")

  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handlePassword(e) {
    setPassword(e.target.value)
  }
  async function submitLoginForm(e) {
    e.preventDefault();
    const info = {

      email: enteredEmail,
      password: enteredPassword
    
    }
      const result = await axios.post("https://api.citrone.co/api/login", info)
    console.log(info)
  }
  
  return (
    <div className='login'>
      <div className="loginWrapper">
        <span className="loginTitle">Login</span>

        <form className='loginForm' onSubmit={submitLoginForm} >

          <label>Email</label>
          <input className='loginInput'
            type="email"
            placeholder="Enter your email...."
            onChange={handleEmail}
          />

          <label>Password</label>
          <input className='loginInput'
            type="password"
            placeholder="Enter your password...."
            onChange={handlePassword}
          />

          <button className="loginButton" type='submit' >Log In</button>
        </form>

        <button className="loginRegisterButton">
          <Link className="link" to="/register">REGISTER</Link>
        </button>
      </div>

    </div>
  )
}

export default Login;