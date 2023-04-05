import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';


import "../../styles/sass/main.scss";
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav>
       <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <li className='logoContainer'>
            <Link className="logo"to="/">Home</Link>
        </li>
      <ul>
       
        <li>
            <Link to="blogs">Blogs</Link>
        </li>
        <li>
            <Link to="blogs">Contact</Link>
        </li>
        <li>
            <Link to="gastloggers">GastLoggers</Link>
        </li>
        <li>
            <Link to="over">Over</Link>
        </li>
        <li>
            <Link to="webshop">Webshop</Link>
        </li>
      </ul>
    </nav>
  )

}

export default Nav
