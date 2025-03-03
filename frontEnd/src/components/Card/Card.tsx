import "./Card.scss";

interface CardProps {
  imgSrc: string;
  title: string;
  price: number;
  id?: number;
}
const Card = ({ imgSrc, title, price, id }: CardProps) => {
  return (
    <div className="card" key={id}>
      <img src={imgSrc} alt={title} className="card__img" />
      <h3 className="card__title">{title}</h3>
      <p>{price}</p>
      <p></p>
      <button className="btn-circle btn-x card-btn">
        <span className="visually-hidden"></span>
      </button>
    </div>
  );
};

export default Card;
