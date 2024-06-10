import { useContext } from 'react';
import "./ProductCard.css";
import { CartContext } from '../components/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

export default function ProductCard( props ) {
  const { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    const item = { id: props.id, img: props.img, name: props.name, price: Number(props.price) };
    addToCart(item);
  }

  return (
    <div className="product-card">
      <img src={props.img} alt="" />
      <div className = "product-card-bottom">
        <p>{props.name}</p>
        <div className='price-cart-container'>
          <p>{props.price} €</p>
          <div className='add-to-cart'>
           <FontAwesomeIcon icon={faBasketShopping} className="shopping-icon" onClick={handleAddToCart}/>
          </div>
        </div>
      </div>
    </div>
  );
}
