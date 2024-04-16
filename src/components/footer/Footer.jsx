import "./footer.css";
import logo from "../../assets/logo.png";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container footer">
      <a href="#home">
        <img src={logo} alt="" className="footer-logo" />
      </a>
      <p>&copy; {new Date().getFullYear()}. All Rights Reserved</p>
      <ul>
        <li>Terms and conditions</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
    </div>
  );
};

export default Footer;
