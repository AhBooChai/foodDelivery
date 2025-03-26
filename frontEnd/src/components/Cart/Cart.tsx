import { useShoppingCart } from "../../context/ShoppingCartContext";
import "./Cart.scss";

const Cart = () => {
  const { isOpen, closeCart } = useShoppingCart();
  return (
    <div className={`cart ${isOpen ? "cart--open" : ""}`}>
      <div className="cart__overlay" onClick={closeCart}></div>
      <div className="cart__content">
        <div className="cart__header">
          <h2 className="cart__title">Cart</h2>
          <button className="cart__button" onClick={closeCart}>
            X
          </button>
        </div>
        {/* Add cart content here */}
      </div>
    </div>
  );
};

export default Cart;
