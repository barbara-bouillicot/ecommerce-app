import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


console.log(logo)

export default function Navbar(){
  return(
    <div className="navbar-container">
    <div className="logo-container">
      <img src={logo} alt="logo" className="logo"></img>
    </div>
    <nav>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
    </div>
  </div>
  )
}
