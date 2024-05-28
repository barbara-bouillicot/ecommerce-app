import { useContext } from 'react';
import "./ProductCard.css";
import { CartContext } from '../components/CartContext'

export default function ProductCard( props ) {
  const { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    const item = { id: props.id, img: props.img, name: props.name, price: Number(props.price) };
    addToCart(item);
  }

  return (
    <div className="product-card">
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <p>{props.price} €</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
