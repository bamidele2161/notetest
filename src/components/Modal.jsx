import React from 'react'

const Modals = () => {
  return (
    <div className="modal-container">
        <div className="overlay">
            <div className='modal-content'>
                <h3>
                    Add Note
                </h3>

                <div className='title'>
                    <input type="text" placeholder='Title' className='input'/>
                </div>

                <div className='Purpose'>
                    <input type="text" placeholder='Purpose' className='input' />
                </div>

                <div className="category">
                    <select>
                        <option selected value="default">Choose Category</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>
                
                <h3>
                    Attach File
                </h3>

                <div className='upload-file'>
                    <div>
                        <p>Drag & Upload File</p>
                        <p className='click'>
                            <button>or click to browse file</button>
                        </p>
                    </div>
                </div>

                <div>
                    <input type="text" className='notes'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modals