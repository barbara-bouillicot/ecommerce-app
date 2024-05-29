import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../components/CartContext'


export default function Navbar(){
  const { cart } = useContext(CartContext);
  let count = 0
  const cartNbItems = cart.map((cartItem) => count += cartItem.quantity )

  return(
    <div className="navbar-container">
      <div className="logo-container">
      <Link to="/">
        <h2>FURNITURE</h2>
      </Link>
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
          {count > 0 && <span className="cart-length">{count}</span>}
        </Link>
      </div>
    </div>
  )
}
