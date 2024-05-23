import { handleAddToCart } from "../utils/cartUtils";
import "./ProductCard.css";


export default function ProductCard(props){

  return(
    <div className="product-card">
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <p>{props.price} €</p>
      <button
        onClick={() => {
          handleAddToCart()
        }
        }
      >
        Add to Cart
      </button>
    </div>
  )
}
