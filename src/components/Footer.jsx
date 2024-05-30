import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.css"


export default function Footer(){
  return(
    <footer>
      <div className='left-footer'>
        <h2>FURNITURE</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div className="social-links">
         <ul>
            <li><FontAwesomeIcon icon={faFacebook} className="cart-icon"/></li>
            <li><FontAwesomeIcon icon={faInstagram} className="cart-icon"/></li>
            <li><FontAwesomeIcon icon={faLinkedin} className="cart-icon"/></li>
            <li><FontAwesomeIcon icon={faXTwitter} className="cart-icon"/></li>
          </ul>
        </div>
        <p>Copyright @2024 FURNITURE All rights reserved</p>
      </div>
      <div className='right-footer'>
        <div className='newsletter-container'>
          <p>Sign up for our newsletter</p>
          <input type="text" placeholder='Your email address'/>
          <button type="submit">Submit</button>
        </div>
        <div className="menu-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#instagram">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
