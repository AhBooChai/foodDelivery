import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItem from "../CartItem";
import "./Cart.scss";

const Cart = () => {
  const { isOpen, closeCart, cartItems } = useShoppingCart();
  console.log(cartItems);
  return (
    <div className={`cart ${isOpen ? "cart--open" : ""}`}>
      <div className="cart__content">
        <div className="cart__header">
          <h2 className="cart__title">Cart</h2>
          <button className="cart__button" onClick={closeCart}>
            X
          </button>
        </div>
        <div className="cart__items">
          {cartItems.length === 0 ? (
            <p className="cart__empty">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
