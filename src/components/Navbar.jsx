import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../components/CartContext'


export default function Navbar(){
  const { cart } = useContext(CartContext);


  return(
    <div className="navbar-container">
      <div className="logo-container">
        <h2>FURNITURE</h2>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#contact us">Contact</a></li>
        </ul>
      </nav>
      <div>
        <Link to="/cart" className="cart-link">
          <FontAwesomeIcon icon={faCartShopping} className="cart-icon"/>
          {cart.length > 0 && <span className="cart-length">{cart.length}</span>}
        </Link>
      </div>
    </div>
  )
}
