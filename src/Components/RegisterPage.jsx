import React, { useState } from 'react'
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const handleRegisterForm = () => {
    if (name === "" || email === "" || password === "" || mobile === "") {
      console.log("please enter a name or email")
    } else {
      setUser([{ name, email, mobile, password }]);
      localStorage.setItem("user", JSON.stringify(user));
      let data = localStorage.getItem("user");
      console.log(data)
    }
  }
  return (
    <div className='login-container'>
      <h3 style={{ textAlign: "center", background: "lightgray", padding: "0.3rem" }}>Register Page</h3>
      <input type="text" name="name" id="name" placeholder='Enter Your Name' value={name} onChange={(e) => { setName(e.target.value) }} /><br />
      <input type="email" name="email" id="email" placeholder='Enter Your Email' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
      <input type="number" name="mobile" id="mobile" placeholder='Enter Mobile Number' value={mobile} onChange={(e) => { setMobile(e.target.value) }} /><br />

      <input type="text" name="password" id="password" placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
      <button type='submit' onClick={handleRegisterForm}>Register</button>

      <p>Have you registed? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default RegisterPage
