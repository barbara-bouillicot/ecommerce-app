import "./Header.css"
import { Link } from "react-router-dom";

export default function Header(props){
  return(
    <header>
      <div>
        {props.children}
      </div>
      <div className="tagline-btn-centered">
        <div className="tagline">
          <h1>Make your home comfortable and elegant</h1>
        </div>
        <Link to="/products">
          <button className="explore-btn">EXPLORE MORE</button>
        </Link>
      </div>
    </header>
  )
}
