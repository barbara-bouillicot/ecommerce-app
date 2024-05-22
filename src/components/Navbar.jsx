import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



export default function Navbar(){
  return(
    <div className="navbar-container">
      <div className="logo-container">
        <h2>FURNITURE</h2>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact us">Contact</a></li>
        </ul>
      </nav>
      <div>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  )
}
