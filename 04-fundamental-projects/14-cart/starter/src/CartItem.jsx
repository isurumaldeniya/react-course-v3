import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from './AppContext';
import { ADD_ITEM, DECREASE_ITEM, REMOVE_ITEM } from './actions';

const CartItem = ({ id, img, title, price, amount }) => {
  const { dispatch } = useGlobalContext();

  //dispatching actions for each state changes
  function addItem(id) {
    dispatch({ type: ADD_ITEM, id: id });
  }

  function decreaseItem(id) {
    dispatch({ type: DECREASE_ITEM, id: id });
  }

  function removeItem(id) {
    dispatch({ type: REMOVE_ITEM, id: id });
  }

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        {/* remove button */}
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => addItem(id)}>
          <FaChevronUp className="amount-icon" />
        </button>
        {/* amount */}
        <span className="amount">{amount}</span>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decreaseItem(id)}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
