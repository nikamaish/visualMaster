import React, { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className={`navbar ${showMenu ? 'active' : ''}`}>
        <div className="navbar-brand">
          <a className="navbar-logo" href="/"></a>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          <div className={`menu-icon ${showMenu ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="navbar-menu">
          <ul className={`navbar-items ${showMenu ? 'active' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Settings</a></li>
            <li><a href="/"><FontAwesomeIcon icon={faUser} /></a></li>
          </ul>
        </div>
      </nav>
    </div>



  );
};

export default Navbar;
