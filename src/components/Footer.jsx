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
          <h2>Sign up for our newsletter</h2>
          <input type="text" placeholder='Your email address'/>
          <button type="submit">Submit</button>
          <div className='separation-line'></div>
        </div>
        <div className="menu-links">
          <ul>
            <li>Quick Links</li>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Shop</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ul>
            <li>Follow Us</li>
            <li><a href="#Facebook">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#linkedin">Linkedin</a></li>
            <li><a href="#twitter">Twitter X</a></li>
          </ul>
          <ul>
            <li>Resources</li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-conditions">Terms & Conditions</a></li>
            <li><a href="#delivery">Delivery</a></li>
            <li><a href="#return">Return & Exchange</a></li>
            <li><a href="#careers">Work with us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
