import { CART_ADD, CART_INCREMENT } from "./actionTypes";

const defaultState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CART_ADD:
      const { product } = action;
      return [...state, product];

    case CART_INCREMENT:
      const { id } = action;
      return state.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

    default:
      return state;
  }
};

export default cartReducer;
