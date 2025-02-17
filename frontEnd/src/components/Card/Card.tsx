import "./Card.scss";

interface CardProps {
  imgSrc: string;
  title: string;
  desc: string;
  price: number;
}
const Card = ({ imgSrc, title, desc, price }: CardProps) => {
  return (
    <div className="card-container">
      <img src={imgSrc} alt={title} className="card-img" />
      <h3 className="card-title">
        {title}
        <small>15 October</small>
      </h3>
      <p className="card-desc">{desc}</p>
      <p>{price}</p>
      <p></p>
      <button className="btn-circle btn-x card-btn">
        <span className="visually-hidden">Add this item</span>
      </button>
    </div>
  );
};

export default Card;
