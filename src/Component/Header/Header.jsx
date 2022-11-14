import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import HomeLogo from "../../Assets/homelogo.png";
import Logo from "../../Assets/logo.png";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobMenu = () => setClick(false);
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="" className="navbar-logo">
            <img src={HomeLogo} alt="" />
            <img src={Logo} alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobMenu}>
                Place to stay
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-links"
                onClick={closeMobMenu}
              >
                NFTs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMobMenu}>
                Community
              </Link>
            </li>
          </ul>
          <button className="header__cta">connect wallet</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
