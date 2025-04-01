import { useProducts } from "../../context/ProductsContext";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import "./Cart.scss";

const Cart = () => {
  const { products } = useProducts();
  const { isOpen, closeCart, cartItems } = useShoppingCart();

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
            cartItems.map((cartItem) => {
              const product = products.find((p) => p.id === cartItem.id); // Find product details

              if (!product) return null; // If product is not found, don't render.

              return (
                <div key={cartItem.id} className="cart-item">
                  <img src={product.img} alt={product.name} width={50} />
                  <div>
                    <h3>{product.name}</h3>
                    <p>Price: {formatCurrency(product.price)}</p>
                    <p>Quantity: {cartItem.quantity}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
