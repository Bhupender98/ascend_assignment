import React from 'react'
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className='login-container'>
      <h3 style={{ textAlign: "center", background: "lightgray", padding: "0.3rem" }}>Login Page</h3>
      <input type="email" name="email" id="email" placeholder='Enter Your Email' /><br />
      <input type="text" name="name" id="name" placeholder='Enter Password' /><br />
      <button type='submit'>Login</button>
      <p>Haven't Register | <Link to="/register">Register</Link></p>
    </div>
  )
}

export default LoginPage
