import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer>
      <div className="container">
        © {year} Copyright by AtHomeFineDining.com
        <Link to="/admin-login" className="footer__admin-link">
          Admin Login
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
