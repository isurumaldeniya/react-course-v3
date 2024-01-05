import { FaCartPlus } from 'react-icons/fa';
import { useGlobalContext } from './AppContext';
const Navbar = () => {
  const { totalCount } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{totalCount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
