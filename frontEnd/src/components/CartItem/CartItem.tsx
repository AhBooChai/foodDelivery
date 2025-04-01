import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import "./CartItem.scss";

interface CartItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CartItem = ({ id, name, image, price, quantity }: CartItemProps) => {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  return (
    <div className="cart-item">
      {image ? (
        <img src={image} alt={name} className="cart-item__image" />
      ) : (
        <div className="cart-item__no-image">No Image</div>
      )}
      <div className="cart-item__details">
        <p className="cart-item__name">{name}</p>
        <p className="cart-item__price">{formatCurrency(price)} per unit</p>
        <p className="cart-item__total">
          <strong>Total:</strong> {formatCurrency(price * quantity)}
        </p>
        <div className="cart-item__controls">
          <button
            onClick={() => decreaseCartQuantity(id)}
            className="cart-item__button"
          >
            -
          </button>
          <span className="cart-item__quantity">{quantity}</span>
          <button
            onClick={() => increaseCartQuantity(id)}
            className="cart-item__button"
          >
            +
          </button>
          <button
            onClick={() => removeFromCart(id)}
            className="cart-item__remove"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
