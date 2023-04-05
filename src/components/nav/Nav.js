import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../../styles/sass/main.scss";
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav>
      <div
        className={`hamburger-menu ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <ul className="navbar-nav">
        <li className="logoContainer">
          <Link className="logo" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">

          <Link to="blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link to="blogs">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="gastloggers">GastLoggers</Link>
        </li>
        <li className="nav-item">
          <Link to="over">Over</Link>
        </li>
        <li className="nav-item">
          <Link to="webshop">Webshop</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
