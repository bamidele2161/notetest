import React, {useState} from 'react'
import box from '../assets/box.png'
import purplebox from '../assets/purplebox.png'
import card from '../assets/card.png'
const NotesPage = () => {
    const [modal, setmodal] = useState(false);
    const [addNote, setaddNote] = useState(false);

    const addNewNote = () => {
        setmodal(!modal);
    }

    if(modal) {
        document.body.classList.add("active-modal"); // this displays the modal section, when an action is called
      }
      else{
        document.body.classList.remove("active-modal") // this cancels the action called
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
                    <button className="add-new-note" onClick={addNewNote}>Add New Note</button>
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
        <button className="create-new-note">Create my first note</button>
        </div>
    </div>
  )
}

export default NotesPage