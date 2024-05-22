import "./Header.css"
import { Link } from "react-router-dom";

export default function Header(props){
  return(
    <header>
      <div>
        {props.children}
      </div>
      <div>
        <h1>Explore nature with our gear</h1>
        <Link to="/products">
          <button className="explore-btn">EXPLORE MORE</button>
        </Link>
      </div>
    </header>
  )
}
