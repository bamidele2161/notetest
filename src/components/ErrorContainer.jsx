import React from 'react'
import mobile from '../assets/mobile.png'
import man from '../assets/man.png'
import signal from '../assets/signal.png'

const ErrorContainer = ({createNote}) => {
  return (
    <div className="error-container">

        <div className="error-image">
            <div className="mobile-image">
                <img src={mobile} alt="" className="mobile" />
                <img src={signal} alt="" className="signal" />
            </div>
            <img src={man} alt="" className="man" />
        </div>

        <div className="error-message">
            <h1>Whoops</h1>
            <p>Slow or no internet connection. Please check your Internet settings</p>
            <button className="create-new-note" createNote={createNote}>Refresh Page</button>
        </div>
    </div>
  )
}

export default ErrorContainer