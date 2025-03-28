import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <div className="header__content">
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
                <img
                  src="../../../public/bxs-home.svg"
                  alt="home"
                  className="nav__icon"
                />
                <span className="nav__name">Home</span>
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
                <img
                  src="../../../public/bxs-info-circle.svg"
                  alt="about"
                  className="nav__icon"
                />
                <span className="nav__name">About</span>
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
                <img
                  src="../../../public/bxs-bowl-hot.svg"
                  alt="menu"
                  className="nav__icon"
                />
                <span className="nav__name">Menu</span>
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
                <img
                  src="../../../public/bxs-phone.svg"
                  alt="contact"
                  className="nav__icon"
                />
                <span className="nav__name">Contact</span>
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
                <img
                  src="../../../public/bxs-cart.svg"
                  alt="cart"
                  className="nav__icon"
                />
                <span className="nav__name">Cart</span>
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
        <Link to="/" className="logo">
          Logo
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
