import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="logo">
          Logo
        </Link>
        <nav className={`nav ${showMenu ? "open" : ""}`}>
          <ul className="nav__list">
            <li className="nav__link">
              <NavLink
                to="/"
                onClick={() => {
                  setShowMenu(false);
                }}
                className="nav__item"
              >
                Home
              </NavLink>
            </li>
            <li className="nav__link">
              <NavLink
                to="/about"
                onClick={() => {
                  setShowMenu(false);
                }}
                className="nav__item"
              >
                About
              </NavLink>
            </li>
            <li className="nav__link">
              <NavLink
                to="/menu"
                onClick={() => {
                  setShowMenu(false);
                }}
                className="nav__item"
              >
                Menu
              </NavLink>
            </li>
            <li className="nav__link">
              <NavLink
                to="/contact"
                onClick={() => {
                  setShowMenu(false);
                }}
                className="nav__item"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          className={`menu ${showMenu ? "open" : ""}`}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
