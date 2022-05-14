import React, {useState} from 'react'
import upload from '../assets/export.png'
import { IoClose } from 'react-icons/io5'
import {motion} from 'framer-motion'
import ErrorContainer from '../components/ErrorContainer'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {Categories} from '../data'
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Modal = ({addNewNote}) => {
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");
    const [purpose, setPurpose] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState("");

    const createNote = () => {
        setError(!error);
    }

    // const refresh = () => {
    //     setError(false);
    
    // }
    // if(error) {
    //     return(
    //         <ErrorContainer onClick={refresh}/>
    //     )
    // }
  return (
      <div>
    <div
    className="modal-container">
        <div className="overlay">
            <motion.div 
            initial={{opacity: 0, x: 200}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 200}} className='modal-content'>
                <div className="mobal-header">
                    <h3 className="new-note-text">New Note</h3>
                    <IoClose whileTap={{scale: 0.8}} className="close-icon" onClick={addNewNote}/>
                </div>
                <form>
                    <div className="input-items">
                        <input required value={title} type="text" onChange={(e)=> setTitle(e.target.value)} placeholder='Title' className='input-field'/>
                    </div>

                    <div className="input-items">
                        <input type="text" required value={purpose} onChange={(e)=> setPurpose(e.target.value)} placeholder='Purpose' className='input-field' />
                    </div>

                    <div className="input-items">
                    <Autocomplete
                    style={{fontSize: 14, width: "100%"}}
                    required
                    multiple
                    id="checkboxes-tags-demo"
                    options={Categories}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option, { selected }) => (
                      <li {...props} style={{fontSize: 14}}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8,}}
                          checked={selected}
                        />
                        <span style={{color: `${option.color}`, backgroundColor: `${option.backgroundColor}`, fontSize: 14, padding: 10, fontWeight: "bold"}}>{option.title}</span>
                      </li>
                    )}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="Category" style={{fontSize: 14}}/>
                    )}
                  />
                    </div>
                    
                    <p>
                        Attach File
                    </p>

                        <div className="upload-file">
                            <label for="file">
                                <img src={upload} alt="" className="upload-icon" />
                                <p className="drag">Drag & Upload File</p>
                                <p className="browse">Or click to browse file</p>
                                <input type="file" id="file" name="uploadimage" accept="image/*" onChange={file} className="file" required/>
                            </label>
                        </div>
                        
                    
                    <div className="input-items">
                        <textarea type="text" className="notes" placeholder="Add your note here"/>
                    </div>

                    <div className="buttons">
                        <motion.button whileTap={{scale: 0.8}} className="cancel-btn" onClick={addNewNote}>Cancel</motion.button>
                        <motion.button whileTap={{scale: 0.8}} className="create-btn" onClick={createNote}>Create note</motion.button>
                    </div>
                </form>
                
            </motion.div>
        </div>
        
    </div>
    {
        error && (
            <ErrorContainer createNote={createNote}/>
        )
    }
    </div>
  )
}

export default Modal