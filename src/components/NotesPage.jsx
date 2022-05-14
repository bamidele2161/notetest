import React, {useState} from 'react'
import box from '../assets/box.png'
import purplebox from '../assets/purplebox.png'
import card from '../assets/card.png'
import Modal from "./Modal"
import {motion} from 'framer-motion'
const NotesPage = () => {
    const [modal, setmodal] = useState(false);

    const addNewNote = () => {
        setmodal(!modal);
    }


  return (
    <div className="note-container">
        <div className="note-header">
            <div className="note-first-row">
                <p className="note-text">Notes</p>
                <div className="">
                    <select className="select-category">
                        <option>Last added</option>
                    </select>
                    <motion.button whileTap={{scale: 0.8}} className="add-new-note" onClick={addNewNote}>Add New Note</motion.button>
                </div>
            </div>
            <div className="note-second-row">
                <p className="all-note-text">All Notes</p>
                <div>
                    <img src={box} className="box-image" alt="" /> 
                    <img src={purplebox} className="purple-box-image" alt="" />
                </div>
            </div>
        </div>

        <div className="create-section">
        <img src={card} className="card-image" alt="" />
        <p className="create-paragraph">You haven’t saved any note yet. Add your first note and never lose important information, it’s quite easy.</p>
        <motion.button whileTap={{scale: 0.8}} className="create-new-note" onClick={addNewNote}>Create my first note</motion.button>
        </div>

        {
                modal && (
                    <Modal addNewNote={addNewNote}/>
                )
        }
    </div>
  )
}

export default NotesPage