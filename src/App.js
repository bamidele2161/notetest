import './App.css';
import NavBar from "./components/NavBar"
import NotesPage from "./components/NotesPage";
import Sidebar from "./components/SideBar";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
        <div className="other-pages">
          <NavBar />
          <Modal />
        </div>
    </div>
  );
}

export default App;
