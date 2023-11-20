
import { CLEAR_ITEMS, RESET_ITEMS, REMOVE_ITEM } from "./constant";
import { data } from '../../../data';

const reducer = (state, action) => {
  if (action.type === CLEAR_ITEMS) {
    return { ...state, people: [] };
  } else if (action.type === RESET_ITEMS) {
    return { ...state, people: data };
  } else if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter((person) => person.id !== action.id);
    return { ...state, people: newPeople };
  }
  throw new Error(`No matching "${action.type}" - action type found`);
};

export default reducer;