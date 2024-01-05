import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { reducer } from './reducer';
import { useContext } from 'react';
import { DISPLAY_ITEMS } from './actions';
import calculateTotal from './util/getTotalCount';


const url = 'https://www.course-api.com/react-useReducer-cart-project';

const GlobalContext = createContext();

const defaultState = {
  cart: new Map(),
  totalCount: 0,
  totalCost: 0,
};

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {

  //initializing state and dispatch for the cart
  const [state, dispatch] = useReducer(reducer, defaultState);

  //getting total count for items and cost
  const { totalCount, totalCost } = calculateTotal(state.cart);

  async function fetchData() {
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  }

  //fetching cart data
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch, totalCount, totalCost }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
