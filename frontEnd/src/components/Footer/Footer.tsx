import "./Footer.scss";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return <footer>© {year} Copyright by AtHomeFineDining.com</footer>;
};

export default Footer;
