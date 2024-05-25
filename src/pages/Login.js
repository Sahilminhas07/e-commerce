import React from 'react'
import './css/Login.css'

function Login() {
  return (
    <div className='login'>
      <div className="container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Email address' />
          <input type="password" placeholder='Enter password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have account?<span>Login here</span></p>
        <div className="agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & private policy</p>
        </div>
      </div>
    </div>
  )
}

export default Login