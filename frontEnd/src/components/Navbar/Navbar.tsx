import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          Logo
        </Link>
        <div
          className="menu"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={showMenu ? "show" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
