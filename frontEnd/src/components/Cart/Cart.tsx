import { useProducts } from "../../context/ProductsContext";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import CartItem from "../CartItem";
import "./Cart.scss";

const Cart = () => {
  const { products } = useProducts();
  const { isOpen, closeCart, cartItems } = useShoppingCart();

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    return total + (product ? product.price * cartItem.quantity : 0);
  }, 0);

  return (
    <div className={`cart ${isOpen ? "cart--open" : ""}`}>
      <div className="cart__content">
        <div className="cart__header">
          <h2 className="cart__title">Cart</h2>
          <button className="cart__button" onClick={closeCart}>
            ✖
          </button>
        </div>
        <div className="cart__items">
          {cartItems.length === 0 ? (
            <p className="cart__empty">Your cart is empty.</p>
          ) : (
            cartItems.map((cartItem) => {
              const product = products.find((p) => p.id === cartItem.id); // Find product details

              if (!product) return null; // If product is not found, don't render.

              return (
                <CartItem
                  key={cartItem.id}
                  id={cartItem.id}
                  name={product.name}
                  image={product.img}
                  price={product.price}
                  quantity={cartItem.quantity}
                />
              );
            })
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart__total">
            <h3>Total: {formatCurrency(totalPrice)}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
