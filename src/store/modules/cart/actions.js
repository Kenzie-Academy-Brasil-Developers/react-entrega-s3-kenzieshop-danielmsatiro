import { CART_ADD } from "./actionTypes";

export const addToCart = (product) => ({
  type: CART_ADD,
  product,
});
