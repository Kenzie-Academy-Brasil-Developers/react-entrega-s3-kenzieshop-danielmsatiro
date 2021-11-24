import { CART_ADD } from "./actionTypes";

const defaultState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CART_ADD:
      const { product } = action;
      return [...state, product];

    default:
      return state;
  }
};

export default cartReducer;
