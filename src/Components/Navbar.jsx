import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

  let user = JSON.parse(localStorage.getItem('user'));
  // console.log("user from user: " + user.name)

  const handleLogOut = () => {
    console.log("logout clicked!");
    localStorage.clear();
  }
  const handleLogIn = () => {
    console.log("logIn clicked!");
  }
  return (
    <div className='navbar'>
      <h1>Welcome user</h1>
      <h2>{(user) ? <button className='btn' onClick={handleLogOut}>LogOut</button> : <Link to="/login"><button className='btn' onClick={handleLogIn}>LogIn</button></Link>}</h2>
    </div>
  )
}

export default Navbar
