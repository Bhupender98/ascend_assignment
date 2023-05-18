import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Taskscontainer from './Components/Taskscontainer';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Navbar />
        <Routes>    
          <Route path='/' element={<Taskscontainer />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
