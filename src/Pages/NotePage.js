import React from 'react'
import NavBar from "./components/NavBar"
import NotesPage from "./components/NotesPage";
import Sidebar from "./components/SideBar";

const NotePage = () => {
  return (
    <div className="app-container">
        <Sidebar />
        <div className="other-pages">
            <NavBar />
            <NotesPage />
        </div>
    </div>
  )
}

export default NotePage