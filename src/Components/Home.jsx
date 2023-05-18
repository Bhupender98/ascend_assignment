import React from 'react'
import Navbar from './Navbar'
import Taskscontainer from './Taskscontainer'

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <Taskscontainer />
        </div>
    )
}

export default Home
