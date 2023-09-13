import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="App-header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <span onClick={toggleDropdown}>About Us</span>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/team-member1">Ysidro Alfaro De Leon</Link>
              </li>
              <li>
                <Link to="/team-member2">Jhon Raimund Aclan</Link>
              </li>
              <li>
                <Link to="/team-member3">Jason Chan</Link>
              </li>
              <li>
                <Link to="/team-member4">Deep Dhorajiya</Link>
              </li>
              <li>
                <Link to="/team-member5">Om Dankhara</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
