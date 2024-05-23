import "./TrustBadge.css"

export default function TrustBadge(props) {
  return(
    <div className="badge">
      <div className="img-badge">
        <img src={props.img} alt="" />
      </div>
      <div className="img-title">
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}
