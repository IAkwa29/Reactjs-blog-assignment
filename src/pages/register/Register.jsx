import './register.css'
import { Link } from 'react-router-dom';




function Register() {


  return (
    <div className='register'>

      <div className='registerWrapper'>

        <span className="registerTitle">Register</span>

        <form className='registerForm'  >
          <label>Username</label>
          <input className='registerInput'
            type="text"
            placeholder="Enter your username...."

          />

          <label>Email</label>
          <input className='registerInput'
            type="email"
            placeholder="Enter your email...."

          />

          <label>Password</label>
          <input className='registerInput'
            type="password"
            placeholder="Enter your password...."

          />

          <button className="registerButton" type='submit'>Register</button>
        </form>

        <button className="registerLoginButton">
          <Link classsName="link" to="/login" >Login</Link>
        </button>


      </div>

    </div>
  )
}

export default Register;