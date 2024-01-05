import { ADD_ITEM, CLEAR_CART, DECREASE_ITEM, DISPLAY_ITEMS, REMOVE_ITEM } from "./actions"


function calculateTotal(cart) {
  let totalCount = 0;
  let totalCost = 0;

  for (let [key, value] of cart) {
    totalCount += value.amount;
    totalCost += Number(value.price) * value.amount;
  }

  return { totalCount, totalCost }
}

export const reducer = (state, action) => {

  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));

    const total = calculateTotal(newCart);

    return { ...state, cart: newCart, ...total };
  }

  if (action.type === ADD_ITEM) {
    const newCart = new Map(state.cart);
    const itemId = action.id;
    const item = newCart.get(itemId);

    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(itemId, newItem)
    const total = calculateTotal(newCart);
    return { ...state, cart: newCart, ...total }
  }

  if (action.type === DECREASE_ITEM) {
    const newCart = new Map(state.cart);
    const itemId = action.id;
    const item = newCart.get(itemId);
    if (item.amount === 1) {
      newCart.delete(itemId)

      const total = calculateTotal(newCart);

      return { ...state, cart: newCart, ...total };
    }
    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(itemId, newItem);

    //updating the total
    const total = calculateTotal(newCart);

    return { ...state, cart: newCart, ...total };
  }

  if (action.type === REMOVE_ITEM) {
    const newCart = new Map(state.cart);
    const itemId = action.id;

    newCart.delete(itemId)
    const total = calculateTotal(newCart);
    return { ...state, cart: newCart, ...total };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map(), totalCost: 0, totalCount: 0 }
  }

  return 'something is wrong'
}