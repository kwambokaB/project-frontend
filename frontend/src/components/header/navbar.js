import React from 'react';
import './navbar.css'

function Navbar(){
    return(
        <header>
        <h1 className="logo">Logo</h1>
      
          <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
        <nav className="nav-bar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
        </label>
      </header>
      
    );
};
export default Navbar;
