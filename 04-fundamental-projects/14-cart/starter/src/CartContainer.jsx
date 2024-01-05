import { useGlobalContext } from './AppContext';
import CartItem from './CartItem';
import { CLEAR_CART } from './actions';

const CartContainer = () => {
  const { state, dispatch, totalCost } = useGlobalContext();

  const cart = state.cart;

  //creating an array from cart MAP
  const cartArray = Array.from(cart.entries());

  //dispatching action for clearing the cart
  function clearCart() {
    dispatch({ type: CLEAR_CART });
  }

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          return <CartItem key={cartItem[0]} {...cartItem[1]} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>{totalCost}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={() => clearCart()}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
