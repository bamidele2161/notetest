import React from 'react';
import navicon from '../assets/Vector.png'
import navarrow from '../assets/Arrow.png'
import navbell from '../assets/Bell.png'
import navuser from '../assets/Ellipse 18.png'
const Navbar = () => {
  return (
    <div className="navbar-container">
        
        <div className="navbar-brand">
            <img src={navicon} alt="" className="nav-icon"/>
            <ul className="nav-links">
              <li className="nav-link">Home</li>
              <img src={navarrow} alt="" className="nav-arrow"/>
              <li className="nav-link">Productivity</li>
              <img src={navarrow} alt="" className="nav-arrow"/>
              <li className="nav-link">Notes</li>
            </ul>
        </div>

        <div className="navbar-right">
          <img src={navbell} alt="" className="nav-bell"/>
          <img src={navuser} alt="" className="nav-user-img"/>
        </div>
    </div>
  )
}

export default Navbar