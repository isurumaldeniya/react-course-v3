import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { reducer } from './reducer';
import cartItems from './data';
import { useContext } from 'react';
import { DISPLAY_ITEMS } from './actions';
const url = 'https://www.course-api.com/react-useReducer-cart-project';

const GlobalContext = createContext();

const defaultState = {
  cart: new Map(),
  totalCount: 0,
  totalCost: 0,
};

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  async function fetchData() {
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
