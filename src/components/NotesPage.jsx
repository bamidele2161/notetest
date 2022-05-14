import React from 'react'
import box from '../assets/box.png'
import purplebox from '../assets/purplebox.png'
const NotesPage = () => {
  return (
    <div className="note-container">
        <div className="note-header">
            <div className="note-first-row">
                <p>Notes</p>
                <div className="">
                    <select className="">
                        <option>Last added</option>
                    </select>
                    <button className="add-new-note">Add New Note</button>
                </div>
            </div>
            <div className="note-second-row">
                <p>All Notes</p>
                <div>
                    <img src={box} className="box-image" alt="" />
                    <img src={purplebox} className="purple-box-image" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotesPage