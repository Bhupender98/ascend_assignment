import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Taskscontainer = () => {
    return (
        <div className='tasksContainer'>
            <div>
                <h3>List 1</h3>
                <div className="list">
                    <input type="checkbox" name="checked" id="checked" />
                    <p>Sent an email to company</p>
                </div>
            </div>
            <div><h3>List 2</h3></div>
            <div><h3>List 3</h3></div>
            <div className='create-list-container'>
                <h3>Create New List</h3>
                <div className='create-list'>
                    <AiOutlinePlusCircle style={{ fontSize: "4rem" }} />
                </div>
            </div>
        </div>
    )
}

export default Taskscontainer
