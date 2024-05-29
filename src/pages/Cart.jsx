import { useContext } from 'react';
import { CartContext } from '../components/CartContext'
import { Link } from "react-router-dom";
import "./Cart.css";


export default function Cart() {
  const { cart } = useContext(CartContext);
  const { totalPrice } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);
  const { increaseQuantity } = useContext(CartContext);
  const { decreaseQuantity } = useContext(CartContext);

  return (
    <div>
    <Link to="/products">
      <button className='continue-shopping-btn'>← Continue shopping</button>
      </Link>
    <div className="cart">
      <div className='cart-summary'>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.length > 0 && (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className='cart-item-card'>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.price} €</p>
              <div className='cart-quantity-container'>
                <button className='quantity-btn' onClick={() => decreaseQuantity(item.id)}>-</button>
                <div className="cart-quantity">{item.quantity}</div>
                <button className='quantity-btn' onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button className="remove-btn"onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className='order-summary'>
      <h2>Your Order Summary</h2>
      <p>{cart.reduce((sum, item) => sum + item.quantity, 0)} items </p>
      <p>Total Price: {totalPrice} €</p>
      <button className='checkout-btn'>Checkout</button>
    </div>
    </div>
    </div>
  );
}
