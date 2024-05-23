import "./ProductCard.css";


export default function ProductCard(props){
  return(
    <div className="product-card">
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <p>{props.price} €</p>
    </div>
  )
}
