function Card({ bgColor, title, icon, number, description }) {
    return (
      <div style={{ backgroundColor: bgColor }} className="card">
        <h2>{number}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>{icon}</div>
      </div>
    );
  }
  
  export default Card;