import "./TrustBadge.css"

export default function TrustBadge(props) {
  return(
    <div className="badge">
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
    </div>
  )
}
