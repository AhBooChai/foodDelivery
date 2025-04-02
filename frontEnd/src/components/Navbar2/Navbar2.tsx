import { Link, NavLink } from "react-router-dom";
import "./Navbar2.scss";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Navbar2 = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <header className="header">
      <div className="header__content">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__link">
              <NavLink to="/" className="nav__item">
                <img
                  src="../../../public/bxs-home.svg"
                  alt="home"
                  className="nav__icon"
                />
                <span className="nav__name">Home</span>
              </NavLink>
            </li>
            <li className="nav__link">
              <NavLink to="/about" className="nav__item">
                <img
                  src="../../../public/bxs-info-circle.svg"
                  alt="about"
                  className="nav__icon"
                />
                <span className="nav__name">About</span>
              </NavLink>
            </li>
            <li className="nav__link">
              <NavLink to="/menu" className="nav__item">
                <img
                  src="../../../public/bxs-bowl-hot.svg"
                  alt="menu"
                  className="nav__icon"
                />
                <span className="nav__name">Menu</span>
              </NavLink>
            </li>
            <li className="nav__link">
              <NavLink to="/contact" className="nav__item">
                <img
                  src="../../../public/bxs-phone.svg"
                  alt="contact"
                  className="nav__icon"
                />
                <span className="nav__name">Contact</span>
              </NavLink>
            </li>
            <li className="nav__link" onClick={openCart}>
              <div className="cart__icon-container">
                <img
                  src="../../../public/bxs-cart.svg"
                  alt="cart"
                  className="nav__icon"
                />
                {cartQuantity > 0 && (
                  <span className="cart__badge">{cartQuantity}</span>
                )}
              </div>
              <span className="nav__name">cart</span>
            </li>
          </ul>
        </nav>
        <Link to="/" className="logo">
          Logo
        </Link>
      </div>
    </header>
  );
};

export default Navbar2;
