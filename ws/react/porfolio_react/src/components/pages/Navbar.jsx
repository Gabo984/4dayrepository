import React, {useState} from 'react'
import { Link, NavLink, } from "react-router-dom";
import Modal from 'react-modal'

Modal.setAppElement("#root");

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  
  const handleToggle = () => {
    setIsOpen(!modalIsOpen);
  };
 

  return (
    <div>
      <header>
        <Link to="/">
          <div className="logo">
            <img src="" alt="" />
          </div>
        </Link>
        <NavLink to="/"
        >
          <button
            onClick={handleToggle}
            className="nav-toggle nav-open"
            arial-label="toggle navigation"
          >
            {modalIsOpen ? "Close" : "Open"}
            <span className="hamburger"></span>
          </button>
        </NavLink>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleToggle}
          contentLabel="Modal">
        <nav className="nav">
          <ul className="nav__list ">
            <NavLink exact="true" to="/" className="nav_home">
              <li className="nav__item nav__link nav-open">Home</li>
            </NavLink>
            <NavLink to="/whatIdo">
              <li className="nav__item nav__link nav-open">My services</li>
            </NavLink>
            <NavLink to="/whoIam">
              <li className="nav__item nav__link nav-open">About me</li>
            </NavLink>
            <NavLink to="/myWork">
              <li className="nav__item nav__link nav-open">My Work</li>
            </NavLink>
          </ul>
        </nav>
        </Modal>
      </header>
    </div>
  );
}

export default Navbar
